import Image from 'next/image';

const navItems = [
  {
    label: {
      en: 'about',
      ja: '私たちについて',
    },
    href: '',
  },
  {
    label: {
      en: 'service',
      ja: '私たちのサービス',
    },
    href: '',
  },
  {
    label: {
      en: 'company',
      ja: '会社情報',
    },
    href: '',
  },
  {
    label: {
      en: 'contact',
      ja: '私たちへのお問い合わせ',
    },
    href: '',
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-pink relative bottom-0 left-0 z-10 w-full text-white">
      <Image
        className="absolute top-0"
        src="/images/md-round.svg"
        alt="round"
        width={1899}
        height={701}
        priority
      />
      <div className="relative flex items-start justify-between px-4 pt-15 md:px-20 md:pt-40">
        <Image
          className="w-37.5 md:w-70.75"
          src="/images/logo.png"
          alt="logo"
          width={150}
          height={27}
          priority
        />
        <nav>
          <ul className="flex flex-col gap-y-4 font-medium md:gap-y-6">
            {navItems.map((item, index) => (
              <li key={index} className="flex flex-col">
                <a href={item.href} className="flex flex-col">
                  <span className="text-[1rem] uppercase md:text-[1.25rem]">
                    {item.label.en}
                  </span>
                  <span className="text-[0.75rem] md:text-[1rem]">
                    {item.label.ja}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
