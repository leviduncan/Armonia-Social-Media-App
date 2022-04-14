import { useContext } from 'react'
import AppContext from '../context/AppContext'

function SideProfile() {
    let { gender, handleChange } = useContext(AppContext)
    
        return (
            <>
                <div className="profile p-3">
                    <div className="d-flex">
                    { gender === 'female' 
                    ? 
                    (<div className="p-3"><img src="https://randomuser.me/api/portraits/men/35.jpg" alt="male" /></div>) 
                    : 
                    (<div className="p-3"><img src="https://randomuser.me/api/portraits/women/6.jpg" alt="female" /></div>) }
                    
                    
                    <div className="pt-3">
                        
                        <select onChange={ handleChange } value={ gender }>
                            <option value="female">Lukas Tuominen</option>
                            <option value="male">Jane Cooper</option>
                        </select>
                        <h6><span className="badge alert-danger">Interest - 
                        { gender === 'female' ? " Females" : " Males" }
                        </span></h6>
                    </div>
                    </div>
                    <button className="btn btn-rose btn-block">Post To News Feed</button>
                </div>
    
            </>
        )
}

export default SideProfile
