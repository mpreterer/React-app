import React, { useState } from 'react';

import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''});

 const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
        ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
  };

  return (
    <form>
      {/* Управляемый, использует хуки */}
      <MyInput
        value={post.title}
        onChange={(el) => setPost({ ...post, title: el.target.value })}
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        value={post.body}
        onChange={(el) => setPost({ ...post, body: el.target.value })}
        type="text"
        placeholder="Описание поста"
      />
      {/* Неуправляемый, берем сам DOM */}
      {/* <MyInput
          ref={bodyInputRef}
          type="text" 
          placeholder="Описание поста" 
        /> */}
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
