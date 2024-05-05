import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { Deletebot } from '../Utilities';

// Function component to display bot profiles
const Displaybots = () => {
  
  const [botProfiles, setBotProfiles] = useState([]);

  
  useEffect(() => {
    const fetchBotProfiles = async () => {
      try {
        const response = await fetch('http://localhost:5001/bots');
        if (!response.ok) {
          throw new Error('Failed to fetch bot profiles');
        }
        const data = await response.json();
        setBotProfiles(data);
      } catch (error) {
        console.error('Error fetching bot profiles:', error);
      }
    };

    fetchBotProfiles();
  }, []);

  return (
    <><div className="container border border-primary bg-warning mx-auto m-4 p-4">
   </div><div className='container  border border-primary mx-auto col-12  m-4 p-4'> <h1 className="text-center mt-5">Bot Profiles</h1>
    <div className="row">
      {botProfiles.map(bot => (
        <div key={bot.id} className="col-md-4">
          <div className="card mb-4">
            <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
            <div className="card-body">
              <h5 className="card-title">{bot.name}</h5>
              <p className="card-text">{bot.description}</p>
              <h5 className="border border-secondary col-2">{bot.health}</h5>
              <h5 className="border border-secondary col-2">{bot.damage}</h5>
              <h5 className="border border-secondary col-2">{bot.armor}</h5>
              <h5 className="border border-secondary col-6">{bot.bot_class}</h5>
              <Button handleClick={Deletebot} id={bot.id}>
                            <span>delete</span></Button>
            <Link className='btn btn-primary btn-md mx-auto' to={`/bots/${bot.id}`}>View</Link>            
            </div>
          </div>
        </div>
      ))}
    </div></div>
  </>
    
  );
}

export default Displaybots;

