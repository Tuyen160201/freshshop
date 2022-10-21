import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getProductDetail } from "../../app/features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductListRelated from "./ProductListRelated";

export default function ProductDetailShortDescription() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { productDetail } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProductDetail(slug));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex w-full bg-white">
      <div className="flex flex-col w-full mt-5 mb-4 overflow-hidden bg-white mx-[73px]  border-b border-dashed border-[#dcdcdc]">
        <div className="p-4 border-b border-dashed border-[#dcdcdc]">
          <h2 className="pt-2 pb-2 pl-4 pr-4 m-0 text-xl font-normal leading-8 capitalize">
            mô tả sản phẩm{" "}
          </h2>
          <p className="pt-0 pb-2 pl-4 pr-4 leading-5">
            {productDetail?.description}
          </p>
        </div>
        <ProductListRelated productDetail={productDetail}></ProductListRelated>
      </div>
    </div>
  );
}