import { useEffect, useState, useRef, React } from "react";
import { GoArrowLeft } from "react-icons/go";
import generatePDF from 'react-to-pdf';
import {Button,Dialog,DialogBody,DialogFooter} from "@material-tailwind/react"; 

const Func = () => {

const targetRef = useRef();

const [banco_funcionarios, setFuncionarios] = useState([]);
const [novoTelefone, setNovoTelefone] = useState([]);
const [novoSalario, setNovoSalario] = useState([]);
const [classeCSS, setClasseCSS] = useState('hidden');

const [open1, setOpen1] = useState(false);
const [open2, setOpen2] = useState(false);

const handleOpen1 = () => setOpen1((cur) => !cur);
const handleOpen2 = () => setOpen2((cur) => !cur);

const [openDialogIndex, setOpenDialogIndex] = useState(null);
const handleOpenDialog = (index) => {
  setOpenDialogIndex(index);
};
const handleCloseDialog = () => {
  setOpenDialogIndex(null);
};

function exibe() {
  setClasseCSS(classeCSS === 'hidden' ? 'block' : 'hidden');
}

function data() {
  fetch('http://localhost/projeto/api/funcionarios')
  .then ((response) => response.json())
  .then ((json) => setFuncionarios(json))
}
function Demitir(id) {
  fetch(`http://localhost/projeto/api/demissao/${id}`,{headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}} ,{method: 'DELETE'});
    alert("Funcionário removido do sistema!");
}
function Telefone(id, novoTelefone) {
  const formData = new FormData();
  formData.append('telefone', novoTelefone);
  try {
    fetch(`http://localhost/projeto/api/atualiza1/${id}`, {
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
    fetch(`http://localhost/projeto/api/atualiza2/${id}`, {
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
                  
                  <Button className='font-light my-3 bg-gray-600 rounded-2xl p-2 text-white' onClick={handleOpen1}>Alterar Contato</Button>
                      <Dialog open={open1} size="xs" handler={handleOpen1}>
                        <form method="POST" >
                          <DialogBody className="bg-white rounded-lg">
                          <p className="block text-gray-700 text-sm font-bold ">Telefone</p>
                            <input onChange={(e) => setNovoTelefone(e.target.value)} className="w-[18rem] shadow border rounded my-3 p-1" placeholder="Novo Telefone Aqui!"></input>
                          </DialogBody>
                          <DialogFooter >
                          <Button onClick={() => {Telefone(usuarios.id_funcionario, novoTelefone);{handleOpen1};}} className='block my-3 bg-gray-600 rounded-2xl p-1 text-white'>Guardar Telefone</Button>
                          </DialogFooter>
                        </form> 
                      </Dialog>

                <p className="block text-gray-700 text-sm font-bold ">Cargo</p>
                  <p>{usuarios.nm_cargo}</p>
                <p className="block text-gray-700 text-sm font-bold ">Salário</p>
                  <p>R${usuarios.vl_salario},00</p>
      
                    {/* <Button className='font-light my-3 bg-gray-600 rounded-2xl p-2 text-white' onClick={handleOpen2}>Adicionar promoção</Button>
                      <Dialog open={open2} size="xs" handler={handleOpen2}>
                        <form method="POST" >
                          <DialogBody className="bg-white rounded-lg">
                          <p className="block text-gray-700 text-sm font-bold ">Salário Novo</p>
                            <input onChange={(e) => setNovoSalario(e.target.value)} className="w-[18rem] shadow border rounded my-3 p-1" placeholder="Novo Salário Aqui!"></input>
                          </DialogBody>
                          <DialogFooter >
                          <Button onClick={() => {Salario(usuarios.id_funcionario, novoSalario);{handleOpen2};}} className='block my-3 bg-gray-600 rounded-2xl p-1 text-white'>Guardar Promoção</Button>
                          </DialogFooter>
                        </form> 
                      </Dialog> */}

                <p className="block text-gray-700 text-sm font-bold ">Data de Contrato</p>
                  <p>{usuarios.dt_contrato}</p>
              </div>
            <img className="w-[8rem] h-[8rem] rounded-full drop-shadow" src={usuarios.img_foto}/>

            <Button className='font-light my-3 bg-gray-600 rounded-2xl p-2 text-white' onClick={() => handleOpenDialog(index)}>
              Veja o Histórico de {usuarios.nm_funcionario}
            </Button>
            <Dialog open={openDialogIndex === index} size="xs" handler={handleCloseDialog}>
              <DialogBody className="bg-white rounded-lg">
                <textarea disabled className="resize-none w-full h-[8rem]">{usuarios.dc_descricao}</textarea>
              </DialogBody>
              <DialogFooter>
                <Button onClick={handleCloseDialog} className='block bg-gray-600 rounded-2xl p-2 text-white'>Fechar</Button>
              </DialogFooter>
            </Dialog>
            
              <button className='my-1 bg-red-600 rounded-2xl p-1 col-span-2 text-white' onClick={() => Demitir(usuarios.id_funcionario)}>Demitir</button>           
          <hr className="col-span-2 border-l-slate-700 my-3 drop-shadow" />
         </div> )}
        </form>
        <div className="m-3">            
            <button onClick={() => { generatePDF(targetRef, {filename: 'page.pdf'}); {exibe}; }}type="submit" className='block my-3 bg-blue-600 rounded-2xl p-1 text-white w-full'>Gerar PDF</button>
        </div>
    </div>
  );
};
export default Func;
