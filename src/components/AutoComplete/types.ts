export interface AutoCompleteProps {
  options: string[]
  label: string
  onSelect: (value: string | null) => void
}
