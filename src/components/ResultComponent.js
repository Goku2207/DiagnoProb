import React from 'react';

const Result = (props) =>{

    return(
        <ul>
           { props.probDiseases.map(data=>(
                <li key={data.ID}>{data.Issue.Name}</li>
            ))}
        </ul>
    );
}

export default Result;