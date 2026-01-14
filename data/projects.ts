export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  category: string;
  thumbnail: string;
  vimeoUrl?: string;
  achievements: string[];
  challenges: string[];
  images?: string[];
}

export const projects: Project[] = [
  {
    id: 'robotic-cat',
    title: 'Autonomous Mechano Robotic Cat',
    shortDescription: 'Fully autonomous robot inspired by Tom and Jerry, featuring computer vision, SLAM, navigation, and behavior trees.',
    fullDescription: 'Designed, simulated, and built a fully autonomous robotic cat inspired by the classic Tom and Jerry series. This project showcases advanced robotics integration including real-time control systems, autonomous navigation, and intelligent behavior planning.',
    technologies: ['ROS2', 'Jetson Nano', 'ESP32 RTOS', 'Computer Vision', 'SLAM', 'Navigation Stack', 'Behavior Trees', 'Python', 'C++'],
    category: 'Autonomous Robotics',
    thumbnail: '/images/projects/robotic-cat-thumb.png',
    vimeoUrl: '',
    achievements: [
      'Successfully integrated ROS2 on Jetson Nano for high-level decision making',
      'Implemented ESP32 RTOS for real-time motor control and sensor fusion',
      'Developed custom behavior tree system for autonomous decision-making',
      'Achieved robust SLAM performance in dynamic environments',
      'Created efficient navigation stack for obstacle avoidance'
    ],
    challenges: [
      'Synchronizing real-time control on ESP32 with ROS2 planning layer',
      'Optimizing computer vision algorithms for Jetson Nano resource constraints',
      'Designing mechanical structure for stable locomotion',
      'Implementing robust sensor fusion for accurate localization'
    ],
    images: []
  },
  {
    id: 'cansat-avionics',
    title: 'Multi-Spectral Mechanical Filtering Module',
    shortDescription: 'TeknoFest 2025 CanSat Competition - Advanced avionics system with STM32F4 and Raspberry Pi Zero.',
    fullDescription: 'Led the development of a sophisticated avionics module for the TeknoFest 2025 CanSat Competition. Managed three engineering teams and designed a robust schematic integrating STM32F4 microcontroller with Raspberry Pi Zero for enhanced system stability and multi-spectral data acquisition.',
    technologies: ['STM32F4', 'Raspberry Pi Zero', 'KiCAD', 'STM32CubeIDE', 'Embedded C', 'Python', 'Sensor Fusion', 'PCB Design'],
    category: 'Embedded Systems & Avionics',
    thumbnail: '/images/projects/cansat-thumb.jpg',
    vimeoUrl: '',
    achievements: [
      'Successfully managed 3 cross-functional engineering teams',
      'Designed complete avionics schematic with improved system stability',
      'Integrated multi-spectral filtering capability for enhanced data collection',
      'Implemented efficient communication protocol between STM32F4 and Raspberry Pi',
      'Optimized power consumption for extended flight duration'
    ],
    challenges: [
      'Coordinating multiple teams with different technical backgrounds',
      'Balancing performance requirements with strict weight constraints',
      'Ensuring reliable communication in high-vibration environment',
      'Meeting competition deadlines while maintaining quality standards'
    ],
    images: []
  },
  {
    id: 'medical-uav',
    title: 'Medical Supply Delivery UAV',
    shortDescription: 'Advanced UAV design with custom flight controller, Kalman filtering, and optimized lightweight structure.',
    fullDescription: 'Designed and developed an unmanned aerial vehicle specifically for medical supply delivery in remote areas. Created a secondary flight controller with advanced Kalman filters and flight dynamics control, while optimizing the structural design to significantly reduce weight.',
    technologies: ['Flight Controller Design', 'Kalman Filters', 'Flight Dynamics', 'SolidWorks', 'Fusion360', 'Nylon 12', 'Glass Fiber', 'MATLAB', 'Simulink', 'C++'],
    category: 'UAV Design & Control',
    thumbnail: '/images/projects/medical-uav-thumb.jpg',
    vimeoUrl: '',
    achievements: [
      'Designed custom secondary flight controller for enhanced stability',
      'Implemented advanced Kalman filtering for accurate state estimation',
      'Reduced takeoff weight by 7% through material optimization',
      'Successfully migrated fuselage from Aluminum to Nylon 12 with glass fiber',
      'Improved flight dynamics control algorithms for better performance',
      'Enhanced payload capacity while maintaining structural integrity'
    ],
    challenges: [
      'Balancing structural strength with weight reduction requirements',
      'Tuning Kalman filter parameters for optimal performance',
      'Validating composite material properties for aerospace application',
      'Integrating secondary flight controller with primary autopilot system'
    ],
    images: []
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
