import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <section id="kv" className="min-h-screen flex flex-col justify-center items-center px-5 bg-gray-300">
          <div>
            <Image
              className="w-87 md:w-146"
              src="/images/copy.svg"
              alt="copy"
              width={348}
              height={224}
              priority
            />
            <p className="mt-10 text-[min(3.59vw,0.875rem)] text-left text-sm leading-normal text-white md:text-lg">
              多彩な採用手段から採用プランニングし、<br />
              人材定着まで全て支援する採用総合商社。<br className="md:hidden" />
              福祉業界の理念の実現へ
            </p> 
          </div>
        </section>
        <section id="about" className="min-h-screen flex flex-col px-5 bg-gray-300 md:px-20">
          <div className="flex items-start">
            <Image
              className="w-5 mt-0.5"
              src="/images/sakura-white.svg"
              alt="sakura"
              width={16}
              height={20.82}
              priority
            />
            <div className="flex flex-col ml-2.5 text-white">
              <h2 className="text-[20px] font-medium font-inter">
                ABOUT
              </h2>
              <p className="text-[12px] font-medium mt-2.5">
                私たちについて
              </p>
            </div>
          </div>
          <div className="lg:px-15 lg:flex lg:justify-between lg:items-start">
            <p className="text-left text-[24px] text-primary-brown text-medium mt-12.5 md:text-[3rem]">
              株式会社T・ROOTは、<br />
              福祉業界に特化した<br />
              <span className="text-primary-pink">採用総合支援企業</span>です。
            </p>
            <p className="flex justify-center items-center mt-27 text-left text-[1rem] leading-[2] text-primary-brown md:text-[1rem] lg:mt-50">
              福祉業界の手となり足となり根となる<br />
              設立以来、多彩な採用手段を駆使し、<br />
              採用プランニングから採用費の削減、<br />
              人材定着まで一貫した<br />
              支援を提供してまいりました。<br />
              私たちは単なる採用支援に留まらず、<br />
              福祉現場の理念や想いを理解した上で、<br />
              組織が持続的に成長するための<br />
              人材戦略をサポートします。<br />
              福祉業界の課題解決に向け、<br />
              真に「手となり、足となり、根となる」<br />
              存在であり続けることを目指しています。<br />
            </p>
          </div>
        </section>
        <section id="service" className="min-h-screen flex flex-col">
          <div className="flex items-start">
            <Image
              className="w-5 mt-0.5"
              src="/images/sakura-pink.svg"
              alt="sakura"
              width={16}
              height={20.82}
              priority
            />
            <div className="flex flex-col ml-2.5 text-primary-pink">
              <h2 className="text-[20px] font-medium font-inter">
                SERVICE
              </h2>
              <p className="text-[12px] font-medium mt-2.5">
                私たちのサービス
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
