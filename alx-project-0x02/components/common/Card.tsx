import React from "react";
import { CardProps } from '../../interfaces';


const Card: React.FC<CardProps> = ({title, content}) =>  {
    return (
       <div style={styles.card}>
            <h2>{title}</h2>
            <p>{content}</p>
       </div>
    );
};

const styles = {
    card:{
        border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#f9f9f9',
    },
};

export default Card;