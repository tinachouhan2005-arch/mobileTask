import { Component, OnInit ,Input} from '@angular/core';
import { Imob } from 'src/app/module/interfacemoblie';

@Component({
  selector: 'app-mobilecard',
  templateUrl: './mobilecard.component.html',
  styleUrls: ['./mobilecard.component.scss']
})
export class MobilecardComponent implements OnInit {
  @Input() mobileObj ! : Imob
  constructor() { }

  ngOnInit(): void {
  }

}
