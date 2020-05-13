import React, { FC } from 'react'
import * as Styled from './Section.styles'
import { SectionVariant } from '../../types'

interface Section {
  title: string
  children?: React.ReactNode
  variant: SectionVariant
}

export const Section: FC<Section> = ({ title, children, variant }: Section) => (
  <Styled.Container color={variant}>
    <Styled.Title>{title}</Styled.Title>
    {children}
  </Styled.Container>
)
