import CaseStudies from '@/components/caseStudies'
import DiscussCard from '@/components/DiscussCard'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const OurWork:React.FC = () => {
  return (
    <div className='max-w-full'>
      <Header />
        <CaseStudies />
        <DiscussCard  />
        <Footer />
    </div>
  )
}

export default OurWork;