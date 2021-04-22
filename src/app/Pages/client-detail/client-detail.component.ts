import {Component, Input, OnInit} from '@angular/core';
import {ClientService} from '../../Services/client.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  id: string;
  client: any;
  sendSuccesfull = false;
  isEditing = false;
  statusVariable: string;

  // tslint:disable-next-line:max-line-length
  constructor(private ClientService: ClientService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.ClientService.getOneClient(this.id).subscribe(
      data => {
        this.client = data;
        console.log(data);
        this.statusVariable = data.status;
      }, err => {
      });
  }


  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isEditing = false;
    this.ClientService.updateClient(this.client).subscribe(data => {}, error => {});
    setTimeout(() => {
      this.reloadCurrentRoute();
    }, 1000);
  }


  disabledClient(id): void {
    const r = confirm('Êtes vous sûr de vouloir désactiver ce client ?');
    if (r === true) {
      this.ClientService.disabledClient(id).subscribe(value => {
      }, error => {
      });
      setTimeout(() => {
        this.router.navigate(['/client']);
      }, 2000);
    }
  }

  editUser(): void {
    this.isEditing = true;
  }

 
  reloadCurrentRoute(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
