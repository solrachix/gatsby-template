// src/pages/index.js
import React, { Component } from "react";
import { graphql } from "gatsby";
import ListPosts from '../components/ListPosts';

export default class Index extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <ListPosts data={data}/>
      </>
    )
  }
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: {fields: [fields___prefix], order: DESC}
      filter: { frontmatter: { draft: { ne: true } } }
      ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            tags
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`;