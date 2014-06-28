<?php namespace Wardrobe\Cabinet\Repositories;

use Carbon\Carbon;

interface PostRepositoryInterface {

	/**
	 * Get all of the posts.
	 *
	 * @return array
	 */
	public function all();

	/**
	 * Get all the active posts.
	 *
	 * @param int $per_page
	 */
	public function active($per_page);

	/**
	 * Get all posts with a tag
	 *
	 * @param  string   $tag
	 * @param int $per_page
	 * @return array
	 */
	public function activeByTag($tag, $per_page);

	/**
	 * Get all posts by a search term
	 *
	 * @param string   $search
	 * @param int $per_page
	 * @return array
	 */
	public function search($search, $per_page);

	/**
	 * Get a Post by its primary key.
	 *
	 * @param  int   $id
	 * @return Post
	 */
	public function find($id);

	/**
	 * Get a Post by its slug
	 *
	 * @param  string   $slug
	 * @return Post
	 */
	public function findBySlug($slug);

	/**
	 * Create a new post.
	 *
	 * @param  array $data
	 * @return Post
	 */
	public function create(array $data);

	/**
	 * Update a post's title and content.
	 *
	 * @param  array $data
	 * @return Post
	 */
	public function update(array $data);

	/**
	 * Delete the post with the given ID.
	 *
	 * @param  int  $id
	 * @return void
	 */
	public function delete($id);

	/**
	 * Get a list of all of the tags used by the blog.
	 *
	 * @return array
	 */
	public function allTags();

	/**
	 * Determine if the given post is valid for creation.
	 *
	 * @param  string  $title
	 * @return \Illuminate\Support\MessageBag
	 */
	public function validForCreation($title);

	/**
	 * Determine if a given post is valid for updating.
	 *
	 * @param  string  $title
	 * @param  int  $id
	 * @return \Illuminate\Support\MessageBag
	 */
	public function validForUpdate($id, $title);

}
