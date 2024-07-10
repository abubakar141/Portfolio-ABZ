"use client";
import React from 'react'

const AboutMe = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="/your-photo.jpg" 
              alt="Your Name" 
              className="rounded-full mx-auto w-48 h-48 md:w-64 md:h-64"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg text-gray-700 mb-4">
              Hello! My name is Abu Bakar. I am a frontend developer with a passion for creating beautiful and functional web applications. I love to explore new technologies and continuously improve my skills.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              I have experience in building responsive and interactive websites using Next.js, React, and Tailwind CSS. Currently, I am learning Python and participating in the PIAIC program to further enhance my development skills.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding, I enjoy reading books, playing video games, and spending time with my family. I am excited to connect with like-minded individuals and work on exciting projects. Let's build something great together!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
