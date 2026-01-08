import api from '../../services/api'
function ProjectCard(props){
    const isAdmin = window.location.pathname === "/admin";

    const deletarEAtualizar = async () => {
        await api.delete(`/admin/projects/${props.id}`);
        props.carregarDados();
    }

    return(
        <div 
            className="relative w-64 h-40 bg-cover bg-center rounded-lg cursor-pointer shadow-md group"
            style={{ backgroundImage: `url(${props.imagem})` }}
        >

            <div className="
                absolute inset-0 
                flex flex-col 
                justify-center items-center
                bg-black/70
                opacity-0 group-hover:opacity-100
                transition
            ">
                
                <div className="text-lg font-bold">
                    {props.name}
                </div>

                <div className="text-sm flex flex-col">
                    Clique para saber mais
                    <div className='w-full flex justify-center'>
                        {isAdmin && (
                        <button className='hover:bg-white/70 transition w-fit cursor-pointer' onClick={deletarEAtualizar}>Deletar</button>
                    )}
                    </div>
                    
                </div>

            </div>

        </div>
    );
}

export default ProjectCard;