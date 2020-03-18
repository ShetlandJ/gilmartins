<template>
    <div>
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <b-img class="ma-0 pa-0 logo" :src="require('../assets/gilm.png')" fluid-grow />
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <h5>01560 482546 • 2 Avenue Square, Stewarton</h5>
                </b-col>
            </b-row>

            <template v-if="!coronavirus">
                <b-row>
                    <b-col>
                        <b-link href="https://www.facebook.com/gilmartinsbakery" target="blank">
                            <b-img
                                class="social-icon mr-2 mt-2 mb-2"
                                :src="require('../assets/soc_fb.png')"
                            />
                        </b-link>

                        <b-link href="https://www.instagram.com/gilmartins_bakery" target="blank">
                            <b-img
                                class="social-icon ml-2 mt-2 mb-2"
                                :src="require('../assets/soc_ig.png')"
                            />
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
            </template>

            <template v-else>
                <div class="text-left">
                    <h2>Coronavirus update:</h2>

                    <p>Gilmartin's is adapting to the ongoing situation regarding coronavirus. We have closed our sit-in service for the moment and are instead focusing on take-aways and acting as a supermarket, selling catering-sized food, like pasta, chicken, bacon and cheese.</p>

                    <p>We are taking orders and delivering to primarily the East Ayrshire area.</p>
                    <p>
                        <b>What we can get: fruit, veg, meat, dairy, pulses, pasta, baking goods etc. We can sell things like flour by weight.</b>
                    </p>
                    <p>
                        <b>What we cannot get: toiletries, nappies, and other non-food items.</b>
                    </p>

                    <h3><a href="https://drive.google.com/file/d/1hSYfauLmBsOS9ZW3VHWyGwnrNeksbFxZ/view?usp=sharing" target="_blank">See price list</a></h3>

                    <p>If you would like request an order, please complete the below form and we'll be in touch with you ASAP:</p>



                    <!-- <submission-form /> -->

                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfHWcbLgXXk2JBboNPv-TyVN_HpVOG7BU0AJxx9GpreKvZP1w/viewform?embedded=true" width="640" height="1153" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </template>
        </b-container>

        <template v-if="!coronavirus">
            <b-container v-if="home">
                <b-img class="bread" :src="require('../assets/bread.jpg')" />

                <h4
                    class="mt-3"
                >A cafe and bakery serving breakfast, brunch, lunch and amazing cakes.</h4>

                <h5 class="mt-3">2 Avenue Square, KA3 5AB</h5>

                <a href="mailto:steph@gilmartinsbakery.com">
                    <h4 class="email mt-2">steph@gilmartinsbakery.com</h4>
                </a>
            </b-container>
        </template>

        <About v-if="about" />

        <JobsPage v-if="vacancies" />

        <FoodMenu v-if="food" />
    </div>
</template>

<script>
import About from "./About.vue";
import JobsPage from "./JobsPage.vue";
import FoodMenu from "./FoodMenu.vue";
import SubmissionForm from './SubmissionForm.vue';

export default {
    data() {
        return {
            home: true,
            form: {
                name: "",
                phone: "",
                email: "",
                request: "",
                delivery: ""
            },
            about: false,
            jobs: false,
            food: false,
            vacancies: false,
            coronavirus: true,
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
        FoodMenu,
        SubmissionForm,
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

.logo {
    width: 75% !important;
}
</style>
