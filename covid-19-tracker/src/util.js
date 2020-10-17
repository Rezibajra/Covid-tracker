import {Circle,Popup} from "react-leaflet";
export const sortData=(data)=>{
    const sortedData=[...data];
    return sortedData.sort((a,b)=>(a.cases>b.cases?-1:1));
};

export const showDataOnMap = (data,casesType='cases')=>(
    data.map(country=>{
        
    })
);