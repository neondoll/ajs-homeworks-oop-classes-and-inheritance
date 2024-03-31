import Daemon from '../Daemon';

test('Testing Daemon creation with all values', () => {
  const result = new Daemon('daemon', 50, 50, 50, 50);

  expect(result).toEqual({
    name: 'daemon', type: 'Daemon', health: 50, level: 50, attack: 50, defence: 50,
  });
});

test('Testing Daemon creation with default values', () => {
  const result = new Daemon('daemon');

  expect(result).toEqual({
    name: 'daemon', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  });
});
