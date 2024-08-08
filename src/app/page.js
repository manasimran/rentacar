import Hero from "../components/Hero/page"
import LogoCars from "../components/Logo/page"
import Brand1 from "../components/Logo_Brands/page"
import CarShowCase from "../components/Vehicals/page"

export default function Home() {
  
  return (
    <main className=" flex flex-col items-center justify-center">
      <Hero />
      <LogoCars/>
      <Brand1/>
      <CarShowCase />

    </main>
  )
}
