import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
<<<<<<< HEAD
    selector: 'app-root',
      imports: [RouterOutlet],
        templateUrl: './app.html',
          styleUrl: './app.css'
          })
          export class App {
            protected readonly title = signal('Gyana');
            }
=======
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('basic_concepts');
  name="gyana"
  x=5
  y=10
}
>>>>>>> 1c7a7e8 (.)
