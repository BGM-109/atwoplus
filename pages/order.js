import React, { useState } from "react";
import { useRouter } from "next/router";

const sizeList = Array(20)
  .fill(220)
  .map((e, i) => e + 5 * i);

const Order = () => {
  const [result, setResult] = useState({
    name: "",
    mobile: "",
    address: "",
    product: "",
    postcode: "",
    size: "",
  });
  const [showResult, setShowResult] = useState(false);
  const title = showResult ? "주문 완료" : "에이투플샵 주문서";

  const router = useRouter();

  const submitOrder = (e) => {
    event.preventDefault();
    const result = {
      name: e.target.name.value,
      mobile: e.target.mobile.value,
      address: e.target.more.value + "," + e.target.address.value,
      product: e.target.product.value,
      size: e.target.size.value,
      postcode: e.target.postcode.value,
    };
    setResult(result);
    setShowResult(true);
  };

  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-blue-300 z-0"></div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white z-0"></div>
      <div className="absolute top-1/2 left-1/2 bg-white z-50 -translate-y-1/2 -translate-x-1/2 rounded-none md:rounded-xl shadow-lg w-full md:w-2/3 lg:w-1/2 xl:w-1/3 h-screen md:h-auto py-4">
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        <div className="mt-8 max-w-md mx-auto">
          {showResult ? (
            <div>
              <div>
                <h2>한글</h2>
                <p>이름: {result.name}</p>
                <p>연락처: {result.mobile}</p>
                <p>주소: {result.address}</p>
                <p>우편번호: {result.postcode}</p>
                <p>제품명: {result.product}</p>
                <p>사이즈: JP{result.size}</p>
              </div>

              <div>
                <h2>영문</h2>
                <p>name: {result.name}</p>
                <p>mobile: {result.mobile}</p>
                <p>address: {result.address}</p>
                <p>postcode: {result.postcode}</p>
                <p>product: {result.product}</p>
                <p>size: JP{result.size}</p>
              </div>
            </div>
          ) : (
            <form className="grid grid-cols-1 gap-6" onSubmit={submitOrder}>
              <label className="block">
                <span className="">이름</span>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">연락처</span>
                <input
                  required
                  type="text"
                  id="mobile"
                  name="mobile"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="010-0000-0000"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">상세주소</span>
                <input
                  required
                  type="text"
                  id="more"
                  name="more"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder=""
                />
              </label>
              <label className="block">
                <span className="text-gray-700">주소</span>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder=""
                />
              </label>
              <label className="block">
                <span className="text-gray-700">우편번호</span>
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder=""
                />
              </label>
              <label className="block">
                <span className="text-gray-700">제품명</span>
                <input
                  required
                  type="text"
                  id="product"
                  name="product"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder=""
                />
              </label>
              <label className="block">
                <span className="text-gray-700">사이즈(JP)</span>

                <select
                  required
                  type="text"
                  id="size"
                  name="size"
                  className="
                  block
                  w-full
                  mt-1
                  rounded-md
                  border-gray-300
                  shadow-sm
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                "
                  placeholder=""
                >
                  {sizeList.map((size, i) => (
                    <option key={i}>{size.toString()}</option>
                  ))}
                </select>
              </label>
              <button
                type="submit"
                className="text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-50 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Default
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
