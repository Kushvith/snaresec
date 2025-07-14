import Image from 'next/image';
import HowItWorks from '@/components/HowItWorks';
import Marquee from '@/components/Marguee';
import Features from '@/components/Features';
import UseCases from '@/components/UseCases';
import Footer from '@/components/Footer';
export default function HomePage() {
  return (
    <>
      <div className="bg-web-bg relative overflow-x-hidden">
        <div className="relative min-h-screen w-full overflow-hidden">

          <div className="absolute inset-0 z-0">
            <Image
              src="/background_video.gif"
              alt="Digital numbers background animation"
              layout="fill"
              objectFit="cover"
              unoptimized={true}
            />
          </div>


          <div className="absolute inset-0 z-10 bg-web-bg/90"></div>


          <div className="relative z-20 flex items-center min-h-screen px-6 sm:px-12 lg:px-24">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">

                <div className="text-center lg:text-left animate-fade-in-up flex flex-col items-center lg:items-start">
                  <h1 className="font-heading text-5xl md:text-6xl font-bold text-text-dark leading-tight mb-8">
                    Catch Hackers Before They Attack.
                  </h1>

                  <ul className="list-disc list-inside text-lg text-text-dark/80 space-y-2 mb-8 text-left lg:text-left mx-auto lg:mx-0">
                    <li>Deploy deception traps</li>
                    <li>Detect threats in real-time</li>
                    <li>Stay one step ahead</li>
                  </ul>

                  <p className="text-lg text-gray-600 mb-10 max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                    Lightweight, real-time honeypot script to detect SQLi, XSS, LFI, and more. Plug & play in seconds.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start w-full">
                    <button className="bg-primary text-text-light font-body font-bold py-4 px-8 rounded-lg hover:bg-gray-700 transition-transform duration-300 shadow-md transform hover:scale-105">
                      Get Started Free
                    </button>
                    <button className="bg-transparent text-primary font-body font-bold py-4 px-8 border-2 border-dashed border-gray-400 rounded-lg hover:border-primary hover:text-primary transition-all duration-300 transform hover:scale-105">
                      See How It Works
                    </button>
                  </div>
                </div>

                <div className="flex justify-center items-center animate-fade-in-up [animation-delay:0.3s]">
                  <Image
                    src="/hacker_animation.gif"
                    alt="Hacker animation"
                    width={500}
                    height={500}
                    unoptimized={true}
                    className="mix-blend-multiply"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HowItWorks />
      <Marquee />
      <Features />
      <UseCases />
      <Footer />
    </>
  );
}