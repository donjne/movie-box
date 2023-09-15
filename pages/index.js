import Head from 'next/head'
import Hero from '../components/hero'
import Footer from '../components/Footer'
import Card from '../components/Card'


export default function Home() {
  return (
    <div>
     <Hero />
     <Card />
     <Footer />
    </div>
  )
}
