import * as Component from './App.Styles'
import { useState } from 'react'
import { Item } from './types/Item'
import {ListItem} from './components/ListItem'  /*Como o arquivo esta como nome index, não é preciso especificar*/
import {AddArea} from './components/AddArea';

const App = () => {

  const [listaTarefas, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar Pão', done: true },
    { id: 2, name: 'Comprar Frutas', done: false },
    { id: 2, name: 'Comprar Suco', done: false },
    { id: 2, name: 'Comprar Agua', done: false },
  ])

  const handleAddTask = (taskName: string) =>{
    let newList = [...listaTarefas]; // ... Faz um Clone

    newList.push({
      id: listaTarefas.length + 1,
      name: taskName,
      done: false
    });

    setList(newList);

  }

  return (

    <Component.Container>

      <Component.Area>
        
      <Component.Header>  Lista de Tarefas</Component.Header>

      
        <AddArea onEnter={handleAddTask} />
      

        
        {listaTarefas.map((item, index) => (
          <ListItem key={index} item={item}/>
        ))}



      </Component.Area>
    </Component.Container>

  )
}

export default App