export const truncateText = (text, showText) => {
  if (showText && text.length > 100) {
    return text;
  } else if (text.length > 100) {
    return text.substring(0, 80) + "...";
  } else {
    return text;
  }
};
