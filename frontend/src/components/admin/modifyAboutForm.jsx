function ModifyAboutForm({dados, setInfoAbout, modificarAbout, infoAbout}){
    if(!dados || !dados.about) return null;
    return(
        <form onSubmit={modificarAbout} className='flex flex-col w-fit gap-3'>
            <label>Descrição(sobre mim)</label>
            <textarea className='bg-white/40 text-black' value={infoAbout.description} onChange={(e) => setInfoAbout(prev => ({...prev, description: e.target.value}))}></textarea>
            <label>Stack:</label>
            <textarea className='bg-white/40 text-black' value={infoAbout.stack} onChange={(e) => setInfoAbout(prev => ({...prev, stack: e.target.value}))}></textarea>
            <button type="submit" className='hover:bg-white/40 hover:text-white transition bg-red-200 text-black' >Salvar</button>
        </form>
    );
}

export default ModifyAboutForm;