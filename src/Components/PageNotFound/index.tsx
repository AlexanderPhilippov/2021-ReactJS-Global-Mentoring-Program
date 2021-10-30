import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const PageNotFound: React.FC = () => {
    return (
        <div className="page-not-found">
            <div>
                <div className="page-not-found__header">404</div>
                <div className="page-not-found__text">Page not found</div>
            </div>
            <Link to="/" className="page-not-found__link">
                go to home page
            </Link>
        </div>
    )
}

export default PageNotFound
