
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, Tag, ArrowRight, Heart, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Journey', 'Tips', 'Tools', 'Career', 'Learning'];

  const blogPosts = [
    {
      id: 1,
      title: 'My First Month as a QA Tester: Challenges and Victories',
      excerpt: 'Reflecting on the initial struggles, learning curve, and small wins that shaped my early QA journey...',
      content: `Starting my journey as a QA tester was both exciting and overwhelming. The first month was filled with challenges that tested my patience and determination, but also victories that reminded me why I chose this path.

**Week 1: Information Overload**
Everything felt new - from understanding the software development lifecycle to learning about different types of testing. I spent countless hours watching tutorials and reading documentation, feeling like I was drinking from a fire hose.

**Week 2: First Bug Report**
I'll never forget finding my first real bug! It was a simple UI alignment issue, but the satisfaction of documenting it properly and seeing it get fixed was incredible. That moment made me realize the impact QA professionals have on user experience.

**Week 3: Test Case Writing Marathon**
Writing my first set of test cases was challenging. I learned the importance of being specific, covering edge cases, and thinking from the end user's perspective. My mentor's feedback was invaluable during this phase.

**Week 4: Finding My Rhythm**
By the fourth week, I started developing a systematic approach to testing. I learned to balance thoroughness with efficiency and began understanding the bigger picture of quality assurance.

**Key Takeaways:**
- Patience is crucial - learning QA is a gradual process
- Don't be afraid to ask questions - the QA community is supportive
- Practice makes perfect - the more you test, the better you become
- Attention to detail is your superpower

Looking back, that first month laid the foundation for everything I've learned since then.`,
      author: 'QA Journey',
      date: '2024-01-15',
      category: 'Journey',
      tags: ['Beginner', 'Experience', 'First Month'],
      readTime: '5 min read',
      likes: 24,
      comments: 8,
      featured: true
    },
    {
      id: 2,
      title: '10 Essential Tips for Writing Better Test Cases',
      excerpt: 'Practical advice for creating comprehensive, maintainable, and effective test cases that actually catch bugs...',
      content: `Writing effective test cases is an art that combines technical knowledge with practical experience. Here are ten essential tips that have helped me improve my test case writing skills:

**1. Start with Clear Prerequisites**
Always define what needs to be set up before executing the test. This includes user accounts, data states, and environmental conditions.

**2. Use Action-Oriented Language**
Write steps using active voice and specific actions. Instead of "Login should work," write "Enter valid credentials and click Login button."

**3. Include Expected Results for Every Step**
Don't just write the steps - clearly define what should happen after each action. This makes it easier to identify exactly where a failure occurs.

**4. Think Beyond Happy Paths**
While positive test cases are important, negative test cases often reveal the most critical issues. Test with invalid inputs, edge cases, and error conditions.

**5. Keep Test Cases Atomic**
Each test case should test one specific functionality. This makes debugging easier and results more meaningful.

**6. Use Meaningful Test Case IDs**
Develop a naming convention that makes it easy to understand what the test case covers at a glance.

**7. Include Relevant Test Data**
Specify exact values to use in testing, especially for boundary conditions and special characters.

**8. Consider Different User Personas**
Write test cases from the perspective of different user types - admin, regular user, guest, etc.

**9. Review and Refactor Regularly**
Test cases need maintenance just like code. Review them regularly for relevance and accuracy.

**10. Collaborate with Developers**
Work closely with developers to understand implementation details that might affect test case design.

Remember, good test cases are your first line of defense against bugs reaching production!`,
      author: 'QA Journey',
      date: '2024-01-08',
      category: 'Tips',
      tags: ['Test Cases', 'Best Practices', 'Quality'],
      readTime: '7 min read',
      likes: 42,
      comments: 15,
      featured: false
    },
    {
      id: 3,
      title: 'Selenium vs Cypress vs Playwright: Which Tool Should You Choose?',
      excerpt: 'A comprehensive comparison of the three most popular automation testing tools, with pros, cons, and use cases...',
      content: `Choosing the right automation testing tool can make or break your testing strategy. Let's dive deep into the three most popular options: Selenium, Cypress, and Playwright.

**Selenium WebDriver**
*The veteran of web automation*

**Pros:**
- Mature ecosystem with extensive community support
- Supports multiple programming languages (Java, Python, C#, JavaScript)
- Works with all major browsers
- Robust remote execution capabilities
- Extensive third-party integrations

**Cons:**
- Slower execution compared to newer tools
- More complex setup and configuration
- Flaky tests due to timing issues
- Limited built-in features require additional frameworks

**Best for:** Enterprise environments, teams with diverse tech stacks, cross-browser testing at scale

**Cypress**
*The developer-friendly challenger*

**Pros:**
- Fast, reliable test execution
- Excellent debugging capabilities
- Built-in assertions and waits
- Time-travel debugging feature
- Great developer experience

**Cons:**
- Limited to JavaScript/TypeScript
- No multi-tab/multi-window support
- Limited cross-browser support (improving)
- Cannot test mobile applications natively

**Best for:** JavaScript-heavy applications, teams prioritizing developer experience, modern web applications

**Playwright**
*The new powerhouse*

**Pros:**
- Fast and reliable execution
- Excellent cross-browser support (Chromium, Firefox, Safari)
- Built-in mobile device emulation
- Auto-wait functionality
- Multiple language support

**Cons:**
- Newer ecosystem, smaller community
- Learning curve for teams used to Selenium
- Limited third-party integrations (growing)

**Best for:** Modern web applications, teams needing reliable cross-browser testing, mobile web testing

**My Recommendation:**
- **Starting fresh?** Consider Playwright for its modern architecture
- **Large enterprise?** Selenium might be your safest bet
- **JavaScript-focused team?** Cypress offers the best developer experience

The best tool is the one that fits your team's skills, application architecture, and testing requirements!`,
      author: 'QA Journey',
      date: '2024-01-22',
      category: 'Tools',
      tags: ['Automation', 'Selenium', 'Cypress', 'Playwright'],
      readTime: '10 min read',
      likes: 67,
      comments: 23,
      featured: true
    },
    {
      id: 4,
      title: 'From Manual to Automation: Making the Transition',
      excerpt: 'My personal experience transitioning from manual testing to automation, including challenges faced and lessons learned...',
      content: `Making the jump from manual testing to automation testing was one of the most challenging yet rewarding decisions in my QA career. Here's my honest account of the transition process.

**The Decision Point**
After two years of manual testing, I realized that automation skills were becoming essential. I was spending too much time on repetitive tests that could be automated, and I wanted to contribute more strategically to the development process.

**The Learning Phase (Months 1-3)**
**Month 1: Programming Fundamentals**
I started with Java basics - variables, loops, conditions, and object-oriented concepts. The programming mindset was the biggest adjustment.

**Month 2: Selenium Basics**
Element identification, basic interactions, and understanding the WebDriver architecture. My first automated test was a simple login script that took me hours to write!

**Month 3: Framework Thinking**
Learning about Page Object Model and understanding why structure matters in automation code.

**The Practical Phase (Months 4-6)**
**Month 4: Real Project Implementation**
Applying skills to actual test scenarios at work. Converting manual test cases to automated scripts was harder than expected.

**Month 5: Debugging Skills**
Learning to troubleshoot flaky tests, handle waits properly, and understand browser differences.

**Month 6: Integration and CI/CD**
Understanding how automated tests fit into the development pipeline and continuous integration.

**Key Challenges Faced:**
1. **Programming Mindset:** Thinking in terms of code logic vs. manual steps
2. **Debugging:** Figuring out why tests fail when they should pass
3. **Maintenance:** Keeping tests updated with application changes
4. **Tool Selection:** Choosing the right tools for different scenarios

**Strategies That Helped:**
- **Start Small:** Begin with simple, stable scenarios
- **Pair Programming:** Work with experienced automation engineers
- **Practice Regularly:** Dedicate time daily to coding practice
- **Join Communities:** Engage with automation testing groups online

**What I Wish I Knew Earlier:**
- Automation doesn't replace manual testing - it complements it
- Not everything should be automated
- Good automation requires as much planning as good manual testing
- Maintenance is 70% of automation work

**The Outcome**
Six months later, I was writing maintainable automation scripts and helping other team members make the same transition. The investment in learning was worth every challenge.

**Advice for Others:**
Don't rush the transition. Build a solid foundation in programming basics before diving into testing tools. Most importantly, remember that you're still a tester first - automation is just another tool in your toolkit.`,
      author: 'QA Journey',
      date: '2024-02-05',
      category: 'Career',
      tags: ['Career Growth', 'Automation', 'Transition', 'Experience'],
      readTime: '8 min read',
      likes: 89,
      comments: 31,
      featured: false
    },
    {
      id: 5,
      title: 'The Importance of Exploratory Testing in an Automated World',
      excerpt: 'Why human intuition and creativity in testing remain irreplaceable, even as automation becomes more prevalent...',
      content: `In our rush to automate everything, we sometimes forget the irreplaceable value of human intuition in testing. Exploratory testing remains one of the most powerful techniques in a tester's arsenal.

**What is Exploratory Testing?**
Exploratory testing is simultaneous learning, test design, and test execution. It's about investigating the application while forming hypotheses, designing tests, and executing them - all in real-time.

**Why It Matters More Than Ever**
As applications become more complex and user expectations rise, scripted tests alone can't catch all the issues that real users will encounter. Exploratory testing fills the gaps that automation leaves behind.

**The Human Advantage**
Humans excel at:
- **Pattern Recognition:** Spotting unusual behaviors that weren't anticipated
- **Contextual Understanding:** Considering how features work together
- **User Empathy:** Testing from the perspective of actual users
- **Creative Problem Solving:** Finding unexpected ways things can break

**My Exploratory Testing Approach**
1. **Start with a Mission:** What am I trying to learn about this feature?
2. **Use Charter-Based Testing:** 90-minute focused sessions with specific goals
3. **Document as You Go:** Note observations, questions, and issues immediately
4. **Follow Your Instincts:** If something feels off, investigate further
5. **Vary Your Approach:** Use different browsers, devices, and user personas

**Real-World Example**
During exploratory testing of an e-commerce checkout process, I discovered that while all automated tests passed, users with names containing apostrophes (like O'Connor) couldn't complete purchases. The automation scripts used simple test data that never triggered this edge case.

**Balancing Automation and Exploration**
- **Use automation for:** Regression testing, data validation, repetitive scenarios
- **Use exploration for:** New features, user workflows, edge cases, usability issues

**Tools That Enhance Exploratory Testing**
- **Session Recording:** Capture what you're doing for later analysis
- **Mind Mapping:** Visualize test coverage and ideas
- **Note-Taking Apps:** Quick capture of observations and ideas
- **Browser Dev Tools:** Investigate technical issues on the fly

**Common Misconceptions**
- "Exploratory testing is unstructured" - It's structured differently, not unstructured
- "It's just random clicking" - Good exploratory testing is purposeful and strategic
- "Automation will replace it" - Automation and exploration serve different purposes

**Making Time for Exploration**
In fast-paced development environments, it's crucial to advocate for exploratory testing time. I typically allocate 20-30% of my testing effort to exploration, adjusting based on the feature complexity and risk.

**The Bottom Line**
While automation handles the predictable, exploratory testing discovers the unexpected. Both are essential for delivering quality software that truly serves users' needs.

Don't let the excitement about automation overshadow the irreplaceable value of human creativity and intuition in testing.`,
      author: 'QA Journey',
      date: '2024-02-12',
      category: 'Tips',
      tags: ['Exploratory Testing', 'Manual Testing', 'Strategy', 'Quality'],
      readTime: '6 min read',
      likes: 56,
      comments: 19,
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <MessageCircle className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">QA Journey Blog</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real experiences, practical tips, and insights from my journey as a QA professional. 
              Learn from my struggles, victories, and everything in between.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Posts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="tech-card cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-qa-blue transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-qa-blue text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* All Posts */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {selectedCategory === 'All' ? 'All Posts' : `${selectedCategory} Posts`}
          </h2>
          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="tech-card cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        {post.featured && (
                          <Badge className="bg-qa-orange text-white">Featured</Badge>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-qa-blue transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{post.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-qa-blue transition-colors ml-4" />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        {/* Stay Connected */}
<section className="mt-16 bg-gradient-to-r from-qa-blue to-qa-green rounded-2xl p-8 text-white text-center">
  <h2 className="text-3xl font-bold mb-4">Let’s Stay Connected</h2>
  <p className="text-xl text-blue-100 mb-6">
    Follow me on LinkedIn for updates on QA tools, insights, and upcoming blog posts.
  </p>
  <div className="flex justify-center">
    <a
      href="https://linkedin.com/in/yash-modi-qa" 
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-qa-blue px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
    >
      Connect on LinkedIn
    </a>
  </div>
</section>

      </div>

      <Footer />
    </div>
  );
};

export default Blog;
