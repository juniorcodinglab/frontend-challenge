"use client"

import { FilterBar } from '@/components/filter-bar'
import { ProductsList } from '@/components/products-list'
import styled from 'styled-components'

const PageWraper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  max-width: 1400px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: var(--color-bg);

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
      padding: 34px 160px;
  }
`

export default function Home() {
  return (
    <PageWraper>
      <FilterBar />
      <ProductsList/>
    </PageWraper>
  )
}
