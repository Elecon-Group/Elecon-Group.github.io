import React from 'react'
import HeroSection from '../components/HeroSection'
import Hero2 from '../components/Hero2'
import WhatWeDo from '../components/WhatWeDo'
import IndustryApplication from '../components/IndustryApplication'
import Products from '../components/Products'
import WhyEleconSection from '../components/WhyEleconSection'
import FAQ from '../components/FAQ'
import EleconAerotechComingSoon from '../components/ComingSoon'
import ContactSection from '../components/ContactSection'
import { ScrollAnimation } from '../components/animations'

export default function HomePage() {
  return (
    <section className='mt-20'>
      <ScrollAnimation animation="fadeIn" duration={0.8}>
        <HeroSection />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fadeUp" delay={0.2}>
        <Hero2 />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fadeUp" delay={0.3}>
        <WhatWeDo />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fadeUp" delay={0.4}>
        <IndustryApplication />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fadeUp" delay={0.3}>
        <Products />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fadeUp" delay={0.4}>
        <WhyEleconSection />
      </ScrollAnimation>
      
      
      <ScrollAnimation animation="fadeUp" delay={0.4}>
        <EleconAerotechComingSoon />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fadeUp" delay={0.3}>
        <FAQ />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fadeUp" delay={0.3}>
        <ContactSection />
      </ScrollAnimation>
    </section>
  )
}