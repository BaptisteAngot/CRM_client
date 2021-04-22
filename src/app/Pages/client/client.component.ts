import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {ClientService} from '../../Services/client.service';
import {Router} from '@angular/router';
import {Client} from '../../Modals/Client.interface';

const ELEMENT_DATA: Client[] = [];

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements AfterViewInit {

  displayedColumns: string[] = ['mail', 'nom','prenom','fonction', 'telephone', 'created_at', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private clientService: ClientService, private router: Router) {
    clientService.getAllClient().subscribe(
      data => {

        this.dataSource.data = data.filter(this.filter);
      }, error => {}
    );
  }
  filter(element): any {
    if (element.disabled === false) {
      return element;
    }
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

  disabledClient(id): void {
    const r = confirm('Êtes vous sûr de vouloir désactiver ce client ?');
    if (r === true) {
      this.clientService.disabledClient(id).subscribe(value => {
      }, error => {
      });
      setTimeout(() => {
        this.router.navigate(['/client']);
        window.location.reload();
      }, 2000);
    }
  }
}
