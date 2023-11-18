import '../../src/App.css';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Sidebar} from '../components/SideBarGallery';

const AnimalCard = ({ image, name, description }) => {
  return (
    <div className="card mb-3" style={{ boxShadow: '0 7px 11px rgba(0, 0, 0, 0.1)' }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn btn-success">Adóptalo</button>
      </div>
    </div>
  );
};

export const AnimalsGallery = () => {
  // Obtén los datos de animales desde el localStorage
  const getAnimalsFromLocalStorage = () => {
    const storedAnimals = localStorage.getItem('mascotas') ;
    console.log(storedAnimals)
    return storedAnimals ? JSON.parse(storedAnimals) : null;
  };

const animals = getAnimalsFromLocalStorage() || [{
  id: 1,
  nombre: 'Max',
  description: 'Adorable perro en busca de un hogar amoroso.',
  imagen: 'https://picsum.photos/id/1/200/300',
},];

console.log(animals)

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Animales en adopción</h2>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {animals.map((animal) => (
              <div key={animal.id} className="col">
                <AnimalCard
                  image={animal.imagenMascota}
                  name={animal.nombreMascota}
                  description={animal.observacionesMascota}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};