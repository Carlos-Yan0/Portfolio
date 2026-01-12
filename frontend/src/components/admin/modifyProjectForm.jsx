function ModifyProjectForm({dados, setInfoProject, modificarProjeto, id, infoProject}){
    if(!dados || !dados.projects || !id){
        return null;
    }

    return(
        <form onSubmit={modificarProjeto} className='flex flex-col w-fit gap-3'>

            <input type="hidden" value={id} />

            <label>Nome:</label>
            <input type="text" id='name' className='bg-white/40' required value={infoProject.name} onChange={(e) => setInfoProject(prev => ({...prev,
                name: e.target.value}))}/>

            <label>Descrição</label>
            <textarea className='bg-white/40' id='description' required value={infoProject.description} onChange={(e) => setInfoProject(prev => ({...prev,
                description: e.target.value}))} ></textarea>

            <label>Stack:</label>
            <textarea type="text" id='stack' className='bg-white/40 text-black' placeholder='Exemplo(separe por virgulas): React, Node, Js' required
                value={infoProject.stack} onChange={(e) => setInfoProject(prev => ({...prev, stack: e.target.value}))}
            ></textarea>

            <label>link do projeto:</label>
            <input type="text" id='url' className='bg-white/40' required value={infoProject.url} onChange={(e) => setInfoProject(prev => ({...prev,
                url: e.target.value}))}/>

            <label>Link da imagem do projeto</label>
            <input type="text" id='img' className='bg-white/40' required value={infoProject.img} onChange={(e) => setInfoProject(prev => ({...prev,
                img: e.target.value}))}/>

            <button type="submit" className='hover:bg-white/40 hover:text-white transition bg-red-200 text-black'>Modificar projeto</button>

        </form>
    );
}

export default ModifyProjectForm;