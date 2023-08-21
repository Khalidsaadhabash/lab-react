
import './App.css'
import Programers from './component/Programers'
import Companies from './component/Companies'


function App() {
  

  return (
    <>
     
      <div className="pro">
        <h1>programs</h1>
      <Programers name='khalid' langugeprogram='java' expert={  3   } company={   "khalid"   } />
      <Programers name='ali' langugeprogram='dart ' expert={ 5   } company={   "twiqe"   } />
      <Programers name='bander' langugeprogram='javascript' expert={  2   } company={   "alqabtah"   } />
     </div>
     <div className='comp'>
      <h1>Companies </h1>
      <Companies namecomp='stc' employes={222} YearFounded={1966} app={'ss'} web={'sss'}   />
    <Companies  namecomp='zain' employes={444} YearFounded={1990} app={'sss'} web={'sss'}  />
    
      


     </div>
     
    </>
  )
}

export default App
