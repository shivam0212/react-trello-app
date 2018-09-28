import React, { Component } from 'react';

export default class ProductList extends Component {
   
    state = {
        total: 0,
        productlist: [
            { name: "Android", price: 130 },
            { name: "Iphone", price: 150 },
            { name: "Nokia", price: 100 }
        ]
    };
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         total: 0,
    //         productlist: [
    //             { name: "Android", price: 130 },
    //             { name: "Iphone", price: 150 },
    //             { name: "Nokia", price: 100 }
    //         ]
    //     };

    // }

    updateItems = (props) => {
        console.log(props);
        if (props[1] === 'add')
            this.setState({ total: this.state.total + props[0] });
        else
            this.setState({ total: this.state.total - props[0] });
    }

    addProduct = (props) => {
        let name = props.name;
        let price = parseInt(props.price);
        debugger;
        this.setState({ productlist: [...this.state.productlist, { name: name, price: price }]});
        console.log(this.state);
    }


    render() {
        //var component = this;
        debugger;
        let products = this.state.productlist.map((product) => {
            return (
                <Product name={product.name} price={product.price} key={product.id} handleUpdate={this.updateItems} />
            )
        });


        return (
            <div className="container .col-md-4">
                <AddCategory handleProduct={this.addProduct} />
                {/* <Product name="Android" price={parseInt(130)} handleUpdate={this.updateItems} />
                <Product name="Iphone" price={parseInt(150)} handleUpdate={this.updateItems} />
                <Product name="Nokia" price={parseInt(100)} handleUpdate={this.updateItems} />
                <Products list={this.state.productlist} /> */}
                {products}
                <Total total={this.state.total} />
            </div>
        );
    }
}

//############################################################################################
// function Products(props) {
//     return props.map(<Product name="props.list.name" price={props.list.price} handleUpdate={this.updateItems}/>
//     )
// }



//############################################################################################

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { quantity: 0 };
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    add = () => {
        this.setState({ quantity: this.state.quantity + 1 });
        //this.props.handleAdd([this.state.quantity, this.props.price]);
        //alert("You added " + this.state.quantity + " phone(s)");
        this.props.handleUpdate([this.props.price, "add"]);
    }

    remove = () => {
        if (this.state.quantity > 0) {
            this.setState({ quantity: this.state.quantity - 1 });
            //this.props.handleRemove([this.state.quantity, this.props.price]);
            this.props.handleUpdate([this.props.price, "remove"]);
        }
    }

    // componentDidUpdate = () => {
    //     //console.log(props);
    //     this.props.handleUpdate([this.state.quantity, this.props.price]);
    // }

    render() {
        return (
            <div>
                <h3>{this.props.name} - ${this.props.price}</h3>
                <h5>Quantity: {this.state.quantity}</h5>
                <button onClick={this.add}>Add</button>
                <button onClick={this.remove}>Remove</button>
                <button>Description</button>
                <hr style={{ borderWidth: '3px' }} />
            </div>
        );
    }
}


//###########################################################################################


class Total extends Component {

    
    render() {
        return (
            <div>
                <h2>Total Amount: ${this.props.total}</h2>
            </div>
        );
    }
}



//############################################################################################

class AddCategory extends Component {

    addPhone = (e) => {
        alert(e.target.form.name.value + " - $" + e.target.form.price.value);
        this.props.handleProduct({ name: e.target.form.name.value, price: e.target.form.price.value });
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter name..." />
                    <br />
                    <label htmlFor="price">Cost</label>
                    <input type="text" name="price" id="price" placeholder="Enter cost..." />
                    <br />
                    <button onClick={this.addPhone} type="button">Submit</button>
                    <hr style={{ borderWidth: '3px' }} />
                </form>
            </div>
        );
    }
}