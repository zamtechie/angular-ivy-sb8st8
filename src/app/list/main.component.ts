import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from './list.service';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['main.component.css'],
})
export class MainComponent implements OnInit {
  todos: any = [];
  constructor(private listSvc: ListService, private route: Router) {}

  ngOnInit() {
    console.log('In main Component');
    let obs = this.listSvc.getTodos();
    

    let obs1 = obs.pipe(filter(person => person['id'] >= 30));

    obs1.subscribe((response) => console.log('res', response));

    this.listSvc.getTodos().subscribe(
      (response) => {
        this.todos = response;
        // console.log(this.todos[0]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  viewDetail(id: string) {
    this.route.navigate(['/detail', id]);
  }
}
