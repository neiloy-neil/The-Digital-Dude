import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Section from './ui/Section';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

// FIX: Use proper motion components with better type safety
const ContactForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, watch } = useForm<FormValues>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  // Watch form values for real-time validation
  const formData = watch();

  // Real-time validation with debounce
  useEffect(() => {
    const validateForm = () => {
      const newErrors: string[] = [];
      
      // Name validation
      if (formData.name) {
        if (formData.name.length < 2) {
          newErrors.push("Name must be at least 2 characters long");
        }
        if (!/^[a-zA-Z\s\-']+$/i.test(formData.name)) {
          newErrors.push("Name can only contain letters, spaces, hyphens, and apostrophes");
        }
      }
      
      // Email validation
      if (formData.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          newErrors.push("Please enter a valid email address");
        }
        // Check for common typos
        if (formData.email.includes('@gmail.con')) {
          newErrors.push("Did you mean @gmail.com?");
        }
        if (formData.email.includes('@yahoo.om')) {
          newErrors.push("Did you mean @yahoo.com?");
        }
      }
      
      // Message validation
      if (formData.message) {
        if (formData.message.length < 10) {
          newErrors.push("Message must be at least 10 characters long");
        }
        if (formData.message.length > 1000) {
          newErrors.push("Message must be less than 1000 characters");
        }
      }
      
      setFormErrors(newErrors);
    };

    // Debounce validation
    const timer = setTimeout(() => {
      validateForm();
    }, 500);

    return () => clearTimeout(timer);
  }, [formData]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSuccess(false);
    setIsError(false);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate success/error
    if (data.email !== 'error@example.com') {
        setIsSuccess(true);
        reset();
    } else {
        setIsError(true);
    }
  };

  return (
    <Section title="Get In Touch" subtitle="Have a project in mind? Let's talk!">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        // ENHANCEMENT: Add subtle continuous animation
        animate={{ 
          y: [0, -2, 0],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" role="form" aria-label="Contact form">
          {/* Form error summary */}
          {formErrors.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              className="bg-red-500/10 border border-red-500/30 rounded-md p-4" role="alert" aria-live="polite"
              // ENHANCEMENT: Add subtle shake animation for errors and fade in
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: [0, -5, 5, -5, 5, 0],
                transition: { 
                  duration: 0.5
                }
              }}
            >
              <h3 className="text-red-400 font-bold mb-2">Please fix the following errors:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {formErrors.map((error, index) => (
                  <motion.li 
                    key={index} 
                    className="text-red-400"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {error}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
              Name <span className="text-red-400">*</span>
            </label>
            <motion.input
              id="name"
              type="text"
              {...register('name', { 
                required: 'Name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters long' },
                pattern: { 
                  value: /^[a-zA-Z\s\-']+$/i, 
                  message: 'Name can only contain letters, spaces, hyphens, and apostrophes' 
                }
              })}
              className={`w-full bg-slate-800 border rounded-md py-2 px-4 text-white focus:ring-2 focus:border-primary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                errors.name ? 'border-red-500 focus:ring-red-500/50' : 'border-slate-700 focus:border-primary'
              }`}
              placeholder="Your Name"
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
              // ENHANCEMENT: Add focus and hover animations
              whileFocus={{ scale: 1.01 }}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            />
            {errors.name && (
              <motion.p 
                id="name-error" 
                className="text-red-400 mt-1 text-sm" 
                role="alert"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {errors.name.message}
              </motion.p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
              Email <span className="text-red-400">*</span>
            </label>
            <motion.input
              id="email"
              type="email"
              {...register('email', { 
                required: 'Email is required', 
                pattern: { 
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i, 
                  message: 'Please enter a valid email address' 
                }
              })}
              className={`w-full bg-slate-800 border rounded-md py-2 px-4 text-white focus:ring-2 focus:border-primary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                errors.email ? 'border-red-500 focus:ring-red-500/50' : 'border-slate-700 focus:border-primary'
              }`}
              placeholder="your.email@example.com"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
              // ENHANCEMENT: Add focus and hover animations
              whileFocus={{ scale: 1.01 }}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            />
            {errors.email && (
              <motion.p 
                id="email-error" 
                className="text-red-400 mt-1 text-sm" 
                role="alert"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {errors.email.message}
              </motion.p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
              Message <span className="text-red-400">*</span>
            </label>
            <motion.textarea
              id="message"
              rows={5}
              {...register('message', { 
                required: 'Message is required',
                minLength: { value: 10, message: 'Message must be at least 10 characters long' },
                maxLength: { value: 1000, message: 'Message must be less than 1000 characters' }
              })}
              className={`w-full bg-slate-800 border rounded-md py-2 px-4 text-white focus:ring-2 focus:border-primary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                errors.message ? 'border-red-500 focus:ring-red-500/50' : 'border-slate-700 focus:border-primary'
              }`}
              placeholder="Tell me about your project..."
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
              // ENHANCEMENT: Add focus and hover animations
              whileFocus={{ scale: 1.01 }}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            />
            <div className="flex justify-between mt-1">
              {errors.message && (
                <motion.p 
                  id="message-error" 
                  className="text-red-400 text-sm" 
                  role="alert"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {errors.message.message}
                </motion.p>
              )}
              {formData.message && (
                <motion.p 
                  className="text-slate-400 text-sm ml-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {formData.message.length}/1000
                </motion.p>
              )}
            </div>
          </div>
          <div className="text-center">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 disabled:bg-slate-600 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-busy={isSubmitting}
              // ENHANCEMENT: Add hover, tap, and focus animations
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: '0 10px 25px rgba(56, 189, 248, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              whileFocus={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {isSubmitting ? (
                <>
                  <motion.svg 
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                    // ENHANCEMENT: Add subtle pulse animation to spinner
                    animate={{ 
                      rotate: 360,
                    }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </motion.svg>
                  Sending...
                </>
              ) : (
                <>
                  <motion.div
                    // ENHANCEMENT: Add subtle pulse animation to icon
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <Send size={18} />
                  </motion.div>
                  <motion.span
                    // ENHANCEMENT: Add subtle text animation
                    animate={{ 
                      y: [0, -1, 0],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    Send Message
                  </motion.span>
                </>
              )}
            </motion.button>
          </div>
        </form>
         {isSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 mt-4 text-center bg-green-500/10 p-4 rounded-md border border-green-500/30"
              role="alert"
              aria-live="polite"
              // ENHANCEMENT: Add subtle entrance animation
              whileInView={{ 
                opacity: 1,
                y: 0,
                scale: [0.9, 1.05, 1],
              }}
              transition={{ 
                duration: 0.5,
                type: 'spring',
                stiffness: 300,
                damping: 20
              }}
            >
              <h3 className="font-bold text-lg mb-1">Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I'll get back to you soon.</p>
            </motion.div>
          )}
          {isError && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 mt-4 text-center bg-red-500/10 p-4 rounded-md border border-red-500/30"
              role="alert"
              aria-live="polite"
              // ENHANCEMENT: Add subtle entrance animation
              whileInView={{ 
                opacity: 1,
                y: 0,
                scale: [0.9, 1.05, 1],
              }}
              transition={{ 
                duration: 0.5,
                type: 'spring',
                stiffness: 300,
                damping: 20
              }}
            >
              <h3 className="font-bold text-lg mb-1">Something Went Wrong</h3>
              <p>Please try again later or contact us directly at hello@digitaldude.com</p>
            </motion.div>
          )}
      </motion.div>
    </Section>
  );
};

export default ContactForm;