import { Component, OnInit } from '@angular/core';
import { Shows } from '../show';
import { SHOWS } from '../show_list';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  shows = SHOWS;

  constructor() { }

  ngOnInit(): void {
  }

}
