import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { http } from "../axios";

function Details() {
  const [product, setProduct] = useState({});
  const [color, setColor] = useState("");
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    http
      .get(`products/${id}`)
      .then((data) => {
        if (data.status === 200) {
          setProduct(data.data.data);
          setColor(data.data.data.attributes.colors[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="container mx-auto p-6 flex justify-center items-center">
      {product.id && (
        <>
          <div className="flex flex-row space-x-8">
            <img
              src={product.attributes.image}
              alt={product.attributes.title}
              style={{ width: "30%" }}
              className="rounded-md shadow-lg object-cover ml-28"
            />
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">
                {product.attributes.title}
              </h3>
              <p className="mt-10 text-xl text-gray-600 mb-4">
                {product.attributes.company}
              </p>
              <h3 className="mt-10 text-3xl font-semibold text-gray-900 mb-4">
                ${product.attributes.price}
              </h3>
              <p className="mt-10 text-gray-600 mb-6">
                {product.attributes.description}
              </p>

              <div className="mb-6">
                <strong className="mt-16 text-lg text-gray-800">Colors:</strong>
                <div className="flex space-x-3 mt-2">
                  {product.attributes.colors.length > 0 &&
                    product.attributes.colors.map((colorProduct, index) => {
                      return (
                        <span
                          key={index}
                          style={{
                            backgroundColor: colorProduct,
                            border:
                              color === colorProduct
                                ? "3px solid black"
                                : "none",
                          }}
                          className="mt-4 w-8 h-8 rounded-full cursor-pointer"
                          onClick={() => {
                            setColor(colorProduct);
                          }}
                        ></span>
                      );
                    })}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-lg text-gray-800">Amount</label>
                <select className="mt-2 w-60 p-2 border rounded-lg text-gray-800 bg-white text-sm">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                </select>
              </div>

              <button className="w-60 bg-purple-600 text-white text-base py-2 rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
                ADD TO BAG
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Details;
