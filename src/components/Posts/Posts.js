import "./Posts.css";

function Posts({ postsData }) {
  console.log(postsData);
  return (
    <div className="Posts">
      {postsData.map((post) => {
        return (
          <div className="Posts__card" key={post.id}>
            <div className="Posts__points">Points {post.score}</div>
            <h3 className="Posts__title">{post.title}</h3>
            <a className="Posts__readMore" href={post.url}>
              Read More
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
