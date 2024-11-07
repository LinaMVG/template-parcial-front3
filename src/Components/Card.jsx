import React from "react";

const Card =({ input1, input2 })=>{
    return <div style={{ border: '1px solid #ddd', padding: '1rem', marginTop: '1rem' }}>
        <h2>::Para input 1 :: Hola {input1}!</h2>
        <p>:: Para input 2:: Sabemos que tu color favorito es:</p>
        <div style={{ backgroundColor: input2, padding: '1rem', textAlign: 'center' }}>
            {input2}
        </div>
    </div>
};

export default Card;