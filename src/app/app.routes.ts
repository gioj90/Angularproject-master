import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HotelsComponent } from './hotels/hotels.component';

export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:"full"},

    // {path:"home", component:HomeComponent},
    // {path:"main", component:MainComponent},
    // {path:"hotels", component:HotelsComponent},
    {
        path: "home",
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: "rooms",
        loadComponent: () => import('./rooms/rooms.component').then(m => m.RoomsComponent)
    },
    {
        path: "booked-rooms",
        loadComponent: () => import('./booked-rooms/booked-rooms.component').then(m => m.BookedRoomsComponent)
    },
    {
        path: "details/:id",
        loadComponent: () => import('./details/details.component').then(m => m.DetailsComponent)
    },
    {
        path: "hotels",
        loadComponent: () => import('./hotels/hotels.component').then(m => m.HotelsComponent)
    },
 





    {path:"**", component:ErrorComponent}
];
