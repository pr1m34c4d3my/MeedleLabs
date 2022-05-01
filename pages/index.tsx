import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@components/Navbar'
import ProfileCard from '@components/ProfileCard'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
        <div className="container mx-auto pt-10">
          <ProfileCard />
        </div>
      <h1>Hellow</h1>
    </div>
  )
}

export default Home
