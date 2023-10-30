/** @jest-environment jsdom */
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AutoCompleteComponent from '.'

describe('AutoCompleteComponent', () => {
  test('it renders without crashing', () => {
    render(
      <AutoCompleteComponent
        options={[
          { label: 'Option 1', value: 'Option 1' },
          { label: 'Option 2', value: 'Option 2' },
        ]}
        label="Select"
        loading={false}
        value={null}
        onChange={jest.fn()}
      />,
    )
  })

  test('it selects value on user interaction', async () => {
    const onChangeMock = jest.fn()
    render(
      <AutoCompleteComponent
        options={[
          { label: 'Option 1', value: 'Option 1' },
          { label: 'Option 2', value: 'Option 2' },
        ]}
        label="Select"
        loading={false}
        value={null}
        onChange={onChangeMock}
      />,
    )

    userEvent.type(screen.getByRole('combobox'), 'Option 1')

    await waitFor(() => {
      fireEvent.click(screen.getByText('Option 1'))
    })

    expect(onChangeMock).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        label: 'Option 1',
        value: 'Option 1',
      }),
      expect.anything(),
      expect.anything(),
    )
  })
})
