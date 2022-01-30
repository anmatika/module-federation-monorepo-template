import addNumbers from './'

describe('test addNumbers function', () => {
  it('should return 15 for add(10,5)', () => {
    expect(addNumbers(10, 5)).toBe(15)
  })
})
