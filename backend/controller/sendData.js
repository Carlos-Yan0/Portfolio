const About = require('../models/about');
const Projects = require('../models/projects');

exports.enviarAbout = async (req, res) => {
    try{
        const about = await About.find();
        res.status(200).json(about);
    }catch (error){
        res.status(500).json({ message: "erro ao buscar about:", error });
    }
};

exports.modificarAbout = async (req, res) => {
    try{
        const {id} = req.params;
        const aboutAtualizado = About.findByIdAndUpdate(id, req.body, {new: true,});
        if(!aboutAtualizado){
            return res.status(404).json({ message: "About nao encontrado" });
        }
        res.status(201).json({ message: "About atualizado" });
    }catch(error){
        res.status(400).json({ message: "falha ao atualizar o about: ", error });
    }
};

exports.enviarProjects = async (req, res) => {
    try{
        const projects = await Projects.find();
        res.status(200).json(projects);
    }catch (error){
        res.status(500).json({ message: "Erro ao buscar projetos" });
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
        const projectAtualizado = Projects.findByIdAndUpdate(id, req.body, {new: true,});
        if(!projectAtualizado){
            return res.status(404).json({ message: "nenhum projeto encontrado" });
        }
        res.status(200).json({ message: "Projeto atualizado" });
    } catch(error) {
        res.status(400).json({ message: "falha ao atualizar o projeto" });
    }
};