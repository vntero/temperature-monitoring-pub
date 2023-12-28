import { sum } from '../index'

describe('Test certain functionalities of the codebase', () => {
  it('should give us the result of y minus x', async () => {
    const x = 1995
    const y = 2023

    expect(sum(x, y)).toBe(28)
  })
})
