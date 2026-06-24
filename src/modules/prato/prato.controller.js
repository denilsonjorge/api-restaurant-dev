import Prato from "./prato.model.js";
import Categoria from "../categoria/categoria.model.js";
export default class PratosController{
    static async pratos(req,res){
        const pratos=await Prato.findAll();
        if(pratos.length ==0)return res.status(200).json({msg:"sem pratos disponiveis!"});
        return res.status(200).json(pratos);
    }
    static async buscarPorCategoria(req,res){
        const {categoria}=req.params;
        if(!categoria || categoria==0)return res.status(400).json({msg:"Informe o ID da categoria!"});
        const pratos=await Prato.findAll({where:{categoriaId:categoria}})
        return res.status(200).json(pratos)
    }
    static async criar(req,res){
        const {nome,preco,categoriaId}=req.body;
        if(!nome || nome.length ==0)return res.status(400).json({msg: "O nome do prato é obrigatório!"});
        if(!preco || preco.length <= 0)return res.status(400).json({msg: "O preco do prato é obrigatório!"});
        if(!categoriaId)return res.status(400).json({msg: "O ID da categoria é obrigatório!"});
        const prato=await Prato.findOne({where:{nome}});
        if(prato!=null)return res.status(400).json({msg:"já existe um prato com este nome!"});
        try {
            Prato.create({nome,preco,categoriaId})
            return res.status(201).json({msg:"prato criado com sucesso!"});
        } catch (error) {
            return res.status(400).json({msg:"Erro ao criar prato!"});
        }
    }
    static async BuscarPratoPorId(req,res){
        const id = req.params.id;
        const prato=await Prato.findByPk(id);
        if(!prato)return res.status(404).json({msg: "Não foi encontrado prato com este ID!"});
        return res.status(200).json(prato)
    }
    static async atualiza(req,res){
        const id=req.params.id;
        const {nome,preco}=req.body;
        const prato=await Prato.findByPk(id);
        if(!prato)return res.status(400).json({msg: "Não foi possivel atualiza este prato!"});

        Prato.update({nome,preco},{where:{id}}).then(()=>{
            return res.status(200).json({msg: "Prato atualizado!"});
        }).catch(err=>{
            return res.status(400).json({msg: "Não foi possivel tualizado este prato!",err});
        })

    }
    static async apagar(req,res){
        const id=req.params.id;
        const prato=await Prato.findByPk(id);
        if(!prato)return res.status(400).json({msg: "Não foi possivel apagar este prato!"});
        return res.status(200).json({msg: "Prato apagado!"});
    }
}