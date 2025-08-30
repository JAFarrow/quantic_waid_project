import React from 'react';
import main from '../assets/menu-ribeye-steak.webp'
import starter from '../assets/menu-starters.jpg'
import dessert from '../assets/menu-desserts.jpg'
import beverages from '../assets/menu-beverages.jpg'

const Menu = () => {
  return (
    <main style={{
      backgroundColor: 'var(--color-background)',
      color: 'var(--color-text)',
      padding: '2rem',
      minHeight: '100vh'
    }}>
      <style>
        {`
          .menu-section {
            display: flex;
            align-items: flex-start;
            margin-bottom: 3rem;
            gap: 2rem;
          }

          @media (max-width: 768px) {
            .menu-section {
              flex-direction: column;
              align-items: center;
            }

            .menu-section img {
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
      }}>Our Menu</h1>
      
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <section className="menu-section">
          <img 
            src={starter}
            alt="Appetizing starters display" 
            style={{
              width: '300px',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }} 
          />
          <div style={{ flex: 1 }}>
            <h2 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>Starters</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Bruschetta</strong> – Fresh tomatoes, basil, olive oil, and toasted baguette slices. <em>$8.50</em>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Caesar Salad</strong> – Crisp romaine with homemade Caesar dressing. <em>$9.00</em>
              </li>
            </ul>
          </div>
        </section>
        
        <section className="menu-section">
          <img 
            src={main} 
            alt="Delicious main courses presentation" 
            style={{
              width: '300px',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }} 
          />
          <div style={{ flex: 1 }}>
            <h2 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>Main Courses</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Grilled Salmon</strong> – Served with lemon butter sauce and seasonal vegetables. <em>$22.00</em>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Ribeye Steak</strong> – 12 oz prime cut with garlic mashed potatoes. <em>$28.00</em>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Vegetable Risotto</strong> – Creamy Arborio rice with wild mushrooms. <em>$18.00</em>
              </li>
            </ul>
          </div>
        </section>
        
        <section className="menu-section">
          <img 
            src={dessert} 
            alt="Sweet desserts assortment" 
            style={{
              width: '300px',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }} 
          />
          <div style={{ flex: 1 }}>
            <h2 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>Desserts</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Tiramisu</strong> – Classic Italian dessert with mascarpone. <em>$7.50</em>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Cheesecake</strong> – Creamy cheesecake with berry compote. <em>$7.00</em>
              </li>
            </ul>
          </div>
        </section>
        
        <section className="menu-section">
          <img 
            src={beverages}
            alt="Refreshing beverages selection" 
            style={{
              width: '300px',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }} 
          />
          <div style={{ flex: 1 }}>
            <h2 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>Beverages</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Red Wine (Glass)</strong> – A selection of Italian reds. <em>$10.00</em>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>White Wine (Glass)</strong> – Crisp and refreshing. <em>$9.00</em>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Craft Beer</strong> – Local artisan brews. <em>$6.00</em>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Espresso</strong> – Strong and aromatic. <em>$3.00</em>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Menu;