import {Component, Input, OnInit} from '@angular/core';
import {ProspectService} from '../../Services/prospect.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OrigineService} from '../../Services/origine.service';

@Component({
  selector: 'app-prospect-detail',
  templateUrl: './prospect-detail.component.html',
  styleUrls: ['./prospect-detail.component.css']
})
export class ProspectDetailComponent implements OnInit {
  id: string;
  prospect: any;
  sendSuccesfull = false;
  isEditing = false;
  statusVariable: string;

  // tslint:disable-next-line:max-line-length
  constructor(private prospectService: ProspectService, private route: ActivatedRoute, private router: Router, private origineService: OrigineService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.prospectService.getOneProspect(this.id).subscribe(
      data => {
        this.prospect = data;
        this.statusVariable = data.status;
      }, err => {
      });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isEditing = false;
    this.prospectService.updateProspect(this.prospect).subscribe(data => {}, error => {});
    setTimeout(() => {
      this.reloadCurrentRoute();
    }, 1000);
  }

  deleteProspect(id): void {
    const r = confirm('Êtes vous sûr de vouloir supprimer ce prospect ?');
    if (r === true) {
      this.prospectService.deleteProspect(id).subscribe(value => {
      }, error => {
      });
      setTimeout(() => {
        this.router.navigate(['/prospect']);
      }, 2000);
    }
  }

  disabledProspect(id): void {
    const r = confirm('Êtes vous sûr de vouloir désactiver ce prospect ?');
    if (r === true) {
      this.prospectService.disabledProspect(id).subscribe(value => {
      }, error => {
      });
      setTimeout(() => {
        this.router.navigate(['/prospect']);
      }, 2000);
    }
  }

  editUser(): void {
    this.isEditing = true;
  }

  async editStatus(status: string): Promise<void> {
    await this.prospectService.updateStatusProspect(this.id, status).subscribe(data => {
    }, error => {
    });
    this.prospect.status = status;
  }

  reloadCurrentRoute(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
