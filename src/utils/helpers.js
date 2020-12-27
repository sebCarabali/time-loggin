import { v4 } from 'uuid'

const pad = (numberString, size) => {
  let padded = numberString;
  while (padded.length < size) padded = `0${padded}`;
  return padded;
}

const millisecondsToHuman = (ms) => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor(ms / 1000 / 60 / 60);

  const humanized = [
    pad(hours.toString(), 2),
    pad(minutes.toString(), 2),
    pad(seconds.toString(), 2),
  ].join(":");

  return humanized;
};

export const renderElapsedString = (elapsedTime, runningSince) => {
  let totalElapsed = elapsedTime;
  if (runningSince) {
    totalElapsed += Date.now() - runningSince;
  }
  return millisecondsToHuman(totalElapsed);
};

export const newTimer = (attrs = {}) => {
  const timer = {
      title: attrs.title || 'Timer',
      project: attrs.project || 'Project',
      id: v4(), // eslint-disable-line no-undef
      elapsed: null,
    };

    return timer;
}
