import React from 'react';
import * as Icons from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, className = "", size = 24 }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const LucideIcon = (Icons as any)[name];

  if (!LucideIcon) {
    return <Icons.HelpCircle size={size} className={className} />;
  }

  return <LucideIcon size={size} className={className} />;
};

export default Icon;