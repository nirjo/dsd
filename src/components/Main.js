import Product from "./Product";

const Main = (props) => {
  const { products, onAdd, onRemove } = props;

  return (
    <div className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={products.id} product={product}>
            {products.title}
            onAdd={onAdd}
            onRemove={onRemove}
          </Product>
        ))}
      </div>
    </div>
  );
};

export default Main;
