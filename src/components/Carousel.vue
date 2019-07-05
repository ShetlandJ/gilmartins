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
          <h5>07876 133461 • 2 Avenue Square, Stewarton</h5>
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

      <b-row v-b-toggle.collapse-1-inner>
        <b-col>
          <h4>
            Open today: {{openingHoursToday}}
            <p style="font-size: 14px">(click to show all)</p>
          </h4>
        </b-col>
      </b-row>

      <b-collapse id="collapse-1-inner" class="mt-2">
        <b-card>
          <p v-for="day in week" :key="day.day">{{getDayHours(day, true)}}</p>
        </b-card>
      </b-collapse>

      <b-row>
        <b-col>
          <b-nav fill tabs class="nav mb-2 mt-2">
            <b-nav-item @click="menu('home')" :active="home">Home</b-nav-item>
            <b-nav-item @click="menu('about')" :active="about">About</b-nav-item>
            <b-nav-item @click="menu('jobs')" v-if="vacancies" :active="jobs">Jobs</b-nav-item>
            <b-nav-item @click="menu('food')" :active="food">Menu</b-nav-item>
            <b-nav-item
              :href="'https://www.google.com/maps/place/Gilmartin\'s+Bakery/@55.6838435,-4.5252111,14.78z/data=!4m5!3m4!1s0x4888358d72e6b1bf:0x8ada5c65bf456056!8m2!3d55.6808677!4d-4.5144958'"
              target="_blank"
            >Visit</b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
    </b-container>

    <b-container v-if="home">
      <b-img class="bread" :src="require('../assets/bread.jpg')"/>

      <h4 class="mt-3">A cafe and bakery serving breakfast, brunch, lunch and amazing cakes.</h4>

      <h5 class="mt-3">2 Avenue Square, KA3 5AB</h5>

      <a href="mailto:steph@gilmartinsbakery.com">
        <h4 class="email mt-2">steph@gilmartinsbakery.com</h4>
      </a>
    </b-container>

    <About v-if="about"/>

    <JobsPage v-if="vacancies"/>

    <FoodMenu v-if="food"/>
  </div>
</template>

<script>
import About from "./About.vue";
import JobsPage from "./JobsPage.vue";
import FoodMenu from "./FoodMenu.vue";

export default {
  data() {
    return {
      home: true,
      about: false,
      jobs: false,
      food: false,
      vacancies: false,
      sunday: {
        day: "Sunday",
        open: "09:00",
        close: "17:00"
      },
      monday: {
        day: "Monday",
        open: "08:00",
        close: "17:00"
      },
      tuesday: {
        day: "Tuesday",
        open: "08:00",
        close: "17:00"
      },
      wednesday: {
        day: "Wednesday",
        open: "08:00",
        close: "17:00"
      },
      thursday: {
        day: "Thursday",
        open: "08:00",
        close: "17:00"
      },
      friday: {
        day: "Friday",
        open: "08:00",
        close: "17:00"
      },
      saturday: {
        day: "Saturday",
        open: "08:00",
        close: "17:00"
      },
      today: new Date()
    };
  },
  components: {
    About,
    JobsPage,
    FoodMenu
  },
  computed: {
    openingHoursToday() {
      const todaysDate = this.today.getDay();
      return this.getDayHours(this.week[todaysDate]);
    },
    week() {
      const week = [
        this.sunday,
        this.monday,
        this.tuesday,
        this.wednesday,
        this.thursday,
        this.friday,
        this.saturday
      ];

      return week;
    }
  },
  methods: {
    reposition() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    menu(type) {
      this.resetMenuState();
      if (type == "home") {
        this.home = true;
      } else if (type == "about") {
        this.about = true;
      } else if (type == "jobs") {
        this.jobs = true;
      } else if (type == "food") {
        this.food = true;
      }
    },
    getDayHours(day, withDay = false) {
      if (!withDay) {
        return `${day.open} - ${day.close}`;
      }

      return `${day.day}: ${day.open} - ${day.close}`;
    },
    resetMenuState() {
      this.home = false;
      this.about = false;
      this.jobs = false;
      this.food = false;
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
  width: 100%;
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
