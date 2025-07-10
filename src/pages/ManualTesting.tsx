import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckSquare, Bug, FileText, Settings, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ManualTesting = () => {
  const [activeTestCase, setActiveTestCase] = useState(0);

  const concepts = [
    {
      title: 'SDLC (Software Development Life Cycle)',
      icon: Settings,
      description: 'The complete process of planning, creating, testing, and deploying software.',
      phases: ['Planning', 'Analysis', 'Design', 'Implementation', 'Testing', 'Deployment', 'Maintenance']
    },
    {
      title: 'STLC (Software Testing Life Cycle)',
      icon: CheckSquare,
      description: 'The testing process that runs parallel to SDLC to ensure quality.',
      phases: ['Requirement Analysis', 'Test Planning', 'Test Case Development', 'Test Environment Setup', 'Test Execution', 'Test Closure']
    },
    {
      title: 'Bug Life Cycle',
      icon: Bug,
      description: 'The journey of a bug from discovery to resolution.',
      phases: ['New', 'Assigned', 'Open', 'Fixed', 'Pending Retest', 'Retest', 'Verified', 'Closed']
    }
  ];

  const tools = [
    {
      name: 'JIRA',
      logo: '🎯',
      description: 'Issue and project tracking tool',
      uses: ['Bug tracking', 'Test case management', 'Sprint planning']
    },
    {
      name: 'TestLink',
      logo: '📋',
      description: 'Test management tool',
      uses: ['Test case organization', 'Test execution tracking', 'Reporting']
    },
    {
      name: 'Postman',
      logo: '📮',
      description: 'API testing platform',
      uses: ['API testing', 'Request automation', 'Collection management']
    }
  ];

  const sampleTestCases = [
    {
      id: 'TC001',
      title: 'User Login with Valid Credentials',
      priority: 'High',
      preconditions: 'User should have valid username and password',
      steps: [
        'Navigate to login page',
        'Enter valid username',
        'Enter valid password',
        'Click Login button'
      ],
      expected: 'User should be redirected to dashboard',
      category: 'Functional'
    },
    {
      id: 'TC002',
      title: 'Search Product by Name',
      priority: 'Medium',
      preconditions: 'User should be on the product page',
      steps: [
        'Locate search box',
        'Enter product name',
        'Click search button',
        'Verify results'
      ],
      expected: 'Relevant products should be displayed',
      category: 'Functional'
    },
    {
      id: 'TC003',
      title: 'Page Load Performance',
      priority: 'High',
      preconditions: 'Stable internet connection',
      steps: [
        'Open browser',
        'Navigate to homepage',
        'Measure load time',
        'Verify all elements load'
      ],
      expected: 'Page should load within 3 seconds',
      category: 'Performance'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CheckSquare className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Manual Testing Mastery</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Master the art of manual testing with comprehensive knowledge of concepts, 
              tools, and best practices that every QA professional should know.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* What is Manual Testing */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Manual Testing?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Manual testing is the process of manually executing test cases without using 
                automation tools. It requires human observation and judgment to identify defects 
                and ensure the software meets requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckSquare className="h-6 w-6 text-qa-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Human-Centric Approach</h3>
                    <p className="text-gray-600">Relies on human creativity and intuition to find edge cases</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckSquare className="h-6 w-6 text-qa-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">User Experience Focus</h3>
                    <p className="text-gray-600">Evaluates usability and user interface elements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckSquare className="h-6 w-6 text-qa-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Exploratory Testing</h3>
                    <p className="text-gray-600">Discovers unexpected behaviors through exploration</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Manual testing process"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-qa-blue/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* Key Concepts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Concepts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {concepts.map((concept, index) => {
              const IconComponent = concept.icon;
              return (
                <Card key={index} className="tech-card">
                  <CardHeader>
                    <div className="bg-qa-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-qa-blue" />
                    </div>
                    <CardTitle className="text-xl">{concept.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{concept.description}</p>
                    <div className="space-y-2">
                      {concept.phases.map((phase, phaseIndex) => (
                        <div key={phaseIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-qa-blue rounded-full"></div>
                          <span className="text-sm text-gray-700">{phase}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Tools Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Essential Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="tech-card text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{tool.logo}</div>
                  <CardTitle className="text-2xl">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <div className="space-y-2">
                    {tool.uses.map((use, useIndex) => (
                      <div key={useIndex} className="bg-gray-50 rounded-lg p-2 text-sm">
                        {use}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sample Test Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Sample Test Cases</h2>
          
          <Tabs defaultValue="0" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {sampleTestCases.map((testCase, index) => (
                <TabsTrigger key={index} value={index.toString()}>
                  {testCase.id}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {sampleTestCases.map((testCase, index) => (
              <TabsContent key={index} value={index.toString()}>
                <div className="sticky-note max-w-2xl mx-auto">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{testCase.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      testCase.priority === 'High' ? 'bg-red-100 text-red-800' :
                      testCase.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {testCase.priority}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Preconditions:</h4>
                      <p className="text-gray-700">{testCase.preconditions}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Test Steps:</h4>
                      <ol className="list-decimal list-inside space-y-1">
                        {testCase.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="text-gray-700">{step}</li>
                        ))}
                      </ol>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Expected Result:</h4>
                      <p className="text-gray-700">{testCase.expected}</p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-yellow-200">
                      <span className="text-sm text-gray-600">Category: {testCase.category}</span>
                      <span className="text-sm text-gray-600">Test ID: {testCase.id}</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Getting Started */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Ready to Start Manual Testing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Next Steps:</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckSquare className="h-5 w-5 text-qa-green" />
                  <span>Practice writing test cases for simple applications</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckSquare className="h-5 w-5 text-qa-green" />
                  <span>Learn to use JIRA for bug tracking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckSquare className="h-5 w-5 text-qa-green" />
                  <span>Understand different testing types</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckSquare className="h-5 w-5 text-qa-green" />
                  <span>Join QA communities and forums</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-qa-blue to-qa-blue-light rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Free Resources</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <ExternalLink className="h-4 w-4" />
                  <a
                    href="https://drive.google.com/uc?export=download&id=1OwdNDzCJV473EBQ-FnS8jbXIg4Iy7ki_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Manual Testing Notes PDF
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ExternalLink className="h-4 w-4" />
                  <a
                    href="https://docs.google.com/spreadsheets/d/1YcsrfnsnHhZMIaQ3kf_0cPtgHZSecrMR/export?format=xlsx"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="hover:underline"
                  >
                    Test Case Template Downloads
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ExternalLink className="h-4 w-4" />
                  <a
                    href="https://www.saucedemo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Practice Testing Websites
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ExternalLink className="h-4 w-4" />
                  <a
                    href="https://drive.google.com/uc?export=download&id=1GXdtFiYzZ9BpH1Oay_pxUQjkcfzvoq1a"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="hover:underline"
                  >
                    QA Interview Questions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ManualTesting;