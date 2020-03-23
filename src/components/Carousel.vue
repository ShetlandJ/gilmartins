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
                    <b-row>
                        <b-col>
                            <b-nav fill tabs class="nav mb-2 mt-2">
                                <b-nav-item @click="menu('home')" :active="home">Home</b-nav-item>
                                <b-nav-item @click="menu('faq')" :active="home">FAQ</b-nav-item>
                            </b-nav>
                        </b-col>
                    </b-row>
                    <div v-if="home">
                        <h2>Community update:</h2>

                        <p>
                            At Gilmartin's we take pride in being a local business and supporting local suppliers as
                            well as the community. We are adapting to the ongoing situation regarding coronavirus
                            to look after our staff but also to provide a much-needed service to Stewarton and
                            beyond. We launched this earlier this week and are continually evolving the system to
                            serve the community as best we can.
                        </p>

                        <h2>What you need to know:</h2>

                        <p>
                            We have now closed our sit-in service and have repurposed the space to enable us to
                            act as a supermarket, selling catering sized foods to our customers.
                            We are taking orders for collection or delivery to primarily the East Ayrshire area.
                        </p>

                        <h2>How to order from us:</h2>

                        <p>
                            We have created our price list which you can
                            <a
                                href="https://drive.google.com/file/d/1hSYfauLmBsOS9ZW3VHWyGwnrNeksbFxZ/view?usp=sharing"
                                target="_blank"
                            >access here</a>. We will be updating this
                            regularly and the list details the key items we can source for you such as: fruit, veg, meat,
                            dairy, pulses, pasta, baking goods etc. We can sell also sell products, such as flour, by
                            weight.
                        </p>

                        <p>Unfortunately, we cannot order toiletries, nappies, and other non-food items.</p>

                        <p>
                            To order, please view the
                            <a
                                href="https://drive.google.com/file/d/1hSYfauLmBsOS9ZW3VHWyGwnrNeksbFxZ/view?usp=sharing"
                                target="_blank"
                            >price list</a> and then complete the order form below with the
                            exact details of the items you need as they appear on the list. For example:
                        </p>

                        <ul>
                            <li>1 Pint Whole Mossgiel Milk</li>
                            <li>1 Brakes Honey Roast Ham</li>
                            <li>2 Penne Pasta</li>
                        </ul>

                        <p>
                            We will accept orders until
                            <b>4pm</b> each day.
                        </p>

                        <p>
                            As of 23 March we are a
                            <b>delivery only</b> operation. Delivery is currently
                            <b>£2</b> if you are less than 8 miles from the cafe, otherwise it will
                            <b>£4</b>
                            .
                        </p>
                        <h2>How do I pay:</h2>

                        <p>We will text you a payment link when we have your order is ready, to avoid any contact.</p>
                        <hr />
                        <p>
                            Once we receive it your order will be ready for delivery within 2 days. So, for example, an
                            order we receive on Monday will be ready to be delivered on the Wednesday.
                        </p>

                        <p>
                            We hope you understand that we are processing and fulfilling these orders as fast as we
                            can order from our network of suppliers who are working very hard at this time too.
                        </p>

                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSfHWcbLgXXk2JBboNPv-TyVN_HpVOG7BU0AJxx9GpreKvZP1w/viewform?embedded=true"
                            width="640"
                            height="1153"
                            frameborder="0"
                            marginheight="0"
                            marginwidth="0"
                            id="google-form"
                            @load="moveToTop"
                            @change="changed"
                        >Loading…</iframe>
                    </div>
                    <div v-else>
                        <div v-for="(faq, index) in faqs" :key="index">
                            <h2>{{faq.title}}</h2>
                            <p>{{faq.body}}</p>
                        </div>
                    </div>
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
            faq: false,
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
            faqs: [
                {
                    title: "Can you source...?",
                    body:
                        "We are baking items ourselves and working with our network of suppliers to offer as wide a food range as possible. We will update our price list with new products when we can but cannot order specific items. If there is a product you particularly need, send it as a request and if there is enough demand, we will try to order it."
                },
                {
                    title: "Have you received my order?",
                    body:
                        "Every order that gets placed on the website is stored in a spreadsheet and the team works through the spreadsheet in order of when the message was sent. We definitely have received your request, but we're limited in how quickly we can respond. Please be patient with us while we manage this process."
                },
                {
                    title: "How do I order?",
                    body:
                        "To order, head on over to the home page, check out the price list and complete the form at the bottom of the page. Please read the information on the home page, as incomplete or incorrectly formatted orders delay our team and require us to contact you instead of just being able to focus on energies on getting your order together."
                },
                {
                    title: "When will I receive my order?",
                    body:
                        "Once we receive it your order will be ready for collection within 2 days. So, for example, an order we receive on Monday will be ready for you to collect or be delivered on the Wednesday. We hope you understand that we are processing and fulfilling these orders as fast as we can order from our network of suppliers who are working very hard at this time too. In some circumstances, orders may be available for next day delivery of collection but that depends on us having the items in stock."
                },
                {
                    title: "How do I pay?",
                    body:
                        "We will be accepting contactless payment when we deliver your items, or when you collect them at the bakery."
                },
                {
                    title: "Will I get everything I order?",
                    body:
                        "These are challenging times for the food industry, and we will endeavour to get you everything you order. If we are unable to get something, we will offer you a substitution which you are welcome to reject."
                },
                {
                    title: "I am self-isolating, can I order?",
                    body:
                        "If you are self-isolating, we can still deliver to you but we will ask you to call us so we can take payment over the phone to avoid contact/transmission risk."
                }
            ],
            today: new Date(),
            triggeredEvents: 0
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
    mounted() {
        window.scrollTo(0, 0);
    },
    methods: {
        changed() {
            debugger;
        },
        moveToTop() {
            if (this.triggeredEvents > 0) {
                const element = document.getElementById("google-form");
                const y = element.getBoundingClientRect().top + window.scrollY;

                window.scroll({
                    top: y,
                    behavior: "smooth"
                });
            } else {
                this.triggeredEvents++;
            }
        },
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
            } else if (type == "faq") {
                this.faq = true;
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
            this.faq = false;
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
