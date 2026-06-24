

import React from 'react';
import * as LucideIcons from 'lucide-react';

export type IconName = keyof typeof LucideIcons;

// FIX: The 'name' property on IconProps conflicts with the 'name' attribute from SVGAttributes.
// Omit is used to remove the base 'name' property before adding our own, more specific version.
interface IconProps extends Omit<React.SVGAttributes<SVGSVGElement>, 'name'> {
  name: IconName;
}

// FIX: Removed React.FC for better type compatibility.
const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = LucideIcons[name];

  if (!LucideIcon) {
    // Fallback icon in case of an invalid name
    return <LucideIcons.HelpCircle {...props} />;
  }

  // @ts-ignore
  return <LucideIcon {...props} />;
};

export default Icon;
