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
    launches: Launch[] = [];
    upcoming: Launch[] = [];
    past: Launch[] = [];

    constructor(private launchService: LaunchService) { }

    ngOnInit(): void {
        this.launches = this.launchService.getPast();

        this.launchService.getUpcomingFromApi().subscribe(data => {
            data.forEach((model) => {
                this.upcoming.push(model);
            });
        });

        this.launchService.getPastFromApi().subscribe(data => {
            data.forEach((model) => {   
                
                if (!model.links.mission_patch.includes('https'))
                    model.links.mission_patch = model.links.mission_patch.replace('http', 'https'); // quick fix
                
                this.past.push(model);
            });
        });
    }
}