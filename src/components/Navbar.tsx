import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="mx-auto max-w-7xl">
        <div className="card-glass rounded-2xl px-6 py-3 glow-border">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              className="text-xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              PSK
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm glow-border hover:shadow-[0_0_30px_hsl(190_95%_55%/0.4)] transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
              <a
                href="/resume.pdf"
                download
                className="px-4 py-2 rounded-lg border border-border text-sm font-medium ml-2 hover:bg-accent/5 transition-colors duration-200"
              >
                Download Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-4 p-4 rounded-xl card-glass md:hidden border border-white/10 shadow-xl"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 px-4 py-2 hover:bg-white/5 rounded-lg"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-center hover:shadow-[0_0_20px_hsl(190_95%_55%/0.3)] transition-shadow"
                >
                  Hire Me
                </a>
                <a
                  href="/resume.pdf"
                  download
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg border border-border text-center hover:bg-accent/5 transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
