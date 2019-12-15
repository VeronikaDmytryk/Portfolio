import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: "portfolioPipe",
    pure: false
})

export class PortfolioPipe implements PipeTransform {
    transform(projects: Array<any>, arg: any) {
        if(!arg){
            return projects;
        }
        if (typeof projects === 'object') {
            let arrayOfProjects = projects;
            return arrayOfProjects.filter(project => project.type == arg);
        }
        else {
            return null;
        }
    }
} 