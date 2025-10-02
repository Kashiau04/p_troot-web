// components/AboutItem.tsx
import Image from "next/image";

interface AboutItemProps {
  title: string;
  subtitle: string;
  color: "white" | "pink";
}

export default function AboutItem({
  title,
  subtitle,
  color,
}: AboutItemProps) {
  const textColor =
  color === "white" ? "text-white" : color === "pink" ? "text-primary-pink" : "";
  
  return (
    <div className="flex items-start">
      <Image
        className="w-5 mt-0.5"
        src={`/images/sakura-${color}.svg`}
        alt="sakura"
        width={16}
        height={20.82}
        priority
      />
      <hgroup className={`flex flex-col ml-2.5 ${textColor}`}>
        <h2 className="text-[20px] font-medium font-inter">{title}</h2>
        <p className="text-[12px] font-medium mt-2.5">{subtitle}</p>
      </hgroup>
    </div>
  );
}