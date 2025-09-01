import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      review: "Absolutely the best fish and chips I've ever had! The batter is perfectly crispy and the fish is so fresh. Been coming here for 15 years and it never disappoints.",
      rating: 5,
      location: "Local Resident"
    },
    {
      name: "Mike Thompson",
      review: "As someone from Yorkshire, I'm very particular about my fish and chips. This place exceeds all expectations - proper traditional taste with modern quality.",
      rating: 5,
      location: "Visitor from Yorkshire"
    },
    {
      name: "Emma Davies",
      review: "Family-run with such attention to detail. The chips are perfect every time, and the staff always remember our usual order. Feels like home!",
      rating: 5,
      location: "Regular Customer"
    },
    {
      name: "James Wilson",
      review: "I've traveled across the UK trying fish and chips, and this is genuinely one of the top 3. The quality is consistently excellent, and the atmosphere is lovely.",
      rating: 5,
      location: "Food Blogger"
    },
    {
      name: "Lisa Brown",
      review: "The vegetarian option is fantastic! So glad they cater to everyone. The staff are friendly and the portions are generous. Highly recommend!",
      rating: 5,
      location: "Vegetarian Customer"
    },
    {
      name: "Robert Clark",
      review: "Three generations of my family have eaten here. The tradition of excellence continues. Fresh, delicious, and reasonably priced. What more could you want?",
      rating: 5,
      location: "Long-time Customer"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-golden-crispy fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/20">
            Customer Reviews
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Customers <span className="text-primary">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from the people who make our day, every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-soft transition-all duration-300 border-border/50 bg-card hover:transform hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed italic">
                  "{testimonial.review}"
                </p>
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-card rounded-xl border border-border/50">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9</div>
            <div className="text-muted-foreground">Average Rating</div>
            <div className="flex justify-center mt-2">
              {renderStars(5)}
            </div>
          </div>
          <div className="p-6 bg-card rounded-xl border border-border/50">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Reviews</div>
          </div>
          <div className="p-6 bg-card rounded-xl border border-border/50">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">70</div>
            <div className="text-muted-foreground">Years Serving</div>
          </div>
          <div className="p-6 bg-card rounded-xl border border-border/50">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100K+</div>
            <div className="text-muted-foreground">Meals Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;