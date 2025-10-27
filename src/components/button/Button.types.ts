import React from 'react';

export type ButtonProps = {
  nomeDoBotao: React.ReactNode; 
  href?: string;
  variant: "header" | "nav" | "main" | "hero";
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string; 
};