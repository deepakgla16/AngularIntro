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

  onInput($event){
    console.log("Chnaged event :",$event.data);
    const nameRegex=RegExp('^[A-z]{1}[a-zA-Z\\s]{2,}$');
    if (nameRegex.test(this.userName)) {
      this.nameError="";
      return;
    }
    this.nameError="Name is incorrect";
  }

  
}
