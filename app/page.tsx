import Image from "next/image";
import Heading from "./components/Heading";

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
          <Heading
            title="ABOUT"
            subtitle="私たちについて"
            color="white"
          />
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
        <section id="service" className="min-h-screen flex flex-col px-5 bg-gray-300 md:px-20 text-primary-brown">
          <Heading
            title="SERVICE"
            subtitle="サービス"
            color="pink"
          />
          <div className="flex flex-col justify-center items-center mt-24">
            <Image
              className="w-14.5"
              src="/images/recruit-icon.svg"
              alt="recruit"
              width={58}
              height={46.68}
              priority
            />
            <h2 className="mt-4 text-[1.25rem]">
              採用代行（RPO）
            </h2>
            <p className="mt-3 text-[0.875rem]">
              求人掲載から選考管理、面接調整まで、<br />
              採用プロセス全般を代行し、<br />
              効率的で質の高い採用活動を実現します。
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-45">
            <Image
              className="w-10"
              src="/images/leaf-icon.svg"
              alt="leaf"
              width={40}
              height={44}
              priority
            />
             <h2 className="mt-4 text-[1.25rem]">
              人材定着支援
            </h2>
            <p className="mt-3 text-[0.875rem]">
              入社後のフォローや教育プログラムの<br />
              設計を通じて、長期的な定着と組織の<br />
              安定化を支援します。
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
