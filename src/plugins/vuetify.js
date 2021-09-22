import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            dark: {
                background: "rgba(115, 98, 66, 0.25)"
            },
        },
    },
});
