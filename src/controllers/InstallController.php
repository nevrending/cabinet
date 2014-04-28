<?php namespace Wardrobe\Cabinet\Controllers;

use Config, Artisan, Redirect, View, Input, App, File;
use Wardrobe\Cabinet\Repositories\UserRepositoryInterface;

class InstallController extends \Controller {

	/**
	 * @var \Wardrobe\Cabinet\Repositories\UserRepositoryInterface
	 */
	private $users;

	/**
	 * @param UserRepositoryInterface $user
	 */
	public function __construct(UserRepositoryInterface $user)
	{
		// If the config is marked as installed then bail with a 404.
		if (Config::get("wardrobe.installed") === true)
		{
			return App::abort(404, 'Page not found');
		}
		$this->users = $user;
	}

	/**
	 * Get the install index.
	 *
	 * @return Response
	 */
	public function getIndex()
	{
		return View::make('cabinet::admin.installer.step1');
	}

	/**
	 * Run the migrations
	 *
	 * @return Response
	 */
	public function postIndex()
	{
		Artisan::call('key:generate');

		$artisan = Artisan::call('migrate', ['--env' => App::environment(), '--package' => 'wardrobe/cabinet']);

		if ($artisan > 0)
		{
			return Redirect::back()
				->withErrors(array('error' => 'Install Failed'))
				->with('install_errors', true);
		}

		return Redirect::to('install/user');
	}

	/**
	 * Get the user form.
	 *
	 * @return Response
	 */
	public function getUser()
	{
		return View::make('cabinet::admin.installer.user');
	}

	/**
	 * Add the user and show success!
	 *
	 * @return Response
	 */
	public function postUser()
	{
		$messages = $this->users->validForCreation(
			Input::get('first_name'),
			Input::get('last_name'),
			Input::get('email'),
			Input::get('password')
		);

		if (count($messages) > 0)
		{
			return Redirect::back()
				->withErrors($messages)
				->with('install_errors', true);
		}

		$user = $this->users->create(
			Input::get('first_name'),
			Input::get('last_name'),
			Input::get('email'),
			1, // Force them as active
			Input::get('password')
		);

		return Redirect::to('install/config');
	}

	/**
	 * Get the config form.
	 */
	public function getConfig()
	{
		return View::make('cabinet::admin.installer.config');
	}

	/**
	 * Save the config files
	 */
	public function postConfig()
	{
		$this->setWardrobeConfig(Input::get('title', 'Site Name'), Input::get('theme', 'Default'), Input::get('per_page', 5));
		return View::make('cabinet::admin.installer.complete');
	}

	/**
	 * Update the configs based on passed data
	 *
	 * @param string $title
	 * @param string $theme
	 * @param int    $per_page
	 *
	 * @return
	 */
	protected function setWardrobeConfig($title, $theme, $per_page)
	{
		$path = $this->getConfigFile('wardrobe.php');
		$content = str_replace(
			array('##title##', '##theme##', "'##per_page##'", "'##installed##'"),
			array(addslashes($title), $theme, (int) $per_page, 'true'),
			File::get($path)
		);
		return File::put($path, $content);
	}

	/**
	 * Get the config file
	 *
	 * Use the current environment to load the config file. With a fall back on the original.
	 *
	 * @param string $file
	 * @return string
	 */
	protected function getConfigFile($file)
	{
		if (file_exists(app_path().'/config/'.App::environment().'/'.$file))
		{
			return app_path().'/config/'.App::environment().'/'.$file;
		}

		return app_path().'/config/'.$file;
	}
} 