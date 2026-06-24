import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, MapPin, ArrowRight } from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

const MotionDiv: any = motion.div;

const footerLinks = {
  services: [
    { label: 'All Services', href: '/services' }
  ],
  company: [
    { label: 'Work', href: '/work' },
    { label: 'How We Work', href: '/how-we-work' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ]
};

const socialLinks = [
  { icon: Github, href: 'https://github.com/the-digital-dude', name: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/company/the-digital-dude', name: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/thedigitaldude', name: 'Twitter' },
];

const contactInfo = [
  { icon: Mail, text: 'info@digitaldude.co.uk', href: 'mailto:info@digitaldude.co.uk' },
  { icon: MapPin, text: 'Dhaka, Bangladesh · UK Registered', href: '#' },
];

const Footer = () => {
  return (
    <motion.footer 
      className="bg-background border-t border-border mt-auto"
      // ENHANCEMENT: Add subtle entrance animation
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="flex justify-center md:justify-start mb-6"
                  // ENHANCEMENT: Add subtle hover animation to logo
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Logo className="h-14 w-auto md:h-18 lg:h-20" />
                </motion.div>
                <motion.p 
                  className="text-text-secondary text-lg leading-relaxed mb-6 max-w-md"
                  // ENHANCEMENT: Add subtle entrance animation
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  We design, build, and deploy intelligent software ecosystems that transform businesses. 
                  Let's create something extraordinary together.
                </motion.p>
                
                {/* Contact Info */}
                <div className="space-y-3 mb-8">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.a
                        key={index}
                        href={item.href}
                        className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors group"

                        // ENHANCEMENT: Add subtle entrance animation
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <IconComponent className="w-4 h-4 text-primary" />
                        <span className="text-sm">{item.text}</span>
                      </motion.a>
                    );
                  })}
                </div>

                {/* CTA */}
                <Link to="/contact">
                  <motion.div
                    // ENHANCEMENT: Add hover and tap animations to button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Button variant="outline" className="group">
                      <span className="flex items-center gap-2">
                        Start Your Project
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </motion.div>
                </Link>
              </MotionDiv>
            </div>

            {/* Services Links */}
            <div>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.h3 
                  className="font-bold text-text-primary mb-6"
                  // ENHANCEMENT: Add subtle entrance animation
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Services
                </motion.h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <motion.div whileHover={{ x: 5 }}>
                      <Link 
                        to={link.href} 
                        className="text-text-secondary hover:text-primary transition-colors text-sm group flex items-center gap-2"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.div>
                  ))}
                </ul>
              </MotionDiv>
            </div>

            {/* Company Links */}
            <div>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.h3 
                  className="font-bold text-text-primary mb-6"
                  // ENHANCEMENT: Add subtle entrance animation
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Company
                </motion.h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <motion.div whileHover={{ x: 5 }}>
                      <Link 
                        to={link.href} 
                        className="text-text-secondary hover:text-primary transition-colors text-sm group flex items-center gap-2"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.div>
                  ))}
                </ul>
              </MotionDiv>
            </div>


          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="py-6 border-t border-border"
          // ENHANCEMENT: Add subtle entrance animation
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div 
              className="text-text-secondary text-sm text-center md:text-left"
              // ENHANCEMENT: Add subtle entrance animation
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p>&copy; {new Date().getFullYear()} The Digital Dude. All rights reserved.</p>
              <p className="mt-1">Building the future, one line of code at a time.</p>
            </motion.div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    aria-label={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary transition-colors p-2 rounded-lg hover:bg-surface/50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    // ENHANCEMENT: Add subtle entrance animation
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;