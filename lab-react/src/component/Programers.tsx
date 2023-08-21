interface employes{
    name:string;
    langugeprogram?:string;
    expert:number;
    company:any;
}

function Programers(Props:employes) {
  return (
    <div >{Props.name}
    {Props.langugeprogram}
    {Props.expert}
    {Props.company}</div>
  )
}

export default Programers