import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <MapPin className="w-5 h-5 text-gray-600 mt-1" />
            <div>
              <p className="font-medium">Visit Us</p>
              <p className="text-gray-600">123 Plant Street</p>
              <p className="text-gray-600">New York, NY 10001</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-5 h-5 text-gray-600" />
            <div>
              <p className="font-medium">Call Us</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="w-5 h-5 text-gray-600" />
            <div>
              <p className="font-medium">Email Us</p>
              <p className="text-gray-600">hello@plantify.com</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Store Hours</h3>
        <div className="space-y-2 text-gray-600">
          <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
          <p>Saturday: 10:00 AM - 6:00 PM</p>
          <p>Sunday: 11:00 AM - 5:00 PM</p>
        </div>
      </div>
    </div>
  );
}