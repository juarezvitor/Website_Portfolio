import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';



const arraydeprojetos = [
    { title: "Projeto 1", description: "Descrição do Projeto 1", image: "/images/projeto.jpg" },
    { title: "Projeto 2", description: "Descrição do Projeto 2", image: "/images/projeto.jpg" },
    { title: "Projeto 3", description: "Descrição do Projeto 3", image: "/images/projeto.jpg" },
    { title: "Projeto 1", description: "Descrição do Projeto 1", image: "/images/projeto.jpg" },
    { title: "Projeto 2", description: "Descrição do Projeto 2", image: "/images/projeto.jpg" },
    { title: "Projeto 3", description: "Descrição do Projeto 3", image: "/images/projeto.jpg" },   
];


export default function Projetos() {
    return (


        <section className='max-w-screen-2xl mx-auto  bg-transparent text-white'>
            <div className="flex justify-between mb-20">
                <h3 className="text-white text-base md:text-lg pl-4 border-l-4 border-l-red-500">
                .../Projetos ...
                </h3>
                <h2 className='text-white font-extrabold text-base md:text-5xl pl-4'>
                    Portfólio
                </h2>
            </div>
            <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
                {arraydeprojetos.map((projeto, index) => (
                <div key={index} className="p-1">
                    <Card className="bg-PretoFundo border border-Branco rounded-3xl text-white relative overflow-hidden">
                    {/* Div da imagem de fundo posicionada de forma absoluta para cobrir o card inteiro */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center z-0" 
                        style={{ backgroundImage: `url('${projeto.image}')` }}></div>

                    {/* Div de overlay para melhorar o contraste do texto, também absoluta */}
                    <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

                        <CardContent className="flex flex-col aspect-video items-center justify-center p-6 relative z-10">
                            <h3 className="text-xl md:text-2xl font-bold mb-4">{projeto.title}</h3>
                            <p className="text-sm md:text-base text-center mb-6">{projeto.description}</p>
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
                ))}
            </article>
        </section>
    )
}