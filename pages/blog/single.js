import MenuComponent from "../../components/menu";
import SinglePostComponent from "../../components/blog/single-post";

export default function SinglePost() {
  return (
    <MenuComponent
      children={
        <div className="mt-20 mr-4">
          <SinglePostComponent
            date="23 December, Sunday"
            title="CES - The Global Stage for Innovation"
            content=" The Consumer Technology Association’s CES 2020 will take place on
              7-10 January at the Las Vegas Convention Center in Nevada. It will
              bring together over 150,000 delegates and 4,500 exhibitors to
              explore the business of consumer technologies."
            image="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_27.png"
            author="Ebubekir DEMİRAY"
          />
        </div>
      }
    />
  );
}
