'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <div className="flex items-center justify-center h-full bg-neutral-100">
              <span className="text-neutral-400 text-lg">Profile Photo Coming Soon</span>
            </div>
            {/* When you have a profile photo, uncomment this:
            <Image
              src="/images/profile.jpg"
              alt="Bilal Antaki"
              fill
              className="object-cover"
            />
            */}
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Software Robotics Engineer
            </h3>
            <p className="text-neutral-600 mb-4 leading-relaxed">
              I am a passionate robotics engineer with expertise in designing, simulating,
              developing, and deploying autonomous robotic systems. My work focuses on leveraging
              ROS2 environments with modern C++ and Python to create intelligent, efficient, and
              robust robotic solutions.
            </p>
            <p className="text-neutral-600 mb-4 leading-relaxed">
              With extensive experience in embedded systems, computer vision, SLAM, and navigation,
              I have led multiple successful projects ranging from autonomous mobile robots to
              advanced avionics systems and UAV design. I thrive on solving complex engineering
              challenges and bringing innovative robotics concepts to life.
            </p>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              My technical stack includes SolidWorks, Gazebo, STM32CubeIDE, KiCAD, MATLAB/Simulink,
              and various embedded platforms. I am committed to continuous learning and staying at
              the forefront of robotics technology.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h4 className="font-semibold text-primary mb-1">Focus Areas</h4>
                <p className="text-sm text-neutral-600">Autonomous Systems, SLAM, Navigation</p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h4 className="font-semibold text-primary mb-1">Specialization</h4>
                <p className="text-sm text-neutral-600">ROS2, C++, Python, Embedded Systems</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
