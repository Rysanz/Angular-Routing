import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  nama: string = 'Made Ary Sanjaya';
  nim: string = '42030063';
  prodi: string = 'Teknologi Informasi';
  innama: string = '';
  innim: string = '';
  inprod: string = '';
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onRata() {
    this.nama = this.innama;
    this.nim = this.innim;
    this.prodi = this.inprod;
  }
}
