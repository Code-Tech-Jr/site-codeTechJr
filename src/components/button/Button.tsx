import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types.ts";

export default function Button({
  nomeDoBotao,
  href,
  variant,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  
  const combinedClassName = `${styles[variant]} ${styles.button} ${className}`;

  if (href) {
    return (
      <a 
        className={combinedClassName} 
        href={href} 
        onClick={onClick}
      >
        {nomeDoBotao}
      </a>
    );
  }
  return (
    <button 
      className={combinedClassName} 
      onClick={onClick} 
      type={type}
    >
      {nomeDoBotao}
    </button>
  );
}