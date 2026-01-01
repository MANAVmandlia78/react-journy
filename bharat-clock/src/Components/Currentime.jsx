function Currentime(){
    let time = new Date();
return <p className="lead">
    This is the Currentime: {time.toLocaleDateString()} -{" "}
    {time.toLocaleTimeString()}.
    </p>
}

export default Currentime;