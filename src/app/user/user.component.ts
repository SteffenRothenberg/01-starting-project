import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users'; 
// der doppelte Punkt beim aufrufen des dummy user arrays sorgt dafür das wir in der projektstruktur eine eben höher danach suchen

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)  
// die .floor Funktion gibt einen Integer gleich groß oder kleiner als die Anzahl an Usern in unserem Array wieder
// die .random Funktion ruft nun eine zufällige Position in unseren Array auf

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex]     
  // die oben geschriebene Konstante wird hier nun anstelle einer statischen Zahl verwendet und macht die auswahl> dynamisch/zufällig
}
