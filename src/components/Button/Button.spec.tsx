/** @jest-environment jsdom */
import { fireEvent, render, screen } from '@testing-library/react'
import ButtonComponent from '.'

describe('ButtonComponent', () => {
  test('it renders without crashing', () => {
    render(<ButtonComponent label="Click me" onClick={jest.fn()} />)
  })

  test('it calls onClick when clicked', () => {
    const onClickMock = jest.fn()
    render(<ButtonComponent label="Click me" onClick={onClickMock} />)

    fireEvent.click(screen.getByText('Click me'))
    expect(onClickMock).toHaveBeenCalled()
  })
})
