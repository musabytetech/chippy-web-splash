import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Mail, Car, Bus } from "lucide-react";
import harborImage from "@/assets/coastal-harbor.jpg";

const Contact = () => {
  const openingHours = [
    { day: "Monday - Thursday", hours: "11:30 - 21:00" },
    { day: "Friday - Saturday", hours: "11:30 - 22:00" },
    { day: "Sunday", hours: "12:00 - 20:00" }
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 Coastal Avenue", "Seaside Town", "ST1 2AB"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["(555) 123-FISH", "(555) 123-3474"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["hello@coastalchips.co.uk", "orders@coastalchips.co.uk"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/20">
            Find Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visit Our <span className="text-primary">Coastal Home</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Located in the heart of our beautiful coastal town, just steps from the harbor where our fish begins its journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground mb-6">Get In Touch</h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300 border-border/50">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-golden rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Opening Hours */}
            <Card className="p-6 bg-gradient-hero text-white">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-golden-crispy rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Opening Hours</h4>
                    <div className="space-y-2">
                      {openingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-ocean-light">{schedule.day}</span>
                          <span className="font-semibold">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transportation */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">How to Get Here</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Car className="w-5 h-5 text-primary" />
                  <span>Free parking nearby</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Bus className="w-5 h-5 text-primary" />
                  <span>Bus routes 12, 24, 56</span>
                </div>
              </div>
            </div>
          </div>

          {/* Location Image & CTA */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-deep">
              <img 
                src={harborImage} 
                alt="Coastal harbor near our fish and chips shop" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Just Steps from the Harbor</h4>
                <p className="text-ocean-light">Where fresh meets tradition</p>
              </div>
            </div>

            <Card className="p-8 text-center bg-gradient-subtle border-border/50">
              <CardContent className="p-0">
                <h4 className="text-2xl font-bold text-foreground mb-4">Ready to Order?</h4>
                <p className="text-muted-foreground mb-6">
                  Call ahead to skip the queue, or drop by for the full experience of choosing your perfect piece of fish.
                </p>
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-golden hover:shadow-golden transform hover:scale-105 transition-all duration-300"
                  >
                    Call Now: (555) 123-FISH
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Walk-ins welcome • Orders ready in 10-15 minutes
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="p-6 bg-muted border-border/50">
              <CardContent className="p-0 text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">Interactive Map</h4>
                <p className="text-muted-foreground text-sm">
                  Click to view detailed directions and nearby landmarks
                </p>
                <Button variant="outline" className="mt-4" size="sm">
                  Open in Google Maps
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Questions? Special dietary requirements? Just give us a call - we're here to help!
          </p>
          <p className="text-sm text-muted-foreground">
            Follow us on social media for daily specials and fresh catch updates
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;