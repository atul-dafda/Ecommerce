import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Footer from "../components/Footer";
import styles from "./ProductList.module.css";

const ProductList = () => {
  return (
    <div className={styles.Container}>
      <Navbar />
      <Announcement />
      <h1 className={styles.Title}>Dresses</h1>
      <div className={styles.FilterContainer}>
        <div className={styles.Filter}>
          <span className={styles.FilterText}>Filter Products:</span>
          <select className={styles.Select}>
            <option className={styles.Option} disabled selected>
              Color
            </option>
            <option className={styles.Option}>White</option>
            <option className={styles.Option}>Black</option>
            <option className={styles.Option}>Red</option>
            <option className={styles.Option}>Yellow</option>
            <option className={styles.Option}>Pink</option>
          </select>
          <select className={styles.Select}>
            <option className={styles.Option} disabled selected>
              Size
            </option>
            <option className={styles.Option}>XS</option>
            <option className={styles.Option}>S</option>
            <option className={styles.Option}>M</option>
            <option className={styles.Option}>L</option>
            <option className={styles.Option}>XL</option>
          </select>
        </div>
        <div className={styles.Filter}>
          <span className={styles.FilterText}>Sort Products:</span>
          <select className={styles.Select}>
            <option className={styles.Option} selected>
              Newest
            </option>
            <option className={styles.Option}>Price (asc)</option>
            <option className={styles.Option}>Price (desc)</option>
            <option className={styles.Option}>Red</option>
            <option className={styles.Option}>Yellow</option>
            <option className={styles.Option}>Pink</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
