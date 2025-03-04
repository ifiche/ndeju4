<template>
  <div>
    <!-- Hero Section -->
    <div class="hero-section text-center">
      <h1 class="display-3">The Best Care for Your Best Friend</h1>
      <p class="lead">Premium dog training, breeding, and boarding services</p>
      <router-link to="/available" class="btn btn-custom">View Available Dogs</router-link>
    </div>

    <!-- Dog Gallery Section -->
    <div class="container dog-gallery text-center">
      <h2 class="mb-4">Meet Our Amazing Dogs</h2>
      <div class="row">
        <div class="col-md-4" v-for="n in 9" :key="n">
          <img 
            src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?w=400&h=300&fit=crop" 
            class="dog-image" 
            alt="Dog"
          />
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="container feature-section text-center">
      <h2 class="mb-4">Why Choose Us?</h2>
      <div class="row">
        <div class="col-md-4">
          <i class="fas fa-dog fa-3x text-warning"></i>
          <h4 class="mt-3">Professional Training</h4>
          <p>Expert training to make your dog well-mannered and obedient.</p>
        </div>
        <div class="col-md-4">
          <i class="fas fa-heart fa-3x text-danger"></i>
          <h4 class="mt-3">Loving Environment</h4>
          <p>We ensure a safe and comfortable space for all dogs.</p>
        </div>
        <div class="col-md-4">
          <i class="fas fa-paw fa-3x text-primary"></i>
          <h4 class="mt-3">Healthy & Happy Puppies</h4>
          <p>Our puppies are raised with love, care, and top-quality nutrition.</p>
        </div>
      </div>
    </div>

    <!-- Testimonials Section -->
    <div class="container mt-5">
      <h2 class="text-center">What Our Clients Say</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="testimonial-card">
            <p>"Fantastic service! My dog is now well-trained and happy."</p>
            <footer class="blockquote-footer">John Doe</footer>
          </div>
        </div>
        <div class="col-md-4">
          <div class="testimonial-card">
            <p>"Highly recommended! Amazing training programs."</p>
            <footer class="blockquote-footer">Jane Smith</footer>
          </div>
        </div>
        <div class="col-md-4">
          <div class="testimonial-card">
            <p>"Our puppy is healthy, friendly, and well-behaved!"</p>
            <footer class="blockquote-footer">Mike Johnson</footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView"
};
</script>

<style scoped>
/* Global Dog Background */
body {
  background: url('https://source.unsplash.com/1600x900/?dog,puppy') no-repeat center center fixed;
  background-size: cover;
  font-family: Arial, sans-serif;
  margin: 0;
}

/* Hero Section */
.hero-section {
  padding: 180px 0 100px;
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
}
.hero-section h1,
.hero-section p {
  z-index: 1;
}
.btn-custom {
  background-color: #ff9800;
  border: none;
  padding: 15px 25px;
  font-size: 20px;
  transition: 0.3s;
}
.btn-custom:hover {
  background-color: #e68900;
}

/* Dog Gallery Section */
.dog-gallery {
  padding: 50px 0;
  background: rgba(255, 255, 255, 0.8);
}
.dog-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

/* Feature and Testimonial Sections */
.feature-section {
  padding: 80px 0;
  background: rgba(255, 243, 224, 0.8);
}
.testimonial-card {
  margin-bottom: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  background: #f8f9fa;
}

/* Footer */
.footer {
  background: #333;
  color: white;
  padding: 30px 0;
  text-align: center;
}
</style>
