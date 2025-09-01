import Header from '@/components/header'
import HeroSection from '@/components/HeroSection'
import FachadaServico from '@/components/FachadaServico'
import HeroSobre from '@/components/HeroSobre'
import HeroHabilidades from '@/components/SectionHabilidades'

export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      <Header />

      <section className="h-screen snap-start flex items-center justify-center">
        <HeroSection />
      </section>

      <section className="h-screen snap-start flex items-center justify-center">
        <FachadaServico />
      </section>

      <section className="h-screen snap-start flex items-center justify-center">
        <HeroSobre />
      </section>

      <section className="h-screen snap-start flex items-center justify-center">
        <HeroHabilidades />
      </section>
    </main>
  );
}
