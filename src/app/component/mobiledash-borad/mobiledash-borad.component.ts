import { Component, OnInit } from '@angular/core';
import { mobileArr } from 'src/app/const/mobile';
import { Imob } from 'src/app/module/interfacemoblie';


@Component({
  selector: 'app-mobiledash-borad',
  templateUrl: './mobiledash-borad.component.html',
  styleUrls: ['./mobiledash-borad.component.scss']
})
export class MobiledashBoradComponent implements OnInit {
  mobilesArr:Array<Imob>=mobileArr
  constructor() { }

  ngOnInit(): void {
  }

}
