export function getCompareFunction<T>(sampleValue: T): (a: T, b: T) => number {
    if (typeof sampleValue === 'number') {
      return (a: T, b: T) => (a as number) - (b as number);
    }
  
    if (sampleValue instanceof Date) {
      return (a: T, b: T) => (a as Date).getTime() - (b as Date).getTime();
    }
  
    return (a: T, b: T) => String(a).localeCompare(String(b));
  }
  