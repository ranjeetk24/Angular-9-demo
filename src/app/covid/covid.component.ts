import { Component, OnInit } from '@angular/core';
import { Covid } from '../model/covid.model';
import { MatTableDataSource } from '@angular/material/table';
import { CovidService } from '../services/covid.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  COVID_DATA: Covid[];
  displayedColumns: string[] = ['country', 'cases'];
  datasource = new MatTableDataSource<Covid>(this.COVID_DATA);

  constructor(private service: CovidService) { }

  ngOnInit(): void {
    this.getCovidReport();
  }

  public getCovidReport() {
    const data = this.service.getCovid19Report();
    data.subscribe(report => this.datasource.data = report as Covid[]);
  }
}
