import React from 'react';
import ProductsList from '../components/ProductsList';
import { useQuery } from '@tanstack/react-query';
import { Product } from '../types/Product';
import Layout from '../layouts/Default';

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(
    `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/api/v2/shop/products?itemsPerPage=8`
  );
  if (!response.ok) {
    throw new Error('Error while loading products');
  }

  const data = await response.json();
  return data['hydra:member'] || data.items || data;
};

const Homepage: React.FC = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Product[], Error>({
    queryKey: ['products', 'homepage'],
    queryFn: fetchProducts,
  });

  return (
    <Layout>
        <div className="!bg-[#faf9f6] -z-2 min-h-[550px]">
          <div className="lg:w-[1200px] mx-auto flex min-h-[550px]">
              <div className="w-2/5 mt-[45px]">
                  <h1 className="!text-[80px] !leading-[100%] !font-['Avenir_Next_Bold']">
                      Centro de FP Oficial

                      <span className="block !text-[32px] !leading-[40px] !mt-[10px] !font-['Avenir_Next_Bold']"> a distancia y presencial</span>
                  </h1>

                  <p className="max-w-[335px] !mt-[30px] !mb-[40px] !text-[24px] !leading-[30px] !font-['Avenir_Next_Regular']">
                      Transforma tu vida con nuestros ciclos formativos oficiales de
                      <strong
                          className="relative mx-1 whitespace-nowrap !font-['Avenir_LT_Std_Heavy'] before:content-[''] before:absolute before:bottom-[3px] before:left-0 before:w-full before:h-[15px] before:bg-[#bfeaf1] before:rounded-[20px] before:-z-1"
                      >
                          FP Grado Medio
                      </strong>
                      y
                      <br />
                      <strong
                          className="relative mx-1 whitespace-nowrap !font-['Avenir_LT_Std_Heavy'] before:content-[''] before:absolute before:bottom-[3px] before:left-0 before:w-full before:h-[15px] before:bg-[#bfeaf1] before:rounded-[20px] before:-z-1"
                      >
                          FP Grado Superior
                      </strong>
                      .
                  </p>


                  <button className="bg-[#202020] hover:bg-[#00808d] transition-colors duration-300 !text-white !w-[300px] !h-[56px] !font-['Avenir_Next_Bold'] px-[15px] py-[5px] !rounded-full !text-[20px]">
                      Solicitar información
                  </button>

              </div>

              <div className="w-3/5 bg-[rgb(32,32,32)] flex min-w-[730px]">
                  <img
                      className="w-[310px]"
                        src="/estudiante-escritorio-desktop.jpg"
                        alt="Logo Ilerna"
                  />

                  <div className="flex justify-center items-center w-full ">
                      <img
                            className="w-[437px] h-[395px]"
                            src="/image-cierre-dsktp.webp"
                            alt="promo"
                        />
                  </div>

              </div>
          </div>
        </div>


      <div className="container mb-5 mt-5">
        {isLoading && <div className="text-center">Loading products...</div>}
        {isError && (
          <div className="text-danger text-center">Error: {error.message}</div>
        )}

        {products && (
          <ProductsList products={products} limit={4} name={'Latest deals'} />
        )}
      </div>
      <div className="container mb-5">
        <div className="mb-5">
          <h2>New collection</h2>
        </div>

        <div className="photo-grid">
          <div className="photo-grid-item-1">
            <img
              src={`${
                import.meta.env.VITE_REACT_APP_API_URL
              }/build/shop/images/homepage-new-collection-photo-1.2b163989.webp`}
              className="object-fit-cover w-100 h-100 rounded-3"
              loading="lazy"
              alt="New collection"
            />
          </div>
          <div className="photo-grid-item-2">
            <img
              src={`${
                import.meta.env.VITE_REACT_APP_API_URL
              }/build/shop/images/homepage-new-collection-photo-2.2c91a0c3.webp`}
              className="object-fit-cover w-100 h-100 rounded-3"
              loading="lazy"
              alt="New collection"
            />
          </div>
          <div className="photo-grid-item-3">
            <img
              src={`${
                import.meta.env.VITE_REACT_APP_API_URL
              }/build/shop/images/homepage-new-collection-photo-3.466a0c4c.webp`}
              className="object-fit-cover w-100 h-100 rounded-3"
              loading="lazy"
              alt="New collection"
            />
          </div>
        </div>
      </div>

      <div className="container">
        {products && (
          <ProductsList
            products={products}
            limit={8}
            name={'Latest products'}
          />
        )}
      </div>
    </Layout>
  );
};

export default Homepage;
