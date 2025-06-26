// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, desc, link, image, tags = [] }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
    {image && (
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
    )}
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{desc}</p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-medium hover:underline"
        >
          View Project →
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
