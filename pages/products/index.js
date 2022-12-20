import React, { useState, useEffect } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import Product from "../../components/Product";
import Cart from "../../components/Cart";

export default function Index() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Cart />
      <div className="mx-auto container px-6 xl:px-0 py-12">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center">
            <div className="relative">
              <img
                className="hidden sm:block w-full"
                src="https://i.ibb.co/HxXSY0j/jason-wang-Nx-Awry-Abt-Iw-unsplash-1-1.png"
                alt="sofa"
              />
              <img
                className="sm:hidden w-full"
                src="https://i.ibb.co/B6qwqPT/jason-wang-Nx-Awry-Abt-Iw-unsplash-1.png"
                alt="sofa"
              />
              <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
                <p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">
                  Range Comfort Sofas
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
            {products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
          <div className="flex justify-end items-end mt-12">
            <div className="flex flex-row items-center justify-center space-x-8">
              <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                <p>1</p>
              </button>
              <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                <p>2</p>
              </button>
              <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                <p>3</p>
              </button>
              <button className="flex justify-center items-center">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
