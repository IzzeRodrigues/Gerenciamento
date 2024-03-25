import { useState } from "react";
import axios from "axios";
import { GoArrowLeft } from "react-icons/go";

export default function criar() {
 
  const [name, setName] = useState([]);
  const [sexo, setSexo] = useState([]);
  const [endereco, setEnd] = useState([]);
  const [nascimento, setNasc] = useState([]);
  const [num, setNum] = useState([]);
  const [contrato, setContrato] = useState([]);
  const [cargo, setCargo] = useState([]);
  const [salario, setSal] = useState([]);
  const [foto, setFoto] = useState([]);
  const [desc, setDesc] = useState([]);


  const enviaCadastro = async (e) =>{ 
    e.preventDefault();
    const post = {
      name: name,
      sexo: sexo,
      endereco:endereco,
      nascimento:nascimento,
      num:num,
      contrato:contrato,
      cargo:cargo,
      salario:salario,
      foto:foto,
      desc:desc
    };
    try {
      await axios.post("http://localhost/Gerenciamento/api/cadastrados",{ body: post },{headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}});
      alert("Funcionário cadastrado com sucesso!");
      location.href = "http://localhost:5173/funcionarios";
     } catch (error) {
      alert("Erro ao preencher os campos, Tente novamente");
     }
   };

  return (
    <div className="m-3">
      <button onClick={() => navigation.navigate('/')}><GoArrowLeft /></button>
      <h1 className="font-serif text-xl">Registre um novo funcionário</h1>
      <hr className="mt-2" />
      <div className="">
        <form onSubmit={(e) => enviaCadastro(e)}>
          <label className="block text-gray-700 text-sm font-bold ">Nome Completo</label>
            <input className="w-[18rem] shadow border rounded mb-3" name="nome"onChange={(e) => setName(e.target.value)} type="text" placeholder="João da Silva"/>
          <label className="block text-gray-700 text-sm font-bold ">Gênero</label>
            <input className="w-[18rem] shadow border rounded mb-3"  name="sexo"onChange={(e) => setSexo(e.target.value)} type="text" placeholder="Masculino/Feminino/Outros"/>
          <label className="block text-gray-700 text-sm font-bold ">Endereço Completo</label>
            <input className="w-[18rem] shadow border rounded mb-3"  name="endereco"onChange={(e) => setEnd(e.target.value)} type="text" placeholder="Rua Exemplo, Número X"/>
          <label className="block text-gray-700 text-sm font-bold ">Data de Nascimento</label>
            <input className="w-[18rem] shadow border rounded mb-3"  name="nascimento"onChange={(e) => setNasc(e.target.value)} type="text" placeholder="15/06/2005"/>
          <label className="block text-gray-700 text-sm font-bold ">Número de Telefone</label>
            <input className="w-[18rem] shadow border rounded mb-3"  name="telefone"onChange={(e) => setNum(e.target.value)} type="text" placeholder="(13) 99999-9999"/>
            <hr className="my-2" />
            <h1 className="font-serif text-xl">Dados empresariais</h1>
            <label className="block text-gray-700 text-sm font-bold ">Cargo</label>
            <input className="w-[18rem] shadow border rounded mb-3"  name="cargo"onChange={(e) => setCargo(e.target.value)} type="text" placeholder="Gestão de Risco"/>
          <label className="block text-gray-700 text-sm font-bold ">Salário</label>
            <input className="w-[18rem] shadow border rounded mb-3"  name="salario"onChange={(e) => setSal(e.target.value)} type="text" placeholder="R$1200,00"/>
          <label className="block text-gray-700 text-sm font-bold ">Início de Contrato</label>
            <input className="w-[18rem] shadow border rounded mb-3"  name="contrato"onChange={(e) => setContrato(e.target.value)} type="text" placeholder="Maio - 1997"/>
            <label className="block text-gray-700 text-sm font-bold ">Link da Foto do funcionário</label>
            <input className="w-[18rem] shadow border rounded mb-3"  name="foto"onChange={(e) => setFoto(e.target.value)} type="text" placeholder="https://cdn.pixabay.com/photo/"/>
            <label className="block text-gray-700 text-sm font-bold ">Descrição do funcionário</label>
            <textarea className="w-[18rem] shadow border rounded mb-3"  name="desc"onChange={(e) => setDesc(e.target.value)} type="text" placeholder="Fulano, trabalhou em 5 empresas de desenvolvimento."/>
          <button type="submit" className='block my-3 bg-blue-600 rounded-2xl p-2 w-[8rem] text-white'>Salvar</button>
        </form>
      </div>
    </div>
  );
}
