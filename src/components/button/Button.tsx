import global from "../../assets/styles/global.module.css"
import styles from "./Button.module.css";
import type {ButtonProps} from "./Button.types.ts"


export default function Button({
  nomeDoBotao,
  href = "#",
  variant,
}: ButtonProps) {
  return (
    <a className={`${styles[variant]} ${styles.button}`} href={href}>
      {nomeDoBotao}
    </a>
  );
}
