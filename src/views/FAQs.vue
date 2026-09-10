<template>
  <div class="faq-page">

    <!-- Header -->
    <header class="faq-hero">
      <div class="container">
        <p class="eyebrow">Frequently Asked Questions</p>

        <h1>How Can We Help You?</h1>

        <p class="lead">
          Find answers to common questions about our construction
          materials, services, orders, and deliveries.
        </p>
      </div>
    </header>


    <!-- FAQ Section -->
    <main class="container faq-main">

      <section class="faq-card">
        <h2>Frequently Asked Questions</h2>

        <div class="faq-list">

          <div class="faq-item">
            <h3>What construction materials do you offer?</h3>
            <p>
              We offer a variety of construction materials and supplies
              for residential, commercial, and development projects.
            </p>
          </div>


          <div class="faq-item">
            <h3>Do you provide delivery services?</h3>
            <p>
              Yes. We provide delivery services for construction materials.
              Delivery availability may depend on the order and project location.
            </p>
          </div>


          <div class="faq-item">
            <h3>How can I request a quotation?</h3>
            <p>
              You can contact us through our website or contact information
              to request a quotation for your construction project.
            </p>
          </div>


          <div class="faq-item">
            <h3>Can I order materials for a large project?</h3>
            <p>
              Yes. We can accommodate material requirements for residential,
              commercial, and larger construction projects.
            </p>
          </div>


          <div class="faq-item">
            <h3>How long does delivery take?</h3>
            <p>
              Delivery time depends on the availability of the materials,
              order size, and project location. Our team can provide an
              estimated delivery schedule.
            </p>
          </div>


          <div class="faq-item">
            <h3>Can you help me choose the right materials?</h3>
            <p>
              Yes. Our team can help customers identify suitable construction
              materials based on their project requirements.
            </p>
          </div>

        </div>
      </section>


      <!-- Contact CTA -->
      <section class="faq-cta">
        <h2>Still Have Questions?</h2>

        <p>
          Contact our team and we'll be happy to help with your
          construction supply needs.
        </p>

        <button type="button" class="contact-btn">
          Contact Us
        </button>
      </section>

    </main>

  </div>
</template>


<style scoped>

* {
  box-sizing: border-box;
}

.faq-page {
  min-height: 100vh;
  background-color: #f4f4f4;
  color: #222;
  font-family: Arial, Helvetica, sans-serif;
}


/* Header */

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.faq-hero {
  background-color: #404363;
  color: white;
  padding: 65px 0;
}

.eyebrow {
  margin: 0 0 10px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.faq-hero h1 {
  margin: 0 0 15px;
  font-size: 42px;
}

.lead {
  max-width: 650px;
  margin: 0;
  line-height: 1.7;
  font-size: 16px;
}


/* FAQ */

.faq-main {
  padding-top: 50px;
  padding-bottom: 50px;
}

.faq-card {
  background-color: white;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.faq-card h2 {
  margin: 0 0 30px;
  font-size: 28px;
}

.faq-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.faq-item {
  padding: 22px;
  background-color: #f8f8f8;
  border: 1px solid #404363;
  border-radius: 8px;
}

.faq-item h3 {
  margin: 0 0 10px;
  font-size: 17px;
  color: #222;
}

.faq-item p {
  margin: 0;
  color: #666;
  font-size: 14px;
  line-height: 1.7;
}


/* CTA */

.faq-cta {
  margin-top: 35px;
  padding: 45px 25px;
  text-align: center;
  background-color: #222;
  color: white;
  border-radius: 12px;
}

.faq-cta h2 {
  margin: 0 0 10px;
  font-size: 28px;
}

.faq-cta p {
  margin: 0 0 25px;
  color: #ddd;
}

.contact-btn {
  padding: 12px 25px;
  border: none;
  border-radius: 6px;
  background-color: #ff3902;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.contact-btn:hover {
  opacity: 0.9;
}


/* Mobile */

@media (max-width: 700px) {

  .faq-hero h1 {
    font-size: 32px;
  }

  .faq-list {
    grid-template-columns: 1fr;
  }

  .faq-card {
    padding: 22px;
  }

}

</style>