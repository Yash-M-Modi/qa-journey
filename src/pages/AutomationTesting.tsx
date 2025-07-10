import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Zap, Code, Cog, Play, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AutomationTesting = () => {
  const languages = [
    {
      name: 'Java',
      logo: '☕',
      description: 'Robust, platform-independent language',
      pros: ['Strong community support', 'Excellent Selenium integration', 'Enterprise-ready'],
      cons: ['Verbose syntax', 'Slower development']
    },
    {
      name: 'Python',
      logo: '🐍',
      description: 'Simple, readable automation language',
      pros: ['Easy to learn', 'Extensive libraries', 'Quick scripting'],
      cons: ['Slower execution', 'Less enterprise adoption']
    },
    {
      name: 'JavaScript',
      logo: '🟨',
      description: 'Modern web-focused testing',
      pros: ['Same language as frontend', 'Fast execution', 'Great tooling'],
      cons: ['Callback complexity', 'Browser-focused']
    }
  ];

  const tools = [
    {
      name: 'Selenium WebDriver',
      category: 'Web Automation',
      description: 'Industry standard for web browser automation',
      features: ['Cross-browser testing', 'Multiple language support', 'Remote execution']
    },
    {
      name: 'Postman/Newman',
      category: 'API Testing',
      description: 'Comprehensive API testing platform',
      features: ['Request building', 'Automated testing', 'CI/CD integration']
    },
    {
      name: 'TestNG/JUnit',
      category: 'Test Framework',
      description: 'Testing frameworks for organized test execution',
      features: ['Test organization', 'Parallel execution', 'Detailed reporting']
    },
    {
      name: 'Cucumber',
      category: 'BDD Framework',
      description: 'Behavior-Driven Development testing',
      features: ['Gherkin syntax', 'Business-readable tests', 'Collaboration']
    }
  ];

  const frameworks = [
    {
      name: 'Page Object Model (POM)',
      description: 'Design pattern that creates object repository for web elements',
      benefits: ['Code reusability', 'Easy maintenance', 'Reduced duplication'],
      structure: [
        'Page Classes - Contain web elements and methods',
        'Test Classes - Contain test logic and assertions',
        'Base Class - Common setup and teardown methods',
        'Utilities - Helper methods and configurations'
      ]
    },
    {
      name: 'Data-Driven Framework',
      description: 'Separates test data from test scripts for better maintenance',
      benefits: ['Test data flexibility', 'Easy test expansion', 'Multiple data sources'],
      structure: [
        'Test Data Files - Excel, CSV, JSON, XML',
        'Data Readers - Methods to read test data',
        'Test Scripts - Use data for test execution',
        'Reporting - Results with data variations'
      ]
    }
  ];

  const codeExamples = {
    java: `// Selenium WebDriver with Java Example
public class LoginTest {
    WebDriver driver;
    
    @BeforeMethod
    public void setup() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://example.com/login");
    }
    
    @Test
    public void testValidLogin() {
        // Find elements using Page Object Model
        LoginPage loginPage = new LoginPage(driver);
        
        loginPage.enterUsername("testuser");
        loginPage.enterPassword("password123");
        loginPage.clickLoginButton();
        
        // Assert successful login
        DashboardPage dashboard = new DashboardPage(driver);
        Assert.assertTrue(dashboard.isWelcomeMessageDisplayed());
    }
    
    @AfterMethod
    public void teardown() {
        driver.quit();
    }
}`,
    python: `# Selenium WebDriver with Python Example
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class TestLogin:
    def setup_method(self):
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        self.driver.get("https://example.com/login")
        
    def test_valid_login(self):
        # Using explicit waits for better reliability
        username_field = WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.ID, "username"))
        )
        
        username_field.send_keys("testuser")
        self.driver.find_element(By.ID, "password").send_keys("password123")
        self.driver.find_element(By.ID, "loginBtn").click()
        
        # Assert successful login
        welcome_msg = WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "welcome"))
        )
        assert welcome_msg.is_displayed()
        
    def teardown_method(self):
        self.driver.quit()`,
    api: `// API Testing with REST Assured (Java)
@Test
public void testGetUserAPI() {
    // GET request example
    Response response = RestAssured
        .given()
            .header("Content-Type", "application/json")
            .pathParam("userId", 1)
        .when()
            .get("/api/users/{userId}")
        .then()
            .statusCode(200)
            .body("name", equalTo("John Doe"))
            .body("email", notNullValue())
            .extract().response();
    
    // Validate response time
    Assert.assertTrue(response.getTime() < 3000);
}

@Test
public void testCreateUserAPI() {
    // POST request example
    String requestBody = "{\\"name\\":\\"Jane Smith\\",\\"email\\":\\"jane@example.com\\"}";
    
    RestAssured
        .given()
            .header("Content-Type", "application/json")
            .body(requestBody)
        .when()
            .post("/api/users")
        .then()
            .statusCode(201)
            .body("id", notNullValue())
            .body("name", equalTo("Jane Smith"));
}`
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Zap className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Automation Testing Excellence</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Master the technical side of QA with comprehensive automation testing knowledge, 
              from basic scripting to advanced frameworks and CI/CD integration.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* What is Automation Testing */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Automation Testing?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Automation testing uses specialized tools and scripts to execute test cases automatically, 
                compare actual outcomes with expected results, and generate detailed reports.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-qa-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Speed & Efficiency</h3>
                    <p className="text-gray-600">Execute hundreds of tests in minutes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-qa-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Repeatability</h3>
                    <p className="text-gray-600">Consistent execution without human error</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-qa-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">24/7 Execution</h3>
                    <p className="text-gray-600">Run tests continuously in CI/CD pipelines</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Automation testing code"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-qa-green/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* Programming Languages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Programming Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {languages.map((lang, index) => (
              <Card key={index} className="tech-card">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{lang.logo}</div>
                  <CardTitle className="text-2xl">{lang.name}</CardTitle>
                  <p className="text-gray-600">{lang.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                      <ul className="space-y-1">
                        {lang.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="text-sm text-gray-700 flex items-center space-x-2">
                            <ChevronRight className="h-3 w-3 text-green-600" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-700 mb-2">Cons:</h4>
                      <ul className="space-y-1">
                        {lang.cons.map((con, conIndex) => (
                          <li key={conIndex} className="text-sm text-gray-700 flex items-center space-x-2">
                            <ChevronRight className="h-3 w-3 text-orange-600" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Essential Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="tech-card">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <Cog className="h-6 w-6 text-qa-blue" />
                    <span className="text-sm font-medium text-qa-blue bg-blue-50 px-3 py-1 rounded-full">
                      {tool.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{tool.name}</CardTitle>
                  <p className="text-gray-600">{tool.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-qa-green rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Frameworks */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Popular Frameworks</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {frameworks.map((framework, index) => (
              <Card key={index} className="tech-card">
                <CardHeader>
                  <CardTitle className="text-xl text-qa-blue">{framework.name}</CardTitle>
                  <p className="text-gray-600">{framework.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {framework.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-gray-700 flex items-center space-x-2">
                            <ChevronRight className="h-3 w-3 text-qa-green" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Structure:</h4>
                      <ul className="space-y-1">
                        {framework.structure.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-gray-700">
                            <span className="font-medium">{item.split(' - ')[0]}</span>
                            {item.includes(' - ') && <span className="text-gray-500"> - {item.split(' - ')[1]}</span>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Code Examples</h2>
          
          <Tabs defaultValue="java" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="java">Java + Selenium</TabsTrigger>
              <TabsTrigger value="python">Python + Selenium</TabsTrigger>
              <TabsTrigger value="api">API Testing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="java">
              <div className="code-block">
                <pre className="text-sm overflow-x-auto">{codeExamples.java}</pre>
              </div>
            </TabsContent>
            
            <TabsContent value="python">
              <div className="code-block">
                <pre className="text-sm overflow-x-auto">{codeExamples.python}</pre>
              </div>
            </TabsContent>
            
            <TabsContent value="api">
              <div className="code-block">
                <pre className="text-sm overflow-x-auto">{codeExamples.api}</pre>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Getting Started */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Start Your Automation Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Learning Path:</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-qa-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-medium">Choose a Programming Language</h4>
                    <p className="text-sm text-gray-600">Start with Java or Python for beginners</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-qa-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-medium">Learn Selenium Basics</h4>
                    <p className="text-sm text-gray-600">Element identification and basic interactions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-qa-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-medium">Practice with Real Applications</h4>
                    <p className="text-sm text-gray-600">Build test scripts for demo websites</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-qa-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-medium">Implement Frameworks</h4>
                    <p className="text-sm text-gray-600">Move to Page Object Model and TestNG</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-qa-green to-qa-blue rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Practice Resources</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Play className="h-4 w-4" />
                  <a
                    href="https://www.selenium.dev/documentation/webdriver/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Selenium WebDriver documentation
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Play className="h-4 w-4" />
                  <a
                    href="https://www.saucedemo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Demo testing websites
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Play className="h-4 w-4" />
                  <a
                    href="https://github.com/topics/selenium-automation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub automation projects
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Play className="h-4 w-4" />
                  <a
                    href="https://www.hackerrank.com/domains/tutorials/10-days-of-javascript"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Online coding challenges
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

export default AutomationTesting;