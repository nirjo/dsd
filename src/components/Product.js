const Product = (props) => {
  const { product, onAdd } = props;

  return (
    <div className="card">
      <div>
        <img className="small" src={product.image} alt={product.name} />
        <h3>{product.title}</h3>
        <div>${product.price}</div>
      </div>
      <div>
        {/* <button onClick={() => onRemove()} className="add">
          -
        </button>
        <button onClick={() => onAdd()} className="remove">
          +
        </button> */}

        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
