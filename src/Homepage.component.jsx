import React from 'react'
import "./Homepage.styles.scss"

const HomePage = ()=>(
    <div className="homepage">

        <div>Navigation</div>

        {/* Catalogs of different items */}
        <div className="directory-menu">
            {/* list of Items */}
            <div className='menu-item'>
                <div className="content">
                    <h1 className="title">
                        Hats
                    </h1>
                    <span className="subtitle">
                        Shope now
                    </span>
                </div>
            </div>

            <div className='menu-item'>
                <div className="content">
                    <h1 className="title">
                        Jackets
                    </h1>
                    <span className="subtitle">
                        Shope now
                    </span>
                </div>
            </div>

            <div className='menu-item'>
                <div className="content">
                    <h1 className="title">
                        Sneakers
                    </h1>
                    <span className="subtitle">
                        Shope now
                    </span>
                </div>
            </div>

            <div className='menu-item'>
                <div className="content">
                    <h1 className="title">
                        Women
                    </h1>
                    <span className="subtitle">
                        Shope now
                    </span>
                </div>
            </div>

            <div className='menu-item'>
                <div className="content">
                    <h1 className="title">
                        Men
                    </h1>
                    <span className="subtitle">
                        Shope now
                    </span>
                </div>
            </div>

        </div>
    </div>
);

export default HomePage;