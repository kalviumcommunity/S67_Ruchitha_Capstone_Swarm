import { Link } from 'react-router-dom';

function Landing() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
      {/* Main Heading */}
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
          Welcome to <span className="text-amber-500">Swarm</span>
        </h1>
        <p className="text-xl text-gray-700 md:text-2xl leading-relaxed">
          Post doubts, collaborate with freelancers, and <span className="font-semibold text-black">grow together</span>!
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full max-w-md">
        <Link 
          to="/help-board" 
          className="bg-black text-white px-8 py-4 rounded-lg text-center font-medium hover:bg-gray-800 transition-colors border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:shadow-none"
        >
          Browse Help Board
        </Link>
        <Link 
          to="/signup" 
          className="bg-amber-500 text-black px-8 py-4 rounded-lg text-center font-bold hover:bg-amber-400 transition-colors border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:shadow-none"
        >
          Join Swarm
        </Link>
      </div>

      {/* Features List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <div className="bg-white p-6 rounded-lg border-2 border-black flex items-start">
          <span className="text-amber-500 text-2xl mr-4">✓</span>
          <div>
            <h3 className="font-bold text-lg mb-2">Grow Your Skills</h3>
            <p className="text-gray-700">Learn from real-world scenarios shared by peers</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border-2 border-black flex items-start">
          <span className="text-amber-500 text-2xl mr-4">✓</span>
          <div>
            <h3 className="font-bold text-lg mb-2">Post and Help</h3>
            <p className="text-gray-700">Ask questions and share knowledge freely</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border-2 border-black flex items-start">
          <span className="text-amber-500 text-2xl mr-4">✓</span>
          <div>
            <h3 className="font-bold text-lg mb-2">Points</h3>
            <p className="text-gray-700">Earn rewards for helpful contributions</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border-2 border-black flex items-start">
          <span className="text-amber-500 text-2xl mr-4">✓</span>
          <div>
            <h3 className="font-bold text-lg mb-2">Skill Barter</h3>
            <p className="text-gray-700">Trade services without cash</p>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-4">Already have an account?</p>
        <Link 
          to="/login" 
          className="inline-block px-6 py-3 border-2 border-black rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Sign In
        </Link>
      </div>
    </section>
  );
}

export default Landing;