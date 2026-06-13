import { User } from './models/User';
import { Logger } from './services/Logger';
import { NotificationService } from './services/NotificationService';
import { EmailNotification } from './services/EmailNotification';
import { SMSNotification } from './services/SMSNotification';
import { PushNotification } from './services/PushNotification';

const user = new User('user@example.com', '+1234567890', 'device-token-123');
const logger = new Logger();

const notificationService = new NotificationService();
notificationService.addChannel(new EmailNotification(logger));
notificationService.addChannel(new SMSNotification(logger));
notificationService.addChannel(new PushNotification(logger));

notificationService.notify(user, 'Ваш платіж оброблено успішно!');
