
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, MessageSquare, Send, MapPin, Clock, Github, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
    icon: Linkedin,
    title: 'LinkedIn',
    info: (
      <a
        href="https://www.linkedin.com/in/yash-modi-qa"
        target="_blank"
        rel="noopener noreferrer"
        className="text-qa-blue underline"
      >
        linkedin.com/in/yash-modi-qa
      </a>
    ),
    description: 'Connect with me professionally',
  },,
    {
      icon: MessageSquare,
      title: 'Response Time',
      info: '24-48 hours',
      description: 'I typically respond within 1-2 days'
    },
    {
      icon: MapPin,
      title: 'Location',
      info: 'Remote',
      description: 'Available for virtual collaboration'
    },
    {
      icon: Clock,
      title: 'Availability',
      info: 'Mon - Fri, 9AM - 6PM EST',
      description: 'Best times to reach me'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: '#',
      description: 'Check out my testing projects and automation scripts'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/yash-modi-qa',
      description: 'Connect with me professionally and see my QA journey'
    }
  ];

  const reasons = [
    {
      title: 'Career Guidance',
      description: 'Get advice on transitioning to QA or advancing your testing career',
      icon: '🎯'
    },
    {
      title: 'Technical Questions',
      description: 'Ask about testing tools, automation frameworks, or best practices',
      icon: '🔧'
    },
    {
      title: 'Collaboration',
      description: 'Discuss potential projects, guest posts, or knowledge sharing',
      icon: '🤝'
    },
    {
      title: 'Feedback',
      description: 'Share your thoughts on the content or suggest new topics',
      icon: '💡'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <MessageSquare className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Have questions about QA testing? Want to share your journey? 
              Looking for career advice? I'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  {/* Contact Form and Info */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
    {/* Contact Form */}
    <div className="lg:col-span-2">
      <Card className="tech-card">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center space-x-2">
            <Send className="h-6 w-6 text-qa-blue" />
            <span>Send me a message</span>
          </CardTitle>
          <p className="text-gray-600">
            Fill out the form below (currently disabled). You can reach me directly via email.
          </p>
        </CardHeader>
        <CardContent>
          <form className="space-y-6 pointer-events-none opacity-60">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Tell me about your question, idea, or how I can help you..."
                rows={6}
                className="w-full"
              />
            </div>

            <Button type="submit" className="w-full bg-gray-400 cursor-not-allowed" disabled>
              <Send className="h-4 w-4 mr-2" />
              Send Message (Disabled)
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            This form is currently inactive. <br />
            Contact me at:{" "}
            <a href="mailto:Yash Modi" className="text-qa-blue underline">
              Yash Modi
            </a>{" "}
            or{" "}
            <a
              href="https://linkedin.com/in/yash-modi-qa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-qa-blue underline"
            >
              LinkedIn
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
    
  


          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="tech-card">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-qa-blue/10 p-2 rounded-lg">
                        <IconComponent className="h-5 w-5 text-qa-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        <p className="text-qa-blue font-medium">{info.info}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="tech-card">
              <CardHeader>
                <CardTitle className="text-xl">Connect on Social</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="bg-gray-100 group-hover:bg-qa-blue/10 p-2 rounded-lg transition-colors">
                        <IconComponent className="h-5 w-5 text-gray-600 group-hover:text-qa-blue transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-qa-blue transition-colors">
                          {social.name}
                        </h3>
                        <p className="text-sm text-gray-600">{social.description}</p>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Reasons to Contact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What can we discuss?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="tech-card text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{reason.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-600">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer 1-on-1 mentoring?</h3>
              <p className="text-gray-600 mb-4">
                I offer limited mentoring slots for those serious about breaking into QA or advancing their careers. 
                Reach out to discuss your goals and see if we're a good fit.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can you review my automation code?</h3>
              <p className="text-gray-600 mb-4">
                I'm happy to provide feedback on automation scripts and frameworks. 
                Share your code via GitHub and explain what specific areas you'd like me to focus on.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you do guest posts or interviews?</h3>
              <p className="text-gray-600 mb-4">
                Yes! I enjoy sharing knowledge and experiences. If you run a QA blog, podcast, 
                or YouTube channel, let's discuss potential collaboration opportunities.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long do you take to respond?</h3>
              <p className="text-gray-600 mb-4">
                I typically respond within 24-48 hours during weekdays. 
                For urgent questions, please mention it in your subject line.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
