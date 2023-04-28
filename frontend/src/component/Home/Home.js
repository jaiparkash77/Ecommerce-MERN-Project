import React, { useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./ProductCard";
import MetaData from "../layout/MetaData";
import {getProduct, clearErrors} from "../../actions/productAction"
import {useSelector,useDispatch} from 'react-redux'
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";


const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const {loading,error, products} = useSelector((state)=> state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch,error,alert]);
  
  return (
    <>
      {loading ? (<Loader />) : 
      (<>
        <MetaData title="E-Commerce" />
        <div className="banner">
          <p>Welcome to Ecommerce</p>
          <h1>FIND AMAZING PRODUCTS BELOW</h1>

          <a href="#container">
            <button>
              Scroll <CgMouse />
            </button>
          </a>
        </div>
        <h2 className="homeHeading">Featured Products</h2>
        <div className="container" id="container">
          {products && products.map(product=>(
            <Product product={product} />
          ))}
        </div>
      </>)}
    </>

  );
};

export default Home;
