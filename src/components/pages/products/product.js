import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Product = (props) => {
    const handleClick = () => {
        props.addToCardThunk(props.product._id, 1)
    }
    return (
        <Card>
            <CardMedia
                component="img"
                alt={props.product.name}
                height="140"
                image={props.product.picture}
                title={props.product.name}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.product.description}
                </Typography>
            </CardContent>
            <Button size="small" color="primary" onClick={() => handleClick()}>
                Add To Cart
            </Button>
        </Card>
    );
}
export default Product