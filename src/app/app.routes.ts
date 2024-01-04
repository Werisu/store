import { Route } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HelloWorldComponent,
  },
  {
    path: 'products',
    loadChildren: () => import('@store/products').then((m) => m.productsRoutes),
  },
];
