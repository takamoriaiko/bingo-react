// シャッフルした配列を返す
const shuffled = <T>(array: T[]): T[] => {
  const a = [...array];
  const swap = (i: number, j: number) => {
    const t = a[i];
    a[i] = a[j];
    a[j] = t;
  };
  const r = (n: number) => (Math.random() * n) | 0;
  for (let i = a.length - 1; i > 0; --i) {
    swap(i, r(i + 1));
  }
  return a;
};

export default shuffled;
