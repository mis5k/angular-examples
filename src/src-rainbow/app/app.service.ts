import { Injectable } from '@angular/core';

export class Colour {
  constructor(public id: string, public code: string) { }
}

let RAINBOW = [
  new Colour('p1', 'red'),
  new Colour('p2', 'orange'),
  new Colour('p3', 'yellow'),
  new Colour('p4', 'green'),
  new Colour('p5', 'blue'),
  new Colour('p6', 'navy'),
  new Colour('p6', 'purple')
];

let rainbowPromise = Promise.resolve(RAINBOW);


@Injectable()
export class AppService {

    getColors() { return rainbowPromise; }
}