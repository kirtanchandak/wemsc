import HomePage from "@/components/homepage/HomePage";
import Sidebar1 from "@/components/sidebar/Sidebar1";
import Sidebar2 from "@/components/sidebar/Sidebar2";

const Home: React.FC = () => {
  return (
    <div className="flex justify-between container">
      <div className="w-[20%] hidden sm:block fixed">
        <Sidebar1 />
      </div>
      <div className="flex-grow w-[60%]">
        <HomePage />
      </div>
      <div className="w-[20%] hidden sm:block fixed right-0">
        <Sidebar2 />
      </div>
    </div>
  );
};

export default Home;
