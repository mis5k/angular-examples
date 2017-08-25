import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Group, GroupsService }  from './groups.service';

@Component({
  template: `
    <div>
        <ul class="items">
            <li *ngFor="let group of groups" [class.selected]="isSelected(group)" (click)="onSelect(group)">
                {{group.name}}
            </li>
        </ul>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./groups.componet.css']
})

export class GroupsComponent implements OnInit {
    groups: Group[];
    private selectedId: number;

    constructor(
        private groupsService: GroupsService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.groupsService.getGroups().then(groups => this.groups = groups);
    }

    isSelected(group: Group) { return group.id === this.selectedId; }

    onSelect(group: Group) {
        this.selectedId = group.id; 
        this.router.navigate([group.id], { relativeTo: this.route });
    }

}