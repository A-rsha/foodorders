import React, { useState } from 'react'
 import './Admin.css'
function ManageProducts() {
  
    const[products,setProducts]=useState(
        JSON.parse(localStorage.getItem("products")) || []
    );

    const [newProduct, setNewProduct] = useState({
        name:"",
        price:"",
        image:""
    });

    const [editingProduct,setEditingProduct] =useState(null);
    
    const handleImageUpload = (e, mode = "new")=>{
        const file = e.target.files[0];
        const reader =new FileReader();

        reader.onloadend=() =>{
            if (mode === "new"){
            setNewProduct({ ...newProduct, image: reader.result});
            }else{
                setEditingProduct({...editingProduct,image: reader.result})
            }
        };
        if(file) {
            reader.readAsDataURL(file);
        };
    };

    const addProduct =()=>{
        const productWithId = {...newProduct, id: Date.now()};
        const updated = [...products,productWithId];
        setProducts(updated);
        localStorage.setItem("products", JSON.stringify(updated));

        setNewProduct({name:"", price:"", image:""});
    }

    const deleteProduct = (id) =>{
        const updated = products.filter(p => p.id !== id);
        setProducts(updated);
        localStorage.setItem("products", JSON.stringify(updated));
    }

    const saveEdit=()=>{
        const updated = products.map((p) =>
            p.id === editingProduct.id ? editingProduct :p
        );
     setProducts(updated);
     localStorage.setItem('products',JSON.stringify(updated));
     setEditingProduct(null);
    }
    
  return (
    <div>
        <h2>Manage Products</h2>
        <div className="add-product-form">
            <input type="text" placeholder='Product Name'
            value={newProduct.name} 
            onChange={(e)=> 
                setNewProduct({...newProduct, name: e.target.value})
            }
             />
            <input type="number" placeholder='Price'
            value={newProduct.price}
            onChange={(e) =>
                setNewProduct({...newProduct, price: e.target.value})
            } />
            <input type="file" 
            accept='image/*'
            onChange={handleImageUpload}
            />

            {newProduct.image &&(
                <img 
                src={newProduct.image}
                alt='Preview'
                width="100"
                />
            )}

            <button onClick={addProduct}>Add Product</button>
        </div>

        <div className="product-list">
            {products.map((p) =>(
                <div key={p.id} className="product-card">
                    <img src={p.image} alt=""  width="100"/>
                    <h4>{p.name}</h4>
                    <p>₹{p.price}</p>

                    <button onClick={()=> deleteProduct(p.id)}>Delete</button>

                   <button onClick={()=> setEditingProduct(p)}>Edit</button>
                </div>
            ))}
        </div>

        {editingProduct && (
            <div className="edit-box">
                <h3>Edit Product</h3>

                <input type="text"
                value={editingProduct.name}
             onChange={(e)=> setEditingProduct({...editingProduct, name: e.target.value})} />
        
             <input type="number"
              value={editingProduct.price}
              onChange={(e)=> setEditingProduct({...editingProduct, price: e.target.value})} />
           
              <input type="file" accept='image/*'
                onChange={(e)=> handleImageUpload(e, "edit")} />

              <img src={editingProduct.image} alt=""  width="100"/>

              <button onClick={saveEdit}>Save Changes</button>

             <button onClick={() => setEditingProduct(null)}>Cancel</button>
            </div>
        )}
    </div>
  )
}

export default ManageProducts