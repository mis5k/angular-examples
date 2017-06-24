import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subject, SubjectsService }  from '../subjects/subjects.service';

@Component({
  template: `
    <h2>subject detail</h2>
    <div *ngIf="subject">
        <h2>개요</h2>
        <h4>제목: "{{ subject.name}}"</h4>
        <h4>목표: "{{ subject.goal}}"</h4>
        <h2>상세 설명</h2>
        <h4>"{{ subject.explanation}}"</h4>
    </div>
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