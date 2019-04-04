<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-img class="ma-0 pa-0 logo" :src="require('../assets/gilm.png')" fluid-grow/>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-link href="https://www.facebook.com/gilmartinsbakery" target="blank">
            <b-img class="social-icon mr-2 mt-2 mb-2" :src="require('../assets/soc_fb.png')"/>
          </b-link>

          <b-link href="https://www.instagram.com/gilmartins_bakery" target="blank">
            <b-img class="social-icon ml-2 mt-2 mb-2" :src="require('../assets/soc_ig.png')"/>
          </b-link>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-nav fill tabs class="nav mb-2 mt-2">
            <b-nav-item @click="menu('home')" :active="home">Home</b-nav-item>
            <b-nav-item @click="menu('about')" :active="about">About</b-nav-item>
            <b-nav-item @click="menu('jobs')" :active="jobs">Jobs</b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
    </b-container>

    <b-container v-if="home">
      <b-img class="bread" :src="require('../assets/bread.png')"/>

      <h4 class="mt-3">A new cafe for Stewarton - coming soon</h4>

      <h5 class="mt-3">2 Avenue Square, KA3 5AB</h5>

      <a href="mailto:steph@gilmartinsbakery.com">
        <h4 class="email mt-2">steph@gilmartinsbakery.com</h4>
      </a>
    </b-container>

    <b-container v-if="about">
      <div>
        <div id="steph-details">
          <h3>Stephanie Stewart</h3>
          <p>Owner and head baker Stephanie Stewart (née Gilmartin) is from Dunlop but went to school in Stewarton, where most of her family are from. The landlord is her sister Lindsay, who lives above the cafe!</p>
        </div>

        <b-container class="bv-example-row">
          <b-row>
            <b-col>
              <b-img id="steph-picture" :src="require('../assets/steph.png')" fluid/>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-container>

    <b-container v-if="jobs">
      <h5 class="text-left">We currently have openings for the following roles:</h5>
      <div role="tablist">
        <b-card no-body class="mb-2">
          <b-card-header header-tag="header" class="p-0" role="tab">
            <b-button block href="#" v-b-toggle.accordion-1 variant="info">Baker/Cook</b-button>
          </b-card-header>
          <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
            <b-card-body class="text-left">
              <!-- <b-card-text>Job desc</b-card-text> -->
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: true,
      about: false,
      jobs: false
    };
  },

  methods: {
    reposition() {
      // window.onbeforeunload = function() {
      //   window.scrollTo(0, 0);
      // };
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    menu(type) {
      if (type == "home") {
        this.home = true;
        this.about = false;
        this.jobs = false;
      } else if (type == "about") {
        this.home = false;
        this.about = true;
        this.jobs = false;
      } else if (type == "jobs") {
        this.home = false;
        this.about = false;
        this.jobs = true;
      }
    }
  }
};
</script>

<style>
a.nav-link {
  color: #db7093;
}

.nav {
  font-size: 20px;
}
.bread {
  width: 75%;
  transition: 0.5s;
}

.steph-picture {
  width: 75%;
}

@media only screen and (max-width: 40em) {
  .bread {
    width: 100%;
    transition: 0.5s;
  }
}
.mailchimp-wrapper {
  padding-top: 10px;
}

.mailchimp {
  border-radius: 10px;
}

.email {
  color: #808080;
}

.btn-info,
.btn-info:hover,
.btn-info:active {
  background-color: #fde7e5 !important;
  border-color: #dee1e6 !important;
  color: black !important;
  font-size: 20px !important;
}

.p-1 {
  padding: 0rem !important;
}

.social-icon {
  width: 35px;
}
</style>
