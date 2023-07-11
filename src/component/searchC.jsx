import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/css/main.css'

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
     <section class='gallery'>
            {/* Afficher les données */}
            {data && (
                <>
                    {data.map((item) => (
                            <ol class='image-list grid-view'>
                              <li>
                                <figure>
                                  <img src={item.image} alt='' />
                                  <figcaption>
                                    <p>{item.name}</p>
                                    <p>{item.agency}</p>
                                  </figcaption>
                                </figure>
                              </li>
                            </ol>
                    ))}
                </>
            )}
        </section>
   
   
</>);

















  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
}

export default SearchC;
