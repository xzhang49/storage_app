package net.java.springboot_backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "sku_number")
    private String skuNumber;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "location")
    private String location;

    public Product() {

    }

    public Product(String productName, String skuNumber, int quantity, String location) {
        super();
        this.productName = productName;
        this.skuNumber = skuNumber;
        this.quantity = quantity;
        this.location = location;
    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getProductName() {
        return productName;
    }
    public void setProductName(String productName) {
        this.productName = productName;
    }
    public String getSkuNumber() {
        return skuNumber;
    }
    public void setSkuName(String skuNumber) {
        this.skuNumber = skuNumber;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
}
