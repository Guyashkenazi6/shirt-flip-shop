
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const TrackOrderPage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrack = () => {
    if (!trackingNumber.trim()) {
      toast.error("Please enter a tracking number.");
      return;
    }
    const url = `https://www.17track.net/en/track?nums=${trackingNumber}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <div className="w-full max-w-md text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Track Your Order
          </h1>
          <p className="text-gray-400 mb-8">
            Enter your tracking number below to see the status of your shipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
              placeholder="e.g. AG123456789CN"
              className="bg-secondary border-border text-white flex-grow h-12 text-base"
            />
            <Button onClick={handleTrack} className="bg-white text-black hover:bg-gray-200 h-12 px-8 text-base">
              Track
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackOrderPage;
