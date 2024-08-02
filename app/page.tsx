// pages/index.tsx or pages/page.tsx
import Sidebar1 from "@/components/sidebar/Sidebar1";
import Sidebar2 from "@/components/sidebar/SideBar2";

const Home: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="w-2/12">
        <Sidebar1 />
      </div>
      <div className="flex-grow bg-gray-100 p-5">
        <h1 className="text-2xl font-bold">Middle Content</h1>
        {/* Add more middle content here */}
      </div>
      <div className="w-2/12">
        <Sidebar2 />
      </div>
    </div>
  );
};

export default Home;
