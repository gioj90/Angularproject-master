import { Component } from '@angular/core';
import { LogInComponent } from "../log-in/log-in.component";
import { RouterModule } from '@angular/router';
import { RegisterComponent } from "../register/register.component";

@Component({
  selector: 'app-header',
  imports: [RouterModule, LogInComponent, RegisterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeClass = "active"

}
