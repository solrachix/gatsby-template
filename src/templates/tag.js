// src/templates/tag.js
import React, { Component } from "react";
import { graphql } from "gatsby";
import SEO from '../components/SEO';
import ListPosts from '../components/ListPosts';

export default class Tag extends Component {
  render() {    
    const { data, pathContext } = this.props;
    const { tag } = pathContext;
    const { pathname } = this.props.location;

    return (
      <>
        <SEO title={`Tag: ${tag}`} description={`Todos os posts marcados com a tag "${tag}" no CodeStack Brasil`} url={pathname}/>
        
        <div>
          <h2 style={{ fontSize: '22px', padding: '0px 15px' }}>Todos os posts com a tag: {tag}</h2>
          <ListPosts data={data}/>
        </div>
      </>
    )
  }
};

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`;