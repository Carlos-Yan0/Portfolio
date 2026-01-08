const About = require('../models/about');
const Projects = require('../models/projects');

exports.enviarInfo = async (req, res) => {
    try{
        const about = await About.find();
        const projects = await Projects.find();

        res.status(200).json({
            about,
            projects,
        }
        );

    } catch(error){
        res.status(500).json({ message: "erro ao buscar dados", error });
    }
}

exports.modificarAbout = async (req, res) => {
    try{
        const {id} = req.params;
        const aboutAtualizado = await About.findByIdAndUpdate(id, req.body, {new: true,});
        if(!aboutAtualizado){
            return res.status(404).json({ message: "About nao encontrado" });
        }
        res.status(201).json({ message: "About atualizado" });
    }catch(error){
        res.status(400).json({ message: "falha ao atualizar o about: ", error });
    }
};

exports.criarProjects = async (req, res) => {
    try{
        const project = new Projects(req.body);
        await project.save();
        res.status(201).json({ message: "Projeto criado com sucesso" });
    } catch (error) {
        res.status(400).json({ message: "erro ao criar projeto" });
    }
};

exports.modificarProjects = async (req, res) => {
    try{
        const {id} = req.params;
        const projectAtualizado = await Projects.findByIdAndUpdate(id, req.body, {new: true,});
        if(!projectAtualizado){
            return res.status(404).json({ message: "nenhum projeto encontrado" });
        }
        res.status(200).json({ message: "Projeto atualizado" });
    } catch(error) {
        res.status(400).json({ message: "falha ao atualizar o projeto" });
    }
};

exports.deleteProjects = async (req, res) => {
    try{
        const {id} = req.params;
        const projectDeletado = await Projects.findByIdAndDelete(id);
        if(!projectDeletado){
            return res.status(404).json({ message: "Projeto nao encontrado" });
        }
        res.status(200).json({ message: "Projeto deletado" });

    }catch (error) {
        res.status(500).json({ message: "Falha ao deletar projeto" });
    }
};