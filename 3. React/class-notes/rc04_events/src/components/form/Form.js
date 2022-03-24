
import { useState } from "react";
import "./styles.css";

const Form = () => {

// const [name, setName] = useState()
// const [email, setEmail] = useState()
// const [password, setPassword] = useState()
// const [select, setSelect] = useState()

const [formData, setformData] = useState({name: "", 
                                              email: "", 
                                              password: "", 
                                              select: ""})

// const handleChange = (e) => setName(e.target.value.toUpperCase())
// const handleEmail = (e) => setEmail(e.target.value)
// const handlePassword = (e) => setPassword(e.target.value)
// const handleSelect = (e) => setSelect(e.target.value)

const handleFormData = (e)=>{ 
  setformData({
    ...formData, 
    [e.target.name] : e.target.value
  })
}

const handleSubmit = (e) =>{
  e.preventDefault();
  // alert(
  //   `
  //   userName: ${name}
  //   email   : ${email}
  //   password: ${password}
  //   Counrty : ${select}
  //   `
  // );
  alert(
    `
    userName: ${formData.name}
    email   : ${formData.email}
    password: ${formData.password}
    Counrty : ${formData.select}
    `
  );
  // setName(""); 
  // setEmail(""); 
  // setPassword("");
  // setSelect("");
  setformData({});
  
}


  return (
    <div style={{ height: "110vh" }}>
      <form>
        <div>
          <p></p>
          <label>
            <strong>Username:{formData.name}</strong>
          </label>
          <br />
          <input type="text" 
                 placeholder="name" 
                 name="name"
                //  onChange={handleChange}
                onChange={handleFormData}
                 value={formData.name}/>
        </div>
        <div>
          <p></p>
          <label>
            <strong>E-mail: {formData.email}</strong>
          </label>
          <br />
          <input type="email" 
                 placeholder="email"
                 name="email"
                //  onChange={handleEmail}
                onChange={handleFormData}
                 value={formData.email} />
        </div>
        <div>
          <p></p>
          <label>
            <strong>Password: {formData.password}</strong>
          </label>
          <br />
          <input type="password" 
                 placeholder="pass"
                 name="password"
                //  onChange={handlePassword}
                onChange={handleFormData}
                 value={formData.password} />
        </div>
        <div style={{ margin: "10px auto" }}>
          <p></p>
          <label>
            <strong>Country: {formData.select}</strong>
          </label>
          <select
            style={{ marginTop: "10px", width: "100px", padding: "10px" }}
            name="select"
            // onChange={handleSelect}
            onChange={handleFormData}
            value={formData.select}
          >
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="Netherland">Netherland</option>
            <option value="France">France</option>
          </select>
        </div>
        <button className="btn__click" 
                type="submit"
                onSubmit={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
