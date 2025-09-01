import Header from '@/components/header'
import HeroSection from '@/components/HeroSection'
import FachadaServico from '@/components/FachadaServico'
import HeroSobre from '@/components/HeroSobre'
import HeroHabilidades from '@/components/SectionHabilidades'


export default function Home() {
  return (
    <main className=''>
      <Header />
      <HeroSection />
      <FachadaServico />
      <HeroSobre />
      <HeroHabilidades />
    </main>
  );
}
