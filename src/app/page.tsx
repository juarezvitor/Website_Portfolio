import Header from '@/components/header'
import HeroSection from '@/components/HeroSection'
import HeroSobre from '@/components/HeroSobre'
import HeroHabilidades from '@/components/SectionHabilidades'
import Projetos from '@/components/Projetos'
import Footer from '@/components/Footer'
import LenisProvider from '@/components/LenisProvider'

export default function Home() {
  return (
    <LenisProvider>
      <main className="w-full">
        <Header />

        <section className="min-h-screen flex items-center justify-center">
          <HeroSection />
        </section>

        <section id='Sobre' className="min-h-screen flex items-center justify-center">
          <HeroSobre />
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <HeroHabilidades />
        </section>

        <section id='Projetos' className="min-h-screen flex items-center justify-center">
          <Projetos />
        </section>

        <section id='Footer' className="min-h-screen flex items-center justify-center">
          <Footer />
        </section>

      </main>
    </LenisProvider>
  )
}
