// Função para calcular quadrado usando for simples
export function squareWithFor(arr: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);
  }
  return result;
}

// Função para calcular quadrado usando forEach
export function squareWithForEach(arr: number[]): number[] {
  const result: number[] = [];
  arr.forEach(num => {
    result.push(num * num);
  });
  return result;
}
