import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "sanctionable"
}) export class SanctionablePipe implements PipeTransform {
    
    
    transform(value: any, ...args: any[]) {
        switch(value) {
            case "T":
                return "Si";
            case "F":
                return "No";
            default:
                return "--";
        }
    }
    
}



