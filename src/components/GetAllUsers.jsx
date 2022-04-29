import './GetAllUsers.css'
import Header from './Header'
import UserCard from './UserCard'

const GetAllUsers = (props) => {
    const { userData, onAdd, onRemove } = props
    return (
        <div className="container-fluid">
            <Header />
            <div className="user-grid">
                {userData.map((user) => {
                    return (
                        <>
                            <UserCard
                                key={user.login.uuid}
                                user={user}
                                onAdd={onAdd}
                                onRemove={onRemove}
                            />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default GetAllUsers
