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
    <footer className="relative z-10 w-full overflow-hidden bg-[#F9D5A8] pb-5">
      <div className="relative">
        <Image
          className="w-full lg:block"
          src="/images/md-round-top.svg"
          alt="round"
          width={1899}
          height={701}
          priority
        />
      </div>
      <div className="justify-centerpx-4 relative flex flex-col pt-15 md:px-20 md:pt-40">
        <div className="flex items-start justify-between">
          <Image
            className="w-37.5 md:w-70.75"
            src="/images/logo.png"
            alt="logo"
            width={150}
            height={27}
            priority
          />
          <nav>
            <ul className="flex flex-col gap-y-4 font-medium text-white md:gap-y-6">
              {navItems.map((item, index) => (
                <li key={index} className="flex flex-col">
                  <a href={item.href} className="flex flex-col">
                    <span className="text-[min(3.59vw,1rem)] leading-[150%] uppercase md:text-[1.25rem]">
                      {item.label.en}
                    </span>
                    <span className="text-[min(3.59vw,0.75rem)] leading-[150%] md:text-[1rem]">
                      {item.label.ja}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="pt-20 text-center text-[0.875rem] text-white">
          @2025 T・ROOT
        </p>
      </div>
    </footer>
  );
}
