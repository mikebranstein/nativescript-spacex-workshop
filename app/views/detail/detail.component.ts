import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Launch } from "../../models/launch";
import { Links } from "../../models/links";
import { LaunchService } from "../../services/launchService";

import * as utils from "utils/utils";

@Component({
    selector: "detail",
    moduleId: module.id,
    templateUrl: "./detail.component.html",
    styleUrls: ['./detail.component.css'],
    providers: [LaunchService]
})
export class DetailComponent implements OnInit {
    launch: Launch;

    constructor(
        private route: ActivatedRoute,
        private launchService: LaunchService) { }

    ngOnInit(): void {
        const flightNumber = +this.route.snapshot.params["id"];
        //this.launch = this.launchService.getLaunch(flightNumber);

        this.launchService.getLaunchFromApi(flightNumber).subscribe(model => {
            if (!model.links.mission_patch.includes('https'))
                model.links.mission_patch = model.links.mission_patch.replace('http', 'https'); // quick fix
            
            this.launch = model;
        });
    }

    onLinkTap(link: string) : void {
        utils.openUrl(link);
    }
}