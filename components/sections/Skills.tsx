import { motion } from 'framer-motion';
import type { Skill } from '../../types';
import Section from '../ui/Section';
import { 
  Code, 
  Database, 
  GitBranch, 
  Layers, 
  Cloud, 
  TerminalSquare,
  Component,
  Cpu,
  Palette,
  Server,
  Users,
  TestTube2
} from 'lucide-react';

const skills: Skill[] = [
  { name: 'TypeScript', icon: Code },
  { name: 'React', icon: Component },
  { name: 'Node.js', icon: Cpu },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'SQL', icon: Database },
  { name: 'Git', icon: GitBranch },
  { name: 'Docker', icon: Cloud },
  { name: 'Cloud Architecture', icon: Server },
  { name: 'Framer Motion', icon: Layers },
  { name: 'Testing', icon: TestTube2 },
  { name: 'Agile Delivery', icon: Users },
  { name: 'CLI Tools', icon: TerminalSquare },
];

// FIX: Use proper motion components with better type safety
const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Section title="Our Core Technologies" subtitle="The tools we use to build powerful, modern applications.">
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center p-6 bg-surface/50 backdrop-blur-md rounded-lg border border-border hover:bg-surface/70 hover:border-primary/50 transition-all duration-300"
            variants={itemVariants}
          >
            <skill.icon className="w-12 h-12 text-primary mb-4" />
            <span className="font-semibold text-text text-center">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;
