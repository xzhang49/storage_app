import React, { Component } from 'react'
import ProductService from '../services/ProductService'

class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount(){
        ProductService.getProducts().then((res) => {
            this.setState({ products: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Products List</h2>
                <div className = "row">
                <table className = "table table-striped table-bordered">
                    <tr>
                        <th>Product Name</th>
                        <th>Sku Number</th>
                        <th>Quantity</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                    <tbody>
                        {
                            this.state.products.map(
                                product =>
                                <tr key = {product.id}>
                                    <td> { product.productName } </td> 
                                    <td> { product.skuNumber } </td> 
                                    <td> { product.quantity } </td> 
                                    <td> { product.location}  </td> 
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