const padToTwo = (number) => (number <= 9 ? `0${number}` : number);

export const displayTime = (centisecond) => {
  let minutes = 0;
  let seconds = 0;

  if (centisecond < 0) {
    centisecond = 0;
  }

  if (centisecond < 100) {
    return `00:00,${padToTwo(centisecond)}`;
  }

  let remainCentisecond = centisecond % 100;
  seconds = (centisecond - remainCentisecond) / 100;

  if (seconds < 60) {
    return `00:${padToTwo(seconds)},${padToTwo(remainCentisecond)}`;
  }

  let remainSecond = seconds % 60;
  minutes = (seconds - remainSecond) / 60;

  return `${padToTwo(minutes)}:${padToTwo(remainSecond)}:${padToTwo(
    remainCentisecond
  )}`;
};
