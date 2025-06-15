
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    avatarInitial: "AJ",
    rating: 5,
    quote: "The quality is insane. I've never felt a t-shirt this premium.",
  },
  {
    name: "Maria Garcia",
    avatarInitial: "MG",
    rating: 5,
    quote: "Absolutely in love with the minimalist design. It's my new favorite.",
  },
  {
    name: "James Smith",
    avatarInitial: "JS",
    rating: 4,
    quote: "Great fit and cool design. The fabric feels very durable.",
  },
];

export const Testimonials = () => (
  <section id="testimonials" className="py-20 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
    <h2 className="text-4xl font-bold text-center mb-12 text-white text-shadow">What Our Customers Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <Card 
          key={index} 
          className="bg-secondary border-gray-800 shadow-lg hover:shadow-white/10 transition-all duration-300 rounded-lg transform hover:-translate-y-2 animate-fade-in-up"
          style={{ animationDelay: `${0.6 + index * 0.2}s`, opacity: 0 }}
        >
          <CardContent className="p-6 text-center flex flex-col items-center h-full">
            <Avatar className="mx-auto mb-4 h-20 w-20 border-2 border-gray-700">
              <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.name}`} alt={testimonial.name} />
              <AvatarFallback>{testimonial.avatarInitial}</AvatarFallback>
            </Avatar>
            <div className="flex justify-center mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < testimonial.rating ? "text-white fill-white" : "text-gray-600"}`}
                />
              ))}
            </div>
            <p className="text-gray-300 italic mb-4 flex-grow">"{testimonial.quote}"</p>
            <p className="font-semibold text-white mt-auto">{testimonial.name}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);
