import { Component, OnInit } from '@angular/core';

import { Group, GroupsService }  from './groups.service';

@Component({
  template: `
    <h2>groups component</h2>
        <ul class="items">
            <li *ngFor="let group of groups">
                {{group.name}}
            </li>
        </ul>
  `
})

export class GroupsComponent implements OnInit {
    groups: Group[];

    constructor(
        private groupsService: GroupsService) { }

    ngOnInit() {
        this.groupsService.getGroups().then(groups => this.groups = groups);
    }
}