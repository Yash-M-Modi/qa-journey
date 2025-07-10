
import { CheckSquare, Zap, Users, Target } from 'lucide-react';

const RoleOverview = () => {
  const roles = [
    {
      title: 'Manual Testing',
      icon: CheckSquare,
      color: 'text-qa-blue',
      bgColor: 'bg-blue-50',
      description: 'Execute test cases manually to ensure software quality and user experience',
      skills: ['Test Case Design', 'Bug Reporting', 'Exploratory Testing', 'Regression Testing'],
      path: '/manual-testing'
    },
    {
      title: 'Automation Testing',
      icon: Zap,
      color: 'text-qa-green',
      bgColor: 'bg-green-50',
      description: 'Create automated test scripts to improve efficiency and coverage',
      skills: ['Selenium WebDriver', 'Test Frameworks', 'CI/CD Integration', 'API Testing'],
      path: '/automation-testing'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your QA Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you prefer hands-on manual testing or technical automation, 
            both paths offer exciting opportunities in the QA field.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {roles.map((role, index) => {
            const IconComponent = role.icon;
            return (
              <div key={index} className="tech-card group cursor-pointer" onClick={() => window.location.href = role.path}>
                <div className={`${role.bgColor} ${role.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{role.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{role.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Skills:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {role.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2">
                        <Target className="h-4 w-4 text-qa-orange" />
                        <span className="text-sm text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 text-qa-blue font-medium group-hover:text-qa-blue-dark transition-colors">
                  Learn More →
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
  <div className="bg-white rounded-xl p-6 shadow-lg">
    <Users className="h-12 w-12 text-qa-blue mx-auto mb-4" />
    <h3 className="text-3xl font-bold text-gray-900 mb-2">60%+</h3>
    <p className="text-gray-600">QA Roles Require Automation Skills</p>
  </div>

  <div className="bg-white rounded-xl p-6 shadow-lg">
    <Target className="h-12 w-12 text-qa-green mx-auto mb-4" />
    <h3 className="text-3xl font-bold text-gray-900 mb-2">80%</h3>
    <p className="text-gray-600">Companies Invest in QA Training</p>
  </div>

  <div className="bg-white rounded-xl p-6 shadow-lg">
    <Zap className="h-12 w-12 text-qa-orange mx-auto mb-4" />
    <h3 className="text-3xl font-bold text-gray-900 mb-2">7.5 LPA</h3>
    <p className="text-gray-600">Avg Salary for Mid-Level QA in India</p>
  </div>
</div>

      </div>
    </section>
  );
};

export default RoleOverview;
