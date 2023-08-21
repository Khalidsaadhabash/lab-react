import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import Services from './Services';

interface com{
   
    namecomp:string;
    employes:number;
    YearFounded:number;
    app:string;
    web:string;
    
}

function Companies(Props:com) {
  return (
    <div>{Props.namecomp}
    {Props.employes}
    {Props.YearFounded}
    <Services app={'ggggggggg'} web={'ggggggg'}/>
     
    
    </div>
  )
}



export default Companies
