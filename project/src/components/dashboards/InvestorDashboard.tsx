import React, { useState } from 'react';
import { Project } from '../../types';
import { Search, Filter, Star } from 'lucide-react';

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Eco-Friendly Water Purifier',
    description: 'Revolutionary water purification system using sustainable materials',
    seekerId: '1',
    type: 'Green Tech',
    fundingGoal: 50000,
    currentFunding: 25000,
    imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d',
    createdAt: new Date(),
  },
  // Add more mock projects as needed
];

export default function InvestorDashboard() {
  const [projects, setProjects] = useState(mockProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Investment Opportunities</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="all">All Projects</option>
            <option value="tech">Technology</option>
            <option value="green">Green Tech</option>
            <option value="health">Healthcare</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">Type: {project.type}</span>
                <span className="text-sm font-medium text-indigo-600">
                  ${project.currentFunding.toLocaleString()} / ${project.fundingGoal.toLocaleString()}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{
                    width: `${(project.currentFunding / project.fundingGoal) * 100}%`,
                  }}
                />
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                >
                  View Details
                </button>
                <button className="text-gray-500 hover:text-yellow-500 transition-colors duration-300">
                  <Star className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600 mb-4">{selectedProject.description}</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-semibold text-gray-900">Funding Goal</h4>
                <p className="text-gray-600">${selectedProject.fundingGoal.toLocaleString()}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Current Funding</h4>
                <p className="text-gray-600">${selectedProject.currentFunding.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Invest Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}