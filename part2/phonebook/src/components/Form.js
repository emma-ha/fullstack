const Form = ({name, number, handleNa, handleNu, handleP}) => (
    <form onSubmit = {handleP}>
        <div>
          name: <input value = {name} onChange={handleNa} />
        </div>
        <div>
          number: <input type = 'number' value = {number} onChange={handleNu} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
)



export default Form