import { Component, OnInit } from '@angular/core';
import {StatistiquesService} from '../../Services/statistiques.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  numberClientTotal: number;
  numberClient: number;
  numberProspect: number;
  stats: any;

  constructor(private statistic: StatistiquesService) {
    this.statistic.getNumberAllClient().subscribe(data => {
      this.numberClientTotal = data;
    }, error => {

    });
    this.statistic.getNumberClient().subscribe(data => {
      this.numberClient = data;
    }, error => {

    });
    this.statistic.getNumberProspects().subscribe(data => {
      this.numberProspect = data;
    }, error => {

    });
    this.statistic.getNumberProspectsStats().subscribe(data => {
      this.stats = data;
    }, error => {

    });

  }

  ngOnInit(): void {
  }

}
