import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axios';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [randomCategories, setRandomCategories] = useState([]);

  const fetchCategoriess = async () => {
    try {
      const response = await axios.get('/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories', error);
    }
  };

  const getRandomCategories = (categories, num) => {
    const shuffled = categories.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  useEffect(() => {
    fetchCategoriess();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setRandomCategories(getRandomCategories(categories, 12));
    }
  }, [categories]);

  return (
    <div>
      <div className='container mx-auto lg:px-10 xl:px-24 md:px-4 px-5 mb-2 mt-2 xl:mt-5 lg:mt-5 md:mt-5 xl:mb-10 lg:mb-10 md:mb-10'>
        <div className='grid grid-cols-2 items-center justify-items-center gap-3 uppercase md:grid-cols-6 xl:grid-cols-6 lg:grid-cols-6 sm:grid-cols-6'>
          {randomCategories.map((category) => {
            let images;

            if (
              typeof category.images === 'string' &&
              category.images.startsWith('[')
            ) {
              try {
                images = JSON.parse(category.images);
              } catch (error) {
                console.error('Error parsing images JSON', error);
                images = [];
              }
            } else {
              images = [category.images];
            }

            const imageUrl =
              Array.isArray(images) && images.length > 0 ? images[0] : 'Error';

            return (
              <div
                key={category.id}
                className='flex flex-col justify-items-center items-center w-full gap-1'
              >
                <img
                  className='w-full h-[140px] md:h-[150px] sm:h-[150px] min-h-[150px] lg:h-[220px] xl:[220px] object-cover'
                  src={`https://dashboard.trungthanhzone.com${imageUrl}`}
                  alt={category.name}
                />
                <Link to={`/categories/${category.slug}`}>
                  <span className='text-xs md:text-sm lg:text-sm xl:text-sm hover:text-[#fe5c17] underline'>
                    {category.name}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
