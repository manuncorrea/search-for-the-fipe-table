import { Button } from '@mui/material'
import { purple } from '@mui/material/colors'
import { ButtonProps } from './types'

export default function ButtonComponent(props: ButtonProps) {
  const { label, ...otherProps } = props

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: purple[800],
        '&:hover': {
          backgroundColor: purple[700],
        },
      }}
      {...otherProps}
    >
      {label}
    </Button>
  )
}
