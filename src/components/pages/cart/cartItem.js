import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ListItemText from '@material-ui/core/ListItemText';
import Button from "@material-ui/core/Button";


class CartItem extends React.Component {
    handleClick = (val) => {
        this.props.addToCardThunk(this.props.item._id, val)
    }

    render() {
        return (
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={this.props.item.picture}/>
                </ListItemAvatar>
                <ListItemText
                    primary={this.props.item.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                {this.props.item.description}
                            </Typography>

                        </React.Fragment>
                    }
                />

                <div>
                    <Button onClick={()=>this.handleClick(-1)}>-</Button>
                    <span>{this.props.item.count ? this.props.item.count : 1}</span>
                    <Button onClick={()=>this.handleClick(1)}>+</Button>
                </div>
            </ListItem>
        )
    }
}

export default CartItem