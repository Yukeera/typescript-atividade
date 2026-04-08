// Função para concatenar strings usando map com arrow function e join
export function concatenateStrings(arr: string[]): string {
  return arr.map((str) => str).join(" ");
}

// Versão alternativa que demonstra melhor o uso de função arrow
export function concatenateWithTransform(arr: string[], transformer = (str: string) => str): string {
  return arr.map(transformer).join(" ");
}
