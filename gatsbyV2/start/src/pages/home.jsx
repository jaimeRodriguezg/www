import React from "react";
import LayoutBasico from "../layouts/LayoutBasico";
import Seo from "../components/seo";
import { Button } from 'react-bootstrap';

export default function Home(){
    return(
        <LayoutBasico>
            <Seo title="Home" />
            <h1>Estamos en el home</h1>
            <Button className="btn-sm btn-info">Ingresar</Button>
        </LayoutBasico>
    )
}