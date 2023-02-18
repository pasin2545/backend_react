import { useState } from 'react'
import './App.css';

function App() {

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

  const [val, setVal] = useState("Hello there")
  const click = () => {
    alert(val)
  }
  const change = event => {
    setVal(event.target.value)
  }
  return (
    <div spaceY={4} className='App'>
      <div className='br'>
        <input onChange={change} value={val} placeholder='FFF' />
      </div>
      <div className='br'>
        <input required name="name" placeholder='DDD' />
      </div>
      <div className='br'>
        <input required name="name" placeholder='DDD' />
      </div>
      <div className='br'>
        <input required name="name" placeholder='DDD' />
      </div>
      <div class="br">
        <label class="input-group-text" for="inputGroupSelect01">Options</label>
        <select class="form-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div className="br">
        <input
          type="file"
          onChange={(e) => {
            uploadImage(e);
          }}
        />
        <br></br>
        <img src={baseImage} height="200px" />
      </div>
      <div className='br'>
        <button onClick={click}> Submit </button>
      </div>

    </div>

  );
}

export default App;
