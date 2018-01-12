import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RepertoireComponent } from './repertoire/repertoire.component';
import { ProjectsComponent } from './projects/projects.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'repertoire',
    component: RepertoireComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
];
