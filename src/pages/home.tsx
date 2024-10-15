import DiscussCard from '@/components/DiscussCard'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Homepage:React.FC = () => {
  return (
    <div>
      <Header />
        <DiscussCard  />
        <Footer />
    </div>
  )
}

export default Homepage;