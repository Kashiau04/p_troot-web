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
}

export default function ServiceCard({
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <Image
        className={image.className}
        src={`/images/${image.name}.svg`}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority
      />
      <h3 className="text-bold text-[1.25rem] md:mt-6 md:text-[1.5rem]">
        {title}
      </h3>
      <p
        className="text-medium text-[0.875rem] md:mt-4 md:text-[1rem]"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
