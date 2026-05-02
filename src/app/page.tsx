/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Destination mini cards - editorial style */
.dest-card {
  background: #faf5e9;
  border: 1px solid #2d2416;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: block;
}

.dest-card:hover {
  background: #f5ede0;
  border-color: #a68d5c;
  transform: translateY(-2px);
}

.dest-name {
  font-family: var(--font-playfair), serif;
  font-size: 1.1rem;
  color: #1e1408;
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.dest-cost {
  font-family: var(--font-garamond), serif;
  font-size: 0.875rem;
  color: #4a3f2f;
  margin-bottom: 0.5rem;
}

.dest-tag {
  font-family: var(--font-garamond), serif;
  font-size: 0.75rem;
  color: #a68d5c;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-top: 1px solid #c9b896;
  padding-top: 0.5rem;
}

/* Full destination cards */
.dest-cards-full {
  max-width: 1200px;
  margin: 2rem auto;
  display: grid;
  gap: 2rem;
  padding: 0 1rem;
}

.dest-card-full {
  background: #faf5e9;
  border: 2px solid #2d2416;
  overflow: hidden;
  scroll-margin-top: 100px; /* Offset for fixed header */
}

.dest-card-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.dest-card-content {
  padding: 2rem;
}

.dest-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #c9b896;
}

.dest-card-name {
  font-family: var(--font-playfair), serif;
  font-size: 2rem;
  color: #1e1408;
  margin: 0 0 0.25rem 0;
}

.dest-card-cost {
  font-family: var(--font-garamond), serif;
  font-size: 1rem;
  color: #6b5d47;
}

.dest-card-badge {
  font-family: var(--font-garamond), serif;
  font-size: 0.75rem;
  color: #a68d5c;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: #f5ede0;
  padding: 0.5rem 1rem;
  border: 1px solid #c9b896;
}

.dest-card-desc {
  font-family: var(--font-garamond), serif;
  font-size: 1rem;
  color: #4a3f2f;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.dest-card-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.75rem;
}

.dest-highlight {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-family: var(--font-garamond), serif;
  font-size: 0.875rem;
  color: #4a3f2f;
}

.dest-bullet {
  color: #a68d5c;
  font-size: 0.75rem;
  margin-top: 0.125rem;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .dest-card-name {
    font-size: 1.5rem;
  }
  
  .dest-card-highlights {
    grid-template-columns: 1fr;
  }
}
