import React from 'react';
import {Button} from '@/components/ui/button'
import Link from "next/link";


export default function Footer() {

    const fachadaBotoes = [
        {label: 'Github', href: 'https://github.com/juarezvitor'},
        {label: 'Linkedin', href: 'https://www.linkedin.com/in/juarez-vitor'},
        {label: 'Email', href: 'mailto:juarez10vitor@outlook.com?subject=Contato%20do%20site&body=Olá%20Juarez,%20quero%20saber%20mais%20sobre...'},
    ];


    return (
        <footer className= "max-w-screen-2xl mx-auto text-white pr-8 pl-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 items-end">
                {/* Coluna 1: Nome e Título */}
                <div className="flex flex-col items-center md:items-center text-center md:text-left text-Branco">
                    <h2 className="text-6xl md:text-8xl font-bold">Juarez</h2>
                    <h2 className="text-6xl md:text-8xl font-bold mt-2 md:mt-4">Vitor</h2>
                    <p className="text-sm md:text-base font-light text-CinzaClaro mt-2">Full-Stack Developer</p>
                </div>

                {/* Coluna 2: Copyright */}
                <div className="flex flex-col items-center justify-center text-center md:text-left md:col-span-1 lg:col-span-1">
                    <p className="text-sm md:text-base text-CinzaClaro">
                        &copy; {new Date().getFullYear()} Feito por Juarez Vitor | Desenvolvido com NextJS |. Todos os direitos reservados.
                    </p>
                </div>

                {/* Coluna 3: Contatos e Navegação */}
                <div className="flex flex-col items-center  text-center md:text-right">
                    <h3 className="text-white text-base md:text-lg pl-4 border-l-4 border-l-gray-500">
                        .../Contatos ...
                    </h3>
                    <div className="mt-4 flex flex-col items-end">
                        <nav className="flex items-center gap-2">
                            <a href="#Home" className="text-white hover:text-CinzaClaro transition-colors">Home</a>
                            <a href="#Sobre" className="text-white hover:text-CinzaClaro transition-colors">Sobre</a>
                            <a href="#Projetos" className="text-white hover:text-CinzaClaro transition-colors">Projetos</a>
                        </nav>
                        <div className='flex flex-col gap-4 mt-4'>
                            {fachadaBotoes.map(item => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    passHref
                                    data-aos="zoom-in"
                                >
                                    <Button className="cursor-pointer w-[180px] h-[55px] items-center border border-Branco font-light text-Branco px-6 py-3 rounded-full shadow-sm hover:shadow-Branco hover:bg-neutral-800 hover:text-Branco hover:-translate-y-1 transition-all duration-300">
                                        {item.label}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
