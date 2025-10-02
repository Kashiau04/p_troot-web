import Image from 'next/image';

const navItems = [
  { label: 'about', href: '' },
  { label: 'service', href: '' },
  { label: 'company', href: '' },
  { label: 'contact', href: '' },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-10 flex w-full items-center justify-between px-8 py-4">
      <h1>
        <Image
          className="w-27 md:w-37"
          src="/images/logo.png"
          alt="troot"
          width={105}
          height={19}
          priority
        />
      </h1>
      <div className="font-inter">
        <button className="justify-items-center md:hidden">
          <Image
            className="w-5"
            src="/images/menu-button.svg"
            alt="menubutton"
            width={16}
            height={20.82}
            priority
          />
          <span className="text-xs font-bold text-[#88646A]">MENU</span>
        </button>
        <nav className="hidden md:block">
          <ul className="flex gap-x-10 text-base font-medium uppercase">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
