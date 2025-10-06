import Image from 'next/image';

interface AboutItemProps {
  title: string;
  subtitle: string;
  color: 'white' | 'pink';
}

export default function AboutItem({ title, subtitle, color }: AboutItemProps) {
  const textColor =
    color === 'white'
      ? 'text-white'
      : color === 'pink'
        ? 'text-primary-pink'
        : '';

  return (
    <div className="flex items-start">
      <Image
        className="mt-0.5 w-5"
        src={`/images/sakura-${color}.svg`}
        alt="sakura"
        width={16}
        height={20.82}
        priority
      />
      <hgroup className={`ml-2.5 flex flex-col ${textColor}`}>
        <h2 className="font-inter text-[1.25rem] font-medium uppercase">
          {title}
        </h2>
        <p className="mt-2.5 text-[0.75rem] font-medium">{subtitle}</p>
      </hgroup>
    </div>
  );
}
