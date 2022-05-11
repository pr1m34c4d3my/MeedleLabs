import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@components/Navbar'
import ProfileCard from '@components/ProfileCard'
import Timeline from '@components/Timeline'

const About: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto justify-center pt-10">
        <h1>This is Content</h1>
      </div>
      <h1>Hellow</h1>
    </div>
  )
}
export default About
