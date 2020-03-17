import { Component, OnInit } from '@angular/core';
import { DeimosService } from "../../services/deimos.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
