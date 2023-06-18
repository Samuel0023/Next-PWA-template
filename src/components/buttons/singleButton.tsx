import Button from '@mui/material/Button'

interface SingleButtonProps {
  text: string
}

export default function SingleButton({ text }: SingleButtonProps) {
  return (
    <Button
      fullWidth
      className="bg-purple-700 hover:bg-purple-500 focus:bg-purple-500"
      sx={{ mt: 3, mb: 2 }}
      type="submit"
      variant="contained"
    >
      {text}
    </Button>
  )
}
