import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  image: {
    name: string;
    alt: string;
    width: number;
    height: number;
    className: string;
  };
  bgImage: {
    name: string;
    className?: string;
  };
}

export default function ServiceCard({
  title,
  description,
  image,
  bgImage,
}: ServiceCardProps) {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">
        <Image
          className="h-full w-full"
          src={`/images/${bgImage.name}.svg`}
          alt="background blue"
          width={350}
          height={321}
          priority
        />
      </div>
      <div className="relative flex flex-col items-center justify-center gap-y-4">
        <Image
          className={image.className}
          src={`/images/${image.name}.svg`}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority
        />
        <h3 className="text-[1.25rem] leading-[150%] font-bold md:mt-6 md:text-[1.5rem]">
          {title}
        </h3>
        <p
          className="text-[0.875rem] leading-[200%] font-medium md:mt-4 md:text-[1rem]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
