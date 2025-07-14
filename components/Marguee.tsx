
const marqueeItems = [
  "Detect intent before real damage",
  "Works with static sites, React, PHP, or any tech stack",
  "Fully hosted + no backend changes",
  "Low-cost and effective",
  "Instant webhook alerts",
  "Minimal performance impact"
];

const Marquee = () => {
  return (
    <section className="bg-primary text-text-light py-8 md:py-12 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">

          {marqueeItems.map((item, index) => (
            <div key={index} className="flex items-center mx-6">
              <span className="text-3xl text-gray-500 mr-4">•</span>
              <p className="text-lg md:text-xl font-body">{item}</p>
            </div>
          ))}
          {marqueeItems.map((item, index) => (
            <div key={`duplicate-${index}`} className="flex items-center mx-6" aria-hidden="true">
              <span className="text-3xl text-gray-500 mr-4">•</span>
              <p className="text-lg md:text-xl font-body">{item}</p>
            </div>
          ))}
        </div>

        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{
            background: 'linear-gradient(to right, #414141, transparent 30%, transparent 70%, #414141)'
          }}
        ></div>
      </div>
    </section>
  );
};

export default Marquee;