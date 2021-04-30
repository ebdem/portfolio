import MenuComponent from "../components/menu";
import FirstScreen from "../components/first-screen/first-screen";
export default function Home() {
  return (
    <div>
      <MenuComponent children={<FirstScreen />} />
    </div>
  );
}
