import { useParams, useNavigate } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const products = {
    1: { name: 'Premium Headphones', price: 2500, description: 'Noise-cancelling over-ear headphones with 30hr battery life' },
    2: { name: 'Wireless Keyboard', price: 3000, description: 'Ergonomic mechanical keyboard with RGB lighting' },
    3: { name: 'Bluetooth Speaker', price: 1500, description: 'Waterproof portable speaker with 20W output' },
    4: { name: 'Wireless Mouse', price: 700, description: 'Zebronics Wireless Mouse with 10 metres range' },
    5: { name: 'Smart Watch', price: 4999, description: 'Fitness smartwatch with heart rate monitor and sleep tracking' },
    6: { name: 'Gaming Laptop', price: 74999, description: 'High-performance laptop with RTX graphics and SSD storage' },
    7: { name: '4K Monitor', price: 18500, description: '27-inch UHD 4K IPS monitor with HDR support' },
    8: { name: 'Portable SSD', price: 5600, description: '1TB USB-C portable SSD with fast read/write speeds' }
  }

  const product = products[id] || { 
    name: 'Unknown Product', 
    price: 0, 
    description: 'Product not found' 
  }

  return (
    <div className="page product-detail">
      <h1>{product.name}</h1>
      <p className="price">{product.price.toFixed(2)}</p>
      <p className="description">{product.description}</p>
      <div className="button-group">
        <button onClick={() => navigate(-1)} className="back-button">
          Go Back
        </button>
        <button onClick={() => navigate('/products')} className="all-products">
          View
        </button>
      </div>
    </div>
  )
}

export default ProductDetail
