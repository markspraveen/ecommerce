import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { connect, useSelector } from "react-redux";
import * as userActions from "../store/actions/products";
import * as cartActions from "../store/actions/cart.actions";

const CartProduct = (props) => {
  const { quantity, title, description, thumbnail } = props;
  const { modifyProductQuantity } = props;

  const handleQuantityChange = (e) => {
    modifyProductQuantity(props.id, e.target.value);
  };

  const handleRemoveProduct = () => {
    props.removeProduct(props.id);
  };
  return (
    <div>
      <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
        <div className="w-1/4">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="md:pl-3 md:w-3/4">
          <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
          <div className="flex items-center justify-between w-full pt-1">
            <p className="text-base font-black leading-none text-gray-800">
              {title}
            </p>
            <select
              className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
              onChange={handleQuantityChange}
              value={quantity}
            >
              {Array.from(Array(10).keys()).map((i) => (
                <option key={i + 1} selected={quantity === i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <p className="text-xs leading-3 text-gray-600 pt-2">
            Height: 10 inches
          </p>
          <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
          <p className="w-96 text-xs leading-3 text-gray-600">
            Composition: 100% calf leather
          </p>
          <div className="flex items-center justify-between pt-5 pr-6">
            <div className="flex itemms-center">
              {/* <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                Add to favorites
              </p> */}
              <p
                className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                onClick={handleRemoveProduct}
              >
                Remove
              </p>
            </div>
            <p className="text-base font-black leading-none text-gray-800">
              ${quantity * props.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (id) => dispatch(cartActions.removeFromCart({ id })),
    modifyProductQuantity: (id, quantity) =>
      dispatch(cartActions.modifyProductQuantity({ id, quantity })),
  };
};

CartProduct.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountedPrice: PropTypes.number,
  rating: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  quantity: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);
