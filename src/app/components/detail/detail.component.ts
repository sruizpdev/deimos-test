import { Component, OnInit } from '@angular/core';

import { DeimosService } from "../../services/deimos.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  dataDeimos;

  constructor(private deimosService: DeimosService) {}
  ngOnInit() {
    this.deimosService.getDeimosData().subscribe(
      res => {
        this.dataDeimos = res.users;
      },
      err => console.log(err)
    );
  }
}
