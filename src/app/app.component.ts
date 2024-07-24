import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eslint-demo';

  verdeSLS!: string;
  data!: any; /* eslint-disable-line @typescript-eslint/no-explicit-any */
  sayHello(methodParam: number): void {
    console.log(methodParam);
    const requestData = {
      A: 'a',
      B: 'b'
    }
    console.log(requestData);
  }
}

export class StudentCorner {

}
