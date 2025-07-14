import Image from 'next/image';

const featureList = [
  {
    title: 'Smart Attack Detection',
    description: 'Detect SQLi, XSS, Command Injection, LFI, SSRF, Broken Auth',
  },
  {
    title: 'Easy Integration',
    description: 'Works via 1-line script. No backend or server config needed.',
  },
  {
    title: 'Instant Alerts',
    description: 'Email, webhook, or dashboard notification on every triggered trap',
  },
  {
    title: 'AI Threat Summary',
    description: '(Pro) Weekly summary of top threats and patterns',
  },
];

const Features = () => {
  return (
    <section className="bg-web-bg py-12 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in-up">
          <h2 className="font-heading text-6xl text-center text-text-dark mb-24">
            Features
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16 items-center">
            
            <div className="flex justify-center animate-fade-in-up">
              <div className="relative card-dashed-border">
                <div className="relative z-10 bg-primary w-96 h-96 lg:w-[450px] lg:h-[450px] rounded-3xl shadow-2xl flex items-center justify-center p-4">
                  <Image
                    src="/globe_animation.gif"
                    alt="Digital globe animation"
                    width={400}
                    height={400}
                    unoptimized={true}
                    className="mix-blend-lighten" 
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full text-center lg:text-left animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="space-y-8 flex-grow">
                {featureList.map((feature, index) => (
                  <div key={index}>
                    <h3 className="font-body text-xl font-bold text-text-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-body text-lg leading-relaxed lg:pl-4">
                      – {feature.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 flex justify-center lg:justify-start">
                <button className="bg-transparent text-primary font-body font-bold py-3 px-8 border-2 border-dashed border-gray-400 rounded-lg hover:border-primary hover:text-primary transition-all duration-300 transform hover:scale-105">
                  View more
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;