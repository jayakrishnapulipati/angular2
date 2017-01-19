import { Injectable } from '@angular/core';

export class Hero {
  constructor(public id: number, public name: string) {
    console.log('jk')
  }
}

const HEROES: Hero[] = [
  new Hero(1, 'JavaScript'),
  new Hero(2, 'AngularJS'),
  new Hero(3, 'Angular2')
];

/*const HEROES = [
  {id: 1, name: 'JavaScript'}
];*/

@Injectable()
export class HeroService {
  constructor() {}
  getHeroes() {
    return HEROES;
  }
}
