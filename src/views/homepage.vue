<template>
  <div class="home">

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        

        <h1>Quality Materials for Every Construction Project</h1>

        <p class="hero-text">
          Reliable construction materials and supplies for
          residential, commercial, and development projects.
        </p>

        <div class="hero-buttons">
          <router-link to="/Products" class="btn primary">
            View Products
          </router-link>

          <router-link to="/Contact" class="btn secondary">
            Contact Us
          </router-link>
        </div>
      </div>
    </section>


    <!-- Introduction -->
    <section class="section intro">
      <p class="section-label">ABOUT OUR COMPANY</p>

      <h2>Your Reliable Construction Supply Partner</h2>

      <p>
        Alarcon Construction Supply provides quality construction
        materials and dependable services to help customers complete
        their construction projects.
      </p>
    </section>


    <!-- Products -->
    <section class="section products">
      <p class="section-label">WHAT WE OFFER</p>

      <h2>Our Products</h2>

      <div class="cards">

        <div class="card">
          <div class="icon">🧱</div>
          <h3>Construction Materials</h3>
          <p>
            Quality materials for different types of
            construction projects.
          </p>
          <router-link to="/Products">
            View Products →
          </router-link>
        </div>

        <div class="card">
          <div class="icon">🔩</div>
          <h3>Hardware Supplies</h3>
          <p>
            Essential hardware and supplies for
            construction and building work.
          </p>
          <router-link to="/Products">
            View Products →
          </router-link>
        </div>

        <div class="card">
          <div class="icon">🏗️</div>
          <h3>Project Supplies</h3>
          <p>
            Supplies suitable for residential,
            commercial, and development projects.
          </p>
          <router-link to="/Projects">
            Our Projects →
          </router-link>
        </div>

      </div>
    </section>


    <!-- Services -->
    <section class="section services">
      <div class="services-content">

        <div>
          <p class="section-label">OUR SERVICES</p>

          <h2>More Than Just Construction Materials</h2>

          <p>
            We aim to provide dependable service together with
            quality construction supplies.
          </p>
        </div>

        <div class="service-list">
          <div class="service">
            <h3>Material Supply</h3>
            <p>
              Construction materials for different project needs.
            </p>
          </div>

          <div class="service">
            <h3>Delivery</h3>
            <p>
              Convenient delivery options for construction supplies.
            </p>
          </div>

          <div class="service">
            <h3>Project Support</h3>
            <p>
              Assistance in finding suitable materials for your project.
            </p>
          </div>
        </div>

      </div>
    </section>


    <!-- CTA -->
    <section class="cta">
      <h2>Ready to Start Your Project?</h2>

      <p>
        Get in touch with us for your construction supply needs.
      </p>

      <router-link to="/Contact" class="btn primary">
        Contact Us
      </router-link>
    </section>

  </div>
</template>


<style scoped>

.home {
  min-height: 100vh;
  background: #f5f5f5;
  color: #222;
  font-family: Arial, sans-serif;
}


/* Hero */

.hero {
  min-height: 520px;
  display: flex;
  align-items: center;
  background: #86bcff;
  color: white;
  padding: 80px 7%;
}

.hero-content {
  max-width: 750px;
}

.eyebrow {
  margin-bottom: 15px;
  color: #d4ab1e;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
}

.hero h1 {
  margin: 0 0 20px;
  font-size: 52px;
  line-height: 1.1;
}

.hero-text {
  max-width: 600px;
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 1.7;
}

.hero-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}


/* Buttons */

.btn {
  display: inline-block;
  padding: 13px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
}

.primary {
  background: #515aff;
  color: #222;
}

.secondary {
  border: 2px solid white;
  color: white;
}


/* General Sections */

.section {
  padding: 70px 7%;
}

.section-label {
  margin-bottom: 10px;
  color: #3a0e6b;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1.5px;
}

.section h2 {
  margin-bottom: 18px;
  font-size: 34px;
}


/* Introduction */

.intro {
  max-width: 900px;
  margin: auto;
  text-align: center;
}

.intro p:last-child {
  max-width: 700px;
  margin: auto;
  color: #666;
  line-height: 1.7;
}


/* Product Cards */

.products {
  background: rgb(240, 236, 236);
  text-align: center;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  max-width: 1100px;
  margin: 40px auto 0;
}

.card {
  padding: 30px;
  border: 1px solid #ffe167;
  border-radius: 10px;
  background: #fff;
  text-align: left;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.icon {
  margin-bottom: 15px;
  font-size: 40px;
}

.card h3 {
  margin-bottom: 10px;
}

.card p {
  margin-bottom: 20px;
  color: #666;
  line-height: 1.6;
}

.card a {
  color: #3a0e6b;
  font-weight: bold;
  text-decoration: none;
}


/* Services */

.services {
  background: #f1f1f1;
}

.services-content {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.services-content > div:first-child p:last-child {
  color: #666;
  line-height: 1.7;
}

.service-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.service {
  padding: 20px;
  background: white;
  border-left: 5px solid #d4ab1e;
}

.service h3 {
  margin-bottom: 5px;
}

.service p {
  margin: 0;
  color: #666;
}


/* CTA */

.cta {
  padding: 70px 7%;
  background: #222;
  color: white;
  text-align: center;
}

.cta h2 {
  margin-bottom: 12px;
  font-size: 34px;
}

.cta p {
  margin-bottom: 25px;
  color: #ddd;
}


/* Responsive */

@media (max-width: 800px) {

  .hero h1 {
    font-size: 40px;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .services-content {
    grid-template-columns: 1fr;
  }

}

@media (max-width: 500px) {

  .hero {
    padding: 60px 6%;
  }

  .hero h1 {
    font-size: 32px;
  }

  .section {
    padding: 50px 6%;
  }

}

</style>