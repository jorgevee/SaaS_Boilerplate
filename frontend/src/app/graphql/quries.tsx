import { request, gql, GraphQLClient } from "graphql-request";

export const GET_BLOGS = gql`
  query {
    blogs {
      data {
        id
        attributes {
          title
          slug
        }
      }
    }
  }
`;

export const GET_SINGLE_BLOG = gql`
  query GetBlogBySlug($slug: String!) {
    blogs(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          content
        }
      }
    }
  }
`;

const url = process.env.GRAPHQL_API as string;

export const client = new GraphQLClient(url);
