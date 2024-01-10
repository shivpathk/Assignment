import React from 'react'
import Image from 'next/image'
import './home.scss'


const Home = () => {
  return (
    <div>
        <div className="homeimage">
      <Image
      src="/home.png"
      width={1680}
      height={980}
      alt="Picture of the author"
    />
      </div>
    </div>
  )
}

export default Home