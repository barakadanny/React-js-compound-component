import Card from "./components/Card";
import { products } from "./api/products";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Shop here</h1>
        <div>
          {products.map((product) => (
            <Card key={product.id}>
              <Card.Image src={product.image} />
              <Card.Name>{product.name}</Card.Name>
              <Card.Description>{product.description}</Card.Description>
              <Card.Price>${product.price}</Card.Price>
              <Card.Summary>{product.summary}</Card.Summary>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h1>Products Overview</h1>
        <div>
          {products.map((product) => (
            <Card key={product.id}>
              <Card.Image src={product.image} />
              <Card.Name>{product.name}</Card.Name>
              <Card.Summary>{product.summary}</Card.Summary>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
