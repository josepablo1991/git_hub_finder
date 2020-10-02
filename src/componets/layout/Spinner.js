import  React, {Fragment} from 'react'
import spinner from './load.gif'


const Spinner = () =>{

  //Since it is an arrow function we could simply just return the Fragments as in the comment bellow
  return (
    <Fragment>
      <img src= {spinner} alt ='loading ...' style ={{width: '200px',margin:'auto', display:'block'}}/>
    </Fragment>
  );
}

export default Spinner

// const Spinner = () =>{<Fragment>
//       <img src= {spinner} alt ='loading ...' style ={{width '200px',margin:'auto', display:'block'}}/>
//     </Fragment>
//   );
// }
