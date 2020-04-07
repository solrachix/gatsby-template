/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../style/GlobalStyles';

import Light from '../../style/themes/Light';
import Dark from '../../style/themes/Dark';

import Header from "../Header";
import { Container, Footer } from './styles';
import "./layout.css"

const Layout = ({ children }) => {
  const [ theme, setTheme ] = useState(Light);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  function ToggleTheme(){    
    setTheme(theme.title === 'Light' ? Dark : Light );
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header siteTitle={data.site.siteMetadata.title} onClick={ToggleTheme} />
        <div>
          <main>{children}</main>
          <Footer>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="/"> Carlos Miguel</a>
          </Footer>
        </div>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
