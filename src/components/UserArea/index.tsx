import { Container } from './style';
import { UsePeopleList } from '../../Hooks/peopleLis';
import { ChangeEvent, useState } from 'react'


export const UserArea = () => {
  const [list, dispatch] = UsePeopleList();
  const [inputName, setInputName] = useState('');

  const handleAddUser = () => {
    if(inputName) {
      dispatch({
          type: 'ADD',
          payload: {
            name: inputName
          }
      });
      setInputName('')
    }

}

    const handleDELUser = (id: string) => {
        dispatch({
            type: 'DEL',
            payload: {id}
        })
    }

    const handleOrderList = () => {
        dispatch({
            type: "ORDER"
        })
    }


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value)
  }

  return (
    <Container>
        <div className="Add-user">
            <input 
            type="text" 
            value={inputName}
            onChange={handleInputChange}
            />
            <div className="button-top--area">
                <button onClick={handleAddUser}>Add User</button>
                <button className='order' onClick={handleOrderList}>ORDER A - Z</button>
            </div>
        </div>
        
        <div className="list-user">
            <ul>
                {list.map((item, index) => (
                    <div className="name-area" key={index}>
                        <li >{item.name}</li>
                        <div className="btn-area">
                            <button className='del' onClick={() => handleDELUser(item.id)}>DELETE</button>
                        </div>
                    </div>                    
                ))}

            </ul>
        </div>
    </Container>
  )
}

export default UserArea;