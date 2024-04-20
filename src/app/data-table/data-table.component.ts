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
    this.apiService.get('Senwell').subscribe((data: User[]) => {
      if (data) {
        this.data = this.freqCounter(data);
        this.data.forEach((element: User) => {
          if (element) {
            element.color = this.getColor(element.count);
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

  freqCounter(arr: any) {
    const obj: any = {};

    for (let i = 0; i < arr.length; i++) {
      let el = arr[i].name;
      obj[el] ? (obj[el] += 1) : (obj[el] = 1);
    }

    let countArr = Object.values(obj);
    let nameArr = Object.keys(obj);
    let newArr = [];
    for (let i = 0; i < nameArr.length; i++) {
      newArr.push({ name: nameArr[i], count: countArr[i], color: '' });
    }

    return newArr;
  };

}
