export const truncateText = (text, showText) => {
  if (showText && text.length > 122) {
    return text;
  } else if (text.length > 125) {
    return text.substring(0, 105) + "...";
  } else {
    return text;
  }
};
