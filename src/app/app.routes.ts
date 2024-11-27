import { Routes } from '@angular/router';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';

export const routes: Routes = [{
  path: 'checkout',
  component: CheckoutPageComponent,
}, {
  path: '',
  redirectTo: '/checkout',
  pathMatch: 'full',
}];
