<<<<<<< HEAD
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
=======
import React from 'react';
import './Section.css';

interface Props {
  /** Clases de CSS que se agregan al componente padre */
  cssClasses?: string;
  /** El contenido de la sección */
  children: React.ReactNode;
}

function Section({ ...props }: Props) {
  const cssClasses = props.cssClasses || "section";

  return (
    <div className={cssClasses}>
      { props.children }
>>>>>>> cf1693913d5f4aae58ee98da6c1423a43429000c
    </div>
  );
}

export default Section;
