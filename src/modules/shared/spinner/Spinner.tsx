import { CircularProgress, styled } from '@mui/material';

type SpinnerProps = {
  styles?: React.CSSProperties | undefined
}

const Spinner = ({ styles }: SpinnerProps) => {
  return (
    <WrapperSpinner style={{ ...styles }} ><CircularProgress /></WrapperSpinner>
  )
}

const WrapperSpinner = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: 'flex',
  alignItems: "center",
  justifyContent: "center"
}))

export default Spinner