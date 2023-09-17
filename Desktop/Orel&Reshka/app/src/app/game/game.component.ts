import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  result: string | null = null;

  play(userChoice: string) {
    const random = Math.random();
    const computerChoice = random < 0.5 ? 'орел' : 'решка';

    if (userChoice === computerChoice) {
      this.result = 'Вы выиграли!';
    } else {
      this.result = 'Вы проиграли.';
    }
  }
}
