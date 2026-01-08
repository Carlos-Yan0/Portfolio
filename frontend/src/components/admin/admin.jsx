import axios from 'axios'
import api from '../../services/api'
import { useState, useEffect } from 'react';
import ProjectCard from '../projects/projectCard'
function Admin(){
    const [dados, setDados] = useState(null);

    const carregarDados = () =>  {
        api.get("/")
        .then(res => {
            console.log(res.data);
            setDados(res.data);
        })
        .catch(err => console.error(err));
    }

    useEffect(() => {
        carregarDados();
    }, [])

    const criarProject = async (e) => {
        e.preventDefault();

        const corpo = {
            name: "teste",
            description: "projeto teste",
            stack: ["Node.js", "marmelada"],
            url: "asdhfasfd.com",
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.rLtRXRXU7-pAc9RbY7xTqAHaEK%3Fpid%3DApi&f=1&ipt=30cf29826283a818d076907f3f7d3071c7535809af18e3c2799fe1c76eca8d95&ipo=images"
        };

        const response = await axios.post('http://localhost:3000/admin/projects', corpo)
        carregarDados();
        console.log(response.data)
    }

    return(
        <div>
           <form onSubmit={criarProject}>
                <button type="submit">Salvar projeto</button>
           </form>
            <div className='flex-wrap flex relative gap-4'>
                {dados && dados.projects && dados.projects.map(project => (
                <ProjectCard
                    key={project._id}
                    imagem={project.img}
                    name={project.name}
                    url={project.url}
                    id={project._id}
                    carregarDados={carregarDados}
                />
            ))}
            </div>
        </div>
    );
}

export default Admin;