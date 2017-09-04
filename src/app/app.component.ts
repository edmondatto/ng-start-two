import { Component } from '@angular/core';

export class User {
  id: number;
  name: string;
  username: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  message =  'Hello Kitty';
  users: User[] = [
    {id: 1, name: 'Edmond', username: 'vortex'},
    {id: 2, name: 'Oscar', username: 'latigo'},
    {id: 3, name: 'David', username: 'jacket'}
  ];
  activeUser: User;
  selectUser(user) {
    this.activeUser = user;
    console.log(this.activeUser);
  }

  onUserCreated(event) {
    console.log(event);
    this.users.push(event.user);
  }
}
