import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ onClick }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div class="d-flex flex-wrap col-6 h-50 justify-content-evenly align-content-center flex-column shadow rounded-5">
      <p class="h2">Bienvenid@ de vuelta</p>
      <div class="form-floating">
        <input
          class="form-control"
          id="floatingInput"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label for="floatingInput">Usuario</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label for="floatingPassword">Contraseña</label>
      </div>
      <button
        type="button"
        class="btn btn-outline-success btn-lg py-2 col-6"
        onClick={onClick}
      >
        Ingresar
      </button>
    </div>
  );
};

Form.prototype = {
  onClick: PropTypes.func,
};

export default Form;
