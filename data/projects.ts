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
    thumbnail: '/Portfolio/images/projects/robotic-cat-thumb.png',
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
    thumbnail: '/Portfolio/images/projects/cansat-thumb.jpg',
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
    thumbnail: '/Portfolio/images/projects/medical-uav-thumb.jpg',
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
  },
  {
    id: 'smart-greenhouse',
    title: 'Smart Greenhouse Automation',
    shortDescription: 'IoT-based greenhouse monitoring and control system with automated irrigation, climate control, and plant health monitoring.',
    fullDescription: 'Developed a comprehensive smart greenhouse automation system that integrates multiple sensors for environmental monitoring and actuators for automated control. The system uses machine learning algorithms to optimize plant growth conditions and reduce water consumption while maximizing crop yield.',
    technologies: ['Arduino', 'ESP32', 'MQTT', 'Node-RED', 'InfluxDB', 'Grafana', 'Python', 'TensorFlow Lite'],
    category: 'IoT & Automation',
    thumbnail: '',
    vimeoUrl: '',
    achievements: [
      'Reduced water consumption by 40% through intelligent irrigation scheduling',
      'Implemented real-time monitoring dashboard with historical data analysis',
      'Developed ML model for plant disease detection using leaf imagery',
      'Created automated climate control system maintaining optimal growing conditions',
      'Integrated solar power system for energy-efficient operation'
    ],
    challenges: [
      'Ensuring reliable wireless communication in humid greenhouse environment',
      'Calibrating sensors for accurate readings across varying conditions',
      'Optimizing ML model for edge deployment on resource-constrained devices',
      'Designing waterproof enclosures for electronics in high-humidity environment'
    ],
    images: []
  },
  {
    id: 'robotic-arm',
    title: '6-DOF Robotic Arm Controller',
    shortDescription: 'Custom inverse kinematics solution for a 6-degree-of-freedom robotic arm with real-time trajectory planning and obstacle avoidance.',
    fullDescription: 'Designed and implemented a complete control system for a 6-DOF robotic manipulator arm. The project includes custom inverse kinematics algorithms, real-time trajectory planning with obstacle avoidance, and a user-friendly interface for manual and automated operation modes.',
    technologies: ['ROS', 'MoveIt', 'C++', 'Python', 'OpenCV', 'PCL', 'Gazebo', 'URDF', 'Arduino'],
    category: 'Robotics & Control',
    thumbnail: '',
    vimeoUrl: '',
    achievements: [
      'Implemented analytical inverse kinematics solution with multiple configuration options',
      'Developed smooth trajectory generation using quintic polynomial interpolation',
      'Created point cloud-based obstacle avoidance using depth camera input',
      'Achieved sub-millimeter repeatability in pick-and-place operations',
      'Built intuitive GUI for waypoint teaching and playback'
    ],
    challenges: [
      'Resolving singularities in the inverse kinematics solution',
      'Minimizing latency in the real-time control loop',
      'Calibrating joint encoders for accurate position feedback',
      'Implementing collision detection without sacrificing performance'
    ],
    images: []
  },
  {
    id: 'swarm-robots',
    title: 'Swarm Robotics Platform',
    shortDescription: 'Multi-robot coordination system featuring distributed algorithms for formation control, task allocation, and collective behavior.',
    fullDescription: 'Built a swarm robotics research platform consisting of multiple small mobile robots capable of coordinated behavior. The system implements various swarm intelligence algorithms including formation control, consensus-based decision making, and distributed task allocation for applications in search and rescue scenarios.',
    technologies: ['ROS2', 'micro-ROS', 'ESP32', 'Python', 'C++', 'Docker', 'Kubernetes', 'ZeroMQ'],
    category: 'Multi-Robot Systems',
    thumbnail: '',
    vimeoUrl: '',
    achievements: [
      'Developed scalable communication architecture supporting 20+ robots',
      'Implemented Reynolds flocking algorithm for natural swarm movement',
      'Created distributed consensus protocol for collective decision making',
      'Built simulation environment for testing before hardware deployment',
      'Achieved robust formation control with dynamic obstacle avoidance'
    ],
    challenges: [
      'Managing wireless network congestion with multiple robots',
      'Ensuring fault tolerance when individual robots fail',
      'Synchronizing clocks across distributed system for coordinated actions',
      'Balancing computational load between central server and edge robots'
    ],
    images: []
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
