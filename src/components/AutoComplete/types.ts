export interface AutoCompleteProps<OptionType> {
  options: OptionType[]
  label: string
  loading: boolean
  value: OptionType | null
  onChange: (event: any, value: OptionType | null) => void
  fullWidth?: boolean
}
