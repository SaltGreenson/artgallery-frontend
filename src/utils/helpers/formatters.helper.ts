export const numberPrettier = (num: number): string => {
  if (num < 1000) {
    return num.toString();
  } else if (num >= 1000 && num < 10000) {
    return (num / 100).toFixed(0) + "k";
  } else if (num >= 10000 && num < 1000000) {
    return (num / 1000).toFixed(1) + "k";
  } else {
    return (num / 1000000).toFixed(1) + "m";
  }
};

export const formatDate = (dateStr: Date) => {
  const date = new Date(dateStr);
  const today = new Date();
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

  if (date.toDateString() === today.toDateString()) {
    return `Today, ${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  } else if (date.toDateString() === yesterday.toDateString()) {
    return `Yesterday, ${date.toLocaleTimeString([], {
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
