import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';
import { Card as CardType } from '../../types';

const mockCard: CardType = {
  id: '1',
  title: 'Test Project',
  description: 'This is a test project description',
  image: 'https://example.com/image.jpg',
  tags: ['React', 'TypeScript'],
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-02'),
};

const mockOnClick = jest.fn();

describe('Card Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders card with title and description', () => {
    render(<Card card={mockCard} onClick={mockOnClick} />);
    
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
  });

  it('renders card image when provided', () => {
    render(<Card card={mockCard} onClick={mockOnClick} />);
    
    const image = screen.getByAltText('Test Project');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  it('renders tags correctly', () => {
    render(<Card card={mockCard} onClick={mockOnClick} />);
    
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('calls onClick when card is clicked', () => {
    render(<Card card={mockCard} onClick={mockOnClick} />);
    
    const card = screen.getByRole('button', { hidden: true });
    fireEvent.click(card);
    
    expect(mockOnClick).toHaveBeenCalledWith(mockCard);
  });

  it('renders without image when image is not provided', () => {
    const cardWithoutImage = { ...mockCard, image: undefined };
    render(<Card card={cardWithoutImage} onClick={mockOnClick} />);
    
    expect(screen.queryByAltText('Test Project')).not.toBeInTheDocument();
  });
}); 