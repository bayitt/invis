import { createApp } from 'vue'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter, faSquareTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUpRightFromSquare, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faUpRightFromSquare, faCircleCheck, faCircleXmark, faGithub, faTwitter, faSquareTwitter, faLinkedin);

const app = createApp(App)

app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount('#app')
