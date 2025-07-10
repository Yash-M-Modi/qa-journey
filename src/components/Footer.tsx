import { Github, Linkedin, Mail, TestTube2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <TestTube2 className="h-8 w-8 text-qa-blue" />
              <span className="text-xl font-bold">QA Journey</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your comprehensive guide to mastering Manual and Automation Testing. 
              Start your QA career journey with confidence and the right knowledge.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/contact"
                className="text-gray-300 hover:text-qa-blue transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <a
                href="https://linkedin.com/in/yash-modi-qa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-qa-blue transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-qa-blue transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/manual-testing" className="text-gray-300 hover:text-qa-blue transition-colors">Manual Testing</Link></li>
              <li><Link to="/automation-testing" className="text-gray-300 hover:text-qa-blue transition-colors">Automation Testing</Link></li>
              <li><Link to="/learning-path" className="text-gray-300 hover:text-qa-blue transition-colors">Learning Path</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-qa-blue transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://drive.google.com/uc?export=download&id=1riV2BVwQ1ihHO-tuj0qxvUoZZMa3SNKD" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-qa-blue transition-colors">
                  Manual Testing Cheat Sheet
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/uc?export=download&id=1ZHmXO8TPfq_889fVJSd-uy4SFafl_P9u" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-qa-blue transition-colors">
                  Automation Testing Cheat Sheet
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/uc?export=download&id=15f4_rtGyTA5PQe81h4uY_Wai4RXJrK-y" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-qa-blue transition-colors">
                  Test Case Examples
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/uc?export=download&id=1GXdtFiYzZ9BpH1Oay_pxUQjkcfzvoq1a" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-qa-blue transition-colors">
                  QA Interview Questions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 QA Journey. Built with 💙 for aspiring QA professionals.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;