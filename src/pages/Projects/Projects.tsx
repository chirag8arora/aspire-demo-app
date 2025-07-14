import React, { useState, useEffect } from 'react';
import { CardContainer } from '../../components/CardContainer/CardContainer';
import { SAMPLE_CARDS } from '../../utils/constants';
import { Card } from '../../types';

export const Projects: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [filteredCards, setFilteredCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setCards(SAMPLE_CARDS);
      setFilteredCards(SAMPLE_CARDS);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = cards;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        card =>
          card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          card.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by tag
    if (selectedTag !== 'all') {
      filtered = filtered.filter(card =>
        card.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
      );
    }

    setFilteredCards(filtered);
  }, [cards, searchTerm, selectedTag]);

  const handleCardClick = (card: Card) => {
    console.log('Card clicked:', card);
  };

  const allTags = Array.from(
    new Set(cards.flatMap(card => card.tags))
  ).sort();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600 mt-2">Manage and organize your projects.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          + New Project
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-soft">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Search Projects
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search by title or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Tag Filter */}
          <div className="md:w-48">
            <label htmlFor="tag-filter" className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Tag
            </label>
            <select
              id="tag-filter"
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Tags</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredCards.length} of {cards.length} projects
        </div>
      </div>

      {/* Projects Grid */}
      <CardContainer 
        cards={filteredCards} 
        onCardClick={handleCardClick} 
        loading={loading} 
      />
    </div>
  );
}; 