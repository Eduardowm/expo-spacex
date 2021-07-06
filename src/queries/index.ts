import gql from "graphql-tag";

export const GET_LAUNCHES = gql`
    query launchesPast($limit: Int = 10, $sort: String = "launch_date_local", $order: String = "ASC") {
        launchesPast(limit: $limit, sort: $sort, order: $order) {
            id
            mission_name
            launch_date_local
            launch_site {
                site_name_long
            }
            links {
                article_link
                flickr_images
                reddit_media
            }
            rocket {
                rocket_name
            }
        }
    }`
