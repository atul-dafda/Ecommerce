//import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Footer from "../components/Footer";
import styles from "./ProductList.module.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value,
    });
  };
  console.log(filters);
  return (
    <div className={styles.Container}>
      <Navbar />
      <Announcement />
      <h1 className={styles.Title}>{cat}</h1>
      <div className={styles.FilterContainer}>
        <div className={styles.Filter}>
          <span className={styles.FilterText}>Filter Products:</span>
          <select
            name="color"
            className={styles.Select}
            onChange={handleFilters}
          >
            <option className={styles.Option}>Color</option>
            <option className={styles.Option} value="white">
              white
            </option>
            <option className={styles.Option} value="black">
              black
            </option>
            <option className={styles.Option} value="red">
              red
            </option>
            <option className={styles.Option} value="yellow">
              yellow
            </option>
            <option className={styles.Option} value="pink">
              pink
            </option>
          </select>
          <select
            name="size"
            className={styles.Select}
            onChange={handleFilters}
          >
            <option className={styles.Option}>Size</option>
            <option className={styles.Option}>XS</option>
            <option className={styles.Option}>S</option>
            <option className={styles.Option}>M</option>
            <option className={styles.Option}>L</option>
            <option className={styles.Option}>XL</option>
          </select>
        </div>
        <div className={styles.Filter}>
          <span className={styles.FilterText}>Sort Products:</span>
          <select
            className={styles.Select}
            name="sort"
            onChange={(e) => setSort(e.target.value)}
          >
            <option className={styles.Option} value="newest">
              Newest
            </option>
            <option className={styles.Option} value="asc">
              Price (asc)
            </option>
            <option className={styles.Option} value="desc">
              Price (desc)
            </option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
