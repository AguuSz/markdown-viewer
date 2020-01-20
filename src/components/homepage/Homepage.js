import React from 'react';
import './Homepage.styles.scss';

import Boton from '../utils/boton/btn';

import MDReactComponent from 'markdown-react-js';

class Homepage extends React.Component {

    constructor() {
        super()

        this.state = {
            markdownText: '',
            INITIAL_STATE: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleClick = () => {
        this.setState({ markdownText: '' })
    }

    render() {
        return (
            <div className="contenedor">
                <div className="botones">
                    <h2 className="titulo">Visualize your markdown in real time!</h2>
                    <div onClick={this.handleClick}>
                        <Boton className="success grow texto-negro">Clean!</Boton>
                    </div>
                </div>

                <div className="inputs">
                    <form action="">
                        <textarea
                            className="bloque"
                            value={this.state.markdownText}
                            name="markdownText"
                            rows="300"
                            height="10"
                            onChange={this.handleChange}
                        />
                    </form>
                    <MDReactComponent className="bloque" text={this.state.markdownText} />
                </div>
            </div>
        )
    }
}

export default Homepage;