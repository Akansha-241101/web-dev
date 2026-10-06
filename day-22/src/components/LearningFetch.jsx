import { useEffect, useState } from "react";

const LearningFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data.slice(0, 11));
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <section className="posts-section">
      <h1>Posts Section</h1>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.map((post) => (
          <div
            key={post.id}
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            <p>{post.id}</p>
            <p>{post.title}</p>
          </div>
        ))
      )}
    </section>
  );
};

export default LearningFetch;
