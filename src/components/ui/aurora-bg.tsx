"use client";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={`relative flex flex-col h-[100vh] items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white transition-bg ${className}`}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`
              [--red-gradient:repeating-linear-gradient(100deg, red 0%, red 7%, transparent 10%, transparent 12%, red 16%)]
              [--blue-gradient:repeating-linear-gradient(100deg, blue 0%, blue 7%, transparent 10%, transparent 12%, blue 16%)]
              [--aurora:repeating-linear-gradient(100deg, var(--red-500) 10%, var(--indigo-300) 15%, var(--blue-300) 20%, var(--violet-200) 25%, var(--blue-400) 30%)]
              [background-image:var(--red-gradient), var(--aurora)]
              dark:[background-image:var(--blue-gradient), var(--aurora)]
              [background-size:300%, 200%]
              [background-position:50% 50%, 50% 50%]
              filter blur-[10px]
              after:content-[""] after:absolute after:inset-0 after:[background-image:var(--red-gradient), var(--aurora)]
              after:dark:[background-image:var(--blue-gradient), var(--aurora)]
              after:[background-size:200%, 100%]
              after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
              pointer-events-none
              absolute -inset-[10px] opacity-50
              ${showRadialGradient ? '[mask-image:radial-gradient(ellipse at center, black 10%, transparent 70%)]' : ''}
            `}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
