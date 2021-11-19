import React, { Component } from "react";
import ReactModal from "react-modal";

import LayoutBasico from './LayoutBasico';


class LayoutModal extends Component {

    constructor(props){
        super(props)
        this.state = {
            isModalOpen: false,
        }
    }

    handleModalOpen = event => {
        this.setState ({ isModalOpen : true })
    }

    handleModalClose = event => {
        this.setState ({ isModalOpen : false })
    }

    render(){
        return(
            <LayoutBasico>
                <div id="main">
                    <h3>Este es el main</h3>
                    <p>Contenido del main</p>
                    <button onClick={this.handleModalOpen}>Abrir Modal</button>
                </div>
                <ReactModal appElement={document.querySelector('#main')}
                            isOpen={this.state.isModalOpen} 
                            onRequestClose={this.handleModalClose}
                            contentLabel = "Modal React on Gatsby"
                >
                    <h3>Titulo del Modal</h3>
                    <button onClick={this.handleModalClose}>Cerrar Modal</button>
                </ReactModal>
            </LayoutBasico>
        )
    }
}

export default LayoutModal

