import { createApp } from 'vue'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faSquareTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faGithub, faSquareTwitter, faLinkedin);

const app = createApp(App)

app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount('#app')
