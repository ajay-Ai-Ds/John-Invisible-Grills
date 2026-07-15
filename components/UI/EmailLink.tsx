"use client";

import React, { useState, useEffect } from "react";

interface EmailLinkProps {
  className?: string;
  iconOnly?: boolean;
  children?: React.ReactNode;
}

export default function EmailLink({ className, iconOnly = false, children }: EmailLinkProps) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Simple obfuscated assembly to prevent email harvesting bots
    const parts = ["johninvisiblegrills3717", "gmail.com"];
    setEmail(`${parts[0]}@${parts[1]}`);
  }, []);

  if (!email) {
    return (
      <span className={className}>
        {iconOnly ? children : "Loading email..."}
      </span>
    );
  }

  return (
    <a href={`mailto:${email}`} className={className} aria-label="Email John Invisible Grills">
      {iconOnly ? children : (children || email)}
    </a>
  );
}
