import { Component, OnInit} from '@angular/core';

import { Subject, SubjectsService }  from './subjects.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  template: `
  <h2>subjects component</h2>
  <ul>
    <li *ngFor="let subject of subjects" (click)="onSelect(subject)">
      {{subject.name}}
    </li>
  </ul>
  <router-outlet></router-outlet>
  `
})

export class SubjectsComponent implements OnInit {
  subjects: Subject[];

  constructor(
    private subjectsService: SubjectsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
        this.subjectsService.getSubjects().then(subjects => this.subjects = subjects);
  }

  onSelect(subject: Subject) {
   // this.router.navigate(['/detail']);
    this.router.navigate([subject.id], { relativeTo: this.route });
  }
}