import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../Services/token-storage.service';
import {RendezVousService} from '../../Services/rendez-vous.service';

@Component({
  selector: 'app-add-rdv-client',
  templateUrl: './add-rdv-client.component.html',
  styleUrls: ['./add-rdv-client.component.css']
})
export class AddRdvClientComponent implements OnInit {
  id: string;
  data: any;
  idUser: number;
  FormInfos: any = {};

  constructor(private route: ActivatedRoute, private tokenStorage: TokenStorageService, private rdvService: RendezVousService, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.idUser = this.tokenStorage.getUser().userId;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.FormInfos.userIdHost = this.idUser;
    this.FormInfos.clientId = this.id;
    this.rdvService.addRendezVousProspect(JSON.stringify(this.FormInfos)).subscribe(
      data => {
        this.router.navigate(['/prospect/' + this.id]);
      }, err => {
        if (err.status == 200 && err.statusText == 'OK') {
          this.router.navigate(['/client/' + this.id]);
        }
      }
    );
  }

}
