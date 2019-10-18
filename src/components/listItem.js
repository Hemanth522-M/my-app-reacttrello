import React from 'react';

import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';

import Draggable from 'react-draggable';
 
const useStyles = makeStyles(theme => ({
    innerPaper: {
        height: 'auto',
        backgroundColor: 'white',
        margin: '10px',
    },
   
    close: {
        cursor: 'pointer',
        float: 'right'
    },
    
    textField: {
        padding: '10px',
    }
}));

function ListItems(props) {
    const classes = useStyles();
    const items = props.Items;
    const listItems = items.map(item => {
        return <div key={item.text} className={classes.innerPaper}>
            <p>
                <TextField
                    id={item.key}
                    type="text"
                    value={item.text}
                    InputProps={{
                        disableUnderline: true,
                    }}
                    onChange={(e)=> {props.setUpdate(e.target.value, item.key)}}
                    className={classes.textField}
                />
                <span className={classes.close}>
                    <Tooltip title="Close">
                        <CloseIcon  onClick={ () => props.deleteItem(item.key)} />
                    </Tooltip>
                </span>
            </p>
        </div>
    })
    return(
        <div>
            <Draggable>
                <div>
                    {listItems}
                </div>
            </Draggable>
        </div>
    )
}

export default ListItems;