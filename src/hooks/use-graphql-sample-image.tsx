import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';

type Props = {
  file: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
};

/**
 * use site's default banner's fluid object
 */
export const useGraphQLSampleImage = () => {
  //relativePath: path from `image`
  //it is configured in gatsby-config.js of `gatsby-source-filesystem`
  const data = useStaticQuery<Props>(graphql`
    query {
      file(relativePath: { eq: "graphql-sample.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return data.file.childImageSharp.fluid;
};

export default useGraphQLSampleImage;
