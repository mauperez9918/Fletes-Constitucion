import { TextField } from "@mui/material";
import "./Contact.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Contact = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: (data) => {
      axios
        .post("https://app-test-ocij.onrender.com/procesar-email", data)
        .then((response) => {
          console.log("Respuesta del servidor:", response.data);
        })
        .catch((error) => {
          console.error("Error al realizar la solicitud:", error);
        });
    },
    validationSchema: Yup.object({
      name: Yup.string("Este campo debe ser una cadena de texto")
        .required("Este campo es obligatorio")
        .matches(/^[A-Za-z\s]+$/, {
          message: "Este campo solo puede contener letras",
        })
        .min(3, "Este campo debe contener al menos 3 caracteres")
        .max(16, "Este campo debe contener maximo 16 caracteres"),
      email: Yup.string("Este campo debe ser una cadena de texto")
        .required("Este campo es obligatorio")
        .email("Tu email no es valido"),
      phone: Yup.string("En este campo solo se permiten numeros")
        .matches(/^[0-9]+$/, {
          message: "Este campo solo puede contener numeros",
        })
        .required("Este campo es obligatorio")
        .min(9, "Este campo debe contener al menos 9 caracteres"),
      message: Yup.string,
    }),
    validateOnChange: false,
  });

  return (
    <div className="main">
      <div className="main-layout">
        <section className="contact-section">
          <h1>Contactanos!</h1>
          <div className="contact-columns">
            <form
              onSubmit={handleSubmit}
              action="/procesar-email"
              method="POST"
              encType="multipart/form-data"
            >
              <ul>
                <div>
                  <li>
                    <TextField
                      sx={{
                        width: "80%",
                        m: "22px",
                        height: "56px",
                        backgroundColor: "white",
                      }}
                      id="filled-basic"
                      label="Nombre"
                      variant="outlined"
                      name="name"
                      onChange={handleChange}
                      error={errors.name ? true : false}
                      helperText={errors.name}
                    />
                  </li>
                  <li>
                    <TextField
                      sx={{
                        width: "80%",
                        m: "22px",
                        height: "56px",
                        backgroundColor: "white",
                      }}
                      id="filled-basic"
                      label="Email"
                      variant="outlined"
                      name="email"
                      onChange={handleChange}
                      error={errors.email ? true : false}
                      helperText={errors.email}
                    />
                  </li>
                </div>
                <div>
                  <li>
                    <TextField
                      sx={{
                        width: "80%",
                        m: "22px",
                        height: "56px",
                        backgroundColor: "white",
                      }}
                      id="filled-basic"
                      label="Telefono"
                      variant="outlined"
                      name="phone"
                      type="text"
                      pattern="[0-9]{10}"
                      onChange={handleChange}
                      error={errors.phone ? true : false}
                      helperText={errors.phone}
                    />
                  </li>
                </div>
                <li>
                  <textarea
                    placeholder="Mensaje"
                    name="message"
                    onChange={handleChange}
                  ></textarea>
                </li>
                <li>
                  <button className="button" type="submit">
                    Solicitar presupuesto
                  </button>
                </li>
              </ul>
            </form>
            <img src="https://res.cloudinary.com/dwpppqzr4/image/upload/v1698296832/Fletes%20Constitucion/ezgif.com-gif-maker_pmcwrq.png" />
          </div>

          <p className="contact-text">
            El traslado termina en el punto donde fue citado el vehículo. El
            servicio es la contratación de un vehículo con chofer. Para tareas
            de carga y descarga fuera del vehículo se deberá adicionar el
            personal correspondiente. En Gran Buenos Aires, además, se cobra por
            Km. recorrido. Consultar Cuando en el recorrido del vehículo se
            incluyan autopistas también se adicionará kilometraje. Fuera de los
            días y horarios indicados, consulte valores y disponibilidad para el
            servicio de Transporte Los valores indicados no incluyen gastos de
            peaje, estacionamiento e I.V.A
          </p>

          <p className="contact-text">
            Los Precios son en Capital Federal y en horario de 07:00 hs. a 18:00
            hs. de Lunes a Viernes. Sábados de 07:00 hs. a 14:00 hs. No incluye
            feriados.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
