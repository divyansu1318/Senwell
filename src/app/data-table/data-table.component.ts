import { Component, OnInit } from '@angular/core';
import { User } from 'src/interface/user.interface';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  data!: User[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiService.get('user').subscribe((data: User[]) => {
      if (data) {
        this.data = data;
        this.data.forEach((element: User) => {
          if (element) {
            element.color = this.getColor(element.duplicateCount);
          }
        });
      }
    })
  }

  getColor(count: number): string {
    if (count > 10) {
      return 'green';
    } else if (count > 2) {
      return 'yellow';
    } else if (count > 0) {
      return 'red';
    } else {
      return 'white';
    }
  }  

}
