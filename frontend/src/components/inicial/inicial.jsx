import './inicial.css'
function Inicial(){
    const btn = "bg-gray-900/40 hover:bg-gray-800/60 backdrop-blur-md border border-white/10 px-8 py-3 rounded-2xl shadow-xl transition-all duration-300 ring-1 ring-inset ring-white/20 h-12 gap-4 "
    return(
        <div>
            <div className="flex-col flex w-50 md:w-98">
                <h1 className="text-6xl md:text-8xl self-start mr-20">Yan</h1>
                <h1 className="text-6xl md:text-8xl self-end ml-20">Carlos</h1>
            </div>
            <div className="flex h-30 justify-center items-center gap-4">
                <button className={btn}>Projetos</button>
                <button className={btn}>Carreira</button>
            </div>
        </div>
    );
}

export default Inicial;