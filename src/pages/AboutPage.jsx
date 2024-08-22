import React from 'react';
import ThreeDElement from '../components/3DElement';
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">About Qualia Studios</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Our Vision</h2>
        <p className="text-lg mb-4">
          At Qualia Studios, we're developing tools for 3D content creation. Our goal is to make it easier for everyone to bring their ideas to life in three dimensions.
        </p>
        <p className="text-lg mb-4">
          We're working on combining AI with 3D modeling to streamline the creation process. Our focus is on making intuitive tools that both beginners and professionals can use effectively.
        </p>
        <p className="text-lg">
          We believe that by simplifying 3D creation, we can open up new possibilities in fields like design, education, and entertainment.
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <ThreeDElement type="cube" color="#4299E1" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Max Fallstrom</h3>
            <p className="text-gray-600 dark:text-gray-300">Chief Yoink Officer</p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <ThreeDElement type="torus" color="#ED64A6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fabian Kerj</h3>
            <p className="text-gray-600 dark:text-gray-300">Chief Sheish Officer</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h3 className="text-2xl font-semibold mb-4">Want to work on the future of 3D?</h3>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
          Join Team
        </Button>
      </section>
    </div>
  );
};

export default AboutPage;