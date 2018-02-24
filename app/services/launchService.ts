import { Injectable } from "@angular/core";
import { Launch } from '../models/launch'

@Injectable()
export class LaunchService {
    private launches: Launch[];

    constructor() {
        this.launches = [
            {
                "flight_number": 42,
                "launch_year": "2017",
                "launch_date_utc": "2017-06-23T19:10:00Z",
                "rocket": {
                    "rocket_id": "falcon9",
                    "rocket_name": "Falcon 9",
                },
                "launch_site": {
                    "site_id": "ksc_lc_39a",
                    "site_name": "KSC LC 39A",
                    "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
                },
                "launch_success": true,
                "links": {
                    "mission_patch": "https://i.imgur.com/VAvulaO.png",
                    "article_link": "https://en.wikipedia.org/wiki/BulgariaSat-1",
                    "video_link": "https://www.youtube.com/watch?v=Y8mLi-rRTh8"
                },
                "details": "Second time a booster will be reused: Second flight of B1029 after the Iridium mission of January 2017. The satellite will be the first commercial Bulgarian-owned communications satellite and it will provide television broadcasts and other communications services over southeast Europe."
            },
            {
                "flight_number": 56,
                "launch_year": "2018",
                "launch_date_utc": "2018-02-22T14:17:00Z",
                "rocket": {
                    "rocket_id": "falcon9",
                    "rocket_name": "Falcon 9",   
                }, 
                "launch_site": {
                    "site_id": "vafb_slc_4e",
                    "site_name": "VAFB SLC 4E",
                    "site_name_long": "Vandenberg Air Force Base Space Launch Complex 4E"
                },
                "launch_success": true,
                "links": {
                    "mission_patch": "https://i.imgur.com/6iUJpn4.png",
                    "article_link": "https://spaceflightnow.com/2018/02/22/recycled-spacex-rocket-boosts-paz-radar-satellite-first-starlink-testbeds-into-orbit/",
                    "video_link": "https://www.youtube.com/watch?v=-p-PToD2URA"
                },
                "details": "First flight with fairing 2.0. Will also carry two SpaceX test satellites for the upcoming Starlink constellation."
            }
        ];
    }

    public getUpcoming(): Launch[]{
        return this.launches;
    }

    public getPast(): Launch[]{
        return this.launches;
    }

    public getLaunch(flight_number : number) : Launch {
        let results = this.launches
            .filter((l : Launch) => l.flight_number == flight_number);
        if (results.length > 0) return results[0];
        return null;
    }
}