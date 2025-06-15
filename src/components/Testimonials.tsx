
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Alon",
    image: "/lovable-uploads/b940b58d-9cc0-4c66-93f5-b3a78915e52a.png",
    rating: 5,
    quote: "האיכות מטורפת. בחיים לא הרגשתי חולצה כל כך פרימיום.",
  },
  {
    name: "Rom",
    image: "/lovable-uploads/4c121373-5adb-4051-a6f7-d94be7fe51d5.png",
    rating: 5,
    quote: "מאוהבת לחלוטין בעיצוב המינימליסטי. זאת החולצה האהובה עליי.",
  },
  {
    name: "Henry",
    image: "/lovable-uploads/4b3d278d-3e3c-43b0-ab72-486ff2f3f1f9.png",
    rating: 4,
    quote: "גזרה מעולה ועיצוב קטלני. הבד מרגיש עמיד מאוד.",
  },
];

export const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="testimonials" className="py-20 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
      <h2 className="text-4xl font-bold text-center mb-12 text-white text-shadow">What Our Customers Say</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card 
                  className="bg-secondary border-gray-800 shadow-lg hover:shadow-white/10 transition-all duration-300 rounded-lg transform hover:-translate-y-2 flex flex-col overflow-hidden h-full"
                >
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-64 object-cover" />
                  <CardContent className="p-6 text-center flex flex-col items-center flex-grow">
                    <div className="flex justify-center mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? "text-white fill-white" : "text-gray-600"}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-300 italic mb-4 flex-grow" dir="rtl">"{testimonial.quote}"</p>
                    <p className="font-semibold text-white mt-auto">{testimonial.name}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:inline-flex" />
        <CarouselNext className="hidden sm:inline-flex" />
      </Carousel>
    </section>
  );
};
