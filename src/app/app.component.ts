import { Component, OnInit } from "@angular/core";
import { DeimosService } from "./services/deimos.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  dataDeimos;

  constructor(private deimosService: DeimosService) {}
  ngOnInit() {
    this.deimosService.getDeimosData().subscribe(
      res => {
        console.log(res);
        this.dataDeimos = res;
      },
      err => console.log(err)
    );
  }
}
