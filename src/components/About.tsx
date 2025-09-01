import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users, Clock } from "lucide-react";
import classicImage from "@/assets/classic-fish-chips.jpg";

const About = () => {
  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Fresh Daily",
      description: "Fish delivered fresh every morning from local boats"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award Winning",
      description: "Best Fish & Chips 2023 - Local Food Awards"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Family Recipe",
      description: "Three generations of secret batter perfection"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Since 1952",
      description: "Over 70 years serving the community"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/20">
            Our Story
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            A Tradition of <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            What started as a small family business in 1952 has grown into the town's most beloved fish and chips shop, 
            where traditional recipes meet modern quality standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img 
              src={classicImage} 
              alt="Classic fish and chips wrapped in newspaper" 
              className="w-full h-auto rounded-2xl shadow-deep animate-scale-in"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Crafted with Love, Served with Pride
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every piece of fish is hand-selected and prepared using our family's secret batter recipe. 
              Our chips are cut fresh daily from locally-sourced potatoes and cooked in premium oil 
              that's changed regularly to ensure the perfect golden crispiness.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in supporting our local fishing community and use only sustainable, 
              responsibly-caught fish. Our commitment to quality and tradition has made us 
              a cornerstone of this coastal community.
            </p>
            <div className="pt-4">
              <Badge variant="secondary" className="mr-2 mb-2">Fresh Daily</Badge>
              <Badge variant="secondary" className="mr-2 mb-2">Local Suppliers</Badge>
              <Badge variant="secondary" className="mr-2 mb-2">Traditional Recipe</Badge>
              <Badge variant="secondary" className="mr-2 mb-2">Family Owned</Badge>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-soft transition-all duration-300 hover:transform hover:scale-105 bg-card border-border/50">
              <div className="w-12 h-12 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;