import Image from 'next/image'

interface Logo {
  url: string;
  alt: string;
}

interface LogoSectionProps {
  logos: Logo[];
}

const LogoSection: React.FC<LogoSectionProps> = ({ logos }) => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image 
                src={`/images/company/${logo.url}`}
                alt={logo.alt} 
                width={500}
                height={0}
                
                className="h-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
