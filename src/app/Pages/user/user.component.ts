import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {UserService} from '../../Services/user.service';
import {Router} from '@angular/router';
import {User} from '../../Modals/User.interface';


const ELEMENT_DATA: User[] = [];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  implements AfterViewInit {

  displayedColumns: string[] = ['email','last_name','first_name', 'telephone', 'fonction','created_at', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  constructor(private UserService: UserService, private router: Router) {
    UserService.getAllUser().subscribe(
      data => {
        this.dataSource.data = data;
      }, error => {}
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
   // tslint:disable-next-line:typedef
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reloadCurrentRoute(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
