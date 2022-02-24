import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(private listSvc: ListService, public route: ActivatedRoute) {}

  todo: any = {};
  ngOnInit() {
    console.log('in detail component');

    let id = this.route.snapshot.params['id'];

    this.listSvc.getTodo(id).subscribe(
      (response) => {
        this.todo = response;
        console.log(this.todo);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
