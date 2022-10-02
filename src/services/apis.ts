import React, {useState, useEffect} from 'react';

export const fetchAPI: any = (URI:any) =>{
    // 'https://swapi.dev/api/films'
    return fetch(URI).then(response=>{
        return response.json();
    }).then(data=>{
       return data.results;
    });
}

