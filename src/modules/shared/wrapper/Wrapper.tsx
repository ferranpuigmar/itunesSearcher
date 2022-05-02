import { Container } from '@mui/material'
import React from 'react'

export type WrapperProps = {
  children: React.ReactNode;
  styles?: Record<string, string>
}

const Wrapper = ({ children, styles }: WrapperProps) => {
  return (
    <Container sx={{ ...defaultStyles, ...styles }}>{children}</Container>
  )
}

const defaultStyles = {
  paddingTop: "40px",
  paddingBottom: "40px"
}

export default Wrapper