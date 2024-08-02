// pages/index.tsx or pages/page.tsx
import HomePage from "@/components/homepage/HomePage";
import Sidebar1 from "@/components/sidebar/Sidebar1";
import Sidebar2 from "@/components/sidebar/Sidebar2";

const Home: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-2/12">
        <Sidebar1 />
      </div>
      <div className="flex-grow">
        <HomePage />
      </div>
      <div className="w-2/12">
        <Sidebar2 />
      </div>
    </div>
  );
};

export default Home;
