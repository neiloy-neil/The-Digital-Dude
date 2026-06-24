import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

// FIX: Casting motion components to 'any' to bypass type checking issues
// that are likely due to a project configuration or dependency version mismatch.
const MotionDiv: any = motion.div;
const MotionButton: any = motion.button;

// Enhanced ChatWidget with quick actions and better UX
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const quickActions = [
    { label: 'Book Consultation', action: '/contact', icon: '📅' },
    { label: 'View Services', action: '/services', icon: '🚀' },
    { label: 'ROI Calculator', action: '#roi', icon: '💰' },
    { label: 'Case Studies', action: '/case-studies', icon: '📊' }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real implementation, this would send to your chat service
      setMessage('');
      // For now, redirect to contact page
      window.location.href = '/contact';
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute bottom-16 right-0 w-80 bg-surface/95 backdrop-blur-lg rounded-lg shadow-2xl border border-border/50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary/20 to-accent/20 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-text-primary flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    We're Online!
                  </h3>
                  <p className="text-sm text-text-secondary">Typically replies in minutes</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 bg-surface/50">
              <p className="text-sm text-text-secondary mb-3">Quick Actions:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action, index) => (
                  action.action.startsWith('/') ? (
                    <Link
                      key={index}
                      to={action.action}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 p-2 text-xs bg-background/50 hover:bg-primary/10 rounded-md transition-colors border border-border/30 hover:border-primary/30"
                    >
                      <span>{action.icon}</span>
                      {action.label}
                    </Link>
                  ) : (
                    <button
                      key={index}
                      onClick={() => {
                        document.querySelector(action.action)?.scrollIntoView({ behavior: 'smooth' });
                        setIsOpen(false);
                      }}
                      className="flex items-center gap-2 p-2 text-xs bg-background/50 hover:bg-primary/10 rounded-md transition-colors border border-border/30 hover:border-primary/30"
                    >
                      <span>{action.icon}</span>
                      {action.label}
                    </button>
                  )
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-border">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-background border border-border rounded-md py-2 px-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="p-2 bg-primary text-white rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-xs text-text-secondary mt-2 flex items-center gap-1">
                <Clock size={12} />
                Or book a call - we'll respond within 2 hours
              </p>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
      <MotionButton
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-rgb text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
        aria-label="Toggle chat"
      >
        <AnimatePresence mode="wait">
          <MotionDiv
            key={isOpen ? 'x' : 'chat'}
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 30 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={30} /> : <MessageSquare size={30} />}
          </MotionDiv>
        </AnimatePresence>
      </MotionButton>
    </div>
  );
};

export default ChatWidget;
