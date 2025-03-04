<template>
  <div id="app">
    <!-- Header Section -->
    <header class="bg-dark text-white py-4">
      <div class="container text-center">
        <h1 class="display-4 fw-bold mb-2">NDEJUKENNELS</h1>
        <p class="lead mb-0">Professional Dog Training & Care</p>

        <!-- Navigation Menu -->
        <nav class="navbar navbar-expand-lg navbar-dark mt-4">
          <div class="container-fluid">
            <!-- Paw icon added here -->
            <i class="fas fa-paw text-white me-3" style="font-size: 30px;"></i>
            <router-link to="/" class="navbar-brand">NDEJUKENNELS</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item" v-for="(link, index) in navLinks" :key="index">
                  <router-link 
                    :to="link.to" 
                    class="nav-link px-3" 
                    :aria-label="link.label"
                    :class="{ active: $route.path === link.to }" 
                    :aria-current="$route.path === link.to ? 'page' : undefined"
                  >
                    {{ link.label }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="container-fluid py-5">
      <router-view /> <!-- Dynamically renders the current route's component -->
    </main>

    <!-- Footer Section -->
    <footer class="bg-dark text-white py-4 mt-auto">
      <div class="container text-center">
        <p class="mb-0">&copy; 2025 Kernel Runner & Trainer | All Rights Reserved</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
  data() {
    return {
      navLinks: [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/contact', label: 'Contact' },
        { to: '/services', label: 'Services' },
        { to: '/pricing', label: 'Pricing' },
      ],
    };
  },
};
</script>

<style scoped>
/* Global Body and App Styling */
html, body, #app {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
}

/* Main Content Area */
main {
  flex-grow: 1;
  padding: 0 20px 50px;
}

/* Footer Styling */
footer {
  flex-shrink: 0;
}

/* Navbar Styling */
.navbar-nav .nav-link {
  transition: background-color 0.3s, color 0.3s;
  font-weight: 500;
  text-transform: uppercase;
  padding: 8px 15px;  /* Added padding to increase clickable area */
}

.navbar-nav .nav-link:hover {
  background-color: #495057;
  color: #f8f9fa;
}

.navbar-nav .nav-item {
  margin-left: 12px;
  margin-right: 12px;
}

/* Active Link Styling */
.navbar-nav .nav-link.active {
  background-color: #007bff;
  color: #fff;
}

/* Heading Styling */
h1.display-4 {
  font-size: 3rem;
  line-height: 1.3;
  letter-spacing: -0.5px;
}

.lead {
  font-size: 1.2rem;
  line-height: 1.6;
  font-weight: 400;
}

/* Responsive Navbar */
@media (max-width: 1200px) {
  .navbar-nav .nav-link {
    font-size: 1.1rem;
  }
}

@media (max-width: 992px) {
  .display-4 {
    font-size: 2.5rem;
  }

  .lead {
    font-size: 1.1rem;
  }

  .navbar-nav .nav-link {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .display-4 {
    font-size: 2rem;
  }

  .lead {
    font-size: 1rem;
  }

  .navbar-nav .nav-item {
    margin-left: 8px;
    margin-right: 8px;
  }

  .navbar-nav .nav-link {
    font-size: 0.95rem;
  }
}

/* Footer Text Styling */
footer p {
  font-size: 0.875rem;
}

/* Button Refinements */
button {
  font-size: 1rem;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  border: none;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

/* Input field styles */
input, textarea {
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  transition: border-color 0.3s;
}

input:focus, textarea:focus {
  border-color: #007bff;
  outline: none;
}

/* Smoother Transitions */
a, button {
  transition: color 0.3s, background-color 0.3s;
}

/* Navbar Brand (Paw Icon) Adjustments */
.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-brand i {
  margin-right: 10px;
  font-size: 30px; /* Adjust the icon size */
}

.navbar-brand img {
  height: 40px; /* Adjust the image size */
  width: auto;
  margin-right: 10px;
}
</style>
