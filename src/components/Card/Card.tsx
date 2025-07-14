import React from 'react';
import { CardProps } from '@/types';

export const Card: React.FC<CardProps> = ({ card, onClick }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  return (
    <div
      onClick={() => onClick(card)}
      className="bg-white rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer group overflow-hidden"
    >
      {/* Card Image */}
      {card.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
        </div>
      )}

      {/* Card Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {card.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {card.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Created: {formatDate(card.createdAt)}</span>
          <span>Updated: {formatDate(card.updatedAt)}</span>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300 pointer-events-none" />
    </div>
  );
}; 