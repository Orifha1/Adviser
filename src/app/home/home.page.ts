import { Component } from '@angular/core';
//import { from } from 'rxjs';
import {AdviceService} from '../advice.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  advice = ""
  url: 'https://api.adviceslip.com/advice';
  constructor(private AdviceService:AdviceService) {}
    
  adviceBtnClicked(){
    this.AdviceService.getAdvice(this.url).subscribe( adviced =>{
    this.advice = adviced['slip'];
    })
  // loadAdvice (){
  //   console.log("We made it");
  //   //console.log(adviced)
  // }
    //this.loadAdvice ()
  }

}
