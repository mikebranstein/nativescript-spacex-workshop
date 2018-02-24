import { Component, OnInit } from "@angular/core";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";  
import "rxjs/add/operator/switchMap";    

import { Launch } from "../../models/launch";
import { LaunchService } from "../../services/launchService";


@Component({
    selector: "detail",
    moduleId: module.id,
    templateUrl: "./detail.component.html",
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
    launch: Launch;

    constructor(
        private routerExtensions: RouterExtensions,
        private pageRoute: PageRoute,
        private launchService: LaunchService) { }

    ngOnInit(): void {
        let id:number;                                        
        this.pageRoute.activatedRoute                         
            .switchMap(activatedRoute => activatedRoute.params) 
            .forEach((params) => {                              
                id = +params["id"];                               
            });                                                 
    
        this.launch = this.launchService.
    }
}