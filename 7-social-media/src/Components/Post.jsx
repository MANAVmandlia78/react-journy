import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { PostList } from '../Store/post_list_store';

const Post = ({post}) => {
  const {deletePost} = useContext(PostList)
  return (
    <div className="card post-card" style={{width: "30rem"}}>
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title">{post.title}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
    <MdDelete />
    <span className="visually-hidden">unread messages</span>
  </span> 
    </h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map(tag => <span key={tag} className="badge text-bg-primary m-1">{tag}</span>)}
    <div className="alert alert-success reactions" role="alert">
  👍 Likes: {post.reactions.likes} | 👎 Dislikes: {post.reactions.dislikes}
</div>
  </div>
</div>
  )
}

export default Post