import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { TodoComponent } from './Components/todo/todo.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { PostComponent } from './Components/post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterOutlet,
    MatButtonModule,
    ButtonModule,
    TodoComponent,
    PostComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'my-app';
}
