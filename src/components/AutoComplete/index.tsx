import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { AutoCompleteProps } from './types'

export default function AutoCompleteComponent({
  options,
  label,
  onSelect,
}: AutoCompleteProps) {
  return (
    <Autocomplete
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          id="autocomplete"
        />
      )}
      onChange={(event, value) => onSelect(value)}
    />
  )
}
