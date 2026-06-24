import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Button from './Button';

interface CodeBlockProps {
  code: string;
  language: string;
}

// FIX: Removed React.FC for better type compatibility.
const CodeBlock = ({ code, language }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Basic syntax highlighting simulation
  const highlightedCode = code
    .replace(/(const|let|var|require|module|exports|return|if|else|app|new|async|await|import|from|export|default)/g, '<span class="text-pink-400">$1</span>')
    .replace(/(\'|\"|\`)(.*?)(\'|\"|\`)/g, '<span class="text-green-300">$1$2$3</span>')
    .replace(/(\(|\)|\[|\]|\{|\})/g, '<span class="text-purple-400">$1</span>')
    .replace(/(\.|\,)/g, '<span class="text-gray-400">$1</span>')
    .replace(/(\=\>|\=)/g, '<span class="text-pink-400">$1</span>')
    .replace(/(console|log|get|listen|send|use)/g, '<span class="text-violet-400">$1</span>')
    .replace(/\b(\d+)\b/g, '<span class="text-yellow-400">$1</span>')
    .replace(/(\/\/.*)/g, '<span class="text-gray-500">$1</span>');

  return (
    <div className="bg-slate-800/90 backdrop-blur-lg rounded-lg my-6 border border-white/10">
      <div className="flex justify-between items-center px-4 py-2 bg-slate-900/70 rounded-t-lg">
        <span className="text-xs font-sans text-text-secondary capitalize">{language}</span>
        <Button
          onClick={handleCopy}
          variant="ghost"
          size="sm"
          className="text-xs !px-2 !py-1 text-slate-300 hover:text-white"
          leftIcon={copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
        >
          {copied ? 'Copied!' : 'Copy'}
        </Button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="font-mono text-sm" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </pre>
    </div>
  );
};

export default CodeBlock;