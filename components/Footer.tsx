// components/Footer.tsx
import Link from 'next/link';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/referral', label: 'Referral' },
  { href: '/about', label: 'About Us' },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-text-light">
      <div className="container mx-auto px-6 py-8 text-center">
        

        <h2 className="font-heading text-2xl md:text-4xl mb-2">
          SnareSec
        </h2>

    
        <p className="font-body text-lg text-gray-400 mb-10 text-xl">
          Catch Hackers. Before They Attack.
        </p>

        <nav className="flex justify-center items-center flex-wrap gap-x-6 sm:gap-x-12 gap-y-4 mb-10">
          {footerLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="font-body text-gray-300 hover:text-white transition-colors duration-300 text-xl"
            >
              {link.label}
            </Link>
          ))}
        </nav>


        <div className="w-full w-[90%] mx-auto border-t-2 border-dashed border-gray-600 my-4"></div>

        <p className="font-body text-sm text-gray-500">
          All rights reserved © {new Date().getFullYear()} - SnareSec
        </p>

      </div>
    </footer>
  );
};

export default Footer;