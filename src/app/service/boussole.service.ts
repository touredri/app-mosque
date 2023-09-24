import { Injectable } from "@angular/core";
import { DeviceOrientation,DeviceOrientationCompassHeading} from '@ionic-native/device-orientation/ngx';
import { Observable } from 'rxjs';


@Injectable({
    providedIn:'root'
})
export class BoussoleService{

    constructor(private deviceOrientation: DeviceOrientation) { }

    startWatching(): Observable<DeviceOrientationCompassHeading> {
        const data = this.deviceOrientation.watchHeading();
        console.log('Data from startWatching:', data);
        return data;
      }

}