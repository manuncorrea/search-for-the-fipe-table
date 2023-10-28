/** @jest-environment jsdom */
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AutoCompleteComponent from '.'

describe('AutoCompleteComponent', () => {
  test('it renders without crashing', () => {
    render(
      <AutoCompleteComponent
        options={['Option 1', 'Option 2']}
        label="Select"
        onSelect={jest.fn()}
      />,
    )
  })

  test('it selects value on user interaction', async () => {
    const onSelectMock = jest.fn()
    render(
      <AutoCompleteComponent
        options={['Option 1', 'Option 2']}
        label="Select"
        onSelect={onSelectMock}
      />,
    )

    userEvent.type(screen.getByRole('combobox'), 'Option 1')

    await waitFor(() => {
      fireEvent.click(screen.getByText('Option 1'))
    })

    expect(onSelectMock).toHaveBeenCalledWith('Option 1')
  })
})
