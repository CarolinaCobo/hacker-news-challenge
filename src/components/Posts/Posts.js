import "./Posts.css";
import LinkButton from "../LinkButton/LinkButton";

function Posts({ postsData }) {
  return (
    <div className="Posts">
      {postsData.map((post) => {
        return (
          <div
            data-testid="card-container"
            className="Posts__card"
            key={post.id}
          >
            <div className="Posts__points">Points {post.score}</div>
            <h3 className="Posts__title">{post.title}</h3>
            <div className="Posts__button-container">
              <div>
                <LinkButton href={post.url}>Read More</LinkButton>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
