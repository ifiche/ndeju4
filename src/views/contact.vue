<template>
  <div>
    <div class="container contact-container">
      <h2>Contact Me</h2>
      <div class="mt-4">
        <h4>Contact via App</h4>
        <button class="btn btn-primary btn-custom">Open App</button>
      </div>
      <div class="mt-4">
        <h4>Follow Us on Social Media</h4>
        <a href="https://facebook.com" class="btn btn-outline-primary me-2">Facebook</a>
        <a href="https://twitter.com" class="btn btn-outline-info me-2">Twitter</a>
        <a href="https://instagram.com" class="btn btn-outline-danger">Instagram</a>
      </div>
    </div>

    <div class="assistant" @click="toggleAssistant">💬</div>
    <div class="assistant-chat" v-if="assistantVisible">
      <p><strong>Assistant</strong></p>
      <p>How can I help you today?</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navOpen: false,
      assistantVisible: false,
      navLinks: [
        { text: 'Home', path: '/', active: false },
        { text: 'About', path: '/about', active: false },
        { text: 'Available Dogs/Puppies', path: '/available', active: false },
        { text: 'Pricing', path: '/pricing', active: false },
        { text: 'Testimonials', path: '/testimonials', active: false },
        { text: 'Contact', path: '/contact', active: true },
      ]
    };
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    },
    toggleAssistant() {
      this.assistantVisible = !this.assistantVisible;
    }
  }
};
</script>

<style>
body {
  background-color: #f8f9fa;
}
.contact-container {
  max-width: 600px;
  margin: auto;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 80px;
  text-align: center;
}
.btn-custom {
  width: 100%;
}
.assistant {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.assistant-chat {
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 300px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
}
</style>
