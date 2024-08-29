import Slide from "./slider";
import SideNav from "./sidenav";
import MainCategory from "./maincategory";
const Home = () => {
  return (
    <div>
      <Slide />
      <div
        className="flex m-auto gap-8 mt-[26px]
      "
      >
        <SideNav />
        <MainCategory />
      </div>
    </div>
  );
};

export default Home;
