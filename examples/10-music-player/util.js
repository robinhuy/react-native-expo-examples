const padToTwo = (number) => (number <= 9 ? `0${number}` : number);

export const displayTime = (milliSeconds) => {
  let minutes = 0;
  let seconds = Math.round(milliSeconds / 1000);
  let remainSeconds = seconds % 60;
  minutes = (seconds - remainSeconds) / 60;
  return `${padToTwo(minutes)}:${padToTwo(remainSeconds)}`;
};
