import '../../src/App.css';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Sidebar} from '../Components/SideBarGallery';

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

// Define el componente principal que renderizará las tarjetas de animales
const AnimalAdoptionGallery = () => {
  // Ejemplo de datos de animales (puedes reemplazarlos con datos reales de tu API o base de datos)
  const animals = [
    {
      id: 1,
      name: 'Max',
      description: 'Adorable perro en busca de un hogar amoroso.',
      image: 'https://picsum.photos/id/1/200/300',
    },
    {
      id: 2,
      name: 'Whiskers',
      description: 'Gato cariñoso que busca un dueño cariñoso.',
      image: 'https://picsum.photos/id/2/200/300',
    },
    // Agrega más animales según sea necesario
    {
      id: 3,
      name: 'Buddy',
      description: 'Cachorro juguetón en busca de una familia activa.',
      image: 'https://picsum.photos/id/3/200/300',
    },
    {
      id: 4,
      name: 'Mittens',
      description: 'Gatito curioso en busca de un hogar acogedor.',
      image: 'https://picsum.photos/id/4/200/300',
    },
    {
      id: 5,
      name: 'Charlie',
      description: 'Perro amigable y enérgico en busca de un compañero de juegos.',
      image: 'https://picsum.photos/id/5/200/300',
    },
    {
      id: 6,
      name: 'Smokey',
      description: 'Gato tranquilo y relajado en busca de un hogar sereno.',
      image: 'https://picsum.photos/id/6/200/300',
    },
    {
      id: 7,
      name: 'Luna',
      description: 'Perrita dulce y cariñosa en busca de amor y atención.',
      image: 'https://picsum.photos/id/7/200/300',
    },
    {
      id: 8,
      name: 'Oreo',
      description: 'Gato juguetón con un pelaje único en busca de diversión.',
      image: 'https://picsum.photos/id/8/200/300',
    }, 
    {
      id: 9,
      name: 'Rocky',
      description: 'Perro aventurero y leal en busca de un compañero para la vida.',
      image: 'https://picsum.photos/id/9/200/300',
    },
    {
      id: 10,
      name: 'Mocha',
      description: 'Gatita elegante y cariñosa en busca de un rincón acogedor.',
      image: 'https://picsum.photos/id/237/200/300',
    },
    // Agrega más animales según sea necesario
  ];

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
                  image={animal.image}
                  name={animal.name}
                  description={animal.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalAdoptionGallery;
