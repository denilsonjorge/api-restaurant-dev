import Categoria from "./categoria.model.js";

export default class CategoriaController {
    static async categorias(req,res){
        const categoria=await Categoria.findAll();
        if(categoria.length == 0)return res.json({msg: "sem Categorias disponiveis"});
        res.json({msg:"listar todas as categorias",categoria});
    }

    static async criarCategoria(req,res){
        const nome=req.body.nome;
        const categoria=await Categoria.findOne({where:{nome}});
        if(!nome || nome.length==0)return res.status(401).json({msg: "o nome da categoria é obrigatorio!"});
        if(categoria!=null)return res.status(400).json({msg: "Esta categoria já existe!"});
        try {
            Categoria.create({nome});
            return res.json({msg:"Nova categoria criada!"})
        } catch (error) {
            return res.json({msg:"Erro ao criar categoria!"})
        }
    }

    static async categoria(req,res){
        const id = req.params.id;
        const categoria = await Categoria.findByPk(id);
        if(!id) return res.status(400).json({msg:"Informe o id!"})
        if(!categoria) return res.status(400).json({msg: "Nenhuma categoria foi encontrada!"})
        return res.status(200).json(categoria);
    }

    static async atualizaCategoria(req,res){
        const id = req.params.id;
        const nome = req.body;
        const categoria = await Categoria.findByPk(id);
        if(!id) return res.status(400).json({msg:"Informe o id!"})
        if(!categoria) return res.status(400).json({msg: "Não foi encontrado uma categoria com este ID!"})
        try {
            Categoria.update({nome},{where:{id}});
            return res.status(200).json({msg:"Categoria atualizada!",categoria})
        } catch (error) {
            console.log(error)
            return res.status(400).json({msg:"Ocorreu um erro!",error})
        }
    }

    static async ApagarCategoria(req,res){
        const id = req.params.id;
        const categoria = await Categoria.findByPk(id);
        if(!id) return res.status(400).json({msg:"Informe o id!"});
        if(!categoria) return res.status(404).json({msg: "Não foi encontrado uma categoria com este ID!"});
        try {
            Categoria.destroy({where:{id}});
            return res.status(200).json({msg:"categoria apagada!"})
        } catch (error) {
            return res.status(200).json({msg:"Erro ao apagada categoria!"})
        }
    }
}