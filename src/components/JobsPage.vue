<template>
  <b-container>
    <h5 class="text-left">We currently have openings for the following roles:</h5>
    <div role="tablist">
      <b-card no-body class="mb-2">
        <b-card-header header-tag="header" class="p-0" role="tab">
          <b-button block href="#" v-b-toggle.accordion-1 variant="info">Baker/Cook</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
          <b-card-body class="text-left">
            <p class="font-weight-bold">Baker/Cook • 1 FTE and 0.4 FTE</p>
            <p>We are currently recruiting for a full time and a part time Baker/Cook for our new cafe and bakery at 2 Avenue Square, Stewarton. The role will involve producing a range of breads, cakes, biscuits and pastries for retail, events and wholesale, with occasional food service duties. You will also be responsible for stock management procedures including stocktake and ordering, and maintaining high standards of food hygiene in accordance with Food Standards Scotland legislation, including daily and weekly cleaning procedures. Training will be provided.</p>

            <p class="font-weight-bold">Essential</p>

            <ul>
              <li>Food Hygiene certificate</li>
              <li>Strong knowledge of baking</li>
              <li>Passion for artisanal baking, including sourdough</li>
              <li>Creative cook with a flair for producing delicious brunch dishes and freshly made cakes with high-quality ingredients</li>
              <li>Works on own initiative and is a quick and capable problem-solver</li>
              <li>Friendly and personable, and love working as part of a team</li>
            </ul>

            <p class="font-weight-bold">Desirable</p>
            <ul>
              <li>Ideally trained to SCQF Level 6 or equivalent</li>
              <li>Knowledge of high-quality local suppliers</li>
            </ul>

            <p class="font-weight-bold">Hours of work</p>
            <p>Shifts will be allocated on a rota basis within our operating hours of 7am - 5pm Monday - Saturday, 8am - 5pm Sunday. Additional hours may be required for holiday cover. These roles will be offered on a permanent basis with a three month probationary period.</p>

            <p class="font-weight-bold">Pay</p>
            <p>Pay will be commensurate with experience and will be supplemented by tips which will be shared equally amongst staff.</p>

            <p class="font-weight-bold">To apply:</p>
            <p>
              Please send your CV and an email detailing why you would be a good fit to
              <span>
                <a href="mailto:steph@gilmartinsbakery.com">steph@gilmartinsbakery.com</a>
              </span>
            </p>
            <p>We look forward to receiving your application!</p>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1" @click="reposition">
        <b-card-header header-tag="header" class="p-0" role="tab">
          <b-button block href="#" v-b-toggle.accordion-2 variant="info">Barista</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body class="text-left">
            <p class="font-weight-bold">Barista •️ 0.2 - 0.8 FTE</p>
            <p>We are currently recruiting for part-time baristas for our new cafe and bakery at 2 Avenue Square, Stewarton. The role will involve being the first point of contact for customers, producing hot drinks including tea, hot chocolate and espresso-based coffee drinks using high-grade coffee beans. You will be responsible for cash handling procedures, retail sales, stock management, replenishment of supplies and some visual merchandising. Experience is preferred but training will be provided for the right candidate.</p>

            <p class="font-weight-bold">Essential</p>

            <ul>
              <li>Excellent customer service skills</li>
              <li>Works on own initiative and is a quick and capable problem-solver</li>
              <li>Friendly and personable, and loves working as part of a team</li>
              <li>Observant and quick to offer help or go the extra mile for customers where they can</li>
            </ul>

            <p class="font-weight-bold">Desirable</p>
            <ul>
              <li>Good photography skills for Instragramming all those cakes</li>
            </ul>

            <p class="font-weight-bold">Hours of work</p>
            <p>Shifts will be allocated on a rota basis within our operating hours of 7am - 5pm Monday - Saturday, 8am - 5pm Sunday. Additional hours may be required for holiday cover. These roles will be offered on a permanent basis with a three month probationary period.</p>

            <p class="font-weight-bold">Pay</p>
            <p>Pay will be commensurate with experience and will be supplemented by tips which will be shared equally amongst staff.</p>

            <p class="font-weight-bold">To apply:</p>
            <p>
              Please send your CV and an email detailing why you would be a good fit to
              <span>
                <a href="mailto:steph@gilmartinsbakery.com">steph@gilmartinsbakery.com</a>
              </span>
            </p>

            <p>We look forward to receiving your application!</p>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {};
</script>

<style>
</style>
