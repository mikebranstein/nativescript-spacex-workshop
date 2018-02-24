import { Injectable } from "@angular/core";
import { Launch } from '../models/launch'

@Injectable()
export class ItemService {
    private launches: Launch[];
}