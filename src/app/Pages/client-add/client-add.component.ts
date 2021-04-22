import { Component, OnInit } from '@angular/core';
import {OrigineService} from '../../Services/origine.service';
import {ClientService} from '../../Services/client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})

export class ClientAddComponent implements OnInit {
  sendSuccesfull = false;
  client: any = {};
  origin: [];
  errors: string = null;

  constructor(private origineService: OrigineService, private ClientService: ClientService, private router: Router) {
    this.origineService.getAllOrigin().subscribe(value => {
      this.origin = value;
    }, error => {});
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.ClientService.createClient(this.client).subscribe(value => {
      this.router.navigate(['/client']);
    }, err => {
      this.errors = err.error.error;
    });
  }
}
