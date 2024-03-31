import Daemon from '../Daemon';

test('Testing Daemon creation', () => {
  const result = new Daemon('daemon');

  expect(result).toEqual({
    name: 'daemon', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  });
});
