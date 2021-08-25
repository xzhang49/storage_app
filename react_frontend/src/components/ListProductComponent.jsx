import React, { Component } from 'react'
import ProductService from '../services/ProductService'

class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id){
        ProductService.deleteProduct(id).then( res => {
            this.setState({products: this.state.products.filter(product => product.id !== id)});
        });
    }
    editProduct(id){
        this.props.history.push(`/add-product/${id}`);
    }

    componentDidMount(){
        ProductService.getProducts().then((res) => {
            this.setState({ products: res.data});
        });
    }

    addProduct(){
        this.props.history.push('/add-product/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Products List</h2>
                <div className = "text-left">
                    <button className="btn btn-primary" onClick={this.addProduct}> Add Product</button>
                 </div>
                 <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Sku Number</th>
                                <th>Quantity</th>
                                <th>Location</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.map(
                                    product =>
                                    <tr key = {product.id}>
                                        <td> { product.productName } </td> 
                                        <td> { product.skuNumber } </td> 
                                        <td> { product.quantity } </td> 
                                        <td> { product.location}  </td> 
                                        <td>
                                            <button onClick={ () => this.editProduct(product.id)} className="btn btn-success">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(product.id)} className="btn btn-danger">Delete </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListProductComponent