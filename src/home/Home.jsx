import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { accountService } from '_services';

function Home() {

    return (
        <div>
            <h2>You're logged in with React & Facebook!!</h2>
        </div>
    );
}

export { Home };