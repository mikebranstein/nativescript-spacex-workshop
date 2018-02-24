import { Component, OnInit } from "@angular/core";
import { Launch } from "../../models/launch";
import { LaunchService } from "../../services/launchService";

@Component({
    selector: "list",
    moduleId: module.id,
    templateUrl: "./list.component.html",
    styleUrls: ['./list.component.css'],
    providers: [LaunchService]
})
export class ListComponent implements OnInit {
    launches: Launch[];

    constructor(private launchService: LaunchService) { }

    ngOnInit(): void {
        this.launches = this.launchService.getPast();
    }
}