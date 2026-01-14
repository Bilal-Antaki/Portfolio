export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Robotics & Simulation',
    skills: ['ROS2', 'Gazebo', 'SLAM', 'Navigation Stack', 'Behavior Trees', 'Computer Vision']
  },
  {
    category: 'Programming Languages',
    skills: ['C++', 'Python', 'Embedded C', 'MATLAB']
  },
  {
    category: 'CAD & Design',
    skills: ['SolidWorks', 'Fusion360', 'KiCAD', 'PCB Design']
  },
  {
    category: 'Embedded Systems',
    skills: ['STM32CubeIDE', 'ESP32 RTOS', 'Jetson Nano', 'Raspberry Pi', 'STM32F4']
  },
  {
    category: 'Control Systems',
    skills: ['Simulink', 'Kalman Filters', 'Flight Dynamics', 'PID Control', 'Sensor Fusion']
  },
  {
    category: 'Operating Systems & Tools',
    skills: ['Linux', 'Git', 'Docker', 'VS Code']
  }
];
