import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../Services/token-storage.service';
import {RendezVousService} from '../../Services/rendez-vous.service';

@Component({
  selector: 'app-add-rdv',
  templateUrl: './add-rdv.component.html',
  styleUrls: ['./add-rdv.component.css']
})
export class AddRdvComponent implements OnInit {
  id: string;
  data: any;
  idUser: number;
  FormInfos: any = {};

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private tokenStorage: TokenStorageService, private rdvService: RendezVousService, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.idUser = this.tokenStorage.getUser().userId;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.FormInfos.userIdHost = this.idUser;
    this.FormInfos.ProspectId = this.id;
    this.rdvService.addRendezVousProspect(JSON.stringify(this.FormInfos)).subscribe(
      data => {
        this.router.navigate(['/prospect/' + this.id]);
      }, err => {
        if (err.status == 200 && err.statusText == 'OK') {
          this.router.navigate(['/prospect/' + this.id]);
        }
      }
    );
  }
}
