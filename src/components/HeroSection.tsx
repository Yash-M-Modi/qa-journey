import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="gradient-bg text-white py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Start Your Journey to <br />
              <span className="text-yellow-300">QA Excellence</span>
            </h1>

            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Learn the skills, tools, and mindset needed to become a top-tier QA engineer. 
              Whether you're starting with manual testing or diving into automation, this platform 
              offers step-by-step guidance and career-oriented insights.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              {[
                'Step-by-step QA roadmaps for beginners',
                'Hands-on examples with tools like Postman, Selenium',
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-qa-blue hover:bg-gray-100 transition-all duration-300 group"
              >
                <Link to="/manual-testing">
                  Learn Manual Testing
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-qa-blue transition-all duration-300 group"
              >
                <Link to="/automation-testing">
                  <Play className="mr-2 h-4 w-4" />
                  Explore Automation
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="QA Tester at work"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-qa-blue/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Floating Info Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-lg animate-pulse-glow">
              <div className="text-qa-blue font-semibold text-sm">Manual Testing</div>
              <div className="text-gray-600 text-xs">Test Case Design</div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg animate-pulse-glow">
              <div className="text-qa-green font-semibold text-sm">Automation</div>
              <div className="text-gray-600 text-xs">Selenium + Java</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;