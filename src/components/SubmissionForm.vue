<template>
    <div>
        <form @submit.prevent="fakeSubmit" v-if="!sent" name="order-submit">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" name="name" type="text" v-model="form.name" />
                </div>
            </div>

            <div class="field">
                <label class="label">Phone</label>
                <div class="control">
                    <input class="input" name="phone" type="text" v-model="form.phone" />
                </div>
            </div>

            <div class="field">
                <label class="label">Email (optional)</label>
                <div class="control">
                    <input class="input" type="text" name="email" v-model="form.email" />
                </div>

                <div class="field">
                    <label class="label">Address</label>
                    <div class="control">
                        <input class="input" type="text" name="address" v-model="form.address" />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Your requests:</label>
                    <!-- <div class="control">
                    <input class="input text-area" rows="7" type="textarea" v-model="form.text" />
                    </div>-->
                    <b-form-textarea class="text-area" name="text" v-model="form.text" rows="7" />
                </div>

                <div class="field">
                    <label class="label">Delivery</label>
                    <input class="radio" value="delivery" type="radio" v-model="form.delivery" />
                    &nbsp;&nbsp;
                    <span>(£2 charge)</span>
                    <br />
                    <label class="label">Collection</label>
                    <input class="radio" value="collection" type="radio" v-model="form.delivery" />
                </div>
            </div>

            <input
                class="submit-button mt-3 mb-3 is-primary margin-bottom"
                value="Submit request"
                type="submit"
            />
        </form>

        <div v-else class="message">
            <div class="message-header">
                <p class="no-margin-bottom">Submission successful!</p>
            </div>
            <div class="message-body">
                <p>Thanks {{form.name}}!</p>

                <p class="no-margin-bottom">We will be in touch with you as soon as possible.</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                phone: "",
                address: "",
                text: [],
                delivery: "delivery"
            },
            showSubmitFeedback: false,
            sent: false
        };
    },
    methods: {
        fakeSubmit(e) {
            e.preventDefault();
            const scriptURL =
                "https://script.google.com/macros/s/AKfycbx-XHyhATjzzD3NcVjIGq-yEb4NUpBonKLwHry5fZhrBgZ7QNk/exec";


    console.log(new FormData(e.target));
    debugger;

            fetch(scriptURL, {
                method: "POST",
                body: new FormData(e),
                processData: false,
                contentType: false
            })
                .then(response => console.log("Success!", response))
                .catch(error => console.error("Error!", error.message));
        }
    }
};
</script>

<style scoped>
.margin-bottom {
    margin-bottom: 15px;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.input,
.text-area {
    width: 500px;
    margin-bottom: 20px;
}

.label {
    font-weight: bold;
}

.submit-button {
    background-color: #fde7e5 !important;
    border: solid 1px darkgrey;
    font-size: 22px;
    border-radius: 3px;
}

.message {
    background-color: #f5fffd;
}

.message-header {
    background-color: #00d1b2;
    color: #fff;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 3px 3px 0 0;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 1.25;
    padding: 0.5em 0.75em;
    position: relative;
}

.message-body {
    border-color: #00d1b2;
    color: #021310;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    color: #4a4a4a;
    padding: 1em 1.25em;
}

.no-margin-bottom {
    margin-bottom: 0;
}
</style>