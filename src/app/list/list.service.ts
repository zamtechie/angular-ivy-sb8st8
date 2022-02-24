import { Injectable } from '@angular/core';
import { EndpointService } from '../endpoint.service';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  ROOT_URL: string = 'https://jsonplaceholder.typicode.com/';
  constructor(private endpointSvc: EndpointService) {}

  getTodos() {
    return this.endpointSvc.get(`${this.ROOT_URL}todos`);
  }

  getTodo(id: string) {
    return this.endpointSvc.get(`${this.ROOT_URL}todos/${id}`);
  }
}
