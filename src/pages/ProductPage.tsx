import { useContext, useEffect, Component } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import SingleProductCard from '../components/SingleProductCard';

const ProductPage = () => {
  const { getSingleProduct } = useContext(GlobalContext);
  const { productId } = useParams<{ productId: string }>();

  useEffect(() => {
    getSingleProduct(+productId);
  }, [productId]);
 
  return (
    <div id='product'>

      {/* Breadcrumb */}
      <div className='row my-3'>
        <div className='col'>

         <div>
          <SingleProductCard />
         </div>
          
        </div>
      </div>

    </div>
  );
};

export default ProductPage;