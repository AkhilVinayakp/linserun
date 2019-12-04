import { Component, OnInit } from '@angular/core';
import { dataFrm } from '../../models/dataFreame'
var shell=require("shelljs")
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  btn={
     text:"click here"
    }
   lin:dataFrm
     
     action:string="Command";
  constructor() { 
    
    console.log("hai  ")
  }

  ngOnInit(): void { }

  //trigger when a change in the text box happens
  performAct() :void{
    //checking whether it is a search action or commmand running option is currently active
    if(this.action=="Command")
      {
        this.executeShell_script()
        console.log(this.action)
      }
    else if(this.action=="search")
    {
        this.executeSearch_item()
    }
  }


  executeShell_script()
  {
    console.log("trigger ok run command history and doc search");

  }
  test()
  {
    console.log(this.action);
  }


  executeSearch_item()
  {
    console.log("trigger ok perform search");
  }
  lin_run_cmd()
  {
    
  }

}
