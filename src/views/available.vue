<template>
  <div class="available-dogs">
    <h2 class="text-center">Available Dogs</h2>
    <p class="text-center">Check out our amazing dogs that are available for adoption or training.</p>

    <!-- Dog List Section -->
    <div class="dog-list">
      <div class="row">
        <div class="col-md-4" v-for="dog in dogs" :key="dog.id">
          <div class="dog-card">
            <img :src="dog.image" class="img-fluid dog-image" alt="dog">
            <h4 class="mt-3">{{ dog.name }}</h4>
            <p>{{ dog.breed }}</p>
            <p><strong>Age:</strong> {{ dog.age }} years</p>
            <p><strong>Price:</strong> ${{ dog.price }}</p>
            <button class="btn btn-primary">Adopt</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Available",
  data() {
    return {
      dogs: [
        {
          id: 1,
          name: "Buddy",
          breed: "Golden Retriever",
          age: 2,
          price: 500,
          image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?w=400&h=300&fit=crops",
        },
        {
          id: 2,
          name: "Bella",
          breed: "Labrador Retriever",
          age: 3,
          price: 600,
          image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?w=400&h=300&fit=crops",
        },
        {
          id: 3,
          name: "Max",
          breed: "German Shepherd",
          age: 4,
          price: 700,
          image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?w=400&h=300&fit=crops",
        },
        {
          id: 4,
          name: "Lucy",
          breed: "Bulldog",
          age: 2,
          price: 550,
          image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?w=400&h=300&fit=crops",
        },
        {
          id: 5,
          name: "Charlie",
          breed: "Beagle",
          age: 1,
          price: 450,
          image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?w=400&h=300&fit=crops",
        },
      ],
    };
  },
};
</script>

<style scoped>
.available-dogs {
  margin-top: 50px;
}

.dog-card {
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.dog-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.dog-list .row {
  display: flex;
  justify-content: space-between;
}

.dog-list .col-md-4 {
  margin-bottom: 30px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
