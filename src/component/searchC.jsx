import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayCrew from '../component/displayCrew';

function SearchC() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchData = async () => {
    const url = 'https://api.spacexdata.com/v4/crew';
    try {
      


        
      const response = await axios.get(url);
      console.log('data', response)
    setData(response.data);
      
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData('');
  }, []);

  

  if (loading) {
    return <div>Loading...</div>;
  }

  
  return (<>
     <div>
            {/* Afficher les données */}
            {data && (
                <ul>
                    {data.map((item) => (

<DisplayCrew  name= {item.name}
 image= {item.image}/>
//use key ? to map
                       
                    ))}
                </ul>
            )}
        </div>
   
   
</>);

  
}

export default SearchC;
