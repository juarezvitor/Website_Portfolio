import React from "react";
import Image from "next/image";

const iconClass =
  "w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 transition-transform duration-300 hover:scale-110";

const icons = [
  { src: "/tecnologiaImage/HTML.png", alt: "HTML5" },
  { src: "/tecnologiaImage/CSS.png", alt: "CSS3" },
  { src: "/tecnologiaImage/JAVASCRIPT.png", alt: "JavaScript" },
  { src: "/tecnologiaImage/REACTJS.png", alt: "React" },
  { src: "/tecnologiaImage/NEXT.png", alt: "Next.js" },
  { src: "/tecnologiaImage/NODEJS.png", alt: "Node.js" },
  { src: "/tecnologiaImage/MYSQL.png", alt: "MySQL" },
  { src: "/tecnologiaImage/DOCKER.png", alt: "Docker" },
  { src: "/tecnologiaImage/TYPESCRIPT.png", alt: "TypeScript" },
  { src: "/tecnologiaImage/TAILWIND.png", alt: "TailwindCSS" },
  { src: "/tecnologiaImage/NESTJS.png", alt: "Nestjs" },
  { src: "/tecnologiaImage/VITE.png", alt: "Vite" },
  { src: "/tecnologiaImage/GITHUB.png", alt: "GitHub" },
];

export default function Tecnologias() {
  return (
    <section className="max-w-screen-2xl mx-auto bg-transparent text-white p-6 md:p-12 rounded-xl">
        <div className="mb-20">
            <h3 className="text-white text-base md:text-lg pl-4 border-l-4 border-l-blue-500">
            .../Habilidades ...
            </h3>
        </div>
      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-16">
        
        {/* Lado esquerdo: Cards */}
        <div className="flex-1/4 flex flex-col space-y-6">
          {/* Front End */}
          <div className="p-6 md:p-8 rounded-3xl bg-white text-black shadow-lg ml-0 max-w-2xl">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Front End</h3>
            <p className="text-sm md:text-base mb-2">
              HTML / CSS / Javascript / Typescript / Next.js / React.js
            </p>
            <p className="text-sm md:text-base">
              Tailwind CSS / ShadCN UI / Framer Motion / AOS / Vite
            </p>
          </div>

          {/* Back End (deslocado um pouco para direita) */}
          <div className="p-6 md:p-8 rounded-3xl border border-gray-400 ml-28 max-w-2xl">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Back End</h3>
            <p className="text-sm md:text-base mb-2">
              Javascript / Typescript / Node.js / Express.js / Nest.js
            </p>
            <p className="text-sm md:text-base">
              MySQL / SQLite / TypeORM / Prisma / Vite
            </p>
          </div>

          {/* Infra & Deploy (mais deslocado ainda) */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-6 mt-4">
            {/* Texto */}
            <p className="text-sm md:text-base font-light leading-relaxed max-w-md">
              Principais <strong className="font-extrabold">ferramentas</strong> e{" "}
              <strong className="font-extrabold">tecnologias</strong> que uso nos
              meus projetos e que mais gosto de trabalhar.
            </p>

            {/* Card Infra & Deploy */}
            <div className="p-6 md:p-8 rounded-3xl border border-gray-400 max-w-sm mt-4 md:mt-0">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Infra & Deploy</h3>
              <p className="text-sm md:text-base">
                Docker / Docker Compose / Vercel / Hostinger / Git / GitHub
              </p>
            </div>
          </div>
        </div>

        {/* Lado direito: Ícones em pirâmide invertida */}
        <div className="flex-1 mt-12 lg:mt-0 flex flex-col items-end space-y-6">
          {/* Linha 1 - mais ícones */}
          <div className="flex space-x-8">
            {icons.slice(0, 5).map((icon, i) => (
              <Image key={i} src={icon.src} alt={icon.alt} width={80} height={80} className={iconClass} />
            ))}
          </div>
          {/* Linha 2 */}
          <div className="flex space-x-8">
            {icons.slice(5, 9).map((icon, i) => (
              <Image key={i} src={icon.src} alt={icon.alt} width={80} height={80} className={iconClass} />
            ))}
          </div>
          {/* Linha 3 - menos ícones */}
          <div className="flex space-x-8">
            {icons.slice(9, 12).map((icon, i) => (
              <Image key={i} src={icon.src} alt={icon.alt} width={80} height={80} className={iconClass} />
            ))}
          </div>
          {/* Linha 4 - só 1 ícone no centro */}
          <div>
            <Image src={icons[12].src} alt={icons[12].alt} width={80} height={80} className={iconClass} />
          </div>
        </div>
      </div>
    </section>
  );
}
