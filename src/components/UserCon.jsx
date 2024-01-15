import { useGlobalContext } from "../hooks/useGlobalContext";
import useLogout from "../hooks/useLogout";

function UserCon() {
  const { user } = useGlobalContext();
  const { logout, error } = useLogout();
  return (
    <div className='user-container dark:bg-[#414558]'>
        <div className='container flex justify-end items-center gap-7'>
            <h2 className='user-title dark:text-[#D6D7DB]'>Welkome: {user.displayName}</h2>
            <button className="user-btn dark:text-[#f9719c] dark:hover:text-[#414558] dark:border-[#f9719c] dark:hover:bg-[#f9719c]" onClick={logout}>LOGOUT</button>
        </div>
    </div>
  )
}

export default UserCon
