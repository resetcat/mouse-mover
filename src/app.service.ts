import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import * as robot from 'robotjs';

@Injectable()
export class AppService {
  constructor() {
    setTimeout(() => {
      this.getMouseCoords();
    }, 500);
  }
  getHello(): string {
    return 'Hello World!';
  }
  // @Cron('*/20 * * * * *')
  public async azkorFarm() {
    try {
      robot.setMouseDelay(500);
      const azkorCord = { x: -603, y: 1017 };
      const enemy = { x: -612, y: 827 };

      const healer = { x: -780, y: 923 };
      const healButton = { x: -612, y: 1593 };
      const endTurnButton = { x: -246, y: 1618 };

      robot.moveMouse(azkorCord.x, azkorCord.y);
      robot.mouseClick();
      await this.delay(500);

      robot.moveMouse(enemy.x, enemy.y);
      robot.mouseClick();
      await this.delay(500);

      robot.moveMouse(healer.x, healer.y);
      robot.mouseClick();
      await this.delay(500);

      robot.moveMouse(healButton.x, healButton.y);
      robot.mouseClick();
      await this.delay(500);

      robot.moveMouse(azkorCord.x, azkorCord.y);
      robot.mouseClick();
      await this.delay(500);

      robot.moveMouse(endTurnButton.x, endTurnButton.y);
      robot.mouseClick();
      robot.mouseClick();

      console.log('done');
    } catch (error) {
      console.error('Error with robotjs:', error);
    }
  }

  public getMouseCoords() {
    const position = robot.getMousePos();
    console.log(position);
  }

  private async delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
