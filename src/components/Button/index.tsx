import { Button } from '@mui/material'
import { purple } from '@mui/material/colors'
import { ButtonProps } from './types'

export default function ButtonComponent({ label, onClick }: ButtonProps) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: purple[800],
        '&:hover': {
          backgroundColor: purple[700],
        },
      }}
    >
      {label}
    </Button>
  )
}
