<?php namespace Wardrobe\Cabinet\Entities;

use App, Config, Cache;
use Carbon\Carbon;

class Post extends \Eloquent {

	/**
	 * The table associated with the model.
	 *
	 * @var string
	 */
	protected $table = 'posts';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = array('title', 'slug', 'content', 'image', 'type', 'link_url', 'active', 'publish_date', 'user_id');

	/**
	 * Tags Relationship
	 *
	 * @return Relationship
	 */
	public function tags()
	{
		return $this->hasMany('Wardrobe\Cabinet\Entities\Tag', 'post_id');
	}

	/**
	 * User relationship
	 *
	 * @return Relationship
	 */
	public function user()
	{
		return $this->belongsTo('Wardrobe\Cabinet\Entities\User');
	}

	public function scopeActive($query)
	{
		return $query->where('active', 1)->where('publish_date', '<=', new Carbon);
	}

	/**
	 * Get the content parsed into html
	 *
	 * @return string
	 */
	public function getParsedContentAttribute()
	{
		if (Config::get('core::wardrobe.cache'))
		{
			$content = $this->attributes['content'];

			return Cache::rememberForever('post-'.$this->attributes['id'], function() use ($content)
			{
				return App::make('parser')->parse($content);
			});
		}

		return App::make('parser')->parse($this->attributes['content']);
	}

	/**
	 * Get the atom date for atom feeds
	 *
	 * @return DateTime
	 */
	public function getAtomDateAttribute()
	{
		$dt = Carbon::createFromFormat('Y-m-d H:i:s', $this->attributes['publish_date']);

		return $dt->toATOMString();
	}

	/**
	 * Get the atom date for rss feeds
	 *
	 * @return DateTime
	 */
	public function getRssDateAttribute()
	{
		$dt = Carbon::createFromFormat('Y-m-d H:i:s', $this->attributes['publish_date']);

		return $dt->toRSSString();
	}

	/**
	 * Return an array of all the post dates.
	 *
	 * @return array
	 */
	public function getDates()
	{
	    return array('created_at', 'updated_at', 'publish_date');
	}

	/**
	 * Get the short version of a post
	 *
	 * @return string
	 */
	public function getIntroAttribute()
	{
		$content = $this->attributes['content'];
		$start = explode('<!-- more -->', $content);
		return $start[0];
	}

	/**
	 * Get the parsed short version of a post
	 *
	 * @return string
	 */
	public function getParsedIntroAttribute()
	{
		$intro = $this->getIntroAttribute();

		if (Config::get('core::wardrobe.cache'))
		{
			return Cache::rememberForever('post-intro-'.$this->attributes['id'], function() use ($intro)
			{
				return App::make('parser')->parse($intro);
			});
		}

		return App::make('parser')->parse($intro);
	}

}
