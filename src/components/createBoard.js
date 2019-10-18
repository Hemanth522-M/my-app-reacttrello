import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

import Header from './header';
import ItemsForm from './todoItemsForm';

const useStyles = makeStyles(theme => ({

    title: {
        width: '275px',
        background: '#aad5cd',
        cursor: 'pointer',
        height: '40px',
        margin: '10px',
        color: '#933333',
    },
    contentTitle: {
        fontSize: '14px',
        fontWeight: '400px',
        textAlign: 'center',
        textTransform: 'uppercase',
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
    itemsData: {
        display: 'inline-flex',
        height: 'auto',
    },
    gridList: {
        width: '100%',
    },
}));

export default function Main() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        open: false,
        disabled: true,
        Items: [],
        currentTitle: {title: ''},
        toDoItemsOpen: false,
    });

    const handlenewOpen = () => {
        setValues({...values, 
            open: true, 
            disabled: true
        })
    }

    const handleClose = () => {
        setValues({...values, 
            open: false,
            currentTitle: {title: ""}
        })
    }
   
    const handleChange =  (event) => {
        setValues({ ...values, 
            currentTitle: {title: event.target.value }, 
            disabled: false
        });
    };


    const handleCreateBoard = () => {
        const newItem = values.currentTitle;
        if(newItem.text !== "") {
            const newItems = [...values.Items, newItem];
            setValues({...values,
                Items: newItems,
                currentTitle: {
                    text: ""
                },
                toDoItemsOpen: true,
                open: false,
            })
        }
    }


    return(
        <div>
            <Header />
            <br style={{clear: 'both'}} />
            <div>
                {values.Items.length > 0 ? "" :
                    <Card className={classes.card} onClick={handlenewOpen}>
                        <CardContent className={classes.cardContent}>
                            Create new board
                        </CardContent>
                    </Card>
                }
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={values.open}>
                    <DialogTitle>
                        Add Board Title
                    </DialogTitle>
                    <DialogContent>
                        <span className={classes.close}>
                            <Tooltip title="Close">
                                <CloseIcon onClick={handleClose} />
                            </Tooltip>
                        </span>
                        <TextField
                            id="title"
                            placeholder="Add board title"
                            name="title"
                            type="text"
                            value={values.currentTitle.title}
                            required
                            margin="dense"
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </DialogContent>
                    {values.disabled === false &&
                        <DialogActions>
                            <Button onClick={handleCreateBoard} className={classes.button} 
                                style={{textTransform: 'capitalize', background: 'lightBlue'}}
                            >
                                Create Board
                            </Button>
                        </DialogActions>
                    }
                </Dialog>
                {/*ToDoItems Paper*/}
                {values.toDoItemsOpen === true &&
                    <div className={classes.itemsData}>
                        {values.Items.map((value,index)=>(
                            <div>
                                <Card className={classes.title}>
                                    <CardContent className={classes.contentTitle}>
                                        {value.title}
                                    </CardContent>    
                                </Card>
                                <div>
                                    <ItemsForm />
                                </div>
                            </div>
                        ))}
                        <Card className={classes.card} onClick={handlenewOpen}>
                            <CardContent className={classes.cardContent}>
                                Create new board
                            </CardContent>
                        </Card>
                    </div> 
                }
            </div>    
        </div>
    )
}