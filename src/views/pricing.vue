<template>
  <div>
    

    <div class="hero-section">
      <h1 class="display-4">Our Pricing Plans</h1>
      <p class="lead">Affordable and professional dog training and care services.</p>
    </div>

    <div class="container pricing-section">
      <h2 class="text-center">Choose Your Plan</h2>
      <div class="row mt-4">
        <div class="col-md-4" v-for="plan in pricingPlans" :key="plan.id">
          <div class="card text-center">
            <div class="card-header bg-primary text-white">
              <h4>{{ plan.name }}</h4>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ plan.price }}</h5>
              <p class="card-text" v-for="(feature, index) in plan.features" :key="index">{{ feature }}</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pricingPlans: [
        { id: 1, name: "Basic", price: "$50", features: ["Group Training Sessions", "Basic Obedience", "1-Month Duration"] },
        { id: 2, name: "Standard", price: "$100", features: ["Personalized Training", "Behavior Correction", "3-Month Duration"] },
        { id: 3, name: "Premium", price: "$200", features: ["Advanced Training", "One-on-One Sessions", "Lifetime Support"] }
      ]
    };
  }
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
.pricing-section {
  padding: 60px 0;
  background: #f8f9fa;
}
.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 30px 0;
  margin-top: 20px;
}
</style>
