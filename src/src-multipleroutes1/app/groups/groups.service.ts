import { Injectable } from '@angular/core';

export class Group {
  constructor(public id: number, public name: string, public member: string[]) { }
}

let GROUPS = [
  new Group(11, '최신 웹 개발', ['강현아', '지종현', '조재영', '최가희', '박진아', '김미소', '강명진']),
  new Group(12, '리눅스 네트워크', []),
  new Group(13, 'CSS 이해', [])
];

@Injectable()
export class GroupsService {
  getGroups() { return Promise.resolve(GROUPS); }
  
  getGroup(id: number | string) {
    return Promise.resolve(GROUPS)
      .then(groups => groups.find(group => group.id === +id));
  }
}