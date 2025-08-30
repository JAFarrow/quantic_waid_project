import React from 'react';
import antonio from '../assets/antonio.jpeg'
import maria from '../assets/maria.jpeg'
import interior from '../assets/gallery-cafe-interior.webp'

const AboutUs = () => {
  return (
    <div className="about-us-page" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)', padding: '40px 20px', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5em', color: 'var(--color-secondary)', marginBottom: '10px' }}>About Café Fausse</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text)', maxWidth: '800px', margin: '0 auto' }}>
          Discover the story behind our passion for exquisite Italian cuisine with a modern twist.
        </p>
      </header>

      <section className="history-section" style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-secondary)', textAlign: 'center', marginBottom: '20px' }}>Our History</h2>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'justify' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
            Founded in 2010 by Chef Antonio Rossi and restaurateur Maria Lopez, Café Fausse blends traditional Italian flavors with modern culinary innovation. Our mission is to provide an unforgettable dining experience that reflects both quality and creativity.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
            Starting as a small bistro in the heart of downtown, Café Fausse quickly gained a reputation for its authentic yet inventive dishes. Over the years, we've expanded our menu to include seasonal specials that highlight the freshest ingredients, while staying true to our Italian roots. Today, we stand as a beloved destination for food enthusiasts seeking a perfect blend of tradition and modernity.
          </p>
          <img 
            src={interior}
            alt="Historical photo of Café Fausse" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              maxHeight: '400px', 
              objectFit: 'cover', 
              borderRadius: '8px', 
              marginBottom: '20px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
            }} 
          />
        </div>
      </section>

      <section className="founders-section" style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-secondary)', textAlign: 'center', marginBottom: '20px' }}>Meet Our Founders</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          <div className="founder-bio" style={{ flex: '1 1 400px', backgroundColor: 'var(--color-surface)', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--color-secondary)', marginBottom: '10px', textAlign: 'center' }}>Chef Antonio Rossi</h3>
            <img 
              src={antonio}
              alt="Photo of Chef Antonio Rossi" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                maxHeight: '400px', 
                objectFit: 'contain', 
                borderRadius: '4px', 
                marginBottom: '15px' 
              }} 
            />
            <p style={{ fontSize: '1rem' }}>
              Born in the picturesque hills of Tuscany, Italy, Chef Antonio Rossi discovered his passion for cooking at a young age in his family's kitchen. After training at renowned culinary institutes in Florence and working in Michelin-starred restaurants across Europe, Antonio brought his expertise to the United States. With a deep respect for traditional Italian techniques, he innovates by incorporating global influences, creating dishes that are both comforting and exciting.
            </p>
          </div>
          <div className="founder-bio" style={{ flex: '1 1 400px', backgroundColor: 'var(--color-surface)', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--color-secondary)', marginBottom: '10px', textAlign: 'center' }}>Maria Lopez</h3>
            <img 
              src={maria}
              alt="Photo of Maria Lopez" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                maxHeight: '400px', 
                objectFit: 'contain', 
                borderRadius: '4px', 
                marginBottom: '15px' 
              }} 
            />
            <p style={{ fontSize: '1rem' }}>
              Maria Lopez, a seasoned restaurateur with a background in hospitality management, hails from a family of entrepreneurs in Spain. After earning her degree in business from the University of Madrid, she managed several successful eateries in Europe before partnering with Antonio. Maria's vision focuses on creating warm, inviting spaces where guests feel like family, ensuring every visit to Café Fausse is memorable through impeccable service and ambiance.
            </p>
          </div>
        </div>
      </section>

      <section className="commitment-section" style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-secondary)', textAlign: 'center', marginBottom: '20px' }}>Our Commitment</h2>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'justify' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
            At Café Fausse, we are dedicated to providing an unforgettable dining experience. Our commitment extends to sourcing the finest, locally grown ingredients to ensure freshness and support our community farmers. We prioritize sustainability by partnering with organic suppliers and minimizing waste in our operations.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
            Excellent food is at the heart of what we do—each dish is crafted with care, using high-quality ingredients and innovative techniques to deliver flavors that delight the senses. Whether it's our signature pasta dishes or seasonal desserts, we aim to create moments of joy and connection through every meal.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;