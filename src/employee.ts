export interface Employee {
  calculateBonus(): number;
}

export class Manager implements Employee {
  name: string;
  salary: number;
  teamSize: number;

  constructor(name: string, salary: number, teamSize: number) {
    this.name = name;
    this.salary = salary;
    this.teamSize = teamSize;
  }

  calculateBonus(): number {
    return (this.salary * 0.1) + (this.teamSize * 100);
  }
}

export class Developer implements Employee {
  name: string;
  salary: number;
  programmingLanguage: string;

  constructor(name: string, salary: number, programmingLanguage: string) {
    this.name = name;
    this.salary = salary;
    this.programmingLanguage = programmingLanguage;
  }

  calculateBonus(): number {
    return this.salary * 0.15;
  }
}
