import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import MenuComponent from "../../components/menu";
import SinglePostComponent from "../../components/blog/single-post";
import moment from "moment";

export default function SinglePost() {
  const [posts, setPosts] = React.useState({});
  const router = useRouter();
  const { single } = router.query;
  const getPostDetail = async () => {
    const result = await axios.get(`http://localhost:5000/posts/${single}`);
    if (result) {
      setPosts(result.data);
    }
  };
  React.useEffect(() => {
    if (single) {
      getPostDetail();
    }
  }, [single]);

  const convertRelativeTime = (date) => {
    return moment(date).format("MMM Do YY");
  };

  return (
    <MenuComponent
      children={
        <div className="mt-20 mr-4">
          <SinglePostComponent
            date={convertRelativeTime(posts.date)}
            title={posts.title}
            content={posts.content}
            image={
              posts?.image
                ? posts.image
                : "https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_27.png"
            }
            author="Ebubekir DEMİRAY"
          />
        </div>
      }
    />
  );
}
