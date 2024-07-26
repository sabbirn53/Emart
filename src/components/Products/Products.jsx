import React from 'react';
import './Products.css';
import img1 from '../../assets/ac.jpg';
import img2 from '../../assets/camera.jpg'
import img3 from '../../assets/mbl.jpg'
import img4 from '../../assets/tv.jpg'

const Data = [
  { id: 1, name: "High Air Conditioner", image: img1 },
  { id: 2, name: "Smart Phone", image: img3 },
  { id: 3, name: "Canon HD Camera", image: img2 },
  { id: 4, name: "Smart TV", image: img4 },
];

const Products = () => {
  return (
    <section className='product container'>
      <div className="sectionTitle">
        <h3 className='title'>Our Products</h3>
      </div>
      <div className="secContent grid">
        {Data.map(({ id, name, image }) => (
          <div key={id} className='singleProduct'>
            <div className='imageDiv'>
              <img src={image} alt={name} />
            </div>
            <div className='info'>
              <span className="name">{name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
