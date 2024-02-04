export const performanceMeasure = (
  label: string,
  count = 50,
  func: () => void
) => {
  console.time(label);
  for (let i = 0; i < count; ++i) {
    func();
  }
  console.timeEnd(label);
};
