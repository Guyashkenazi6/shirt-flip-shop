
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const SizeRecommender = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [recommendedSize, setRecommendedSize] = useState("");
  const [error, setError] = useState("");

  const calculateSize = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      setError("Please enter valid height and weight.");
      setRecommendedSize("");
      return;
    }
    setError("");

    if (h <= 170) {
      if (w <= 70) {
        setRecommendedSize("S");
      } else if (w >= 71 && w <= 80) {
        setRecommendedSize("M");
      } else {
        setRecommendedSize("L");
      }
    } else if (h >= 171 && h <= 180) {
      if (w <= 75) {
        setRecommendedSize("M");
      } else if (w >= 76 && w <= 85) {
        setRecommendedSize("L");
      } else {
        setRecommendedSize("XL");
      }
    } else { // h >= 181
      if (w <= 80) {
        setRecommendedSize("L");
      } else if (w >= 81 && w <= 90) {
        setRecommendedSize("XL");
      } else {
        setRecommendedSize("XXL");
      }
    }
  };

  const resetState = (open: boolean) => {
    if (!open) {
      setHeight("");
      setWeight("");
      setRecommendedSize("");
      setError("");
    }
  }

  return (
    <Dialog onOpenChange={resetState}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full mt-4 text-white border-white/20 hover:bg-white/10 hover:text-white">
          What is my recommended size?
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black text-white border-gray-800">
        <DialogHeader>
          <DialogTitle>Find Your Recommended Size</DialogTitle>
          <DialogDescription>
            Enter your height and weight to get a size recommendation. This is an estimate.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="height" className="text-right text-gray-400">
              Height (cm)
            </Label>
            <Input
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="col-span-3 bg-input border-border text-white"
              type="number"
              placeholder="e.g. 180"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="weight" className="text-right text-gray-400">
              Weight (kg)
            </Label>
            <Input
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="col-span-3 bg-input border-border text-white"
              type="number"
              placeholder="e.g. 75"
            />
          </div>
        </div>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        {recommendedSize && (
          <div className="text-center p-4 bg-secondary rounded-md">
            <p className="text-muted-foreground">Our Recommendation</p>
            <p className="text-2xl font-bold text-white">{recommendedSize}</p>
          </div>
        )}
        <DialogFooter className="mt-4">
          <Button onClick={calculateSize} className="w-full bg-white text-black hover:bg-gray-200">Calculate recommended size</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
