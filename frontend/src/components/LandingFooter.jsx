import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-4 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left side - Logo + Copyright */}
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 32 32" className="text-amber-400">
            <path 
              d="M16 0.577L31.18 8.789V23.211L16 31.423L0.82 23.211V8.789L16 0.577Z" 
              fill="currentColor"
            />
          </svg>
          <span className="text-sm text-gray-300">
            © {new Date().getFullYear()} Swarm
          </span>
        </div>

        {/* Center - Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {[
            { label: "Terms", path: "/terms" },
            { label: "Privacy", path: "/privacy" },
            { label: "Guidelines", path: "/guidelines" },
            { label: "Support", path: "/support" },
          ].map((link) => (
            <Link 
              key={link.label} 
              to={link.path}
              className="text-gray-400 hover:text-amber-400 hover:underline transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side - Minimal contact */}
        <div className="text-sm text-gray-400">
          support@swarm.com
        </div>
      </div>
    </footer>
  );
}

export default Footer;