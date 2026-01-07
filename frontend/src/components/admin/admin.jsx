import axios from 'axios'
function Admin(){
    const criarProject = async (e) => {
        e.preventDefault();

        const corpo = {
            name: "teste",
            description: "projeto teste",
            stack: ["Node.js", "marmelada"],
            url: "asdhfasfd.com",
        };

        const response = await axios.post('http://localhost:3000/admin/projects', corpo)
        console.log(response.data)
        alert("veja o console");
    }

    return(
        <div>
           <form onSubmit={criarProject}>
                <button type="submit">Salvar projeto</button>
           </form>
            
        </div>
    );
}

export default Admin;