import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestaurantInfoComponent } from './restaurant-info/restaurant-info.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RestaurantInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swiggyclone';
  
}
