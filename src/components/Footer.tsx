import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center">
              <img
                src="/smashingapps-ai-small-trans.png"
                alt="SmashingApps.ai Logo"
                className="h-20 w-auto"
              />
            </a>
            <p className="mt-4 text-gray-300 max-w-md">
              AI-powered micro-apps to help you smash through tasks with smart, fun, and focused tools.
            </p>
            <p className="mt-4 text-gray-300">
              ⚡️ Built with brainpower and bad jokes by David Bryan
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white">Tools</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/tools/task-smasher/" className="text-gray-400 hover:text-white">TaskSmasher</a></li>
              <li><a href="#recipe-smasher" className="text-gray-400 hover:text-white">RecipeSmasher</a></li>
              <li><a href="#idea-smasher" className="text-gray-400 hover:text-white">IdeaSmasher</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Coming Soon</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} SmashingApps.ai • Created by David Bryan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;