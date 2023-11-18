import '../../src/App.css';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'bootstrap';
import {Sidebar} from '../components/SideBarGallery';
import { useNavigate } from 'react-router-dom';


const AnimalCard = ({ image, name, description, historiaClinicaMascota  }) => {
  // Declara el modal y la referencia a su elemento
  const modalRef = React.useRef(null);
  const navigate = useNavigate();

  // Función para mostrar el modal y redirigir al home
  const adoptAnimal = () => {
    // Puedes realizar alguna lógica adicional aquí antes de redirigir
    const modal = new Modal(modalRef.current);
    modal.show();

    // Redirige al home después de cierto tiempo (por ejemplo, 3 segundos)
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const downloadHistoriaClinica = () => {
    const historiaClinicaData = historiaClinicaMascota.split(',')[1]; // Obtén la parte de datos base64
    const blob = b64toBlob(historiaClinicaData);
    const url = window.URL.createObjectURL(blob);

    // Crea un enlace temporal y haz clic en él para iniciar la descarga
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'historia_clinica.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Función para convertir cadena base64 en Blob
  const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  };

  return (
    <div className="card mb-3" style={{ boxShadow: '0 7px 11px rgba(0, 0, 0, 0.1)' }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex">
          {historiaClinicaMascota && (
            <button className="btn btn-primary me-2" onClick={downloadHistoriaClinica}>
              Historia Clínica
            </button>
          )}
          <button className="btn btn-success" onClick={adoptAnimal}>
            Adóptalo
          </button>
        </div>

        {/* Modal */}
        <div className="modal" tabIndex="-1" ref={modalRef}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Solicitud en Proceso de Revisión</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Su solicitud está en proceso de revisión. Le informaremos una vez se haya completado.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export const AnimalsGallery = () => {
  // Obtén los datos de animales desde el localStorage
  const getAnimalsFromLocalStorage = () => {
    const storedAnimals = localStorage.getItem('mascotas') ;
    console.log("Hola",storedAnimals)
    console.log("Hola2",(storedAnimals || storedAnimals ==! 'null' || storedAnimals ==! ''))
    return (storedAnimals || storedAnimals ==! 'null' || storedAnimals ==! '') ? JSON.parse(storedAnimals) : null;
  };

const animals = getAnimalsFromLocalStorage() || [{
  id: 1,
  nombre: 'Max',
  description: 'Adorable perro en busca de un hogar amoroso.',
  imagenMascota: 'https://picsum.photos/id/1/200/300',
},
{
  id: 2,
  nombre: 'Max',
  description: 'Adorable perro en busca de un hogar amoroso.',
  imagenMascota: 'https://picsum.photos/id/1/200/300',
},
{
  id: 3,
  nombre: 'Max',
  description: 'Adorable perro en busca de un hogar amoroso.',
  imagenMascota: 'https://picsum.photos/id/1/200/300',
},
{
  id: 4,
  nombre: 'Max',
  description: 'Adorable perro en busca de un hogar amoroso.',
  imagenMascota: 'https://picsum.photos/id/1/200/300',
},
{
  id: 5,
  nombre: 'Max',
  description: 'Adorable perro en busca de un hogar amoroso.',
  imagenMascota: 'https://picsum.photos/id/1/200/300',
},
{
  id: 6,
  nombre: 'Max',
  description: 'Adorable perro en busca de un hogar amoroso.',
  imagenMascota: 'https://picsum.photos/id/1/200/300',
},
{
  id: 1,
  nombre: 'Max',
  description: 'Adorable perro en busca de un hogar amoroso.',
  imagenMascota: 'https://picsum.photos/id/1/200/300',
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
                  historiaClinicaMascota ={animal.historiaClinicaMascota }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};