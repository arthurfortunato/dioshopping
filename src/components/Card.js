import { Paper, Grid, Typography, Button, makeStyles } from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center'
    },
}));

const Card = ({ product, children }) => {
    const cart = useSelector(state => state.cart.value)
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Grid item xs={4} >
            <Paper className={classes.paper} elevation={3}>
                <Grid container direction='column' >
                    <Grid item xs={11}>
                        <img width="70%" height="230px" src={product.image} alt={product.name_product} />
                        <Typography variant='subtitle1'>
                            {children}
                        </Typography>
                        <Typography variant='h6'>
                            R$ {product.price.toFixed(2)}
                        </Typography>
                    </Grid>

                    <Button
                        variant="contained"
                        onClick={() => dispatch(cartActions.Add(cart, product))}
                    >
                        Adicionar
                    </Button>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Card;
