import React from "react";
import styles from "../css/page.module.css";

// Como se declararia un componente funcional
/* 
    Se declara un interface para definir los tipos de las
    props que se le pasaran al componente
    (Se suele usar solo en typescript)
*/


export const TituloFuncion = ({ children }) => {
  return <h1 className={styles.tituloFuncion}>{children}</h1>;
};

// Como se declararia un componente de clase

export class TituloClases extends React.Component {
  // Se declara el constructor para inicializar el estado
  constructor(props) {
    super(props);
  }
  render() {
    return <h1 className="tituloClass">{this.props.children}</h1>;
  }
}
