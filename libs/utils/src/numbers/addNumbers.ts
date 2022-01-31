import { INumberAdd } from '@antti/types'

const addNumbers = (numbers: INumberAdd): number => {
  const { first, second } = numbers
  return first + second
}
export default addNumbers
