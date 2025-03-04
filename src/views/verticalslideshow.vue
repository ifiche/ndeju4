<template>
    <div class="slideshow-container">
      <div 
        class="slideshow-slide" 
        v-for="(slide, index) in slides" 
        :key="index" 
        :style="{ transform: 'translateY(' + (currentSlide * -100) + '%)' }"
        class="slide-content">
        <img :src="slide.image" :alt="slide.alt" class="slide-img"/>
        <p class="slide-caption">{{ slide.caption }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'VerticalSlideshow',
    data() {
      return {
        currentSlide: 0,
        slides: [
          { image: 'path-to-image1.jpg', caption: 'Puppy 1', alt: 'Puppy 1' },
          { image: 'path-to-image2.jpg', caption: 'Puppy 2', alt: 'Puppy 2' },
          { image: 'path-to-image3.jpg', caption: 'Puppy 3', alt: 'Puppy 3' },
          // Add more slides as needed
        ],
        slideInterval: null
      };
    },
    mounted() {
      this.startSlideshow();
    },
    beforeDestroy() {
      if (this.slideInterval) {
        clearInterval(this.slideInterval);
      }
    },
    methods: {
      startSlideshow() {
        this.slideInterval = setInterval(() => {
          this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        }, 3000); // Change slide every 3 seconds
      }
    }
  };
  </script>
  
  <style scoped>
  .slideshow-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .slideshow-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: transform 1s ease-in-out;
    position: absolute;
    top: 0;
  }
  
  .slide-content {
    text-align: center;
  }
  
  .slide-img {
    width: 80%;
    height: auto;
    margin-bottom: 10px;
  }
  
  .slide-caption {
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 5px;
  }
  </style>
  