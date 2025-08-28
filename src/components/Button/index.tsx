import "./style.css";

type ButtonProps = {
  nomeDoBotao: string;
  href?: string;
  variant: "header" | "nav" | "std";
};

export default function Button({
  nomeDoBotao,
  href = "#",
  variant,
}: ButtonProps) {
  return (
    <a className={`${variant} buttons`} href={href}>
      {nomeDoBotao}
    </a>
  );
}
