import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Launch } from "../../models/launch";
import { Links } from "../../models/links";
import { LaunchService } from "../../services/launchService";


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
        console.log("on init");
        const flightNumber = +this.route.snapshot.params["id"];
        console.log(flightNumber);
        this.launch = this.launchService.getLaunch(flightNumber);
    }
}