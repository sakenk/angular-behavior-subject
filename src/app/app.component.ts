import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable } from 'rxjs';
import { Thing } from './thing.model';
import { ThingService } from './thing.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private dataSource = new MatTableDataSource<Thing>();

  displayedColumns: string[] = ['a', 'b', 'c'];

  thingsAsMatTableDataSource$: Observable<MatTableDataSource<Thing>> =
    this.thingService.things.pipe(
      map((things) => {
        const dataSource = this.dataSource;
        dataSource.data = things
        return dataSource;
      })
    );

  constructor(private thingService: ThingService) {
    this.update();
  }

  update() {
    this.thingService.updateThings();
  }
}
