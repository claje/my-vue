<template>
  <section class="heading">
    <div class="text">
      <h2>Alarcon Construction Supply</h2>
      <p>Building Your Dreams, One Project at a Time</p>
      <h1 class="small-heading">QUALITY AND RELIABILITY</h1>
      <button>Learn More</button>
    </div>

    <div class="image">
      <img :src="acsLogo" alt="Alarcon Construction Supply logo" />
    </div>
  </section>
</template>

<script setup>
import acsLogo from '@/assets/acs logo.png'

</script>

<style scoped>
.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 10%;
  gap: 40px;
}

.text {
  max-width: 500px;
}

h2 {
  font-size: 52px;
  color: #1d1d3d;
  line-height: 1.1;
  margin-bottom: 15px;
}

p {
  color: #666;
  margin-bottom: 25px;
}

button {
  background: #6b46ff;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #4e2ee0;
}

.image img {
  width: 420px;
  max-width: 100%;
  height: auto;
}
</style>