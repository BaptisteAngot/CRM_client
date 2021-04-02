import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../Services/token-storage.service';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  userToken: any;
  user: any;
  isEdit: boolean;

  constructor(private tokenStorage: TokenStorageService, private userService: UserService) {
    this.userToken = tokenStorage.getUser();
    userService.getInfoUser(this.userToken.userId).subscribe(
      data => {
        this.user = data;
      }, error => {

      }
    );
  }

  ngOnInit(): void {
  }

  clickEdit(): void {
    this.isEdit = true;
  }

}
