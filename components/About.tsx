'use client';

import { motion } from 'framer-motion';

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

        {/* Video Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="relative w-full aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-neutral-900">
            {/* Placeholder for video - replace src with your video */}
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-800">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-neutral-400 text-lg">Self-Introduction Video Coming Soon</span>
              </div>
            </div>
            {/* When you have a video, uncomment this and add your video source:
            <video
              className="w-full h-full object-cover"
              controls
              poster="/images/video-poster.jpg"
            >
              <source src="/videos/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            */}
          </div>
        </motion.div>

        {/* About Me Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4 text-neutral-600 leading-relaxed text-justify">
            <p>
              I am a passionate robotics engineer with expertise in designing, simulating,
              developing, and deploying autonomous robotic systems. My work focuses on leveraging
              ROS2 environments with modern C++ and Python to create intelligent, efficient, and
              robust robotic solutions.
            </p>
            <p>
              With extensive experience in embedded systems, computer vision, SLAM, and navigation,
              I have led multiple successful projects ranging from autonomous mobile robots to
              advanced avionics systems and UAV design. I thrive on solving complex engineering
              challenges and bringing innovative robotics concepts to life.
            </p>
            <p>
              My technical stack includes SolidWorks, Gazebo, STM32CubeIDE, KiCAD, MATLAB/Simulink,
              and various embedded platforms. I am committed to continuous learning and staying at
              the forefront of robotics technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
