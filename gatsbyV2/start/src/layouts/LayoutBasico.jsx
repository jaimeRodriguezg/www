import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import './LayoutBasico.css';

export default function LayoutBasico(props){

    const { children } = props

    const data = useStaticQuery(graphql`
        query SiteQueryMetData {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `
    )

    console.log(data)

    return (
        <div className="header">
            <h1> {data.site.siteMetadata.title} </h1>
            <div className="menu">
                <Link to="/">Index</Link>
                <Link to="/home">Home</Link>
                
            </div>
            { children }
        </div>
    )
}