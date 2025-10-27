export type ButtonProps = {
  nomeDoBotao: string;
  href?: string;
  variant: "header" | "nav" | "main" | "hero";
  onClick?: () => void;
};