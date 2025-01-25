export const setProgress = (phase) => {
  localStorage.setItem("phase", phase);
};

export const getProgress = () => {
  return parseInt(localStorage.getItem("phase")) || 1;
};
