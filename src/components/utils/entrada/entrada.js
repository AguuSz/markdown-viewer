import React from 'react';
import './entrada.styles.scss';

const Entrada = ({ titulo, children }) => (
    <div className="entrada">
        <h1 className="titulo">{titulo}</h1>
        <p className="parrafo">{children}</p>
    </div>
)

export default Entrada;