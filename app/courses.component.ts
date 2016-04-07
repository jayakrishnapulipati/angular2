/**
 * Created by Jayakrishna on 4/7/2016.
 */
import {Component} from 'angular2/core'
import {CoursesService} from './courses.service'

@Component({
    selector: 'courses',
    template: `
    		<h3>Courses</h3>
    		{{ title }}
    		<ul>
    			<li *ngFor="#course of courses">
    				{{ course }}
    			</li>
    		</ul>
    		`,
	providers: [CoursesService]
})

export class CoursesComponent {
	title: string = 'These are the courses which were available',
	courses: string[];

	constructor(coursesService: CoursesService) {
		this.courses = coursesService.getCourses();
	}
}
