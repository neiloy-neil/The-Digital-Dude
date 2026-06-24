import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Mail, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  // Handle dropdown with delay to prevent quick disappearance
  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };
  
  const handleMouseLeave = () => {
    // Add a small delay before closing the dropdown
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };
  
  const navLinks: {label: string, path: string, dropdown?: {label: string, path: string}[]}[] = [
    { label: "Services", path: "/services" },
    { label: "Work", path: "/work" },
    { label: "How We Work", path: "/how-we-work" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" }
  ];

  const quickActions = [
    { icon: Mail, text: "Email", href: "mailto:info@digitaldude.co.uk" },
  ];

  const activeLinkStyle = {
    color: 'var(--color-primary)',
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-surface/80 backdrop-blur-xl border-b border-border shadow-lg' : 'bg-transparent'
      }`}
      role="banner"
    >
      <a 
        href="#main-content" 
        className="skip-link absolute top-[-40px] left-0 bg-primary text-white px-4 py-2 z-50 transition-all duration-300 focus:top-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary"
      >
        Skip to main content
      </a>
      
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center justify-center gap-2 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background" aria-label="Go to homepage">
          <div>
            <Logo className="h-10 w-auto md:h-12 lg:h-14" />
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-2" aria-label="Main navigation">
          {navLinks.map(link => {
            if (link.dropdown) {
              return (
                <div 
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="px-3 py-2 text-sm font-bold rounded-md text-text-secondary hover:text-primary transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === link.label}
                    aria-label={`${link.label} menu`}
                  >
                    <span>{link.label}</span>
                    <div>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  
                  {openDropdown === link.label && (
                    <div
                      className="absolute top-full left-0 mt-2 w-64 rounded-xl shadow-xl z-50 will-change-transform dropdown-backdrop"
                      role="menu"
                      aria-label={`${link.label} submenu`}
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="py-2">
                        {link.dropdown.map((item, index) => (
                          <div key={index}>
                            <Link
                              to={item.path}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-4 py-2 text-sm text-text-secondary hover:text-primary hover:bg-surface/50 transition-colors focus-visible:outline-none focus-visible:bg-surface/50"
                              role="menuitem"
                            >
                              {item.label}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            
            return (
              <div key={link.label}>
                <NavLink 
                  to={link.path}
                  style={({ isActive }) => isActive ? activeLinkStyle : {}}
                  className="px-3 py-2 text-sm font-bold rounded-md text-text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {link.label}
                </NavLink>
              </div>
            );
          })}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <a
                  key={index}
                  href={action.href}
                  className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-surface/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  title={action.text}
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
          </div>
          
          <Link to="/contact">
            <div>
              <Button size="md" className="relative overflow-hidden group">
                <span className="relative z-10">Get Started</span>
              </Button>
            </div>
          </Link>
        </div>
        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle menu" 
            className="p-1 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
       {isMenuOpen && (
        <div
          className="lg:hidden py-4 border-t shadow-xl will-change-transform dropdown-backdrop"
          role="dialog"
          aria-label="Mobile navigation menu"
          aria-modal="true"
        >
          <nav className="flex flex-col items-center gap-2" aria-label="Mobile navigation">
            {navLinks.map(link => {
              if (link.dropdown) {
                return (
                  <div key={link.label} className="w-full">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="text-text-secondary w-full text-center py-3 hover:text-primary transition-colors text-base font-medium flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-expanded={openDropdown === link.label}
                      aria-label={`${link.label} menu`}
                      aria-haspopup="true"
                    >
                      <span>{link.label}</span>
                      <div>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    
                    {openDropdown === link.label && (
                      <div
                        className="overflow-hidden"
                        role="menu"
                        aria-label={`${link.label} submenu`}
                      >
                        <div className="pl-4 py-2 space-y-2 rounded-lg my-2 dropdown-backdrop">
                          {link.dropdown.map((item, index) => (
                            <div key={index}>
                              <Link
                                to={item.path}
                                onClick={handleMobileLinkClick}
                                className="block py-2 text-text-secondary hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                                role="menuitem"
                              >
                                {item.label}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <div key={link.label}>
                  <Link 
                    to={link.path} 
                    onClick={handleMobileLinkClick} 
                    className="text-text-secondary w-full text-center py-3 hover:text-primary transition-colors text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md block"
                  >
                    {link.label}
                  </Link>
                </div>
              );
            })}
            
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <a
                    key={index}
                    href={action.href}
                    className="flex items-center gap-2 px-3 py-2 bg-surface/50 rounded-lg text-text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm">{action.text}</span>
                  </a>
                );
              })}
            </div>
            
            <div className="mt-4 w-full px-4">
              <Link to="/contact" onClick={handleMobileLinkClick} className="w-full">
                <div>
                  <Button size="md" className="w-full">
                      Book a Free Consultation
                  </Button>
                </div>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;