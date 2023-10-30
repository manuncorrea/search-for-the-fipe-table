export interface AutoCompleteProps<OptionType> {
  options: OptionType[]
  label: string
  loading: boolean
  value: OptionType | null
  onChange: (event: unknown, value: OptionType | null) => void
  fullWidth?: boolean
}
