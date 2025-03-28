import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="flex justify-between items-center max-w-screen-lg mx-auto">
        <Link to="/" className="text-2xl font-bold">DeFi Lending</Link>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <div className={`md:flex space-x-4 ${isOpen ? "block" : "hidden"} md:block`}>
          <Link to="/" className="px-4 py-2 hover:bg-blue-700 rounded">Home</Link>
          <Link to="/lend" className="px-4 py-2 hover:bg-blue-700 rounded">Lend</Link>
          <Link to="/borrow" className="px-4 py-2 hover:bg-blue-700 rounded">Borrow</Link>
          <Link to="/wallet" className="px-4 py-2 hover:bg-blue-700 rounded">Wallet Connect</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
