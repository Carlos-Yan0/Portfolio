function CreateProjectForm({criarProject, setInfoProject}){
    return(
        <form onSubmit={criarProject} className='flex flex-col w-fit gap-3'>

            <label>Nome:</label>
            <input type="text" id='name' className='bg-white/40' onChange={(e) => setInfoProject(
                prev => ({...prev, name: e.target.value }))} required />

            <label>Descrição</label>
            <textarea className='bg-white/40' id='description' onChange={(e) => setInfoProject(prev => ({...prev, description: e.target.value}))} required ></textarea>

            <label>Stack:</label>
            <textarea type="text" id='stack' className='bg-white/40 text-black' placeholder='Exemplo(separe por virgulas): React, Node, Js' onChange={(e) => setInfoProject(prev => ({...prev, stack:e.target.value}))} required></textarea>

            <label>link do projeto:</label>
            <input type="text" id='url' className='bg-white/40' onChange={(e) => setInfoProject(prev => ({...prev, url: e.target.value}))} required />

            <label>Link da imagem do projeto</label>
            <input type="text" id='img' className='bg-white/40' onChange={(e) => setInfoProject(prev => ({...prev, img: e.target.value}))} required />

            <button type="submit" className='hover:bg-white/40 hover:text-white transition bg-red-200 text-black'>Salvar projeto</button>

        </form>
    );
}

export default CreateProjectForm;