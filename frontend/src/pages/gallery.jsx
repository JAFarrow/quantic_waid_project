import React, { useState } from 'react';
import interior1 from '../assets/gallery-cafe-interior.webp';
import interior2 from '../assets/home-cafe-fausse.webp';
import dish1 from '../assets/menu-ribeye-steak.webp'
import dish2 from '../assets/menu-starters.jpg'
import specialEvent from '../assets/gallery-special-event.webp'
import behindTheScenes from '../assets/gallery-behind-the-scenes.jpg'

// Placeholder image URLs (replace with actual high-resolution images)
const images = [
  // Interior ambiance
  { src: interior1, alt: 'Interior Ambiance 1', category: 'interior' },
  { src: interior2, alt: 'Interior Ambiance 2', category: 'interior' },
  // Dishes from the menu
  { src: dish1, alt: 'Dish 1', category: 'dishes' },
  { src: dish2, alt: 'Dish 2', category: 'dishes' },
  // Special events and behind-the-scenes
  { src: specialEvent , alt: 'Event 1', category: 'events' },
  { src: behindTheScenes , alt: 'Behind-the-Scenes 1', category: 'events' },
];

const awards = [
  'Culinary Excellence Award – 2022',
  'Restaurant of the Year – 2023',
  'Best Fine Dining Experience – Foodie Magazine, 2023',
];

const reviews = [
  { text: '“Exceptional ambiance and unforgettable flavors.”', source: 'Gourmet Review' },
  { text: '“A must-visit restaurant for food enthusiasts.”', source: 'The Daily Bite' },
];

const categories = {
  interior: 'Interior Ambiance',
  dishes: 'Dishes from the Menu',
  events: 'Special Events and Sneak Peeks',
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const groupedImages = images.reduce((acc, image) => {
    if (!acc[image.category]) {
      acc[image.category] = [];
    }
    acc[image.category].push(image);
    return acc;
  }, {});

  return (
    <main style={{
      backgroundColor: 'var(--color-background)',
      color: 'var(--color-text)',
      padding: '2rem',
      minHeight: '100vh'
    }}>
      <style>
        {`
          .gallery-section {
            margin-bottom: 3rem;
          }

          .image-container {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            justify-content: center;
          }

          .gallery-image {
            width: 300px;
            height: 200px;
            object-fit: cover;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: transform 0.3s;
          }

          .gallery-image:hover {
            transform: scale(1.05);
          }

          .awards-section {
            display: flex;
            align-items: flex-start;
            margin-bottom: 3rem;
            gap: 2rem;
          }

          .awards-column {
            flex: 1;
          }

          .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }

          .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
          }

          .enlarged-image {
            max-width: 100%;
            max-height: 80vh;
            border-radius: 8px;
          }

          .close-button {
            position: absolute;
            top: -20px;
            right: -20px;
            background-color: var(--color-primary);
            color: var(--color-surface);
            border: none;
            font-size: 2rem;
            cursor: pointer;
            padding: 5px 10px;
            border-radius: 50%;
          }

          @media (max-width: 768px) {
            .awards-section {
              flex-direction: column;
              align-items: center;
            }

            .gallery-image {
              width: 100%;
              max-width: 300px;
              height: auto;
            }
          }
        `}
      </style>
      <h1 style={{
        color: 'var(--color-secondary)',
        textAlign: 'center',
        marginBottom: '2rem',
        fontSize: '2.5em'
      }}>Gallery</h1>
      
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {Object.keys(groupedImages).map((category) => (
          <section key={category} className="gallery-section">
            <h2 style={{ color: 'var(--color-secondary)', marginBottom: '1rem', textAlign: 'center' }}>{categories[category]}</h2>
            <div className="image-container">
              {groupedImages[category].map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                  onClick={() => openLightbox(image)}
                />
              ))}
            </div>
          </section>
        ))}
        
        <section className="awards-section">
          <div className="awards-column">
            <h2 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>Awards</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {awards.map((award, index) => (
                <li key={index} style={{ marginBottom: '1rem' }}>
                  <strong>{award}</strong>
                </li>
              ))}
            </ul>
          </div>
          <div className="awards-column">
            <h2 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>Customer Reviews</h2>
            {reviews.map((review, index) => (
              <blockquote key={index} style={{ marginBottom: '1rem', fontStyle: 'italic' }}>
                <p>{review.text}</p>
                <cite>– {review.source}</cite>
              </blockquote>
            ))}
          </div>
        </section>
      </div>
      
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} className="enlarged-image" />
            <button className="close-button" onClick={closeLightbox}>×</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;