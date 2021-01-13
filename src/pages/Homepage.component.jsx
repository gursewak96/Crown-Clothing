import React from 'react'
import "./Homepage.styles.scss"

import MenuList from '../components/menu-list/MenuList.component';

const HomePage = (props)=>(
    <div className="homepage">

        <div>Navigation</div>
        <MenuList/>
    </div>
);

export default HomePage;