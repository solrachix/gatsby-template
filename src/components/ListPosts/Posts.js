// src/components/Posts/Posts.js
import React from 'react';
import { Posts, Post, PostTitle, PostDate } from './styles';

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const posts = (
    edges.map(({ node }) => (
      <Post key={node.fields.slug}>
        <PostTitle to={node.fields.slug}><h2>{node.frontmatter.title}</h2></PostTitle>
        <PostDate>{node.frontmatter.date}</PostDate>
        <p>{node.frontmatter.description}</p>
      </Post>
    ))
  );
  return (
    <Posts>
      {posts}
    </Posts>
  )
}