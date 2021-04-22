import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rdv-list-component',
  templateUrl: './rdv-list-component.component.html',
  styleUrls: ['./rdv-list-component.component.css']
})
export class RdvListComponentComponent implements OnInit, AfterViewInit {
  @Input() listRendezVous: any;
  @Input() Client: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
