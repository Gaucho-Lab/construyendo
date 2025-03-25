import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import AnimatedElement from '../ui/AnimatedElement';
import { Project } from '../../types';

// Sample projects data
const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Office Complex',
    description: 'A 12-story commercial office building with modern amenities and sustainable design.',
    category: 'Commercial',
    image: '/assets/images/projects/project1.jpg',
    completed: 'June 2023',
    location: 'New York, NY',
  },
  {
    id: 2,
    title: 'Luxury Residential Tower',
    description: 'A high-end residential tower with 200+ units featuring premium finishes and facilities.',
    category: 'Residential',
    image: '/assets/images/projects/project2.jpg',
    completed: 'March 2023',
    location: 'Miami, FL',
  },
  {
    id: 3,
    title: 'Industrial Manufacturing Facility',
    description: 'A state-of-the-art manufacturing facility with optimized workflow and energy efficiency.',
    category: 'Industrial',
    image: '/assets/images/projects/project3.jpg',
    completed: 'November 2022',
    location: 'Chicago, IL',
  },
  {
    id: 4,
    title: 'Shopping Mall Renovation',
    description: 'Complete renovation of an existing shopping mall with modernized spaces and improved traffic flow.',
    category: 'Commercial',
    image: '/assets/images/projects/project4.jpg',
    completed: 'August 2023',
    location: 'Los Angeles, CA',
  },
  {
    id: 5,
    title: 'Healthcare Medical Center',
    description: 'A specialized medical facility with state-of-the-art equipment and patient-centered design.',
    category: 'Healthcare',
    image: '/assets/images/projects/project5.jpg',
    completed: 'January 2023',
    location: 'Boston, MA',
  },
  {
    id: 6,
    title: 'Eco-Friendly Residential Community',
    description: 'A sustainable residential development with energy-efficient homes and community spaces.',
    category: 'Residential',
    image: '/assets/images/projects/project6.jpg',
    completed: 'April 2023',
    location: 'Portland, OR',
  },
];

const ProjectsShowcase = () => {
  const categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Healthcare'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Portfolio"
          title="Featured Projects"
          description="Explore our diverse portfolio of completed projects, showcasing our expertise across various construction sectors."
          center
        />

        {/* Category Filter */}
        <AnimatedElement animation="fade-in" className="flex justify-center mt-8 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedElement>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-lg cursor-pointer shadow-md">
                  {/* Project Image */}
                  <div className="h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay with brief info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300">
                    <span className="text-secondary text-sm font-semibold mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description.substring(0, 80)}...
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="md:w-1/2">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 overflow-y-auto">
                  <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {selectedProject.category}
                  </span>
                  <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-700">Location</h4>
                      <p>{selectedProject.location}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">Completed</h4>
                      <p>{selectedProject.completed}</p>
                    </div>
                  </div>
                  
                  <button
                    className="mt-4 bg-secondary text-white py-2 px-4 rounded-md hover:bg-secondary/90 transition-colors"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsShowcase;