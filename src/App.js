import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'





const api = axios.create({
  baseURL: 
})

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);


  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const [name, set_name_Val] = useState("")
  const [price, set_price_Val] = useState("")
  const [amount, set_amount_Val] = useState("")
  const [description, set_Des_Val] = useState("")
  const FormSummit = (e) => {
    
    alert(name)
  }
  const change_name_event = event => {
    set_name_Val(event.target.value)
  }
  const change_price_event = event => {
    set_price_Val(event.target.value)
  }
  const change_amount_event = event => {
    set_amount_Val(event.target.value)
  }
  const change_Des_event = event => {
    set_Des_Val(event.target.value)
  }



  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);


  return (



    <div spaceY={4} className='App'>
      <div className='br'>
        <input onChange={change_name_event} value={name} placeholder='Product Name' />
      </div>
      <div className='br'>
        <input onChange={change_price_event} value={price} placeholder='Price' />
      </div>
      <div className='br'>
        <input onChange={change_amount_event} value={amount} placeholder='amount' />
      </div>
      <div className='br'>
        <input onChange={change_Des_event} value={description} placeholder='Description' />
      </div>
      <div class="br">
        <label class="input-group-text" for="inputGroupSelect01">Catagory</label>
        <select class="form-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>

        </select>
      </div>

      <div className="imgbr">
        <input
          type="file"
          onChange={(e) => {
            uploadImage(e);
          }}
        />
        <br></br>
        <img src={baseImage} height="120px" width="150" />
      </div>
      <div className='br'>
        <button onClick={click}> Submit </button>
      </div>

    </div>

  );
}

export default App;
