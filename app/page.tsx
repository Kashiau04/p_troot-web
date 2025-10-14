import Image from 'next/image';
import Heading from './components/Heading';
import ServiceCard from './components/ServiceCard';
import Footer from './components/Footer';

const serviceItems = [
  {
    title: '採用代行（RPO）',
    description:
      '求人掲載から選考管理、面接調整まで、<br />採用プロセス全般を代行し、<br />効率的で質の高い採用活動を実現します。',
    image: {
      name: 'recruit-icon',
      alt: 'recruit',
      width: 58,
      height: 46.68,
      className: 'w-14.5 md:w-20.5',
    },
    bgImage: {
      name: 'blueback',
    },
  },
  {
    title: '人材定着支援',
    description:
      '入社後のフォローや教育プログラムの<br />設計を通じて、長期的な定着と組織の<br />安定化を支援します。',
    image: {
      name: 'leaf-icon',
      alt: 'leaf',
      width: 40,
      height: 44,
      className: 'w-10 md:w-15',
    },
    bgImage: {
      name: 'yellowback',
    },
  },
];

const companyItems = [
  {
    title: '会社名',
    description: '株式会社T・ROOT',
  },
  {
    title: '設立日',
    description: '2025年4月14日',
  },
  {
    title: '所在地',
    description: '千葉県船橋市上山町1-104-305',
  },
  {
    title: '資本金',
    description: '1,000,000円',
  },
  {
    title: '事業内容',
    description: '採用代行<br />DR代行<br />人材定着支援',
  },
];

export default function Home() {
  return (
    <div>
      <main className="relative overflow-hidden">
        <section
          id="kv"
          className="relative flex min-h-screen flex-col items-center justify-center bg-white px-5 font-medium"
        >
          <div className="absolute top-0 left-1/2 h-full min-w-390 -translate-x-1/2">
            <Image
              className="absolute -top-[42rem] left-18 md:-top-[90rem] md:-left-[60rem] md:w-[102.0625rem]"
              src="/images/yellow.svg"
              alt="background yellow"
              width={770}
              height={861}
              priority
            />
            <Image
              className="absolute -top-[15rem] right-0 md:-top-[32rem] md:-right-[65rem] md:w-[102.0625rem]"
              src="/images/blue.svg"
              alt="background blue"
              width={770}
              height={861}
              priority
            />
            <Image
              className="absolute top-[17rem] left-32 md:top-[25rem] md:-left-[30rem] md:w-[98.1375rem]"
              src="/images/pink.svg"
              alt="background pink"
              width={762}
              height={630}
              priority
            />
          </div>
          <div className="relative z-10 pt-15 pr-30">
            <Image
              className="w-87 md:w-146"
              src="/images/copy.svg"
              alt="copy"
              width={348}
              height={224}
              priority
            />
            <p className="mt-10 text-left text-[min(3.59vw,0.875rem)] leading-[200%] text-white md:text-[1.125rem]">
              多彩な採用手段から採用プランニングし、
              <br />
              人材定着まで全て支援する採用総合商社。
              <br className="md:hidden" />
              福祉業界の理念の実現へ
            </p>
          </div>
        </section>

        <section id="about" className="flex flex-col bg-white md:mt-30">
          <div className="relative mx-auto w-full max-w-320">
            <div className="absolute top-[14rem] -right-[41rem] rotate-260 md:top-[0rem]">
              <Image
                src="/images/yellow.svg"
                alt="background yellow"
                width={770}
                height={861}
                priority
              />
            </div>
            <div className="absolute px-5 md:px-20">
              <Heading title="about" subtitle="私たちについて" color="white" />
            </div>
            <div className="relative px-5 md:px-20 lg:flex lg:items-start lg:justify-between lg:px-15">
              <p className="text-primary-brown mt-27 text-left text-[1.5rem] leading-[150%] font-medium md:text-[3rem]">
                株式会社T・ROOTは、
                <br />
                福祉業界に特化した
                <br />
                <span className="text-primary-pink lg:text-white">
                  採用総合支援企業
                </span>
                です。
              </p>
              <p className="text-primary-brown relative mt-27 flex items-center justify-center text-left text-[1rem] leading-[200%] font-medium lg:mt-50">
                福祉業界の手となり足となり根となる
                <br />
                設立以来、多彩な採用手段を駆使し、
                <br />
                採用プランニングから採用費の削減、
                <br />
                人材定着まで一貫した
                <br />
                支援を提供してまいりました。
                <br />
                私たちは単なる採用支援に留まらず、
                <br />
                福祉現場の理念や想いを理解した上で、
                <br />
                組織が持続的に成長するための
                <br />
                人材戦略をサポートします。
                <br />
                福祉業界の課題解決に向け、
                <br />
                真に「手となり、足となり、根となる」
                <br />
                存在であり続けることを目指しています。
                <br />
              </p>
            </div>
          </div>
        </section>
        <section
          id="service"
          className="text-primary-brown mt-25 flex flex-col bg-white px-5 md:mt-30 md:px-20"
        >
          <div className="mx-auto w-full max-w-320">
            <Heading title="service" subtitle="サービス" color="pink" />
            <div className="relative mt-8 mt-27 flex flex-col gap-y-45 lg:flex-row lg:justify-between">
              {serviceItems.map((item, index) => (
                <ServiceCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  bgImage={item.bgImage}
                />
              ))}
            </div>
          </div>
        </section>
        <section
          id="company"
          className="mt-20 flex flex-col bg-[#FF8D8D] text-white md:mt-30"
        >
          <div className="relative flex gap-x-15 overflow-hidden">
            <div className="animate-marquee flex gap-x-15 px-7.5">
              <Image
                className="min-w-97.5 md:min-w-184.25"
                src="/images/logo-clear.svg"
                alt="copy"
                width={390}
                height={71}
                priority
              />
              <Image
                className="min-w-97.5 md:min-w-184.25"
                src="/images/logo-clear.svg"
                alt="copy"
                width={390}
                height={71}
                priority
              />
            </div>
            <div className="animate-marquee2 absolute top-0 flex gap-x-15 px-7.5">
              <Image
                className="min-w-97.5 md:min-w-184.25"
                src="/images/logo-clear.svg"
                alt="copy"
                width={390}
                height={71}
                priority
              />
              <Image
                className="min-w-97.5 md:min-w-184.25"
                src="/images/logo-clear.svg"
                alt="copy"
                width={390}
                height={71}
                priority
              />
            </div>
          </div>
          <div className="mx-auto w-full max-w-320 px-5 md:px-20">
            <Heading title="company" subtitle="会社概要" color="white" />
            <dl className="mt-12.5 grid gap-y-6 md:gap-x-10 lg:grid-cols-2">
              {companyItems.map((item, index) => (
                <div key={index} className="flex gap-x-5">
                  <dt className="w-25 text-[0.875rem] leading-[150%] font-bold md:text-[1.25rem]">
                    {item.title}
                  </dt>
                  <dd
                    className="flex-1 text-[0.875rem] leading-[150%] font-medium md:text-[1.25rem]"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              ))}
            </dl>
          </div>
        </section>
        <section
          id="contact"
          className="text-primary-pink flex flex-col bg-[#FF8D8D] px-5 pt-40 md:px-20 md:pt-40"
        >
          <div className="mx-auto w-full max-w-320">
            <Heading
              title="contact"
              subtitle="私たちへのお問い合わせ"
              color="white"
            />
            <div className="mt-25 mb-30 flex justify-center gap-x-5 rounded-xl bg-white py-4 pr-4 pl-5 md:gap-x-10 md:rounded-[3.125rem] md:px-20 md:py-16">
              <Image
                className="w-7.5 md:w-15"
                src="/images/mail-icon.svg"
                alt="copy"
                width={30}
                height={21.93}
                priority
              />
              <p className="text-primary-pink text-left text-[min(3.59vw,0.875rem)] leading-[150%] md:text-[1.5rem]">
                お仕事のご依頼やご質問など、
                <br />
                どのようなことでもお気軽に
                <br className="lg:hidden" />
                お問い合わせください。
              </p>
              <Image
                className="w-10 md:w-20"
                src="/images/contact-button.svg"
                alt="copy"
                width={40}
                height={40}
                priority
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
