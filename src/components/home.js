import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Header  from './header';

const useStyles = makeStyles(theme => ({
    mainCardDiv: {
        display: 'inline-flex',
    },
    card: {
        width: '275px',
        background: '#f0ebeb',
        display: 'inline-grid',
        margin: '10px'
    },
    cardContent: {
        verticalAlign: 'middle',
        display: 'block',
        fontSize: '18px',
        fontWeight: '400px',
    },
    data: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'inline-block'
    }
}))

export default function Home() {
    const classes = useStyles();

    const [values] = React.useState({
        data: [
            {"name":"Orange",
            "variety":"Variety-X",
            "notes":"CaliforniaOrange",
            "parameters":{"a0":"mm1"}
            },
            {"name":"Grapes",
            "variety":"Variety-G",
            "notes":"Goa grapes",
            "parameters":{"a0":"mm1","a1":"mm2"}
            },
            {"name":"Banana",
            "variety":"VarietyB",
            "notes":"WildBanana",
            "parameters":{"a0":"mm1","a1":"mm2"}
            },
            {"name":"Tomatoes","variety":"VarietyT","notes":"Green tomatoes",
            "parameters":{"a0":"mm1","a1":"mm2"}
            },
            {"name":"Wheat","variety":"VarietyW","notes":"none"},
            {"name":"Orange","variety":"Variety-XZ","notes":"none"}
        ],
    });
    return(
        <div>
            <Header />
            <div className={classes.data}>
                {values.data.map((value, index) => (
                    <div className={classes.mainCardDiv}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <div>
                                    Name: {value.name}                        
                                </div>
                                <br />
                                <div>
                                    Variety: {value.variety}
                                </div>
                                <br />
                                <div>
                                    Notes: {value.notes}
                                </div>
                                <br />
                                <div>
                                    {(value.parameters !== undefined && value.parameters.a0 !== undefined) ? "Parameters: "+value.parameters.a0 : ""}
                                    {(value.parameters !== undefined && value.parameters.a1 !== undefined) ? ", "+value.parameters.a1 : ""}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}