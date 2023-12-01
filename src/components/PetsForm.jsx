import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export const PetsForm = ({
  mascotas,
  setMascotas,
  mascota,
  setMascota,
  mascotaToEdit,
  onGuardarMascotaEditada,
  actualizarListaMascotas,
}) => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [especieMascota, setEspecieMascota] = useState("");
  const [razaMascota, setRazaMascota] = useState("");
  const [edadMascota, setEdadMascota] = useState("");
  const [fechaMascota, setFechaMascota] = useState("");
  const [imagenMascota, setImagenMascota] = useState(null);
  const [historiaClinicaMascota, setHistoriaClinicaMascota] = useState(null);
  const [observacionesMascota, setObservacionesMascota] = useState("");
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    nombreMascota: "",
    especieMascota: "",
    razaMascota: "",
    edadMascota: "",
    fechaMascota: "",
    imagenMascota: null,
    historiaClinicaMascota: null,
    observacionesMascota: "",
  });

  useEffect(() => {
    console.log("pdsadas");
    console.log("Mascota a editar en PetsForm:ppp", mascotaToEdit);
    if (mascotaToEdit && Object.keys(mascotaToEdit).length > 0) {
      //Lleno el form con los datos de la mascota elegida a editar
      setFormData({
        nombreMascota: mascotaToEdit.nombre || "",
        especieMascota: mascotaToEdit.especie || "",
        razaMascota: mascotaToEdit.raza || "",
        edadMascota: mascotaToEdit.edad || "",
        // fechaMascota: mascotaToEdit.fec || "",
        imagenMascota: mascotaToEdit.imagen || "",
        historiaClinicaMascota: mascotaToEdit.historiaClinica || "",
        observacionesMascota: mascotaToEdit.observacion || "",
      });
    }
    // }, [mascota]);
  }, [mascotaToEdit]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageBase64 = reader.result;
        setFormData({
          ...formData,
          imagenMascota: imageBase64,
          // nombreImagen: selectedImage.name,
        });

        setImagenMascota(imageBase64);
        // console.log("image base: ", imageBase64);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleHistoriaClinicaChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const historiaClinicaBase64 = reader.result;
        setHistoriaClinicaMascota(historiaClinicaBase64);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.nombreMascota ||
      !formData.especieMascota ||
      !formData.razaMascota ||
      !formData.edadMascota ||
      !formData.imagenMascota
    ) {
      // console.log("error");
      setError(true);
      return;
    }

    setError(false);

    if (mascotaToEdit && Object.keys(mascotaToEdit).length > 0) {
      //logica para editar la mascota existente
      onGuardarMascotaEditada(formData);
    } else {
      //logica para agregar nueva mascota
      try {
        console.log("ffddfs");
        const docRef = await addDoc(collection(db, "mascotas"), {
          nombre: formData.nombreMascota,
          especie: formData.especieMascota,
          raza: formData.razaMascota,
          edad: formData.edadMascota,
          estado: 0,
          // fechacota: formData.fechaMascota,
          imagen: formData.imagenMascota,
          historiaClinica: formData.historiaClinicaMascota,
          observacion: formData.observacionesMascota,
        });
        console.log("mascota agregada");
        const nuevaMascota = {
          ...formData,
          id: docRef.id,
          nombre: docRef.nombre,
          especie: docRef.especie,
          imagen: docRef.imagen,
          estado: docRef.estado,
        };
        setMascotas([...mascotas, nuevaMascota]);

        //limpiar campos del form
        setFormData({
          nombreMascota: "",
          especieMascota: "",
          razaMascota: "",
          edadMascota: "",
          fechaMascota: "",
          imagenMascota: null,
          historiaClinicaMascota: null,
          observacionesMascota: "",
        });

        // actualizarListaMascotas(...mascotas, nuevaMascota);
      } catch (error) {
        console.error("error al agregar mascota", error);
      }
    }
  };

  return (
    <>
      {/* Form */}
      <div className="row">
        <div className="container col-md-6">
          <h2 className="p2">Datos Mascota</h2>

          <p>
            Añade Mascotas y {""}
            <span>Administralas</span>
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded-lg p-4 mb-5"
          >
            <div className="mb-5">
              <label
                htmlFor="mascota"
                className="d-block font-weight-bold text-gray-700"
              >
                Nombre de la Mascota
              </label>
              <input
                id="mascota"
                type="text"
                placeholder="Nombre de la Mascota"
                className="border border-2 w-100 p-2 mt-2 rounded-md"
                // value={nombreMascota}
                // onChange={(e) => setNombreMascota(e.target.value)}
                value={formData.nombreMascota}
                onChange={(e) =>
                  setFormData({ ...formData, nombreMascota: e.target.value })
                }
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="mascota"
                className="d-block font-weight-bold text-gray-700"
              >
                Especie de la Mascota
              </label>
              <input
                id="mascota"
                type="text"
                placeholder="Especie de la Mascota"
                className="border border-2 w-100 p-2 mt-2 rounded-md"
                // value={especieMascota}
                // onChange={(e) => setEspecieMascota(e.target.value)}
                value={formData.especieMascota}
                onChange={(e) =>
                  setFormData({ ...formData, especieMascota: e.target.value })
                }
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="raza"
                className="d-block font-weight-bold text-gray-700"
              >
                Raza
              </label>
              <input
                id="raza"
                type="text"
                placeholder="Raza"
                className="border border-2 w-100 p-2 mt-2 rounded-md"
                // value={razaMascota}
                // onChange={(e) => setRazaMascota(e.target.value)}
                value={formData.razaMascota}
                onChange={(e) =>
                  setFormData({ ...formData, razaMascota: e.target.value })
                }
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="edad"
                className="d-block font-weight-bold text-gray-700"
              >
                Edad
              </label>
              <input
                id="edad"
                type="number"
                placeholder="Edad mascota"
                className="border border-2 w-100 p-2 mt-2 rounded-md"
                // value={edadMascota}
                // onChange={(e) => setEdadMascota(e.target.value)}
                value={formData.edadMascota}
                onChange={(e) =>
                  setFormData({ ...formData, edadMascota: e.target.value })
                }
              />
            </div>

            {/* <div className="mb-5">
              <label
                htmlFor="alta"
                className="d-block font-weight-bold text-gray-700"
              >
                Fecha Encontrada
              </label>
              <input
                id="alta"
                type="date"
                className="border border-2 w-100 p-2 mt-2 rounded-md"
                value={fechaMascota}
                onChange={(e) => setFechaMascota(e.target.value)}
              />
            </div> */}

            <div className="mb-5">
              <label
                htmlFor="imagen"
                className="d-block font-weight-bold text-gray-700"
              >
                Adjuntar Imagen
              </label>
              <input
                type="file"
                className="border border-2 w-100 p-2 mt-2 rounded-md"
                onChange={handleImageChange}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="clinica"
                className="d-block font-weight-bold text-gray-700"
              >
                Adjuntar Historia Clinica
              </label>
              <input
                type="file"
                className="border border-2 w-100 p-2 mt-2 rounded-md"
                onChange={handleHistoriaClinicaChange}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="observaciones"
                className="d-block font-weight-bold text-gray-700"
              >
                Observaciones
              </label>
              <textarea
                id="observaciones"
                placeholder="Añade alguna observacion"
                className="border border-2 w-100 p-2 mt-2 rounded-md"
                // value={observacionesMascota}
                // onChange={(e) => setObservacionesMascota(e.target.value)}
                value={formData.observacionesMascota}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    observacionesMascota: e.target.value,
                  })
                }
              />
            </div>

            <input
              type="submit"
              className="btn btn-primary btn-block text-uppercase"
              value={mascotaToEdit ? "Editar Mascota" : "Agregar Mascota"}
            />
<div>
  {/* Mensaje de error: faltan llenar campos */}
      {error && (
        <p style={{ color: 'red', fontWeight: '', marginBottom: '5px'}}>Llenar todos los campos obligatorios</p>
      )}
</div>
            
          </form>
        </div>
      </div>
    </>
  );
};
