import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart,useCart } from "./ContextReducer";

export default function Card(props) {

 let dispatch = useDispatchCart();
 const priceRef = useRef()
 let data = useCart()
 let options = props.options;
 let priceOptions = Object.keys(options);
 const [qty,setQty] = useState(1);
 const [size,setSize] = useState("");
 const handelAddToCart =async()=>{
      
      let food = [];
      for(const item of food)
      {
        if(item.id==props.foodItem._id)
        {
          food=item;
          break;
        }
      }

      if(food !== [])
      {
        if(food.size === size)
        {
             await dispatch({type:'UPDATE',id:props.foodItem._id,price:finalPrice, qty:qty})
             return 
        }
        else if(food.size !== size)
        {
          await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
          return
        }
        return

      }
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
      // console.log(data)
 }
 let finalPrice = qty * parseInt(options[size]);
 useEffect(()=>{
   setSize(priceRef.current.value)
 },[])

  return (
    <div>
      <div>
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "460px" }}>
          <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"120px", objectFit:"fill"}} />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            {/* <p>{props.desc}</p> */}
            <div className="conatiner w-100">
              <select className="m-2 h-100 bg-success rounded" onChange={(e)=>setQty(e.target.value)}>
                {[...Array(6).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                {
                   priceOptions.map((data)=>{
                    return(
                      <option key={data} value={data}>{data}</option>
                    )
                   })
                }
              </select>
              <div className="d-inline h-100 fs-5">
                {finalPrice}  Rs/-    
              </div>
            </div>
            <hr/>
            <button className="btn btn-danger justify-center ms-2" onClick={handelAddToCart}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
