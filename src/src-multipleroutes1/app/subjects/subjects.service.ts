import { Injectable } from '@angular/core';

export class Subject {
  constructor(public id: number, public name: string, public goal: string, public explanation: string) { }
}

let SUBJECTS = [
  new Subject(11, 'WebRTC', '브라우저에서의 API, 동작 방식 및 프로토콜을 이해한다.'
    ,  `최근에 사파리 브라우저에서도 WebRTC를 지원한다는 공식 발표가 있었습니다. 
        드디어 주요 브라우저는 모두 WebRTC를 지원하게 되었습니다. 때가 무르익었습니다.
        WebRTC는 RTC(Real Time Communication)을 브라우저를 통해서 하자는 것이지요. 
        가장 큰 응용은 화상 전화입니다. 
        브라우저에서 화상 전화를 하기 위해서는 카메라, 마이크에 대한 접근이 가능해야 하며 빠른 통신을 위해서 P2P 통신을 지원해야 합니다. 
        이런 기능을 브라우저에서 할 수 있게 됩니다.
        `),
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