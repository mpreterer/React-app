import React, { useState, useRef, useMemo, useEffect } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/modal/MyModal";
import { usePosts } from "./hooks/usePosts";
import "./styles/App.css";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, []);

  // callback createPost в пропсе create
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const [isPostsLoading, setIsPostsLoading] = useState(false);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  async function fetchPosts() {
    setIsPostsLoading(true);
    setTimeout( async () => {
      const posts = await PostService.getAll();
      setPosts(posts);
      setIsPostsLoading(false);
    }, 1000)
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Написать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading 
      ? <div style={{display:'flex', justifyContent:'center', marginTop: '50px'}}><Loader/></div>
      : <PostList
      remove={removePost}
      posts={sortedAndSearchPosts}
      title="Возможно список постов"
    />
      }
      
    </div>
  );
}

export default App;
