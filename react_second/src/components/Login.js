
function Login(){
    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function onSubmit(){
        
    }

    return(
        <div>
            <input type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} />
            <input type="text"
                    placeholder="Enter a password"
                    value={email}
                    onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </div>
    )

}