/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState} from "react"
import PropTypes from "prop-types"
import Helmet from 'react-helmet';

import { useStaticQuery, graphql } from "gatsby"

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';

import Light from '../../styles/themes/Light';
import Dark from '../../styles/themes/Dark';

import favicon from '../../../static/favicon.ico';
import Header from "../Header";
import { Container, Footer } from './styles';
import "./layout.css"

const Layout = ({ children }) => {
  const [ theme, setTheme ] = useState(Light);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          description,
          author {
            name
          },
        }
      }
    }
  `);

  function ToggleTheme(){    
    setTheme(theme.title === 'Light' ? Dark : Light );
  }
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta name="description" content={data.site.siteMetadata.siteDescription} />
        <link rel="icon" href={favicon} />
      </Helmet>
      {/* o resto do conteúdo */}
      <GlobalStyles />
      <Container>
        <Header siteTitle={data.site.siteMetadata.title} onClick={ToggleTheme} />
        <div>
          <main>{children}</main>
          <Footer>
            © {new Date().getFullYear()}, Built by&nbsp;
            {` `}
            <a href="/">{data.site.siteMetadata.author.name}</a>
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
