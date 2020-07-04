import { Component, OnInit } from '@angular/core';

import { ToDo } from '../interface/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  toDoArray: ToDo[];
  value: string;
  filterInput: string;
  filteredToDoArray: ToDo[];

  closeBtn(item) {
      item.completed = false;
  }

  constructor() { }

  ngOnInit(): void {
    this.toDoArray = [
      {task: 'Eat greens', completed: true},
      {task: 'Feed kitty', completed: false},
      {task: 'Do yoga', completed: false}, 
      {task: 'Pay bills', completed: false},
      {task: 'Watch anime', completed: true}, 
      {task: 'Water plants', completed: true}
    ]
    this.filteredToDoArray = this.toDoArray;
  }

  filterToDo() { 
    this.filteredToDoArray = this.toDoArray.filter(item => item.task.includes(this.filterInput));
  }

  addTask() { 
    const newToDo : ToDo = {task: this.value, completed: false}
    this.toDoArray.push(newToDo);
  }

  removeTask(item: ToDo, index: number) { 
    this.toDoArray.splice(index, 1);
    this.filteredToDoArray = this.toDoArray;
  }

}