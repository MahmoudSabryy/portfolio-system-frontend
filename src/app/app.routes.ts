import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Education } from './education/education';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { Experience } from './experience/experience';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: Home,
    title: 'Home',
  },
  { path: 'about', component: About, title: 'About' },
  { path: 'education', component: Education, title: 'Education' },
  { path: 'skills', component: Skills, title: 'Skills' },
  { path: 'projects', component: Projects, title: 'Projects' },
  { path: 'contact', component: Contact, title: 'Contact' },
  { path: 'experience', component: Experience, title: 'Experience' },
  { path: 'dashboard', component: Dashboard, title: 'Admin Dashboard' },
];
