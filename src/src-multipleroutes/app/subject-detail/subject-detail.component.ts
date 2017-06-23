import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subject, SubjectsService }  from '../subjects/subjects.service';

@Component({
  template: `
        <h2>subject detail</h2
        <div *ngIf="subject">
            <h3>"{{ subject.name }}"</h3>
        </dib>
    `
})

export class SubjectDetailComponent implements OnInit {
    subject:Subject;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private subjectsService: SubjectsService
    ) {}

    ngOnInit() {
        this.route.params
            .switchMap((params:Params) => this.subjectsService.getSubject(+params['id']))
            .subscribe((subject:Subject) => this.subject = subject );            
    }

}