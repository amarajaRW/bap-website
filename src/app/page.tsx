import EventGallery from "@/components/home/EventGallery";
import Landing from "@/components/home/Landing";
import Membership from "@/components/home/Membership";
import Mission from "@/components/home/Mission";
import Professional from "@/components/home/Professionals";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Landing />

      <Mission />
      <EventGallery />
      <Membership />
      <Professional />
    </div>
  );
};

export default Home;
