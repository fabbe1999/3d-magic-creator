import React from 'react';
import ThreeDElement from '../components/3DElement';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">About Qualia Studios</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Our Vision</h2>
        <p className="text-lg mb-4">
          At Qualia Studios, we're pioneering the future of generative 3D technology. Our mission is to revolutionize digital creation by merging cutting-edge AI with immersive 3D environments.
        </p>
        <p className="text-lg mb-4">
          We believe that the next frontier in computing lies in a deep understanding of three-dimensional space. By drawing inspiration from both physics and neuroscience, we're developing AI systems that can perceive, interpret, and generate 3D environments with unprecedented accuracy and creativity.
        </p>
        <p className="text-lg">
          Our goal is to enhance the intelligence of computing systems by imbuing them with a fundamental grasp of spatial relationships and physical laws. This approach not only advances AI capabilities in fields like computer vision and robotics but also opens up new possibilities in virtual reality, architectural design, and scientific simulation.
        </p>
      </section>
      
      <section>
        <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <ThreeDElement type="cube" color="#4299E1" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fabian Kerj</h3>
            <p className="text-gray-600 dark:text-gray-300">Co-founder & Chief Yoink Officer</p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <ThreeDElement type="torus" color="#ED64A6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Max Fallstrom</h3>
            <p className="text-gray-600 dark:text-gray-300">Co-founder & Chief Sheish Officer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;