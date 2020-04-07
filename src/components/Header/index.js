import PropTypes from "prop-types"
import React, { useState } from "react"

import logo from '../../assets/images/icon.png';

import { Container, Logo, Title, Div, Search, Lupa, Github, Linkedin, Sun } from './styles';

const Header = ({ siteTitle, onClick }) => {
  const [ search, setSearch ] = useState("");
  return (
    <Container>
      <Div>
        <Logo src={logo}/>
        <Title to="/" style={{fontWeight: 'bold'}}>
          {siteTitle}
        </Title>

        <Div>
          <Title to="/">
            Blog
          </Title>
          <Title to="/">
            Projetos
          </Title>
          <Title to="/">
            Contatos
          </Title>
        </Div>
      </Div>

      <Div>

        <Search
          placeholder="Procurar Posts"
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
          variant="filled"
        />
        <Lupa size={20}/>
        <Github size={20}/>
        <Linkedin size={20}/>
        <Sun size={20} onClick={onClick}/>
      </Div>
    </Container>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
