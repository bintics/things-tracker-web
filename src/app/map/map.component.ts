import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

	public title: string = 'Dispositivos conectados a la red';
	public subtitle: string = 'Rastreo de dispositivos';
	public zoom: number = 14;
	//public lat: number = 19.434000;
	//public lng: number = -99.145000;
	/*
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
  	*/

  	devices: FirebaseListObservable<any[]>;
  	infoLocation: any;

	constructor(af: AngularFire) {

		let clientName:string = 'pgj';
		let locate:string = 'locatecdmx';

		let urlInfoLocation = 'clients/' + clientName + '/locates/' + locate;
		let urlDevices = 'clients/' + clientName + '/locates/' + locate + '/devices';

		af.auth.login(AppUserCredentials).then(a => {
			this.infoLocation = af.database.object(urlInfoLocation);
			this.devices = af.database.list(urlDevices);
		}).catch(a => {
			console.log('Error');
		});
	}

	ngOnInit() {
	}

}

const AppUserCredentials = {
	email: 'tracker-test@bintics.com',
	password: 'tracker'
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}