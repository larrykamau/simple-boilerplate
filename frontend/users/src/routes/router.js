import React from 'react'
import { Route } from 'react-router-dom'

import Elements from '../containers/Elements';
import Element from '../containers/Element';


const BaseRouter = () => (
    <div>
        <Route exact path='/' component = {Elements} />
        <Route exact path='/:elementID' component = {Element} />
    </div>
);

export default BaseRouter;
