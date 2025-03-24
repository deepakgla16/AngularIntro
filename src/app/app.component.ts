import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  url="../assets/download.avif"
  link="https://www.bridgelabz.com/"
  userName: string=""
  nameError: string=""

  ngOnInit(): void{
    this.title="hello from bridgeLabz"
    
  }

  onClick($event){
    console.log("save button is clicked", $event);
    window.open(this.link,"_blank")
  }

  
}
