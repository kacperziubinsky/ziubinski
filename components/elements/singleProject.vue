<template>
    <div class="project" data-aos="zoom-in">
      <img :src="photo" :alt="name" class="project-image"  />
      <span @click="changeThumb" class="btn">Zmień widok</span>
      <p class="project-title">{{ name }}</p>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      desktop: {
        type: String,
        required: true
      },
      mobile: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        type: "desktop",
        photo: this.desktop
      };
    },
    methods: {
      changeThumb() {
        if (this.type === "desktop") {
          this.type = "mobile";
          this.photo = this.mobile;
        } else if (this.type === "mobile") {
          this.type = "desktop";
          this.photo = this.desktop;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .project {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    background: white
  }
  
  .project:hover {
    transform: translateY(-5px);
  }
  
  .project-image {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  
  .btn {
    border: 1px solid #000;
    padding: 10px 20px;
    border-radius: 20px;
    text-decoration: none;
    color: #000;
    background-color: #fff;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .btn:hover {
    background-color: #000;
    color: #fff;
  }
  
  .project-title {
    margin: 10px 0;
    font-size: 1.5em;
    color: #333;
  }
  
  p {
    font-size: 1em;
    color: #666;
    text-align: center;
  }
  </style>
  