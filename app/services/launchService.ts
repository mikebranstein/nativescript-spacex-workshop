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
            }
        ];
    }

    public getUpcoming(): Launch[]{
        return this.launches;
    }

    public getPast(): Launch[]{
        return this.launches;
    }
}