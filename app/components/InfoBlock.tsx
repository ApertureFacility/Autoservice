import Image from "next/image";

interface InfoBlockProps {
  src: string;
  alt: string;
  title: string;
  text?: string;
}

export function InfoBlock({ src, alt, title, text }: InfoBlockProps) {
  return (
    <div className="flex items-start">
      <Image src={src} alt={alt} width={50} height={30} />
      <div className="flex flex-col ml-3">
        <strong>{title}</strong>
        {text && <p>{text}</p>}
      </div>
    </div>
  );
}
