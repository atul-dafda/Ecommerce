import styled from "styled-components";
import { category } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./categoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const categories = () => {
  return (
    <Container>
      {category.map((item) => (
        <CategoryItem Item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default categories;
