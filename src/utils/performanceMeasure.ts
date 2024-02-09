/**
 * @param label performance execution time label
 * @param func the execution time of the function is supposed to be measured
 * @param count the function should be called a specific number of times, default is `100`
 */
export const performanceMeasure = (
  label: string,
  func: () => void,
  count = 100
) => {
  if (__DEV__) {
    console.log(`Running the function for ${count} times`);
    console.time(label);
    for (let i = 0; i < count; ++i) {
      func();
    }
    console.timeEnd(label);
  } else {
    func();
  }
};
