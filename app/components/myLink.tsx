import Link from 'next/link';
type Props = {
  href: string;
  children: React.ReactNode;
};

export const MyLink = (props: Props) => {
  return (
    <Link
      style={{ 
        textDecoration: 'underline',
        textDecorationColor: '#FF5733',
        textDecorationThickness: '1.6px',
        textUnderlineOffset: '2px',
        fontWeight: 'bold'
      }}
      href={props.href}
      target="_blank" rel="noopener noreferrer"
    >
      {props.children}
    </Link>
  );
}