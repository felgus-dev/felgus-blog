import Link from "next/link";
type Props = {
  href: string;
  children: React.ReactNode;
};

export const MyLink = (props: Props) => {
  return (
    <Link
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold decoration-solid decoration-[1.6px] underline decoration-red-700 underline-offset-2 hover:decoration-yellow-300 transition-all"
    >
      {props.children}
    </Link>
  );
};
