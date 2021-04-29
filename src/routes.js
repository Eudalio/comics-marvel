import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Comics from './pages/Comics';
import Characters from './pages/Characters';
import Series from './pages/Series';
import Events from './pages/Events';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Comics} />
            <Route path="/characters" component={Characters} />
            <Route path="/series" component={Series} />
            <Route path="/events" component={Events} />
        </Switch>
    );
}

export default Routes;