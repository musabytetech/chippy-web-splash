import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Leaf } from "lucide-react";

const Menu = () => {
  const menuItems = [
    {
      category: "Classic Fish",
      items: [
        {
          name: "Traditional Cod & Chips",
          price: "£8.50",
          description: "Fresh Atlantic cod in our signature beer batter with hand-cut chips",
          popular: true
        },
        {
          name: "Haddock & Chips",
          price: "£8.95",
          description: "Premium Scottish haddock, golden battered and served with mushy peas",
          popular: false
        },
        {
          name: "Plaice & Chips",
          price: "£9.20",
          description: "Delicate plaice fillets with tartar sauce and lemon wedge",
          popular: false
        }
      ]
    },
    {
      category: "Specialty Items",
      items: [
        {
          name: "Fish Cake Special",
          price: "£6.50",
          description: "Homemade fish cakes with chips and garden peas",
          popular: false
        },
        {
          name: "Jumbo Sausage & Chips",
          price: "£7.80",
          description: "Premium pork sausage with curry sauce option",
          popular: true
        },
        {
          name: "Vegetarian Fish & Chips",
          price: "£7.95",
          description: "Plant-based fish alternative with vegan-friendly batter",
          vegetarian: true
        }
      ]
    },
    {
      category: "Sides & Extras",
      items: [
        {
          name: "Mushy Peas",
          price: "£2.50",
          description: "Traditional marrowfat peas with mint",
          popular: false
        },
        {
          name: "Curry Sauce",
          price: "£2.00",
          description: "Our famous homemade curry sauce",
          popular: true
        },
        {
          name: "Pickled Onions",
          price: "£1.50",
          description: "Crunchy pickled onions, perfect with fish",
          popular: false
        }
      ]
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/20">
            Fresh Menu
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Delicious <span className="text-primary">Selection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every dish is prepared fresh to order using the finest ingredients and our time-tested recipes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {menuItems.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center lg:text-left">
                {category.category}
              </h3>
              
              {category.items.map((item, itemIndex) => (
                <Card key={itemIndex} className="hover:shadow-soft transition-all duration-300 border-border/50 bg-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-semibold text-foreground">{item.name}</h4>
                        {item.popular && (
                          <Badge variant="secondary" className="bg-gradient-golden text-white border-none">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                        {item.vegetarian && (
                          <Badge variant="outline" className="border-green-500 text-green-600">
                            <Leaf className="w-3 h-3 mr-1" />
                            Veggie
                          </Badge>
                        )}
                      </div>
                      <span className="text-xl font-bold text-primary">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Taste Perfection?
          </h3>
          <p className="text-xl text-ocean-light mb-8 max-w-2xl mx-auto">
            Visit us today or call ahead to place your order. We guarantee you'll taste the difference quality makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-golden-crispy hover:bg-accent text-white hover:shadow-golden transform hover:scale-105 transition-all duration-300"
              onClick={scrollToContact}
            >
              Order Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-ocean-deep transition-all duration-300"
              onClick={scrollToContact}
            >
              Call Us: (555) 123-FISH
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;