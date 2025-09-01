'use client'

import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Facebook, Instagram  } from "lucide-react";
import Typed from "typed.js";




export default function HeroSection() {

    const fachadaBotoes = [
        {label: 'Github', href: 'Linkencaminhar', icon: <Github className="mr-0.5 h-14 w-14"/>},
        {label: 'Linkedin', href: 'Linkencaminhar', icon: <Linkedin className="mr-0.5 h-14 w-14"/>},
        {label: 'Telegram', href: 'Linkencaminhar', icon: <Linkedin className="mr-0.5 h-14 w-14"/>},
        {label: 'Facebook', href: 'Linkencaminhar', icon: <Facebook className="mr-0.5 h-14 w-14"/>},
        {label: 'Instagram', href: 'Linkencaminhar', icon: <Instagram className="mr-0.5 h-14 w-14"/>}
    ]

    const fullStackRef = useRef<HTMLSpanElement | null>(null);
    const developerRef = useRef<HTMLSpanElement | null>(null);
    const apresentacaoRef = useRef <HTMLParagraphElement | null>(null);

  useEffect(() => {
    const typed = new Typed(fullStackRef.current, {
      strings: ["Full - Stack"],
      typeSpeed: 70,
      backSpeed: 40,
      startDelay: 200,
      showCursor: false,
      cursorChar: "|",
      loop: false,
    });

    const typed2 = new Typed(developerRef.current, {
      strings: ["Developer"],
      typeSpeed: 70,
      backSpeed: 40,
      startDelay: 1500,
      showCursor: false,
      cursorChar: "|",
      loop: false,
    });
    
        const typed3 = new Typed(apresentacaoRef.current, {
      strings: ["Desenvolvedor Full - Stack, Combino design, tecnologia e estratégia para criar experiências digitais que encantam e funcionam."],
      typeSpeed: 20,
      backSpeed: 40,
      startDelay: 1000,
      showCursor: false,
      cursorChar: "|",
      loop: false,
    });

    return () => {
      typed.destroy();
      typed2.destroy();
      typed3.destroy();
    };
  }, []);

    return (
        <main className="max-w-screen-2xl mx-auto container px-20 mb-20 ">
          <section className="flex justify-between">
            <div className="mt-1">
              <h1 className="text-Branco text-8xl font-bold mr-20 mb-1.5">
                <span ref={fullStackRef}></span>
              </h1>
            </div>

            <div data-aos="fade-right" className="flex flex-row-reverse items-center pt-10 mr-70 gap-4">
              {/* Botão com ícone */}
              <Button className="bg-Branco h-[48px] w-[50px] rounded-4xl flex items-center justify-center shadow-sm hover:shadow-Branco transform hover:-translate-y-1 transition-all duration-300 group">
                <ArrowRight className="text-PretoFundo group-hover:text-Branco h-6 w-6 transition-colors duration-300" />
              </Button>

              {/* Botão link para Projetos */}
              <Link href="/projetos" passHref>
                <Button className="cursor-pointer bg-Branco text-PretoFundo px-8 py-3 rounded-full w-[250px] h-[48px] shadow-sm hover:shadow-Branco hover:bg-neutral-800 hover:text-Branco transform hover:-translate-y-1 transition-all duration-300">
                  Projetos
                </Button>
              </Link>
            </div>
          </section>
        <section className="flex justify-between mt-10">
          
          <div className="mt-12 mr-7">
              <p className="text-Branco text-sm">
                <span ref={apresentacaoRef}></span>
                  
              </p>
          </div>
          
          
          <div className="mr-16 mt-4">
              <h1 className="text-Branco text-8xl font-bold ml-20 mb-1.5">
                  <span ref={developerRef}></span>
              </h1>
          </div>
          
        </section>
        <section className="flex flex-wrap items-center justify-between mt-20 gap-4">
          {fachadaBotoes.map(item => (
              <Link
              key={item.label}
              href={item.href}
              target="_blank" 
              rel="noopener noreferrer"
              passHref
              data-aos="zoom-in"
              >
              <Button className = "cursor-pointer w-[180] h-[55] items-center border border-Branco font-light text-Branco px-6 py-3 rounded-full shadow-sm hover:shadow-Branco hover:bg-neutral-800 hover:text-Branco hover:-translate-y-1 transition-all duration-300">{item.icon}{item.label}</Button>
              </Link>
          ))}
          

        </section>
    </main>
  );
}
