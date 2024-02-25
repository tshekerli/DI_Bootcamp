/** 
 * 1. Create a ne User component
 * 2. Return a JSX with al the name and emails from this array
 * [
 *   { id: 1, name: "John", email: 'jjj@gamil.com' },
  { id: 2, name: "Marry", email: 'mmm@gamil.com' },
  { id: 3, name: "Anne", email: 'aaa@gamil.com' },
 * ]
 */

  const Users = () => {
    const users = [
         { id: 1, name: "John", email: 'jjj@gamil.com' },
         { id: 2, name: "Marry", email: 'mmm@gamil.com' },
         { id: 3, name: "Anne", email: 'aaa@gamil.com' },
        ]

        return (
            <div>
                <h1>Users</h1>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    export default Users;