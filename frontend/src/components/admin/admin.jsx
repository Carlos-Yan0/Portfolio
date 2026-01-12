import api from '../../services/api'
import { useState, useEffect } from 'react';
import ProjectCard from '../projects/projectCard'
import CreateProjectForm from './createProjectForm'
import ModifyProjectForm from './modifyProjectForm'
import ModifyAboutForm from './modifyAboutForm';

function Admin(){
    const [dados, setDados] = useState(null);
    const [infoProject, setInfoProject] = useState({
        name: "",
        description: "",
        stack: "",
        url: "",
        img: "",
    });
    const [selectedId, setId] = useState(null);
    const [infoAbout, setInfoAbout] = useState({
        description: "",
        stack: "",
    });

    const carregarDados = () =>  {
        api.get("/")
        .then(res => {
            setDados(res.data);
        })
        .catch(err => console.error(err));
    }
    useEffect(() => {
        carregarDados();
    }, []);

    useEffect(() => {
        if(!selectedId || !dados) return;

        const project = dados.projects.find(p => p._id === selectedId);
        if(project){
            setInfoProject({
                name: project.name,
                description: project.description,
                stack: project.stack,
                url: project.url,
                img: project.img,
            });
        }

    }, [selectedId, dados]);

    useEffect(() => {
        const about = dados?.about?.[0];
        if(about){
            setInfoAbout({
                description: about.description,
                stack: about.stack,
            });
        }

    }, [dados])

    const criarProject = async (e) => {
        e.preventDefault();

        const response = await api.post('/admin/projects', infoProject);
        carregarDados();
    }
    const modificarProjeto = async(e) => {
        e.preventDefault();

        const response = await api.put(`/admin/projects/${selectedId}`, infoProject);
        carregarDados();
    }
    const modificarAbout = async(e) => {
        e.preventDefault();
        const idAbout = dados?.about?.[0]?._id;

        const response = await api.put(`/admin/about/${idAbout}`, infoAbout);
        if(response) alert("bem sucedido!");
        carregarDados();
    }

    return(
        <div className='flex flex-col gap-20'>
            <div className='flex gap-10'>
                <CreateProjectForm 
                    criarProject={criarProject}
                    setInfoProject={setInfoProject}
                />
                
                <ModifyAboutForm
                    dados={dados}
                    setInfoAbout={setInfoAbout}
                    modificarAbout={modificarAbout}
                    infoAbout={infoAbout}
                />

                <ModifyProjectForm 
                    dados={dados} 
                    setInfoProject={setInfoProject} 
                    modificarProjeto={modificarProjeto} 
                    id={selectedId}
                    infoProject={infoProject}
                />
            </div>
            <div className='flex-wrap flex relative gap-4'>
                {dados && dados.projects && dados.projects.map(project => (
                <ProjectCard
                    key={project._id}
                    imagem={project.img}
                    name={project.name}
                    url={project.url}
                    id={project._id}
                    carregarDados={carregarDados}
                    setId={setId}
                />
            ))}
            </div>
        </div>
    );
}

export default Admin;