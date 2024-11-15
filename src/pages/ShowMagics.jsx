
import { useEffect,useState  } from 'react';
import { getMagics } from './services/apiservicesMagic';
import './ShowMagics.css'
import Logo from '../components/Logo/Logo';

const ShowMagics = () => {
  const [magics, setMagics] = useState([]);

  const fetchMagics = async () => {

    try {
      const response = await getMagics();
      setMagics(response);
    } catch (error) {
      console.error("Error Card no encontrada:", error);
      setError(error);
    }


  };
  useEffect(() => {
    

    fetchMagics();
  }, []);


  return (
    <>
      <div>
       <Logo/>
      </div>
      <div className='content'>

        {magics.map((magic) => (
         <div className='card'>
            <img src={magic.imageUrl} alt="" />
            <h1>{magic.name}</h1>
            <p>{magic.type}</p>
            <h2>Description</h2>
            <p>{magic.text} </p>

          </div>

      
      ))}

      </div>
    </>
  )
}

export default ShowMagics
