import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const SingleProductCard = () => {
    const { product, priceDecimal } = useContext(GlobalContext);

    if (!product) {
        return (
          <div className='row'>
            <div className='col'>
              <h2 className='text-center'>No Product!</h2>
            </div>
          </div>
        );
      }
      
      

  return (
    <div id='product'>

          {/* Breadcrumb */}
          <div className='page-breadcrumb'>
            <h4>
              <span>
                <Link to='/'>Home</Link>
              </span>
              {' > '}
              <span>
                <Link to={`/products/${product.id}`}>{product.title}</Link>
              </span>
            </h4>
          </div>

      {/* Product Card */}
      <div className='row'>
        <div className='col-sm-12 col-md-8 offset-md-2'>
          <div className='card'>
            <div className='row'>

              {/* Product Img */}
              <div className='col-sm-12 col-md-4'>
                <div className='prod-img-container p-3'>
                  <div
                    className='prod-img'
                    style={{ backgroundImage: `url(${product.image})` }}></div>
                  </div>
                </div>

               {/* product details */}
               <div className='col-sm-12 col-md-8'>
                <div className='card-body d-flex flex-column justify-content-between h-100'>

                  {/* product title */}
                  <h3 className='card-title'>
                    {product.title}
                    <div className=''>
                      <small className='text-info'>${priceDecimal(+product.price)}</small>
                    </div>
                  </h3>

                  {/* product details */}
                  <div className='card-details'>
                    <h4>Description</h4>
                    <p>{product.description}</p>
                    <div>
                      <span className='badge badge-warning'>
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* product add to cart */}
                  <div className='card-cart'>
                    <div className='row'>

                      <div className='col-2'>
                        <div className='form-group'>
                          <select className='form-control'>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                          </select>
                        </div>
                      </div>

                      <div className='col-10'>
                        <button className='btn btn-block btn-danger'>
                          Add To Cart
                        </button>
                      </div>

                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SingleProductCard;