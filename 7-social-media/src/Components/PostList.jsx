import React, { useContext } from 'react'
import Post from "./Post"
import {PostList as PostListData} from '../Store/post_list_store'
const PostList = () => {
  const {postList} = useContext(PostListData)
  return (
    <div>
      {postList.map((post =>  <Post key={post.id} post={post}></Post>))}
    </div>
  )
}

export default PostList