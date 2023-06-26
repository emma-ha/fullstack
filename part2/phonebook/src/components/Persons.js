const Persons = ({persons, search}) => (
    <>
        {persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase())).map(person =>(
        <p key = {person.name}> {person.name} {person.number}</p>
    ))}
    </>
)

export default Persons