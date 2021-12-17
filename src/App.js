function App() {
    return ( 
    <div>
        <div className="input-group">
        <span className="input-group-text" id="basic-addon1">@</span>
        <input type="text" class="form-control" placeholder="Username"/>
    </div>
    <div className="inputGroup">
        <input type="text" className="form-control" placeholder="Recipient's username"/>
        <span className="input-group-text" id="basic-addon2">@example.com</span>
    </div>
    
    <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
    <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
        <input type="text" className="form-control" id="basic-url"/>
  </div>
    </div>
    );
}

export default App;