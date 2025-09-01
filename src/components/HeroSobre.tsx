import React from 'react';
import Image from 'next/image';

export default function Sobre() {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 md:px-20 py-10 border-b-2">
      <div className="mb-8">
        <h3 className="text-white text-base md:text-lg pl-4 border-l-4 border-l-purple-500">
          .../Sobre mim...
        </h3>
      </div>
      
      {/* Container principal com um grid responsivo de duas colunas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
        {/* Coluna da esquerda para o conteúdo de texto */}
        <div className="text-white space-y-6 text-center md:text-center">
          <h2 className="font-extralight text-lg md:text-xl leading-relaxed">
            Olá! Me chamo <strong className="font-extrabold">Juarez Vitor.</strong>
            <br />
            Sou Desenvolvedor Web <strong className="font-extrabold">Full-Stack</strong> e tenho aproximadamente <strong className="font-extrabold">1 ano</strong> de experiência em T.I.
          </h2>
          <p className="text-sm md:text-base font-light">
            Atualmente, tenho 21 anos, sou natural de Blumenau e moro em Balneário Camboriú. Minha trajetória começou em áreas operacionais, passando pelo Exército Brasileiro e pela indústria. Mais tarde, atuei com informática e como analista de suporte, onde tive contato direto com manutenção de computadores e suporte técnico.
          </p>
          <p className="text-sm md:text-base font-light">
            Desde pequeno, a tecnologia sempre fez parte da minha vida. Com 10 anos, já passava horas jogando no computador e resolvendo problemas por conta própria. Esse fascínio me motivou a seguir carreira em T.I. — sempre fui o &quot;cara que resolve qualquer coisa no PC&quot; para amigos e família.
          </p>
          <p className="text-sm md:text-base font-light">
            Hoje, como graduando em Sistemas de Informação, dedico meus estudos ao desenvolvimento web, com foco em me tornar um Full-Stack Developer. Acredito que programar é muito mais do que escrever código: é transformar ideias em soluções reais, escaláveis e acessíveis. O que mais me inspira é a possibilidade de criar algo do zero, usando apenas conhecimento, prática e criatividade.
          </p>
          <p className="text-sm md:text-base font-light">
            Trabalho em projetos próprios para consolidar minha evolução, explorando tecnologias como JavaScript, TypeScript, React.js, Next.js, NestJS, TailwindCSS e MySQL. Meu objetivo é evoluir continuamente, colaborar com ideias inovadoras e, no futuro, expandir minha carreira para fora do Brasil, impactando positivamente empresas e pessoas através da tecnologia.
          </p>
        </div>
        
        {/* Coluna da direita para a imagem */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/fotosobremim.png"
            alt="Foto de perfil de Juarez Vitor"
            width={500}
            height={500}
            className="rounded-3xl border border-white max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}