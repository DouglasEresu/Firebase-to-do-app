import React, {useState} from 'react';
import { storage } from '../config/firebaseconfig';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Upload = () => {

  const [input, setInput] = useState("");

    

  const handleSubmit = (event) => {
    event.preventDefault();
    const storageRef = ref(storage, `images/${input.name}`);
    const uploadTask = uploadBytesResumable(storageRef, input);
    uploadTask.on('state_changed', (snapshot) =>{
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
    },
    (error) => {
      console.log(error.message)
    }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    }
    )
  }
    return (
        <div className="img">
          <form onSubmit={handleSubmit}>
        <label>
        <input
          type="file"
          name="todo"
          onChange={(event) => setInput(event.target.files[0])}
        />
      </label>
      <input type="submit" onClick={handleSubmit} value="Upload" /> 
      </form>
        </div>    

        
    )

  
      
}

export default Upload;
