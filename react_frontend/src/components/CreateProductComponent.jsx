import React, { Component } from 'react'
import ProductService from '../services/ProductService';

class CreateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            productName: '',
            skuNumber: '',
            quantity: '',
            location: ''
        }
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeSkuNumberHandler = this.changeSkuNumberHandler.bind(this);
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ProductService.getProductById(this.state.id).then( (res) =>{
                let product = res.data;
                this.setState({productName: product.productName,
                    skuNumber: product.skuNumber,
                    quantity : product.quantity,
                    location: product.location
                });
            });
        }        
    }
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {productName: this.state.productName, skuNumber: this.state.skuNumber, quantity: this.state.quantity, location: this.state.location};
        console.log('product => ' + JSON.stringify(product));

        // step 5
        if(this.state.id === '_add'){
            ProductService.createProduct(product).then(res =>{
                this.props.history.push('/products');
            });
        }else{
            ProductService.updateProduct(product, this.state.id).then( res => {
                this.props.history.push('/products');
            });
        }
    }
    
    changeProductNameHandler= (event) => {
        this.setState({productName: event.target.value});
    }

    changeSkuNumberHandler= (event) => {
        this.setState({skuNumber: event.target.value});
    }

    changeQuantityHandler= (event) => {
        this.setState({quantity: event.target.value});
    }

    changeLocationHandler= (event) => {
        this.setState({location: event.target.value});
    }

    cancel(){
        this.props.history.push('/products');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Product</h3>
        }else{
            return <h3 className="text-center">Update Product</h3>
        }
    }
    render() {
        return (
            <div>
                   <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Name: </label>
                                            <input placeholder="Product Name" name="productName" className="form-control" 
                                                value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                        </div>
                                        <br></br>
                                        <div className = "form-group">
                                            <label> Sku Number: </label>
                                            <input placeholder="Sku Number" name="skuNumber" className="form-control" 
                                                value={this.state.skuNumber} onChange={this.changeSkuNumberHandler}/>
                                        </div>
                                        <br></br>
                                        <div className = "form-group">
                                            <label> Quantity: </label>
                                            <input placeholder="Quantity" name="quantity" className="form-control" 
                                                value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                                        </div>
                                        <br></br>
                                        <div className = "form-group">
                                            <label> Location: </label>
                                            <input placeholder="Location" name="location" className="form-control" 
                                                value={this.state.location} onChange={this.changeLocationHandler}/>
                                        </div>
                                        <br></br>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateProductComponent