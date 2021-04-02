import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {ProspectService} from '../../Services/prospect.service';
import {Router} from '@angular/router';
import {Prospect} from '../../Modals/Prospect.interface';

const ELEMENT_DATA: Prospect[] = [];

@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.component.html',
  styleUrls: ['./prospect.component.css']
})
export class ProspectComponent implements AfterViewInit {

  displayedColumns: string[] = ['mail', 'nom', 'description', 'status', 'created_at', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private prospectService: ProspectService, private router: Router) {
    prospectService.getAllProspect().subscribe(
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

  deleteProspect(id): void {
    const r = confirm('Êtes vous sûr de vouloir supprimer ce prospect ?');
    if (r === true) {
      this.prospectService.deleteProspect(id).subscribe(value => {}, error => {});
      setTimeout(() => {
        this.reloadCurrentRoute();
      }, 2000);
    }
  }

  reloadCurrentRoute(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }


}
