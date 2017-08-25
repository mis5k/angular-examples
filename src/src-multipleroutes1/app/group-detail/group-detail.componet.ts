import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Group, GroupsService }  from '../groups/groups.service';

@Component({
  template: `
    <div *ngIf="group">
      <ul>
        <li *ngFor="let name of group.member">
            {{name}}
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./group-detail.componet.css']
})

export class GroupDetailComponent implements OnInit {
    group:Group;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private groupsService: GroupsService
    ) {}

    ngOnInit() {
        this.route.params
            .switchMap((params:Params) => this.groupsService.getGroup(+params['id']))
            .subscribe((group:Group) => { this.group = group } );            
    }
}