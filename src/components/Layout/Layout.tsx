import React, { FC } from 'react'
import { Header } from '../Header'
import * as Styled from './Layout.stlyes'

interface Layout {
  totalOrders: number
  children?: React.ReactNode
}

export const Layout: FC<Layout> = ({ totalOrders, children }: Layout) => (
  <>
    <Header title="PIZZA PLANET!" counter={totalOrders} />
    <Styled.Content>{children}</Styled.Content>
  </>
)
