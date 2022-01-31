import addNumbers from './addNumbers'

describe('test addNumbers function', () => {
  it('should return 15 for add(10,5)', () => {
    expect(addNumbers({ first: 10, second: 5 })).toBe(15)
  })
})
