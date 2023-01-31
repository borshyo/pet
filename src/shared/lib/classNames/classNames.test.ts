import { classNames } from './classNames'
describe('classNames', () => {
  test('string', () => {
    expect(classNames('wqd')).toBe('wqd')
  })

  test('string with mods', () => {
    expect(
      classNames('wqd', { active: true, expanded: false, massive: true })
    ).toBe('wqd active massive')
  })

  test('string with mods and additional', () => {
    expect(
      classNames('wqd', { active: true, expanded: false, massive: true }, [
        'red'
      ])
    ).toBe('wqd red active massive')
  })
})
