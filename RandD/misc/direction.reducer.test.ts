import { test, expect } from 'vitest'
import { dirReduc } from './direction.reducer'

test('test dirReduc', () => {
  expect(dirReduc([])).toEqual({ NORTH: 0, EAST: 0, SOUTH: 0, WEST: 0 });
  expect(dirReduc([`NORTH`, `SOUTH`, `SOUTH`, `EAST`, `WEST`, `NORTH`, `WEST`])).toEqual({ NORTH: 1, EAST: 1, SOUTH: 0, WEST: 0 });
  expect(dirReduc([`NORTH`, `NORTH`, `NORTH`])).toEqual({ NORTH: 1, EAST: 0, SOUTH: 0, WEST: 0 });
})