import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Clock, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ocean-deep text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-golden-crispy">Coastal Fish & Chips</h3>
            <p className="text-ocean-light leading-relaxed mb-4">
              Serving the finest fish and chips since 1952. Three generations of family tradition, 
              bringing you the authentic taste of the British coast.
            </p>
            <div className="flex items-center gap-2 text-ocean-light">
              <Heart className="w-4 h-4 text-golden-crispy" />
              <span className="text-sm">Made with love, served with pride</span>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-golden-crispy flex-shrink-0" />
                <div className="text-ocean-light">
                  <div>123 Coastal Avenue</div>
                  <div>Seaside Town, ST1 2AB</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-golden-crispy flex-shrink-0" />
                <div className="text-ocean-light">
                  <div>(555) 123-FISH</div>
                  <div className="text-sm">Orders & Enquiries</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-golden-crispy flex-shrink-0" />
                <div className="text-ocean-light">
                  <div>Mon-Thu: 11:30-21:00</div>
                  <div>Fri-Sat: 11:30-22:00</div>
                  <div>Sun: 12:00-20:00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Good to Know</h4>
            <ul className="space-y-2 text-ocean-light">
              <li>✓ Fresh fish delivered daily</li>
              <li>✓ Vegetarian options available</li>
              <li>✓ Call ahead for faster service</li>
              <li>✓ Free parking nearby</li>
              <li>✓ Family-friendly environment</li>
              <li>✓ Sustainable fishing practices</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-ocean-light/20 mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-ocean-light">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Coastal Fish & Chips. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4">
            <span>Family owned since 1952</span>
            <span>•</span>
            <span>Made with ❤️ by the coast</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;