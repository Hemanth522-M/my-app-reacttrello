import React from 'react';
import './common.css';

import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {

    const notify = () => toast("Hemanth M");

    return(
        <div className="App">
            <h1 id="header">
                <a href ="/" >
                    <Tooltip title="Home">
                        <HomeIcon style={{color: 'white', float: 'left', padding: '5px'}} />
                    </Tooltip>
                </a>
                <a href = "/createBoard" style={{textDecoration: 'none', color: 'white', float: 'left', fontSize: '16px', padding: '10px' }}>
                    + Create boards
                </a>
                React-Trello
                <Tooltip title="Help">
                    <HelpIcon style={{color: 'white', float: 'right', padding: '5px', cursor: 'pointer'}} onClick={notify} />
                </Tooltip>
            </h1>
            <ToastContainer />
        </div>
    )
}