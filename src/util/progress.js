export const setProgress = (phase) => {
  localStorage.setItem("phase", phase);
  if (phase === 2) {
    localStorage.setItem("start", Date.now());
  }
};

export const getProgress = () => {
  return parseInt(localStorage.getItem("phase")) || 1;
};

export const getStartTime = () => {
  return Date.parse(localStorage.getItem("start"));
};
