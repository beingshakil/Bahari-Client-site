import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";


const Product = () => {
  const { all_Product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_Product?.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
};

export default Product;
