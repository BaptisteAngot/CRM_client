import { Component, OnInit } from '@angular/core';
import {OrigineService} from '../../Services/origine.service';
import {ProspectService} from '../../Services/prospect.service';
import {generateErrorMessage} from 'codelyzer/angular/styles/cssLexer';

@Component({
  selector: 'app-prospect-add',
  templateUrl: './prospect-add.component.html',
  styleUrls: ['./prospect-add.component.css']
})
export class ProspectAddComponent implements OnInit {
  sendSuccesfull = false;
  prospect: any = {};
  origin: [];
  errors: string = null;

  constructor(private origineService: OrigineService, private prospectService: ProspectService) {
    this.origineService.getAllOrigin().subscribe(value => {
      this.origin = value;
    }, error => {});
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.prospectService.createProspect(this.prospect).subscribe(value => {
      console.log(value);
    }, err => {
      this.errors = err.error.error;
    });
  }
}
