import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingBasketOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethod";

const Info = styled.div`
  opacity: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 380px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 420px;
  height: 350px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 60%;
  width: 60%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  const [product, setProduct] = useState([]);
  const [productColor, setProductColor] = useState([]);
  const [productSize, setProductSize] = useState([]);
  const [quantity, setQuantity] = useState([]);

  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const res = await publicRequest.get("/products/find/" + id);
  //       setProduct(res.data);
  //     } catch {}
  //   };
  //   getProduct();
  // }, [id]);

  const dispatch = useDispatch();
  const handlerClick = () => {
    dispatch(addProduct({ ...product, quantity, productColor, productSize }));
  };

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingBasketOutlined onClick={handlerClick} />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
