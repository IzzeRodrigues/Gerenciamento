import { useEffect, useState, useRef, React } from "react";
import { GoArrowLeft } from "react-icons/go";
import {Button,Dialog,DialogBody,DialogFooter} from "@material-tailwind/react"; 
import InputMask from 'react-input-mask';
import generatePDF from 'react-to-pdf';

const Func = () => {

 
const targetRef = useRef();
const [banco_funcionarios, setFuncionarios] = useState([]);
const [novoTelefone, setNovoTelefone] = useState([]);
const [novoSalario, setNovoSalario] = useState([]);
const [preco, setPreco] = useState('');

const [openDialogIndex, setOpenDialogIndex] = useState(null);
const handleOpenDialog = (index) => {
  setOpenDialogIndex(index);
};
const handleCloseDialog = () => {
  setOpenDialogIndex(null);
};
const [openDialogIndex1, setOpenDialogIndex1] = useState(null);
const handleOpenDialog1 = (index) => {
  setOpenDialogIndex1(index);
};
const handleCloseDialog1 = () => {
  setOpenDialogIndex1(null);
};
const [openDialogIndex2, setOpenDialogIndex2] = useState(null);
const handleOpenDialog2 = (index) => {
  setOpenDialogIndex2(index);
};
const handleCloseDialog2 = () => {
  setOpenDialogIndex2(null);
};

function data() {
  fetch('http://localhost/Gerenciamento/api/funcionarios')
  .then ((response) => response.json())
  .then ((json) => setFuncionarios(json))
}
function Demitir(id) { try{
    fetch(`http://localhost/Gerenciamento/api/demissao/${id}`,{headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}} ,{method: 'DELETE'});
      alert("Funcionário removido do sistema!");
     }catch {
      alert("Erro ao remover funcionário");
  }
}
function Telefone(id, novoTelefone) {
  const formData = new FormData();
  formData.append('telefone', novoTelefone);
  try {
    fetch(`http://localhost/Gerenciamento/api/atualiza1/${id}`, {
      method: 'POST',
      body: formData
    });
    alert("Telefone Atualizado!");
  } catch (error) {
    console.log("Houve erros durante a atualização, tente novamente.");
  }
}
function Salario(id, novoSalario) {
  const formData = new FormData();
  formData.append('salario', novoSalario);
  try {
    fetch(`http://localhost/Gerenciamento/api/atualiza2/${id}`, {
      method: 'POST',
      body: formData
    });
    alert("Salário Atualizado!");
  } catch (error) {
    console.log("Houve erros durante a atualização, tente novamente.");
  }
}
useEffect(() => {
  data();
}, []);

const Preco = (e) => {
   let value = e.target.value.replace(/[^\d]/g, '');
   value = `R$ ${value}`;
   if (value.length > 3) {
     value = `${value.slice(0,-2)}.${value.slice(-2)}`;
   }
   setPreco(value);
};

  return (
    <div className="m-3">
      <button onClick={() => navigation.navigate('/')}><GoArrowLeft /></button>
      <h1 className="font-serif text-xl">Ver Funcionários Cadastrados</h1>
      <hr className="mt-2" />
        <form method="GET" ref={targetRef}>
          {banco_funcionarios.map((usuarios, index) =>
            <div className="grid grid-cols-2 m-3" key={usuarios.id_funcionario}>
              <div>
                <p className="block text-gray-700 text-sm font-bold ">Nome completo</p>
                  <p>{usuarios.nm_funcionario}</p>
                <p className="block text-gray-700 text-sm font-bold ">Gênero</p>
                  <p>{usuarios.cd_sexo}</p>
                <p className="block text-gray-700 text-sm font-bold ">Endereço</p>
                  <p>{usuarios.nm_endereco}</p>
                <p className="block text-gray-700 text-sm font-bold ">Data de Nascimento</p>
                  <p>{usuarios.dt_nasc}</p>
                <p className="block text-gray-700 text-sm font-bold ">Telefone</p>
                  <p>{usuarios.nu_telefone}</p>
                  
                  <Button data-html2canvas-ignore="true" className='font-light my-3 bg-gray-600 rounded-2xl p-2 text-white'onClick={() => handleOpenDialog2(index)}>Alterar Contato</Button>
                      <Dialog open={openDialogIndex2 === index} size="xs" handler={handleCloseDialog2}>
                        <form method="POST" >
                          <DialogBody className="bg-white rounded-lg">
                          <p className="block text-gray-700 text-sm font-bold ">Telefone</p>
                            <InputMask mask="(99) 9 9999-9999" maskChar="_" onChange={(e) => setNovoTelefone(e.target.value)} className="w-[15rem] shadow border rounded my-3 p-1" placeholder="Novo Telefone Aqui!"/>
                          </DialogBody>
                          <DialogFooter >
                          <Button onClick={() => {Telefone(usuarios.id_funcionario, novoTelefone)}} className='block my-3 bg-gray-600 rounded-2xl p-2 text-white'>Guardar Telefone</Button>
                          </DialogFooter>
                        </form> 
                      </Dialog>

                <p className="block text-gray-700 text-sm font-bold ">Cargo</p>
                  <p>{usuarios.nm_cargo}</p>
                <p className="block text-gray-700 text-sm font-bold ">Salário</p>
                  <p>{usuarios.vl_salario}</p>
                    <Button data-html2canvas-ignore="true" className='font-light my-3 bg-gray-600 rounded-2xl p-2 text-white' onClick={() => handleOpenDialog1(index)}>Adicionar promoção</Button>
                      <Dialog open={openDialogIndex1 === index} size="xs" handler={handleCloseDialog1}>
                        <form method="POST" >
                          <DialogBody className="bg-white rounded-lg">
                          <p className="block text-gray-700 text-sm font-bold ">Salário Novo</p>
                            <input value={preco} onChange={Preco} onBlur={(e) => setNovoSalario(e.target.value)}  className="w-[15rem] shadow border rounded my-3 p-1" placeholder="Novo Salário Aqui!"></input>
                          </DialogBody>
                          <DialogFooter >
                          <Button onClick={() => {Salario(usuarios.id_funcionario, novoSalario)}} className='block my-3 bg-gray-600 rounded-2xl p-2 text-white'>Guardar Promoção</Button>
                          </DialogFooter>
                        </form> 
                      </Dialog>

                <p className="block text-gray-700 text-sm font-bold ">Data de Contrato</p>
                  <p>{usuarios.dt_contrato}</p>
              </div>
            <img className="w-[8rem] h-[8rem] rounded-full drop-shadow" src={usuarios.img_foto}/>

            <Button data-html2canvas-ignore="true" className='font-light my-3 bg-gray-600 rounded-2xl p-2 text-white' onClick={() => handleOpenDialog(index)}>Veja o Histórico de {usuarios.nm_funcionario}
              </Button>
              <Dialog open={openDialogIndex === index} size="xs" handler={handleCloseDialog}>
                <DialogBody className="bg-white rounded-lg">
                  <textarea disabled className="resize-none w-full h-[8rem]">{usuarios.dc_descricao}</textarea>
                </DialogBody>
                <DialogFooter>
                  <Button onClick={handleCloseDialog} className='block bg-gray-600 rounded-2xl p-2 text-white'>Fechar</Button>
                </DialogFooter>
              </Dialog>

              <button data-html2canvas-ignore="true" className="my-1 bg-red-600 rounded-2xl p-1 col-span-2 text-white" onClick={() => Demitir(usuarios.id_funcionario)}>Demitir</button>  

          <hr className="col-span-2 border-l-slate-700 my-3 drop-shadow" />
         </div> )}
        </form>
        <div className="m-3">            
            <button onClick={() => {generatePDF(targetRef, {filename: 'page.pdf'})}} type="submit" className='block my-3 bg-blue-600 rounded-2xl p-1 text-white w-full'>Gerar PDF</button>
        </div>
    </div>
  );
};
export default Func;
