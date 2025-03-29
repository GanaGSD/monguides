import Hero from '../home/Hero'
import NarrativeSection from '../home/NarrativeSection'
import DestinationsSection from '../home/DestinationsSection'
import Magazine from '../home/Magazine'

export default function Home() {
  const narrative = [
    `Mongolia is a land where the ancient and modern coexist, where nomadic traditions that have endured for centuries
     continue alongside a rapidly developing society.`,
    `From the rolling steppe to the towering mountains, from the scorching desert to the cooling forests and lakes,
     Mongolia's varied landscapes provide the backdrop for adventure, cultural immersion, and unforgettable memories.`
  ]
  
  return (
    <>
      <Hero />
      <NarrativeSection text={narrative[0]} />
      <DestinationsSection />
      <NarrativeSection text={narrative[1]} />
      <Magazine />
    </>
  )
}