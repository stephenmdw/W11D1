import {useState, useEffect} from 'react';

function Form(){

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [phoneType, setPhoneType] = useState()
    const [staffType, setStaffType] = useState("")
    const [bio, setBio] = useState("")
    const  [formComplete, setFormComplete] = useState(false)
    const [validationErrors, setValidationErrors] = useState([])

    // useEffect(()=> {
    //     const errors = []
    //     if (!username.length) {
    //         errors.push('Please enter your name ')
    //     }
    //     if (!email.includes('@')) {
    //         errors.push('Hey, put a real email')
    //     }
    //     setValidationErrors(errors);
    // }, []);

    function handleErrors(){
        if (!username.length) {
            console.log('Please enter your name moron ')
        }
        if (!email.includes('@')) {
            console.log('Hey, put a real fucking email you cucklord inbred dog')
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleErrors();
        console.log(`${username}, ${email}, ${phoneNumber}, ${phoneType}, ${staffType}, ${bio}`);
        setFormComplete(true);
    }

    return (
        <div className="main"> 
            <form onSubmit={handleSubmit}>
                <label> Username: 
                    <input type="text" name="name" onChange={(e) => setUsername(e.currentTarget.value)} value={username}/>
                </label>
                <br/>
                <label> Email: 
                    <input type="text" name="email" onChange={(e) => setEmail(e.currentTarget.value)} value={email}/>
                </label>
                <br/>
                <label> Phone number: 
                    <input type="text" name="phone-number" onChange={(e) => setPhoneNumber(e.currentTarget.value)} value={phoneNumber}/>
                </label>
                <br/>
                <label> Phone type: 
                    <select type="select" name="phone-type" onChange={(e) => setPhoneType(e.currentTarget.value)} value={phoneType}>
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Mobile">Mobile</option>
                    </select>
                </label>
                <br/>

                <label > Staff:
                    <input type="radio" name="instructor" onClick={(e) => setStaffType(e.currentTarget.value)} value='Instructor'/>Instructor
                    <input type="radio" name="student" onClick={(e) => setStaffType(e.currentTarget.value)} value='Student' />Student 
                </label>
                <br/>
                <label> Bio: 
                    <input type="text" name="bio" onChange={(e) => setBio(e.currentTarget.value)} value={bio} />
                </label>
                <br/>

                <input type="submit" value="Submit Form" />
                <div>Complete { formComplete ? "yes" : "no" }</div>
            </form>


            <div className="form elements">
                <ul>
                    <li>{username}</li>
                    <li>{email}</li>
                    <li>{phoneNumber}</li>
                    <li>{phoneType}</li>
                    <li>{staffType}</li>
                    <li>{bio}</li>
                </ul>

            </div>
        </div>
    )
}

export default Form