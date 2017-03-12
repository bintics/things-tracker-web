import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

	public title: string = 'Things Tracker';
	public subtitle: string = 'Map of Things';
	public zoom: number = 14;
	public lat: number = 19.434000;
	public lng: number = -99.145000;

	public markers:marker[] = [
	  {
		  lat: 19.440000,
		  lng: -99.14900,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 19.433858,
		  lng: -99.142000,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 19.423858,
		  lng: -99.145000,
		  label: 'C',
		  draggable: true
	  }
  ]

	constructor() { }

	ngOnInit() {
	}

}


interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}