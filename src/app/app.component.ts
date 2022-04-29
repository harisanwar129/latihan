import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  teks='angular';
  pesan(){
    let tanggal:Date=new Date();
    return `Sekarang adalah tanggal ${tanggal}`;
  }
}
