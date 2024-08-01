import { Paw } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col justify-center items-center p-4">
      <Paw className="w-16 h-16 text-blue-600 mb-4" />
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Pawsome Pals</h1>
      <p className="text-xl text-blue-700 mb-8 text-center max-w-md">
        Welcome to the ultimate destination for dog lovers! Discover, connect, and celebrate our furry best friends.
      </p>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Get Started
      </Button>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard icon={<Paw className="w-8 h-8" />} title="Dog Profiles" description="Create and browse adorable dog profiles" />
        <FeatureCard icon={<Paw className="w-8 h-8" />} title="Community" description="Connect with other dog enthusiasts" />
        <FeatureCard icon={<Paw className="w-8 h-8" />} title="Events" description="Find local dog meetups and events" />
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-blue-800 mb-2">{title}</h3>
    <p className="text-blue-700">{description}</p>
  </div>
);

export default Index;
