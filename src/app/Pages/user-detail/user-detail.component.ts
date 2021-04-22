import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../Services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id: string;
  password: string;
  user: any;
  sendSuccesfull = false;
  isEditing = false;
  statusVariable: string;

  constructor(private UserService: UserService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.UserService.getOneUser(this.id).subscribe(
      data => {
        this.user = data;
        console.log(data);
        this.statusVariable = data.status;
      }, err => {
      });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isEditing = false;
    this.user.password = this.user.password;
    this.UserService.updateUser(this.user).subscribe(data => {}, error => {});
    setTimeout(() => {
      this.reloadCurrentRoute();
    }, 1000);
  }


  disabledProspect(id): void {
    const r = confirm('Êtes vous sûr de vouloir désactiver ce user ?');
    if (r === true) {
      this.UserService.disabledUser(id).subscribe(value => {
      }, error => {
      });
      setTimeout(() => {
        this.router.navigate(['/user']);
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
