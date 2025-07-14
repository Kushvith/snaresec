import Image from 'next/image';

const features = [
  {
    icon: '/icon_1.svg',
    title: 'Add a Single JS Line',
    description: 'Drop our script into your website or app — no config required.',
    delay: '100ms',
  },
  {
    icon: '/icon_2.svg',
    title: 'Honeypot handles the Malicious request',
    description: "Your users won't notice. Attackers will. Traps trigger on XSS, SQLi, SSRF, RFI, and more.",
    delay: '200ms',
  },
  {
    icon: '/icon_3.svg',
    title: 'You Get Instant Alerts',
    description: 'See attack logs, IP, payload, and risk level in your dashboard or webhook.',
    delay: '300ms',
  },
];

const HowItWorks = () => {
  return (
    // More padding on the sides for large screens (lg:px-16 xl:px-24)
    <section className="bg-web-bg py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        {/* Section Title */}
        <div className="animate-fade-in-up">
          <h2 className="font-heading text-5xl text-center text-text-dark mb-24">
            How It Works ?
          </h2>
        </div>

        {/* 
          Features Grid
          - justify-items-center ensures cards are centered in their columns.
          - Increased vertical gap on mobile (gap-y-20) for better stacking.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 lg:gap-y-12 justify-items-center">
          {features.map((feature, index) => (
            // Set max-w-sm to make cards smaller and w-full to make them responsive
            <div
              key={index}
              className="relative card-dashed-border animate-fade-in-up w-full max-w-sm"
              style={{ animationDelay: feature.delay }}
            >
              <div className="relative z-10 bg-primary p-8 h-full rounded-xl text-center text-text-light shadow-2xl">
                
                {/* Icon Circle */}
                <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-web-bg shadow-inner">
                  <Image
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    width={48}
                    height={48}
                  />
                </div>

                {/* Card Title */}
                <h3 className="font-body text-xl font-bold mb-4">
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className="text-gray-400 font-body text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;