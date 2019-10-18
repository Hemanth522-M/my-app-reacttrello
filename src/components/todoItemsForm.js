import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import ListItems from './listItem';

const useStyles = makeStyles(theme => ({
    innerPaper: {
        padding: '10px',
        height: 'auto',
        width: '350px',
        backgroundColor: 'rgba(63, 81, 181, 0.08)',
        margin: '10px',
    },
    card: {
        width: '275px',
        background: '#f0ebeb',
        cursor: 'pointer',
        height: '40px',
        margin: '10px',
    },
    cardContent: {
        fontSize: '14px',
        fontWeight: '400px',
        textAlign: 'center'
    },
    close: {
        cursor: 'pointer',
        float: 'right'
    },
    button: {
        cursor: 'ponter',
        margin: '10px'
    },
}));

export default function Main() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        open: false,
        disabled: true,
        Items: [],
        currentItem: {text: '', key: ''},
       
    });

    const handleChange =  (event) => {
        setValues({ ...values, 
            currentItem: {text: event.target.value , key: Date.now()}, 
            disabled: false
        });
    };

    const handleAddItem = () => {
        const newItem = values.currentItem;
        if(newItem.text !== "") {
            const newItems = [...values.Items, newItem];
            setValues({...values,
                Items: newItems,
                currentItem: {
                    text: "",
                    key: '',
                },
            })
        }
    }

    const deleteItem = (key) => {
        const filieredItems = values.Items.filter(item=> item.key !== key);
        setValues({...values,
            Items: filieredItems
        })
    }

    const setUpdateText = (text, key) => {
        const items = values.Items;
        items.map(item => {
            if(item.key === key) {
                item.text = text;
            }
        })
        setValues({ ...values, Items: items})
    }

    return(
        <div>
            <form>
                <Paper className={classes.innerPaper}>
                    <TextField
                        id="items"
                        placeholder="Add Items"
                        name="items"
                        type="text"
                        value={values.currentItem.text}
                        required
                        margin="dense"
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <Button onClick={handleAddItem} className={classes.button} 
                        style={{textTransform: 'capitalize', background: 'lightBlue'}}
                    >
                        Add Item
                    </Button>
                    <br style={{clear: 'both'}} />
                    <ListItems Items = {values.Items} 
                        deleteItem={deleteItem}
                        setUpdate= {setUpdateText}
                    >
                    </ListItems>
                </Paper>
            </form>
        </div>
    )
}