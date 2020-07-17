const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Site was Built`)
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const projectTemplate = path.resolve(`src/templates/project.js`)
    const result = await graphql(`
    query GetAllProjectQuery {
        allPrismicProject {
        edges {
            node {
            data {
                body {
                __typename
                ... on PrismicProjectBodyBeforeandafter {
                    primary {
                    after_image {
                        url
                        alt
                    }
                    before_image {
                        url
                        alt
                    }
                    }
                    id
                }
                ... on PrismicProjectBodyGallery {
                    id
                    items {
                    image {
                        alt
                        url
                    }
                    }
                }
                }
                title {
                text
                }
                featured_image {
                alt
                url
                }
                description {
                html
                text
                }
            }
            }
        }
        }
    }
    `)
    result.data.allPrismicProject.edges.forEach(edge => {
        createPage({
            path: `projects/${string_to_slug(edge.node.data.title.text)}`,
            component: projectTemplate,
            context: {
            pageData: edge.node.data,
            },
        })
    })
}

function string_to_slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}