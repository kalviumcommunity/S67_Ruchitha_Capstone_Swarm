import { Link } from "react-router-dom";
import { Hexagon } from "lucide-react";

function LandingHeader() {
  return (
    <header className="bg-white text-black border-b-2 border-black">
      <div className="flex items-center justify-between px-6 py-4 bg-white">
        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-amber-400 flex items-center justify-center border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
            <Hexagon className="text-black" size={20} />
          </div>
          <h1 className="text-2xl font-bold text-black">
            <span className="text-amber-500">Swarm</span>
          </h1>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-4">
          <Link 
            to="/login" 
            className="px-4 py-2 border-2 border-black rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}

export default LandingHeader;