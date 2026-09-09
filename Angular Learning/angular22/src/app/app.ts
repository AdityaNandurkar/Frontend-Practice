import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  name: string = "Aditya";
  age: number = 10;

  srcImg: string = "https://images.unsplash.com/photo-1644088379091-d574269d422f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D";
  alt: string = "Tech image";

  clickMe() {
    this.srcImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ha0zBLnZARKomQQ5odVOiq7Cza2hnPHREMN0OOWHwnL2Qphmol7Gr4g&s=10"
    alert("You have Cliked the button");
  }

  getValue(abc: any) {
    alert(abc);
  }
}
