import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Data from "./Data";

const MainForm = () => {

const [data, setData] = useState([
    {
        id: 0,
        email: "al@email",
        password: "123",
        date: new Date()
    }
])


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [date, setDate] = useState(new Date());
var id = 1;


const onSubmit = (e) => {

    e.preventDefault();

    if (!email) {
        alert('Email mo abnoy')
        return
    }

    id+=1;

    setData([...data, {id, email, password, date}])

    setEmail("");
    setPassword("");
    setDate(new Date());
}

  return (

    <div className="login-form">
     
    <form className="mb-3" onSubmit={onSubmit}>

        <input type="text" value={email} onChange={(e) => (setEmail(e.target.value))} className="form-control" placeholder="Email"></input>

        <input type="password" value={password} onChange={(e) => (setPassword(e.target.value))} className="form-control" placeholder="password"></input>

        <DatePicker selected={date} onChange={(date) => {setDate(date)}} dateFormat="dd/MMMM/yyyy" showYearDropdown scrollableYearDropdown className="form-control" />

        <button type="submit" className="form-control btn btn-dark">Submit</button>

    </form>

    <Data array={data}></Data>

    </div>
  )
}

export default MainForm
