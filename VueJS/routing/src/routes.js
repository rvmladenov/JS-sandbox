import HomeComponent from './components/Home.vue';
import UserComponent from './components/user/User.vue';

export const routes = [
    { path: '', component: HomeComponent },
    { path: '/user/:idQuery', component: UserComponent, props: true }
    
];