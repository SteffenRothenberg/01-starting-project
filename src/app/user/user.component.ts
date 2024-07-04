import { Component, Input, computed, input} from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }
  
  onSelectUser() {}
}
