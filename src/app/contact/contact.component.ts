import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  // template: `<h2>{{title}}</h2>
  // <ul>
  //     <li *ngFor="let dataalamat of alamat">
  //     {{ dataalamat }}
  //     </li>
  // </ul>`,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // title="Hubungi Kami";
  // alamat=["jl. cipanas no 129","Cianjur","240298"];
  constructor() { }

  ngOnInit(): void {
  }

}
