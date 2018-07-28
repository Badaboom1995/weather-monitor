import React from 'react';
import { observer } from 'mobx-react';
import menuStore from '../store/store.js';

const Header  = observer(() => ( 
    <header>
       <h1 className = 'title'>Weather monitor</h1>
    </header>
))



export default Header;