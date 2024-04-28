"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section className="lg:py-20">
        <div className="grid  grid-cols-1 sm:grid-cols-12">
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold">
             <span className="text-transparent bg-clip-text bg-gradient-to-r  from-purple-400 to-pink-600">
                Hello, I'm{" "} 
              </span> 
              <br></br>
              <TypeAnimation
                sequence={[
                  'Reshma',
                  1000, 
                  'a Web Developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] sm:text-lg lg:text-xl mb-6">
              Crafting immersive digital experience with precision and passion.
            </p>
            <div>
              <Link
                href="/#contact"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-slate-200 text-white"
              >
                Hire Me
              </Link>
              <Link 
                href="https://drive.google.com/file/d/1fEN3bl8yoe-gcZHS4eYxmQ1cwEu9hFG4/view?usp=drivesdk" 
                target="_blank"
                className=" inline-block w-full px-1 py-1 sm:w-fit rounded-full  bg-gradient-to-br from-blue-500 via-purple-500  to-pink-500 hover:bg-slate-800 text-white mt-3">
                <span 
                  className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
                >
                  Download CV
                </span> 
              </Link>
            </div>
          </div>
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image 
                src="/images/hero-image.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
              />
            </div>
            
          </div>
        </div>
      
    </section>
  )
}

export default HeroSection;
