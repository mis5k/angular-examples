import { Component, OnInit} from '@angular/core';

import { Subject, SubjectsService }  from './subjects.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  template: `
  <div>
    <ul class="items">
      <li *ngFor="let subject of subjects" [class.selected]="isSelected(subject)" (click)="onSelect(subject)">
        {{subject.name}}
      </li>
    </ul>
  </div>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./subjects.componet.css']
})

export class SubjectsComponent implements OnInit {
  subjects: Subject[];
  private selectedId: number;

  constructor(
    private subjectsService: SubjectsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
        this.subjectsService.getSubjects().then(subjects => this.subjects = subjects);
  }

  isSelected(subject: Subject) { return subject.id === this.selectedId; }

  onSelect(subject: Subject) {
    this.selectedId = subject.id;
    this.router.navigate([subject.id], { relativeTo: this.route });
  }
}