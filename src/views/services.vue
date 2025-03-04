<template>
  <div>
    

    <div class="hero-section">
      <h1 class="display-4">Our Services</h1>
      <p class="lead">Expert training and care for your beloved dogs.</p>
    </div>

    <div class="container services-section">
      <h2 class="text-center">What We Offer</h2>
      <ul class="list-group mt-4">
        <li class="list-group-item"><i class="fas fa-dog"></i> Puppy Socialization</li>
        <li class="list-group-item"><i class="fas fa-bone"></i> Basic Obedience Training</li>
        <li class="list-group-item"><i class="fas fa-paw"></i> Advanced Protection Training</li>
        <li class="list-group-item"><i class="fas fa-medal"></i> Competition Training</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesView"
};
</script>

<style scoped>
.hero-section {
  padding: 80px 0;
  background: url('https://source.unsplash.com/1600x900/?dogs,training') center/cover;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
}
.services-section {
  padding: 60px 0;
  background: #f8f9fa;
}
.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 30px 0;
}
</style>
