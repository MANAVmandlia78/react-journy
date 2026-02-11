import React, { useContext, useRef } from "react";
import { PostList } from "../Store/post_list_store";
import { useNavigate } from "react-router-dom";

const Createpost = () => {

  const {addPost} = useContext(PostList);
  const navigate = useNavigate();

const userIdElement = useRef();
const postTitleElement = useRef();
const postBodyElement = useRef();
const reactionsElement = useRef();
const tagsElement = useRef();

const HadleONSubmit = (event) => {
event.preventDefault();
const userId = userIdElement.current.value;
const postTitle = postTitleElement.current.value;
const postbody = postBodyElement.current.value;
const reactions = reactionsElement.current.value;
const tags = tagsElement.current.value.split(' ');
addPost(userId,postTitle,postbody,reactions,tags);
 userIdElement.current.value = " ";
 postTitleElement.current.value = " ";
 postBodyElement.current.value = " ";
 reactionsElement.current.value = " ";
 tagsElement.current.value = " ";
}

  return (
    <form className="create-post" onSubmit={HadleONSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your User Id Here
        </label>
        <input
          type="text"
          ref={userIdElement}
          placeholder="Your User Id"
          className="form-control"
          id="userId"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          placeholder="How are you feeling today..."
          className="form-control"
          id="title"
        />
      </div>
      
       <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows={4}
          type="text"
          ref={postBodyElement}
          placeholder="Tell Us More about it..."
          className="form-control"
          id="body"
        />
      </div>

       <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number od reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          placeholder="How Many People Reacted to this post"
          className="form-control"
          id="reactions"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your HashTags Here
        </label>
        <input
          type="text"
          ref={tagsElement}
          placeholder="Please Enter tags using Space"
          className="form-control"
          id="tags"
        />
      </div>

      

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default Createpost;
