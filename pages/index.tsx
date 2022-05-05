import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@components/Navbar'
import ProfileCard from '@components/ProfileCard'
import Timline from '@components/Timeline'
import Timeline from '@components/Timeline'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto pt-10">
        <div className="flex justify-center">
          <ProfileCard />
          <Timeline />
        </div>
      </div>
      <h1>Hellow</h1>
    </div>
  )
}

export default Home
