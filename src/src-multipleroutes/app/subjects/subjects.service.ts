import { Injectable } from '@angular/core';

export class Subject {
  constructor(public id: number, public name: string, public goal: string, public explanation: string) { }
}

let SUBJECTS = [
  new Subject(11, 'WebRTC', '브라우저에서의 API, 동작 방식 및 프로토콜으 이해한다.'
    , '최근에 사파리 브라우저에서도 WebRTC를 지원한다는 공식 발표가 있었습니다. 드디어 주요 브라우저는 모두 WebRTC를 지원하게 되었습니다.'),
  new Subject(12, 'TypeScript', null, null),
  new Subject(13, 'Bash', null, null)
];

@Injectable()
export class SubjectsService {
  getSubjects() { return Promise.resolve(SUBJECTS); }

  getSubject(id: number | string) {
    return Promise.resolve(SUBJECTS)
      .then(subjects => subjects.find(subject => subject.id === +id));
  }
}