"use client";
import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

interface Projeto {
  nome: string;
  descricao: string;
  skills: string[];
  link: string;
  linkurl: string;
  imagens: string[];
}

const projetos: Projeto[] = [
  {
    nome: "Vepran - Construtora & Incorporadora",
    descricao: `
      Este site foi desenvolvido por mim, utilizando tecnologias modernas como Next.js e NestJS,
      com o objetivo de oferecer uma experiência fluida e profissional aos usuários.
      O projeto integra funcionalidades como listagem de empreendimentos, galeria de imagens 
      e um painel administrativo para gestão de clientes.

    `,
    linkurl: "https://vepran.com",
    skills: ["Javascript", "TypeScript", "NestJS", "NextJs", "Mysql", "TailwindCSS", "TypeORM"],
    link: "https://github.com/juarezvitor/Website_Vepran",
    imagens: [
      "/images/Vepran/foto_1.png",
      "/images/Vepran/foto_2.png",
      "/images/Vepran/Foto_3.jpg",
    ],
  },
  {
    nome: "Clinica Veterinaria Salvavet",
    descricao: `
      Salvavet – Clínica Veterinária. Este site foi desenvolvido por mim com foco em proporcionar uma experiência clara e acessível para os usuários, 
      garantindo que informações sobre serviços, horários de atendimento e formas de contato estejam sempre à mão. O layout é responsivo, 
      funcionando perfeitamente tanto em computadores quanto em dispositivos móveis.
    `,
    linkurl: "https://website-salvavet.vercel.app/",
    skills: ["Next", "TailwindCSS", "HTML", "Javascript", "NodeJS"],
    link: "https://github.com/juarezvitor/Website_Salvavet",
    imagens: [
      "/images/Salvavet/foto_1.png",
      "/images/Salvavet/foto_2.png",
      "/images/Salvavet/foto_3.png"
    ],
  },
];

export default function Projetos() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-20 py-20">
      {projetos.map((projeto, idx) => (
        <section
            key={idx}
            className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-8 py-20 ${
            idx % 2 === 1 ? "md:flex-row-reverse md:grid-cols-2" : ""
            }`}
        >
            {/* Esquerda / Direita */}
            <aside className="flex flex-col gap-6">
            <h1 className="text-white text-4xl font-bold">{projeto.nome}</h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
                {projeto.skills.map((skill) => (
                <span
                    key={skill}
                    className="px-4 py-1 text-sm rounded-full  border border-Branco text-gray-200"
                >
                    {skill}
                </span>
                ))}
            </div>

            {/* Descrição */}
            <p className="text-gray-400 leading-relaxed">{projeto.descricao}</p>
           <h3 className="text-white text-base md:text-lg pl-4">
            Acesse em:{" "}
            <a
                href={projeto.linkurl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
            >
                {projeto.linkurl}
            </a>
            </h3>

            {/* Botão redondo */}
            <div>
                <a
                href={projeto.link}
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black shadow-lg hover:scale-105 transition"
                >
                <ArrowUpRight size={20} />
                </a>
            </div>
            </aside>

            {/* Direita / Esquerda (imagens) */}
            <div className="relative flex flex-wrap gap-6 justify-start items-center">
                <h3 className="text-white text-base md:text-lg pl-4">
                    .../Projeto ...
                </h3>
            {projeto.imagens.map((img, index) => (
                <img
                key={index}
                src={img}
                alt={`${projeto.nome} ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className={`rounded-2xl shadow-2xl cursor-pointer hover:scale-105 transition ${
                    index === 0 ? "w-[28rem]" : index === 1 ? "w-64" : "w-52"
                }`}
                />
            ))}
            </div>
        </section>
        ))}
      {/* Modal para ampliar imagem */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Ampliada"
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-lg hover:scale-110 transition"
            >
              <X className="text-black" size={20} />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
