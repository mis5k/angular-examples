import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Group, GroupsService }  from './groups.service';

@Component({
  template: `
    <h2>groups component</h2>
    <ul>
        <li *ngFor="let group of groups" (click)="onSelect(group)">
            {{group.name}}
        </li>
    </ul>
    <router-outlet></router-outlet>
  `
})

export class GroupsComponent implements OnInit {
    groups: Group[];

    constructor(
        private groupsService: GroupsService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.groupsService.getGroups().then(groups => this.groups = groups);
    }


    onSelect(group: Group) {
        console.log("AAAA  : "+group.id);
        this.router.navigate([group.id], { relativeTo: this.route });
    }

}