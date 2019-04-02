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

    <b-nav fill tabs class="nav mb-2 mt-2">
      <b-nav-item @click="menu('home')" :active="home">Home</b-nav-item>
      <b-nav-item @click="menu('about')" :active="about">About</b-nav-item>

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
          <p>Cafe owner Stephanie was born and raised in Dunlop, and attended both Stewarton Primary School and Stewarton Academy.</p>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: true,
      about: false
    };
  },

  methods: {
    menu(type) {
      if (type == "home") {
        this.home = true;
        this.about = false;
      } else if (type == "about") {
        this.home = false;
        this.about = true;
      }
    }
  }
};
</script>

<style>

a.nav-link {
  color: #DB7093
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
</style>
