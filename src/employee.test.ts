import { Manager, Developer } from './employee.js';

test('Manager calculateBonus with different attributes', () => {
  const manager = new Manager('João Silva', 5000, 3);
  expect(manager.calculateBonus()).toBe(5000 * 0.1 + 3 * 100);
  
  manager.salary = 6000;
  manager.teamSize = 5;
  expect(manager.calculateBonus()).toBe(6000 * 0.1 + 5 * 100);
});

test('Developer calculateBonus with different attributes', () => {
  const developer = new Developer('Maria Santos', 4000, 'TypeScript');
  expect(developer.calculateBonus()).toBe(4000 * 0.15);
  
  developer.salary = 5000;
  developer.programmingLanguage = 'Python';
  expect(developer.calculateBonus()).toBe(5000 * 0.15);
});
