import { useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const SingleData = ({ name, email, password }) => {
  return(
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{password}</p>
    </div>
  )
}

const App = () => {
  const [name, SetName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [data, setData] = useState([])

  const submit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'Users'), {
      name: name,
      email: email,
      password: password,
    })
    console.log(`doc added ${docRef.id}`)
    SetName('');
    setEmail('');
    setPassword('');
  }

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, 'Users'));
    querySnapshot.forEach(obj => {
      const field = obj.data();
      const allData = {
        name: field.name,
        email: field.email,
        password: field.password,
      }
      setData(prevItem => [...prevItem, allData])
    })
    // console.log(Array.isArray(data));
  }
  // console.log(data);

  return(
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Form</h1>
      <form action="#" style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center' }}>
        <input value={name} onChange={e => SetName(e.target.value)} type="text" name="name" id="name" placeholder="Name..."  style={{ margin: '5px 0px', height: '20px', width: '100%' }}/>
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Email..." style={{ margin: '5px 0px', height: '20px', width: '100%' }} />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Password..." style={{ margin: '5px 0px', height: '20px', width: '100%' }} />
        <button onClick={submit} style={{ margin: '10px 0px' }}>Add To The Database</button>
      </form>
      <button onClick={getData}>Get Data</button>
      {data.length != 0 && data.map(obj => (
        <SingleData key={obj.email} name={obj.name} email={obj.email} password={obj.password} />
      ))}
    </div>
  )
}

export default App;