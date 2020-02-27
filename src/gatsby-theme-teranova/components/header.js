import React from 'react'

import styled from '@emotion/styled'

/* Something like the below would be possible to allow selectively overriding
 * parts of a component, but the original theme doesn't export its components.
 */
// import { NavBrand, Navbar, NavToggle } from 'gatsby-theme-teranova'

const HeaderStyled = styled.header`
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: ${props => props.theme.colors.white};
  grid-template-columns: minmax(80px, 150px) 1fr;
  padding: 0rem 1rem;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.colors.grey};
  @media (max-width: 844px) {
    grid-template-columns: minmax(80px, 120px) 90px;
    justify-content: space-between;
  }
`

// Let's modify the `<Header>` component!
const Header = () => <HeaderStyled>My Custom Header</HeaderStyled>

export default Header
