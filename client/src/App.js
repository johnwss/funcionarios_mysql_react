import {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [nome,setName] = useState('')
  const [idade,setIdade] = useState(0)
  const [pais,setPais] = useState('')
  const [cargo,setCargo] = useState('')
  const [salario,setSalario] = useState(0)

  const [listaUsuarios,setListaUsuarios] = useState([]);

  //const infoTotal = () =>{console.log(nome + idade + pais + cargo + salario)}
  const enviandoDados = () =>{
    axios.post('http://192.168.1.9:5000/criar',{
      nome:nome,
      idade:idade,
      pais:pais,
      cargo:cargo,
      salario:salario
    }).then(()=>{console.log('sucesso!')});
    
  };

  const getFuncionarios = () =>{
    axios.get('http://192.168.1.9:5000/recebe').then((resposta)=>{
    setListaUsuarios((resposta.data))
    })
  }

  return (
    <div className="App">
    <div className="Informativo">
    <label>Nome</label>
    <input type='text' onChange={(x)=>{setName(x.target.value)}}></input>
    <label>Idade </label>
    <input type='number' onChange={(x)=>{setIdade(x.target.value)}}></input>
    <label>País </label>
    <input type='text' onChange={(x)=>{setPais(x.target.value)}}></input>    
    <label>Cargo </label>
    <input type='text' onChange={(x)=>{setCargo(x.target.value)}}></input>
    <label>Salário</label>
    <input type='text' onChange={(x)=>{setSalario(x.target.value)}}></input>    
    <button onClick={enviandoDados}>Adicionar Funcionário</button>
    </div>
    <hr/>
    
    <div className="funcionarios">
    <button onClick={getFuncionarios}>Exibir Funcionários
    </button>
    
    {listaUsuarios.map((x)=>{
      return <><br/><div>Nome:{x.nome}.Idade:{x.idade}.País:{x.pais}.Cargo:{x.cargo}.Salário:{x.salario}</div></>
    })}
    </div>
    
    </div> 
  );
} 

export default App;
