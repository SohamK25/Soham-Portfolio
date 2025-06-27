import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Github, Send } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { cn } from '../lib/utils.js';

const Contacts = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_33nrazx',
        'template_xdotlwe',
        e.target,
        'ZTkCFmJ-s3o9Yu8aM'
      )
      .then(
        (result) => {
          toast.success("Message sent! Thank you for your message. I'll get back to you soon.");
          setIsSubmitting(false);
          e.target.reset(); 
        },
        (error) => {
          toast.error("Oops! Something went wrong. Please try again.");
          console.error(error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
      <div className="container mx-auto max-w-5xl">
        <h3 className='text-3xl md:text-4xl mb-12 font-bold text-center'>
          Get in<span className='text-primary'> Touch</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-10 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:ksoham2002@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ksoham2002@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+919422476569"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9422476569
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Pune, Maharashtra, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-2xl mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/soham-kulkarni-94a404226/" target="_blank" className='hover:text-primary transition-colors'>
                  <Linkedin />
                </a>
                <a href="https://github.com/SohamK25" target="_blank" className='hover:text-primary transition-colors'>
                  <Github />
                </a>
                <a href="https://www.instagram.com/sohammkulkarni/" target="_blank" className='hover:text-primary transition-colors'>
                  <Instagram />
                </a>
                <a href="https://www.facebook.com/soham.kulkarni.50309" target="_blank" className='hover:text-primary transition-colors'>
                  <Facebook />
                </a>
              </div>
            </div>

          </div>

          <div className='bg-card p-8 rounded-lg shadow-xs' onSubmit={handleSubmit}>
            <h3 className='text-2xl font-semibold mb-6'>Send a message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
