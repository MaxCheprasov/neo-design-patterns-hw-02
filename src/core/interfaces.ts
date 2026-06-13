export interface IUser {
  email: string;
  phone: string;
  deviceToken: string;
}

export interface ILogger {
  log(message: string): void;
}

export interface INotificationChannel {
  send(user: IUser, message: string): void;
}

export interface INotificationService {
  addChannel(channel: INotificationChannel): void;
  notify(user: IUser, message: string): void;
}
