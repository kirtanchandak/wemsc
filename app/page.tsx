import HomePage from "@/components/main/HomePage";
import MusicPlayer from "@/components/main/components/MusicPlayer";
import Sidebar1 from "@/components/sidebar/Sidebar1";
import Sidebar2 from "@/components/sidebar/Sidebar2";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <div className="hidden lg:block lg:fixed lg:left-0 lg:top-0 lg:w-1/5 lg:h-full">
        <Sidebar1 />
      </div>
      <div className="w-full lg:w-3/5 lg:ml-auto lg:mr-auto lg:relative">
        <HomePage />
      </div>
      <div className="hidden lg:block lg:fixed lg:right-0 lg:top-0 lg:w-1/5 lg:h-full">
        <Sidebar2 />
      </div>
      <div className="w-full fixed bottom-0">
        <MusicPlayer />
      </div>
    </div>
  );
};

export default Home;
