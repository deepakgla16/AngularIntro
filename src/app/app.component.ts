import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  url="../assets/download.avif"
  
  ngOnInit(): void{
    this.title="hello from bridgeLabz"
  }

  
}
