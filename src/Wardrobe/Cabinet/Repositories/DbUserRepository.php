<?php namespace Wardrobe\Cabinet\Repositories;

use Auth;
use Hash;
use Validator;
use Wardrobe\Cabinet\Entities\User;

class DbUserRepository implements UserRepositoryInterface {

	protected $user;

	public function __construct(User $user)
	{
		$this->user = $user;
	}

	/**
	 * Get all of the users.
	 *
	 * @return array
	 */
	public function all()
	{
		return $this->user->all();
	}

	/**
	 * Get a User by their primary key.
	 *
	 * @param  int   $id
	 * @return Post
	 */
	public function find($id)
	{
		return $this->user->findOrFail($id);
	}

	/**
	 * Create a user
	 *
	 * @param  string  $first_name
	 * @param  string  $last_name
	 * @param  string  $email
	 * @param  int  $active
	 * @param  string  $password
	 * @return Post
	 */
	public function create($first_name, $last_name, $email, $active, $password)
	{
		$password = Hash::make($password);

		return $this->user->create(compact('first_name', 'last_name', 'email', 'password', 'active'));
	}

	/**
	 * Update a user
	 *
	 * @param  int  $id
	 * @param  string  $first_name
	 * @param  string  $last_name
	 * @param  string  $email
	 * @param  int  $active
	 * @param  string  $password
	 * @return Post
	 */
	public function update($id, $first_name, $last_name, $email, $active, $password = null)
	{
		$user = $this->find($id);

		// Not very clean
		if (trim($password) != '')
		{
			$password = Hash::make($password);
		}
		else
		{
			unset($password);
		}

		$user->fill(compact('first_name', 'last_name', 'email', 'password', 'active'))->save();

		return $user;
	}

	/**
	 * Validate that the given user is valid for creation.
	 *
	 * @param  string  $first_name
	 * @param  string  $last_name
	 * @param  string  $email
	 * @param  string  $password
	 * @return \Illuminate\Support\MessageBag
	 */
	public function validForCreation($first_name, $last_name, $email, $password)
	{
		return $this->validateUser($first_name, $last_name, $email, $password);
	}

	/**
	 * Validate that the given user is valid for updating.
	 *
	 * @param  int  $id
	 * @param  string  $first_name
	 * @param  string  $last_name
	 * @param  string  $email
	 * @param  string  $password
	 * @return \Illuminate\Support\MessageBag
	 */
	public function validForUpdate($id, $first_name, $last_name, $email, $password)
	{
		return $this->validateUser($first_name, $last_name, $email, $password, $id);
	}

	/**
	 * Validate the given user data.
	 *
	 * @param  string $first_name
	 * @param  stirng $last_name
	 * @param  string $email
	 * @param  string $password
	 * @param  int    $id
	 *
	 * @return \Illuminate\Support\MessageBag
	 */
	protected function validateUser($first_name, $last_name, $email, $password, $id = null)
	{
		$rules = [
			'first_name' => 'required|max:255',
			'last_name'  => 'required|max:255',
			'email'      => 'required|email|unique:users,email',
		];

		if ($id)
		{
			$rules['email']    .= ','.$id;
		}
		else
		{
			$rules['password']  = 'required|min:6';
		}

		$validator = Validator::make(
			compact('first_name', 'last_name', 'email', 'password'), $rules
		);

		$validator->passes();

		return $validator->errors();
	}

	/**
	 * Log the user into the application.
	 *
	 * If the credentials are invalid, returns false, else returns true.
	 *
	 * @param  string  $email
	 * @param  stirng  $password
	 * @param  bool    $remember
	 * @return bool
	 */
	public function login($email, $password, $remember = false)
	{
		if (Auth::attempt(array('email' => mb_strtolower($email), 'password' => $password), $remember))
		{
			return true;
		}

		return false;
	}

	/**
	 * Delete an account
	 * @param int $id
	 */
	public function delete($id)
	{
		return $this->user->where('id', $id)->delete();
	}

}
