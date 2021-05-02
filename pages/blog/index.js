import React from "react";
import axios from "axios";
import moment from "moment";
import MenuComponent from "../../components/menu";
import BlogComponent from "../../components/blog";

export default function Blog() {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const convertRelativeTime = (date) => {
    return moment(date).format("MMM Do YY");
  };

  const newArr = posts.sort((a, b) => {
    return moment(b.date).diff(a.date);
  });

  return (
    <MenuComponent
      children={
        <div className="mt-20">
          {newArr.map((post) => {
            return (
              <BlogComponent
                key={post.content}
                image={post.image ? post.image : "/1.svg"}
                content={post.content?.substring(0, 100) + "..."}
                title={post.title}
                author="Ebubekir DEMİRAY"
                job="FRONTEND DEVELOPER"
                date={convertRelativeTime(post.date)}
              />
            );
          })}
        </div>
      }
    />
  );
}
