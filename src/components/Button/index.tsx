import { Button } from '@mui/material'
import { ButtonProps } from './types'

export default function ButtonComponent({ label, onClick }: ButtonProps) {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {label}
    </Button>
  )
}
