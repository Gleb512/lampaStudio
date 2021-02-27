import React from "react";
import {Field, reduxForm} from "redux-form";


class CheckoutForm extends React.Component {
    render() {
        const {handleSubmit} = (this.props);
        return (
            <form onSubmit={handleSubmit}>
                <div className='form-fields'>
                    <Field
                        name="name"
                        component="input"
                        type="text"
                        placeholder="Name"
                    />
                    <Field
                        name="surname"
                        component="input"
                        type="text"
                        placeholder="Surname"
                    />
                    <Field
                        name="address"
                        component="input"
                        type="text"
                        placeholder="Address"
                    />
                    <Field
                        name="phone"
                        component="input"
                        type="tel"
                        placeholder="Phone"
                    />
                    <button type="submit" label="submit">ORDER</button>
                </div>
            </form>
        );
    }
}

const Checkout = reduxForm ({form: 'checkoutForm'}) (CheckoutForm);

export default Checkout