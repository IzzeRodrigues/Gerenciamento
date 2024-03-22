import '../index.css';
import logo from '../assets/images/marca-taugor.png';

const Home = () => {
  return (
   <div className='mx-2'>
    <img className='mx-auto shadow-black drop-shadow-lg' src={logo}/>
        <hr className=' border-black shadow-2xl' />
        <br/>
        <p classname="text-balance">
        <h1 className='text-gray-600'>Sobre nós</h1>
        A Taugor é uma empresa focada em desenvolver Soluções Corporativas baseadas em
        tecnologia da informação com a criação de novas técnicas, processos e inovações.
        Seguindo esse caminho, a empresa ofereceu serviços como: fábrica de software, criando
        as mais variadas soluções para grandes empresas, como VALE, Randon, Gerdau, Light,
        Arezzo, Senior Sistemas, Stihl, Sebrae, Multiterminais, entre outros.
        Mas, foi em 2011 que nós focamos e criamos o produto Taugor GED em sua primeira
        versão para GETNET, agora uma célula Santander.
        Sendo assim, com a demanda do mercado aumentando, a Taugor também se
        especializou em solução ECM (Gerenciamento de Conteúdo Corporativo) e sua vertente
        GED (Gestão de Documentos Eletrônicos) criando canais de distribuição e assim
        migrando para Micro Franquias em todo Brasil.
        </p>

        <br/>
        <hr className='border-black mb-5 shadow-2xl' />
        <div className='flex m-4 gap-2'>
          <div>
            <button className='bg-blue-600 rounded-2xl p-2 text-white' onClick={() => navigation.navigate('/funcionarios')}>Ver funcionários cadastrados</button>
          </div>
          <div>
            <button className='bg-blue-600 rounded-2xl p-2 text-white' onClick={() => navigation.navigate('/criar')}>Cadastrar novo Funcionário</button>
          </div>
        </div>

   </div>
  );
};

export default Home