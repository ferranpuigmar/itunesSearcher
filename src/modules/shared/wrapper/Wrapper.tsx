import { Container } from '@mui/material'
import React from 'react'

export type WrapperProps = {
  children: React.ReactNode;
  styles?: Record<string, any>
}

const Wrapper = ({ children, styles }: WrapperProps) => {
  return (
    <Container style={{ ...defaultStyles, ...styles }}> {children}</Container >
  )
}

const defaultStyles = {
  paddingTop: "40px",
  paddingBottom: "40px"
}

export default Wrapper