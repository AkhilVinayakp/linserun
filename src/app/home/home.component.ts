import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  btn={
     text:""
    }
  val:any="tesrtrtrtr"
  action:any
  constructor() { 
    this.btn.text="click here"
    console.log("hai  ")
    console.log(this.val)
  }

  ngOnInit(): void { }

}
