import api from '../../services/api'
import { useEffect, useState } from 'react';
function About(){
    const [dados, setDados] = useState(null)

    useEffect(() => {
        api.get("/")
        .then(res => {
            setDados(res.data);
            console.log(JSON.stringify(res.data, null, 2))
        })
        .catch(err => console.log(err))
    }, []);

    return(
        <div className='flex gap-10 w-screen h-screen'>
            <div>
                <h1 className='text-5xl'>Sobre mim</h1>
                <p className='text-2xl'>{dados?.about?.[0]?.description}</p>
            </div>
            <div>

            </div>
        </div>
    );
}

export default About;