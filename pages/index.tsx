import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@components/Navbar';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <h1 className='font-black '>Hello World!</h1>
    </div>
  )
}

export default Home
