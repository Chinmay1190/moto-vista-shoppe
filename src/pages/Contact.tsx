
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submitted");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-lg text-gray-900 dark:text-white mb-8 text-center">
              Contact Us
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Have questions about our superbikes? Need assistance with your order? 
                    We're here to help! Reach out to us through any of the channels below.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-race-red bg-opacity-10 p-3 rounded-full">
                          <Phone className="h-6 w-6 text-race-red" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                          <p className="text-gray-600 dark:text-gray-400">+91 98765 43210</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-race-red bg-opacity-10 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-race-red" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                          <p className="text-gray-600 dark:text-gray-400">info@superbikes.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-race-red bg-opacity-10 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-race-red" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">Address</h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            123 Race Track Road<br />
                            Mumbai, Maharashtra 400001<br />
                            India
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-race-red bg-opacity-10 p-3 rounded-full">
                          <Clock className="h-6 w-6 text-race-red" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">Business Hours</h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            Monday - Saturday: 9:00 AM - 7:00 PM<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            First Name
                          </label>
                          <Input id="firstName" type="text" required />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Last Name
                          </label>
                          <Input id="lastName" type="text" required />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email
                        </label>
                        <Input id="email" type="email" required />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <Input id="phone" type="tel" />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Subject
                        </label>
                        <Input id="subject" type="text" required />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Message
                        </label>
                        <Textarea 
                          id="message" 
                          rows={6} 
                          placeholder="Tell us how we can help you..."
                          required 
                        />
                      </div>

                      <Button type="submit" className="w-full btn-race">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
