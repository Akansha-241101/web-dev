/*Mini Posts Dashboard */

import { useRef, useState, useEffect } from "react";

function PostDashBoard() {
  const inputRef = useRef(null);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const cleandata = await res.json();
      await new Promise((post) => setTimeout(post, 1500));
      setData(cleandata.slice(0, 15));
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const focusInput = () => {
    setSearch("");
    inputRef.current.focus();
  };

  return (
    <section className="posts-card">
      <div>
        <h1>Posts dashboard</h1>
        <input
          ref={inputRef}
          placeholder="Search posts..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button className="clear-button" onClick={focusInput}>
          Clear
        </button>
      </div>
      <button className="refresh-button" onClick={fetchData} disabled={loading}>
        Refresh posts
      </button>
      <div className="PostsSection">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((post) => (
            <div key={post.id} className="post-row">
              <span className="post-number">{post.id}</span>
              <p>{post.title}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default PostDashBoard;
