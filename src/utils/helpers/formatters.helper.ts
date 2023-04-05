import { Colors } from "@/styles/colors";

export const formatNumberToPrice = (number: number): string => {
  const _ = new Intl.NumberFormat("ru", {}).format(number);
  return `${_} p.`;
};

export const getActiveColorForText = (isActive?: boolean) =>
  isActive ? Colors.DARK_BLUE : Colors.BLACK;

export const formatDate = (dateStr: Date) => {
  const date = new Date(dateStr);
  const today = new Date();
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

  if (date.toDateString() === today.toDateString()) {
    return `Сегодня, ${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  } else if (date.toDateString() === yesterday.toDateString()) {
    return `Вчера, ${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  } else {
    const day = date.toLocaleString([], {
      month: "long",
      day: "numeric",
    });
    const time = date.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${day}, ${time}`;
  }
};

const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export const formatDateWhenProfileAppear = (dateStr: Date) => {
  const date = new Date(dateStr);
  const monthIndex = date.getMonth();
  const monthName = months[monthIndex];

  return `На BREENKY с ${monthName}, ${date.getFullYear()}`;
};

export const formatDateWhenLastOnline = (date: Date) => {
  const monthIndex = date.getMonth();
  return `Заходил(а) ${date.getDay()} ${
    months[monthIndex]
  } ${date.getFullYear()}`;
};

export const formatBooleanToYesNo = (value: boolean) =>
  value ? "Есть" : "Нету";

export const formatStorageSizeForView = (value: string) => `${value} Гб`;
