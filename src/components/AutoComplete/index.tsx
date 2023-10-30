import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { AutoCompleteProps } from './types'

export default function AutoCompleteComponent<OptionType>({
  options,
  label,
  loading,
  value,
  onChange,
  fullWidth = false,
}: AutoCompleteProps<OptionType>) {
  return (
    <Autocomplete
      options={options}
      loading={loading}
      renderInput={(params) => <TextField {...params} label={label} />}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
    />
  )
}
