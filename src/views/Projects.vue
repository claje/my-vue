<template>
  <div class="page">

    <header class="hero">
      <div class="container">
        <p class="eyebrow">Our Projects</p>

        <h1>Building Quality Through Every Project</h1>

        <p class="lead">
          We provide reliable construction materials and supplies for
          residential, commercial, and development projects.
        </p>
      </div>
    </header>

    <main class="container main">

      <section class="card">
        <h2>Featured Projects</h2>

        <div class="featured-projects">

          <div class="featured-main">
            <div class="project-image large">
              🏠
            </div>

            <div class="project-content">
              <span>Residential</span>
              <h3>Residential Construction</h3>
              <p>
                Quality construction materials supplied for houses,
                apartments, and residential developments.
              </p>
            </div>
          </div>

          <div class="featured-side">

            <div class="project-card">
              <div class="project-image">
                🏢
              </div>

              <div class="project-content">
                <span>Commercial</span>
                <h3>Commercial Building</h3>
                <p>
                  Reliable construction supplies for offices,
                  stores, warehouses, and commercial buildings.
                </p>
              </div>
            </div>

            <div class="project-card">
              <div class="project-image">
                🏗️
              </div>

              <div class="project-content">
                <span>Infrastructure</span>
                <h3>Infrastructure Project</h3>
                <p>
                  Construction materials supporting roads,
                  public facilities, and large development projects.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section class="card">
        <h2>Project Categories</h2>

        <div class="categories">

          <div class="category">
            <h3>Residential</h3>
            <p>
              Materials for houses, apartments, and other residential
              construction.
            </p>
          </div>

          <div class="category">
            <h3>Commercial</h3>
            <p>
              Supplies for offices, stores, warehouses, and commercial
              buildings.
            </p>
          </div>

          <div class="category">
            <h3>Infrastructure</h3>
            <p>
              Materials for roads, public facilities, and development
              projects.
            </p>
          </div>

        </div>
      </section>

      <section class="cta">
        <h2>Have a Construction Project?</h2>

        <p>
          Let us help you find the right materials for your project.
        </p>

        <button type="button" class="primary-btn">
          Request a Quote
        </button>
      </section>

    </main>

  </div>
</template>

<style scoped>

/* Your CSS goes here */

* {
  box-sizing: border-box;
}

.page {
  min-height: 100vh;
  background: #f4f4f4;
  color: #222;
  font-family: Arial, Helvetica, sans-serif;
}


/* =========================
   HEADER
========================= */

.hero {
  background: #404363;
  color: white;
  padding: 70px 0;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.eyebrow {
  margin: 0 0 10px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.hero h1 {
  max-width: 750px;
  margin: 0 0 18px;
  font-size: 44px;
  line-height: 1.15;
}

.lead {
  max-width: 650px;
  margin: 0;
  font-size: 17px;
  line-height: 1.7;
}


/* =========================
   MAIN
========================= */

.main {
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 35px;
}


/* =========================
   SECTION CARD
========================= */

.card {
  background: white;
  padding: 35px;
  border-radius: 14px;
  border: none;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.card h2 {
  margin: 0 0 28px;
  font-size: 28px;
  color: #222;
}


/* 
   FEATURED PROJECTS

.featured-projects {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 25px;
}


/* Large project */

.featured-main {
  overflow: hidden;
  background: white;
  border-radius: 12px;
  border: 1px solid #ddd;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.featured-main:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}


/* Smaller projects */

.featured-side {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.project-card {
  display: flex;
  overflow: hidden;
  flex: 1;
  background: white;
  border: 1px solid #ddd;
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}


/* Project image */

.project-image {
  min-width: 150px;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e9e9e9;
  font-size: 55px;
}

.project-image.large {
  width: 100%;
  height: 280px;
  font-size: 80px;
}


/* Project content */

.project-content {
  padding: 22px;
}

.featured-main .project-content {
  padding: 25px;
}

.project-content h3 {
  margin: 10px 0;
  font-size: 20px;
  color: #222;
}

.project-content p {
  margin: 0;
  color: #666;
  font-size: 14px;
  line-height: 1.7;
}


/* Category label */

.project-content span {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  background: #ff3902;
  color: white;
  font-size: 12px;
  font-weight: bold;
}


/* =========================
   PROJECT CATEGORIES
========================= */

.categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.category {
  padding: 25px;
  background: #f8f8f8;
  border-left: 5px solid #ff3902;
  border-radius: 8px;
}

.category h3 {
  margin: 0 0 10px;
  font-size: 19px;
}

.category p {
  margin: 0;
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}


/* =========================
   CTA
========================= */

.cta {
  padding: 50px 30px;
  text-align: center;
  background: #222;
  color: white;
  border-radius: 14px;
}

.cta h2 {
  margin: 0 0 12px;
  font-size: 28px;
}

.cta p {
  margin: 0 0 25px;
  color: #ddd;
}

.primary-btn {
  padding: 13px 28px;
  border: none;
  border-radius: 6px;
  background: #ff3902;
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
}

.primary-btn:hover {
  opacity: 0.9;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 800px) {

  .hero {
    padding: 50px 0;
  }

  .hero h1 {
    font-size: 34px;
  }

  .featured-projects {
    grid-template-columns: 1fr;
  }

  .featured-side {
    gap: 20px;
  }

  .categories {
    grid-template-columns: 1fr;
  }

}

@media (max-width: 600px) {

  .card {
    padding: 22px;
  }

  .hero h1 {
    font-size: 28px;
  }

  .project-card {
    flex-direction: column;
  }

  .project-image {
    width: 100%;
    height: 150px;
  }

  .project-image.large {
    height: 200px;
  }

}



</style>

