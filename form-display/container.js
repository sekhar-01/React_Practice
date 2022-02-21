import { useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [cnfPwd, setCnfPwd] = useState('');

    return (
        <div className="form">
            <form action="#">
                <div>
                    <div>
                        <label>Name : </label>
                        <input type="text" id="name" value={name} onChange={ (a) => setName (a.target.value) } />
                    </div>
                    <div>
                        <label>Number : </label>
                        <input type="number" id="num" value={number} onChange={ (b) => setNumber (b.target.value) } />
                    </div>
                    <div>
                        <label>Email : </label>
                        <input type="email" id="email" value={email} onChange={ (a) => setEmail (a.target.value) } />
                    </div>
                    <div>
                        <label>Password : </label>
                        <input type="password" id="pwd" value={pwd} onChange={ (a) => setPwd (a.target.value) } />
                    </div>
                    <div>
                        <label>Conform Password : </label>
                        <input type="text" id="cpwd" value={cnfPwd} onChange={ (a) => setCnfPwd (a.target.value) } />
                    </div>
                </div>
                <div>
                    <input type="submit" />
                    <input type="reset" />
                </div>
            </form>
            <div className="output_values">
                <table>
                    <tr>
                        <td>Name</td>
                        <td>= { name }</td>
                    </tr>
                    <tr>
                        <td>Number</td>
                        <td>= { number }</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>= { email }</td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>= { pwd }</td>
                    </tr>
                    <tr>
                        <td>Conform Password</td>
                        <td>= { cnfPwd }</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Form;