import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchC() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchData = async () => {
    const url = 'https://api.spacexdata.com/v4/crew';
    try {
      


        
      const response = await axios.get(url);
      console.log('data', response)
    //   setData({name: response.data.name,
        // agency :response.data.agency ,
        // image : response.data.image,
        // wikipedia :response.data.wikipedia ,
    //   
        // status : response.data.status ,
        // id :response.data.id ,
    // })
    //   
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
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
   
   
</>);

















  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
}

export default SearchC;
