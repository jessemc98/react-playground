import expect from 'expect'
import { authorsFormattedForDropdown } from './selectors'

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return formatted authors when passed array of authors', () => {
      const authors = [
        {id: 'jesse-mcintosh', firstName: 'Jesse', lastName: 'McIntosh'},
        {id: 'imcool-mcintosh', firstName: 'Imcool', lastName: 'McIntosh'}
      ]
      const expected = [
        {value: 'jesse-mcintosh', text: 'Jesse McIntosh'},
        {value: 'imcool-mcintosh', text: 'Imcool McIntosh'}
      ]
      expect(authorsFormattedForDropdown(authors)).toEqual(expected)
    })
  })
})
