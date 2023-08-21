
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
   
    <Services
        web={Props.web}
        app={Props.app}
      ></Services>
   
     
    
    </div>
  )
}



export default Companies
