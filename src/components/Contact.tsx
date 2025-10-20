import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-warmBrown mb-6">
            Visit Us Today
          </h2>
          <p className="text-lg text-warmBrown/80 max-w-2xl mx-auto">
            Experience the warmth of Old Fashioned in the heart of Joliet. 
            We're here to serve you the best breakfast and brunch in town.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-gold/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-warmBrown mb-2">Location</h3>
                <p className="text-warmBrown/80">
                  2022 W Jefferson St<br />
                  Joliet, IL 60435
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gold/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-warmBrown mb-2">Phone</h3>
                <a href="tel:(630) 315-0030" className="text-warmBrown/80 hover:text-gold transition-colors">
                  (815) 741-4666
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gold/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-warmBrown mb-2">Email</h3>
                <a href="mailto:OFPH2022@gmail.com" className="text-warmBrown/80 hover:text-gold transition-colors">
                OFPH2022@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gold/10 p-3 rounded-full">
                <Clock className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-warmBrown mb-2">Hours</h3>
                <div className="text-warmBrown/80 space-y-1">
                  <p>Monday - Sunday</p>
                  <p>6:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-warmBrown/5 rounded-2xl p-4 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.8234567890123!2d-88.0817!3d41.5251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e92c8c8c8c8c8%3A0x1234567890abcdef!2s2022%20W%20Jefferson%20St%2C%20Joliet%2C%20IL%2060435!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
              title="Old Fashioned Pancake House Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;