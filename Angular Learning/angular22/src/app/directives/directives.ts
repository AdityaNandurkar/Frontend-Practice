
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { Fruit } from '../models/frutsModel';

@Component({
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  selector: 'app-directives',
  styleUrl: './directives.css',
  templateUrl: './directives.html',
})
export class Directives {
  isVisible: boolean = false;

  age: number = 6;

  fruits: Fruit[] = [
    { name: 'Apple', color: 'Red' },
    { name: 'Banana', color: 'Yellow' },
    { name: 'Grapes', color: 'Purple' },
  ];

  citys: any[] = [
    { id: 1, cName: "Pune", population: "10 lac" },
    { id: 2, cName: "Mumbai", population: "20 lac" },
    { id: 3, cName: "Nashik", population: "30 lac" },
    { id: 4, cName: "Amravati", population: "40 lac" },
  ]


  cricket: any[] = [
    { id: 1, city: "pune", player: "Ruturaj Gaikwad", team: "CSK" },
    { id: 2, city: "Mumbai", player: "Rohit Sharma", team: "Mi" },
    { id: 3, city: "Mumbai", player: "Msd", team: "CSK" },
    { id: 4, city: "Nashik", player: "Virat Kohli", team: "RCB" },
    { id: 5, city: "pune", player: "KL Rahul", team: "LSG" },
    { id: 6, city: "Amravti", player: "Ruturaj Gaikwad", team: "CSK" },
    { id: 6, city: "Amravti", player: "Ruturaj Gaikwad", team: "Pune Boys" },
    { id: 6, city: "Amravti", player: "Ruturaj Gaikwad", team: "Pune Boys" },
  ]
}