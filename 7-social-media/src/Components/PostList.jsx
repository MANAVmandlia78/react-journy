import React, { useContext, useEffect, useState } from 'react'
import Post from "./Post"
import {PostList as PostListData} from '../Store/post_list_store'
import Welcomemessage from './Welcomemessage'
import LoadingSpinner from './LoadingSpinner'
const PostList = () => {
  const {postList,addInitialPosts} = useContext(PostListData);
  const[fetching,setfetching] = useState(false)
  
useEffect(() => {
  setfetching(true);

  const controller = new AbortController();
  const signal = controller.signal
    fetch('https://dummyjson.com/posts' , {signal})
.then(res => res.json())
.then(data => {
  addInitialPosts(data.posts);
  setfetching(false);
});

return () => {
console.log("Cleaning Up");
controller.abort();
}

}, [])
  
  return (
    <div>
      {fetching && <LoadingSpinner></LoadingSpinner>}
      {!fetching && postList.length === 0 && <Welcomemessage></Welcomemessage>}
      {!fetching && postList.map((post =>  <Post key={post.id} post={post}></Post>))}
    </div>
  )
}

export default PostList