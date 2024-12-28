import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >

      <div className="container py-5 flex items-center justify-between">
        <div>
          <img src={Logo} alt="Logo" className="w-48" />
        </div>

        <nav>
          <ul className="hidden md:flex items-center gap-10 md:text-base text-sm">
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/customeStories">Custome Stories</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>            
          </ul>
        </nav>

        {/* Button section */}
        <div>
          <button className="border border-gray-400 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
            Get in touch
          </button>
        </div>
      </div>
    </motion.header>
  );
};
