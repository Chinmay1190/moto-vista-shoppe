
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-lg text-gray-900 dark:text-white mb-8">
              About SuperBikes
            </h1>
            
            <div className="space-y-8">
              <div className="bg-white dark:bg-race-darkgray rounded-lg shadow-sm border dark:border-race-darkgray p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Our Story
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  SuperBikes was founded with a passion for high-performance motorcycles and a commitment to bringing the world's finest superbikes to India. Since our inception, we've been dedicated to providing motorcycle enthusiasts with access to premium bikes from the most respected manufacturers in the industry.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our journey began with a simple vision: to create a platform where riders could discover, explore, and purchase their dream motorcycles with confidence and ease.
                </p>
              </div>
              
              <div className="bg-white dark:bg-race-darkgray rounded-lg shadow-sm border dark:border-race-darkgray p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We strive to be India's premier destination for superbikes, offering an unparalleled selection of motorcycles from leading brands like Yamaha, Kawasaki, Honda, Suzuki, and Ducati. Our mission is to provide exceptional customer service, expert guidance, and a seamless purchasing experience for every rider.
                </p>
              </div>
              
              <div className="bg-white dark:bg-race-darkgray rounded-lg shadow-sm border dark:border-race-darkgray p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Why Choose SuperBikes?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Premium Selection
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Curated collection of the world's finest superbikes from top manufacturers.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Expert Guidance
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Our team of motorcycle experts helps you find the perfect bike for your needs.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Nationwide Delivery
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Free delivery across India with comprehensive warranty and support.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      After-Sales Service
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      24/7 roadside assistance and dedicated customer support.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-race-darkgray rounded-lg shadow-sm border dark:border-race-darkgray p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h2>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p><span className="font-semibold">Address:</span> 123 Race Track Road, Mumbai, Maharashtra 400001, India</p>
                  <p><span className="font-semibold">Phone:</span> +91 98765 43210</p>
                  <p><span className="font-semibold">Email:</span> info@superbikes.com</p>
                  <p><span className="font-semibold">Business Hours:</span> Monday - Saturday: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
