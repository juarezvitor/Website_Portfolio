
    import Link from "next/link";



    export default function Header () {
        const arrayNavbar = [
            {label: "Inicio", href: "#Inicio"},
            {label: "Sobre", href: "#Sobre"},
            {label: "Projetos", href: "#Projetos"},
            {label: "Contato", href: "#Contato"}
        ]
        
        
        return (


            <header className="bg-PretoFundo container ml-52 mr-52 px-4 margin-bottom mb-20 position-sticky">
                <div className="flex justify-between items-center h-14 p-auto pt-6 px-20">
                    <div>
                        <h1 className="text-Branco font-light antialiased">Juarez<br/><span className="pl-2">Vitor</span></h1>
                    </div>
                    <nav className="flex items-center justify-between gap-9">
                        {arrayNavbar.map(item => (
                            <Link
                            key={item.href}
                            href={item.href}
                            className="text-Branco font-light antialiased cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-2xs shadow-Branco"
                            >
                            {item.label}    
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>
        )
    }