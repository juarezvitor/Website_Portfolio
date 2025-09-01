"use client"

import * as React from "react"
import { type CarouselApi } from "@/components/ui/carousel"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";

export default function CarouselServicos() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const slides = [
    {
      title: "Desenvolvimento de Sites",
      description: "Transformo seu design em um site funcional e elegante. Seja uma landing page ou um site institucional, entrego um produto visualmente atraente e totalmente responsivo.",
      image: "/images/Fundocode.jpg"
    },
    {
      title: "Web Design",
      description: "Transformo ideias em experiências digitais. Desenvolvo sites e interfaces que não são apenas bonitos, mas também intuitivos, responsivos e otimizados para uma navegação fluida e agradável.",
      image: "/images/Webdesign.jpg"
    },
    {
      title: "Manutenção",
      description: "Garanto que seu site esteja sempre atualizado e funcionando perfeitamente. Ofereço serviços de manutenção para corrigir bugs, adicionar novas funcionalidades e garantir a segurança do seu site.",
      image: "/images/manutencao.jpg"
    },
    {
      title: "Infra e Deploy",
      description: "Gerencio toda a infraestrutura e o processo de deploy da sua aplicação utilizando tecnologias como Docker e Git .",
      image: "/images/infdeploy.jpg"
    },

  ];

  return (
    <section className="relative max-w-screen-2xl mx-auto px-20 mb-20">
          <div className="mb-20">
            <h3 className="text-white text-base md:text-lg pl-4 border-l-4 border-l-blue-500">
            .../Serviços ...
            </h3>
        </div>
      <Carousel setApi={setApi} opts={{ align: "center" }} className="w-full">
        <CarouselContent className="-ml-1">
          {slides.map((slide, index) => (
            <CarouselItem 
              key={index} 
              className={`basis-2/4 transition-all duration-500 ease-in-out ${
                index === current ? "scale-100 opacity-100" : "scale-90 opacity-50"
              }`}
             >
              <div className="p-1">
                <Card className="bg-neutral-900 border border-Branco rounded-3xl text-white relative overflow-hidden">
                {/* Div da imagem de fundo posicionada de forma absoluta para cobrir o card inteiro */}
                <div 
                    className="absolute inset-0 bg-cover bg-center z-0" 
                    style={{ backgroundImage: `url('${slide.image}')` }}
                ></div>

                {/* Div de overlay para melhorar o contraste do texto, também absoluta */}
                <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

                <CardContent className="flex flex-col aspect-video items-center justify-center p-6 relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{slide.title}</h3>
                    <p className="text-sm md:text-base text-center mb-6">{slide.description}</p>
                    <div className="flex gap-2">
                    <Button className="cursor-pointer bg-Branco text-PretoFundo px-8 py-3 rounded-full w-[250px] h-[48px] shadow-sm hover:shadow-Branco hover:bg-neutral-800 hover:text-Branco transform hover:-translate-y-1 transition-all duration-300">
                        Saber Mais
                    </Button>
                    <button className="bg-white text-black font-semibold py-2 px-4 rounded-full">
                        &rarr;
                    </button>
                    </div>
                </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white bg-black/50 hover:bg-black/70 rounded-full w-12 h-12" />
        <CarouselNext className="text-white bg-black/50 hover:bg-black/70 rounded-full w-12 h-12" />
      </Carousel>
      
      {/* Botões de navegação adicionados novamente */}

    </section>
  )
}