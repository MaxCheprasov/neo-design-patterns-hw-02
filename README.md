# Домашнє завдання — Тема 2. Принципи проєктування SOLID

Архітектурний рефакторинг системи повідомлень із застосуванням усіх п'яти принципів SOLID у TypeScript.

## Що реалізовано

Вихідна система порушувала SOLID — клас `User` сам надсилав повідомлення через if/else по типах каналів. Після рефакторингу:

| Принцип | Як застосовано |
|---|---|
| **SRP** | `User` лише зберігає дані; `NotificationService` лише надсилає |
| **OCP** | Новий канал — новий клас, без змін у `NotificationService` |
| **LSP** | `Email`, `SMS`, `Push` взаємозамінні через `INotificationChannel` |
| **ISP** | Окремі інтерфейси `INotificationChannel` та `ILogger` |
| **DIP** | `NotificationService` та сервіси залежать від абстракцій, не від конкретик |

## Структура проєкту

```
src/
├── core/
│   └── interfaces.ts        # IUser, ILogger, INotificationChannel, INotificationService
├── models/
│   └── User.ts
├── services/
│   ├── Logger.ts
│   ├── NotificationService.ts
│   ├── EmailNotification.ts
│   ├── SMSNotification.ts
│   └── PushNotification.ts
└── main.ts
```

## Запуск

```bash
npm install
npx ts-node src/main.ts
```

## Приклад виводу

```
[LOG]: Sending EMAIL to user@example.com
Email sent to user@example.com: Ваш платіж оброблено успішно!
[LOG]: Sending SMS to +1234567890
SMS sent to +1234567890: Ваш платіж оброблено успішно!
[LOG]: Sending PUSH to device-token-123
Push sent to device-token-123: Ваш платіж оброблено успішно!
```
