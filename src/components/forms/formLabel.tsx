import TextField from '@mui/material/TextField'
export default function FormLabel({ textPlaceholder }: { textPlaceholder: string }) {
  return (
    <TextField
      fullWidth
      required
      autoComplete="email"
      color="secondary"
      id="email"
      label={textPlaceholder}
      margin="normal"
      name="email"
      sx={{ m: 1, width: '25ch' }}
    />
  )
}
