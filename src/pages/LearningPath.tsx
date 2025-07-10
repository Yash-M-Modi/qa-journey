
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle, Clock, Star, Award, ExternalLink, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LearningPath = () => {
  const roadmapSteps = [
    {
      phase: 'Foundation',
      duration: '4-6 weeks',
      level: 'Beginner',
      color: 'bg-green-500',
      skills: [
        'Software Testing Fundamentals',
        'SDLC & STLC Understanding',
        'Types of Testing',
        'Test Case Writing',
        'Bug Life Cycle'
      ],
      resources: [
        'ISTQB Foundation Level Syllabus',
        'Software Testing Help Website',
        
      ]
    },
    {
      phase: 'Manual Testing',
      duration: '6-8 weeks',
      level: 'Beginner to Intermediate',
      color: 'bg-blue-500',
      skills: [
        'Test Planning & Strategy',
        'Test Case Design Techniques',
        'Exploratory Testing',
        'JIRA & Test Management Tools',
        'API Testing with Postman'
      ],
      resources: [
        'JIRA Training Course',
        'Postman Learning Center',
        'Practice Testing Websites'
      ]
    },
    {
      phase: 'Automation Basics',
      duration: '8-10 weeks',
      level: 'Intermediate',
      color: 'bg-purple-500',
      skills: [
        'Programming Fundamentals (Java/Python)',
        'Selenium WebDriver Basics',
        'Element Identification',
        'Basic Test Scripts',
        'TestNG/JUnit Framework'
      ],
      resources: [
        'Java/Python Online Courses',
        'Selenium Documentation',
        'YouTube Selenium Tutorials'
      ]
    },
    {
      phase: 'Advanced Automation',
      duration: '10-12 weeks',
      level: 'Intermediate to Advanced',
      color: 'bg-orange-500',
      skills: [
        'Page Object Model',
        'Data-Driven Testing',
        'API Automation',
        'CI/CD Integration',
        'Performance Testing Basics'
      ],
      resources: [
        'Advanced Selenium Courses',
        'Jenkins Documentation',
        'REST Assured Tutorials'
      ]
    },
    {
      phase: 'Specialization',
      duration: '12+ weeks',
      level: 'Advanced',
      color: 'bg-red-500',
      skills: [
        'Mobile Testing (Appium)',
        'Performance Testing (JMeter)',
        'Security Testing',
        'AI/ML in Testing',
        'Test Strategy & Leadership'
      ],
      resources: [
        'Appium Documentation',
        'JMeter Tutorials',
        'Security Testing Guides'
      ]
    }
  ];

  const certifications = [
    {
      name: 'ISTQB Foundation Level',
      provider: 'ISTQB',
      level: 'Entry Level',
      description: 'Fundamental testing knowledge and terminology',
      duration: '2-3 months prep',
      cost: '-',
      recognition: 'Globally recognized',
      icon: '🏆'
    },
    {
      name: 'ISTQB Advanced Level',
      provider: 'ISTQB',
      level: 'Advanced',
      description: 'Specialized testing knowledge (Test Manager, Test Analyst, Technical Test Analyst)',
      duration: '4-6 months prep',
      cost: '-',
      recognition: 'Industry standard',
      icon: '🥇'
    },
    {
      name: 'Selenium WebDriver',
      provider: 'Various Platforms',
      level: 'Technical',
      description: 'Automation testing with Selenium',
      duration: '3-4 months prep',
      cost: '-',
      recognition: 'Industry relevant',
      icon: '🤖'
    },
    {
      name: 'Agile Testing',
      provider: 'ICAgile/PMI',
      level: 'Methodology',
      description: 'Testing in Agile environments',
      duration: '2-3 months prep',
      cost: '-',
      recognition: 'Agile focused',
      icon: '⚡'
    }
  ];

  const resources = [
    {
      category: 'Online Courses',
      platforms: [
        { name: 'Udemy', description: 'Comprehensive QA courses', rating: 4.5 },
        { name: 'Coursera', description: 'University-level programs', rating: 4.6 },
        { name: 'Pluralsight', description: 'Technical skills development', rating: 4.4 },
        { name: 'LinkedIn Learning', description: 'Professional development', rating: 4.3 }
      ]
    },
    {
      category: 'YouTube Channels',
      platforms: [
        { name: 'SDET- QA Automation Techie', description: 'Automation tutorials', rating: 4.7 },
        { name: 'Software Testing Mentor', description: 'Manual testing concepts', rating: 4.6 },
        { name: 'Selenium Express', description: 'Selenium WebDriver tutorials', rating: 4.5 },
        { name: 'Testing World', description: 'General QA content', rating: 4.4 }
      ]
    },
    {
      category: 'Books',
      platforms: [
        { name: 'Agile Testing by Lisa Crispin', description: 'Agile testing practices', rating: 4.8 },
        { name: 'The Art of Software Testing', description: 'Testing fundamentals', rating: 4.6 },
        { name: 'Selenium WebDriver 3 Practical Guide', description: 'Automation guide', rating: 4.5 },
        { name: 'Perfect Software & Other Illusions', description: 'Testing philosophy', rating: 4.4 }
      ]
    },
    {
      category: 'Practice Websites',
      platforms: [
        { name: 'Automation Practice', description: 'E-commerce testing site', rating: 4.7 },
        { name: 'The Internet (Herokuapp)', description: 'Various testing scenarios', rating: 4.8 },
        { name: 'Sauce Demo', description: 'Demo shopping application', rating: 4.6 },
        { name: 'OpenCart Demo', description: 'Open-source e-commerce', rating: 4.5 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your QA Learning Roadmap</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A structured, timeline-based approach to becoming a skilled QA professional. 
              From beginner to advanced, with resources and certifications to guide your journey.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Learning Roadmap */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Learning Timeline</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gray-300"></div>
            
            <div className="space-y-12">
              {roadmapSteps.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-qa-blue rounded-full z-10"></div>
                  
                  {/* Content card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="tech-card">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`${step.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                            {step.level}
                          </span>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{step.duration}</span>
                          </div>
                        </div>
                        <CardTitle className="text-2xl text-qa-blue">{step.phase}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Skills to Learn:</h4>
                            <ul className="space-y-1">
                              {step.skills.map((skill, skillIndex) => (
                                <li key={skillIndex} className="flex items-center space-x-2 text-sm">
                                  <CheckCircle className="h-4 w-4 text-qa-green" />
                                  <span>{skill}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Recommended Resources:</h4>
                            <ul className="space-y-1">
                              {step.resources.map((resource, resourceIndex) => (
                                <li key={resourceIndex} className="flex items-center space-x-2 text-sm text-qa-blue">
                                  <ExternalLink className="h-3 w-3" />
                                  <span>{resource}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Professional Certifications To-Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="tech-card">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-3xl">{cert.icon}</span>
                    <div>
                      <CardTitle className="text-xl">{cert.name}</CardTitle>
                      <p className="text-sm text-gray-600">{cert.provider}</p>
                    </div>
                  </div>
                  <span className="bg-qa-blue text-white px-3 py-1 rounded-full text-xs font-medium w-fit">
                    {cert.level}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold">Duration:</span>
                      <p className="text-gray-600">{cert.duration}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Cost:</span>
                      <p className="text-gray-600">{cert.cost}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="font-semibold">Recognition:</span>
                    <p className="text-gray-600">{cert.recognition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Learning Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Learning Resources</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {resources.map((category, index) => (
              <Card key={index} className="tech-card">
                <CardHeader>
                  <CardTitle className="text-xl text-qa-blue flex items-center space-x-2">
                    <BookOpen className="h-5 w-5" />
                    <span>{category.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.platforms.map((platform, platformIndex) => (
                      <div key={platformIndex} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{platform.name}</h4>
                          <p className="text-sm text-gray-600">{platform.description}</p>
                        </div>
                        <div className="flex items-center space-x-1 ml-4">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{platform.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Tips */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Tips for Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <Award className="h-12 w-12 text-qa-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Practice Regularly</h3>
              <p className="text-gray-600 text-sm">Dedicate at least 1-2 hours daily to hands-on practice</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-qa-green mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Join Communities</h3>
              <p className="text-gray-600 text-sm">Engage with QA communities on LinkedIn, Reddit, and Discord</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-qa-orange mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Build Projects</h3>
              <p className="text-gray-600 text-sm">Create a portfolio with real automation and testing projects</p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-qa-blue to-qa-green rounded-xl text-white text-center">
            <h3 className="text-xl font-semibold mb-2">Ready to Start Your Journey?</h3>
            <p className="mb-4">Begin with the Foundation phase and work your way up systematically</p>
            <div className="text-sm opacity-90">
              💡 Pro Tip: Focus on completing one phase thoroughly before moving to the next
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default LearningPath;
