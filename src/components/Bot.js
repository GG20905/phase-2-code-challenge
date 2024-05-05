


import { useParams, useNavigate } from "react-router-dom";
import { getBotById } from "../Utilities";
import { useState, useEffect } from "react";

function Bot() {
    const params = useParams();
    const [bot, setBot] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getBotById(params.id);
                setBot(data);
            } catch (error) {
                console.error('Error fetching bot:', error);
            }
        };

        if (params.id) {
            fetchData();
        }
    }, [params.id]);

    function goBack() {
        navigate('/');
    }

    return (
        <div>
            {bot && bot.avatar_url ? (
                <div className="card">
                    <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
                    <div className="card-body">
                        <h5 className="card-title">{bot.name}</h5>
                        <p className="card-text">{bot.description}</p>
                        <h5 className="border border-secondary col-2">{bot.health}</h5>
                        <h5 className="border border-secondary col-2">{bot.damage}</h5>
                        <h5 className="border border-secondary col-2">{bot.armor}</h5>
                        <h5 className="border border-secondary col-6">{bot.bot_class}</h5>
                    </div>
                    <button className="btn btn-sm btn-primary m-4 p-4">Enlist</button>
                    <button onClick={goBack} className="btn btn-sm btn-warning m-4 p-4">Go Back</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Bot;
