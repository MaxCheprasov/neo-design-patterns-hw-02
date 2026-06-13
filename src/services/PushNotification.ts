import { INotificationChannel, IUser, ILogger } from '../core/interfaces';

export class PushNotification implements INotificationChannel {
  constructor(private logger: ILogger) {}

  send(user: IUser, message: string): void {
    this.logger.log(`Sending PUSH to ${user.deviceToken}`);
    console.log(`Push sent to ${user.deviceToken}: ${message}`);
  }
}
