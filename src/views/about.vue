<template>
  <div id="about-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <h1 class="display-4 text-center">About Kernel Runner & Trainer</h1>
      <p class="lead text-center">Expert training and care for your beloved canine companions.</p>
    </section>

    <!-- Content Section -->
    <section class="container-fluid content-section">
      <div class="row">
        <div class="col-md-6">
          <h2>Our Story</h2>
          <p>
            At Kernel Runner & Trainer, we believe that every dog deserves the best care, training, and companionship.
            With years of experience in dog training and breeding, we have helped countless dog owners raise well-mannered and happy pets.
          </p>
        </div>
        <div class="col-md-6">
          <img src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?w=400&h=300&fit=crops" class="img-fluid rounded" alt="Dog training">
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-6">
          <img src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?w=400&h=300&fit=crops" class="img-fluid rounded" alt="Dog and trainer">
        </div>
        <div class="col-md-6">
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Professional Training:</strong> We specialize in obedience training, agility, and behavioral correction.</li>
            <li><strong>Healthy Puppies:</strong> Our breeding program ensures happy and well-socialized puppies.</li>
            <li><strong>Personalized Care:</strong> Each dog receives tailored attention and training suited to their needs.</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutPage"
};
</script>

<style scoped>
/* Ensure the body, html, and #app take full height */
html, body, #app, #about-page {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

/* Hero Section Styling */
.hero-section {
  padding: 80px 0;
  background: url('https://source.unsplash.com/1600x900/?dogs,training') center/cover;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
}

/* Content Section Styling */
.content-section {
  flex-grow: 1;
  padding: 60px 15px;
  background-color: #f8f9fa;
}

/* Footer Styling */
.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 30px 15px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  .hero-section p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 1.5rem;
  }
  .hero-section p {
    font-size: 0.9rem;
  }
}
</style>
