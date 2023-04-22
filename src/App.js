import React from 'react';
import Cart from './Cart';
import Navbar from './NavBar'
import { db } from './index';
// import { collection, getDocs } from "firebase/firestore";
import { collection, onSnapshot, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";


class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products : [],
        loading: true
    }
  }

  componentDidMount(){

    const getProjects = async()=>{
      // const snapshot = await getDocs(collection(db,"products"));
      // // snapshot.forEach((doc) => {
      // //   // doc.data() is never undefined for query doc snapshots
      // //   console.log(doc.id, " => ", doc.data());
      // // });

      // const products = snapshot.docs.map((doc)=>{
      //   const data = doc.data();
      //   data['id'] = doc.id;
      //   return data;
      // });

      // this.setState({
      //   products,                    // this is short this line simply means products: products
      //   loading: false
      // });

      const unsubscribe = onSnapshot(
        collection(db, "products"), 
        (snapshot) => {
          // ...
          const products = snapshot.docs.map((doc)=>{
            const data = doc.data();
            data['id'] = doc.id;
            return data;
          });

          this.setState({
            products,                    // this is short this line simply means products: products
            loading: false
          });
        },
        (error) => {
          // ...
          console.log("Error getting snapshot of", error);
        });
      
    }

    getProjects();
  }

  

// instead of arrow of function if we have used simple function then the value of this will be undefined and this.state will give error as we are accessing undefined variable
// but as we have arrow function and arrow function does have their own binding and they follow parent binding hence the value of this would be the current instance of CartItem.
increaseQuantity = async(product) => {
    // console.log('incr qty of ', product);

    const { products } = this.state;

    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //     products: products
    // });

    try{
        const productRef = doc(db, "products", products[index].id);
        
        await updateDoc(productRef, {
          qty: products[index].qty+1
        });

        console.log("Doc updated succesfully: increased");
    }
    catch(err){

      console.log("Error updating doc", err);
    }

    
};

decreaseQuantity = async(product)=>{

    const { products } = this.state;

    const index = products.indexOf(product);

    const qty = products[index].qty;

    if(qty === 0){
        return;
    }

    // products[index].qty -=1;
    // // we have used setState function becuase it will re-render the react component, means it will the render function again and hence we will see the updated value of qty.
    // this.setState({
    //     products
    // });

    try{
      const productRef = doc(db, "products", products[index].id);
      
      await updateDoc(productRef, {
        qty: products[index].qty-1
      });

      console.log("Doc updated succesfully: decreased");
    }
    catch(err){

      console.log("Error updating doc", err);
    }
}


  deleteItem = async(id)=>{
      
      // const { products } = this.state;
      // const items = products.filter((item)=>{
      //     return item.id!== id;
      // })

      // this.setState({
      //     products : items
      // })

      try{
        await deleteDoc(doc(db, "products", id));
        console.log("Document deleted successfully");
      }
      catch(err){
        console.log("Error deleting document", err);
      }

  }

  getCartCount = () =>{
    const { products } = this.state;

    let count = 0;

    products.forEach((product)=>{
      count+=product.qty;
    })

    return count;
  }

  getTotal= () =>{
    const { products } = this.state;

    let total=0;

    products.forEach((product)=>{
      total+=product.qty*product.price
    });

    return total;
  }

  addProduct = async()=>{
    const docRef = await addDoc(collection(db, "products"),{
      img: "",
      title: "Washing Machine",
      qty: 2,
      price: 15999
    });

    console.log("Document written with ID: ", docRef.id);
  }


  render(){
    const { products,loading } = this.state;

    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        {loading && <h1>Loading Products...</h1>}
        <button onClick={this.addProduct} style={{padding: 20, fontSize:20}}>Add Product</button>
        <Cart
          products={products}
          handleIncreaseQuantity={this.increaseQuantity}
          handleDecreaseQuantity={this.decreaseQuantity}
          handleDeleteItem={this.deleteItem}
          count={this.getCartCount}
        />
        <div style={style.footer}>
          TOTAL: {this.getTotal()}
        </div>
      </div>
    );
  }
}

const style ={
  footer:{
    height: 70,
    fontSize: 30,
    padding: 18
  }
}

export default App;
