import React, { Children } from 'react';
import './Section.css';

interface Props {
  /**   El Contenido  de csss que se agregan al componente padre*/
  cssClasses?: string;

  /**   El Contenido de la seccion*/
  children: React.ReactNode;

}

function Section( {...props}: Props) {
  const cssClasses = props.cssClasses || "section";
  
  
  return (
    <div className={cssClasses}>
      {props.children}
    </div>
  );
}

export default Section;
