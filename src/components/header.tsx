import Link from "next/link";

export default function Header() {
  const arrayNavbar = [
    { label: "Inicio", href: "#Home" },
    { label: "Sobre", href: "#Sobre" },
    { label: "Projetos", href: "#Projetos" },
    { label: "Contato", href: "#Footer" },
  ];

  return (
    <header className="max-w-screen-2xl mx-auto">
      <div className="flex justify-between items-center h-20 px-8 ml-14 mr-14">
        {/* Logo */}
        <h1 className="text-Branco font-light antialiased text-lg ">
          Juarez<br />
          <span className="pl-2">Vitor</span>
        </h1>

        {/* Navbar */}
        <nav className="flex items-center gap-10">
          {arrayNavbar.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-Branco font-light antialiased cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-2xs shadow-Branco"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div>
          <h2 className="text-Branco font-light antialiased cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-2xs shadow-Branco">Br</h2>
          <h2 className="text-Branco font-light antialiased cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-2xs shadow-Branco">En</h2>
        </div>
      </div>
    </header>
  );
}
