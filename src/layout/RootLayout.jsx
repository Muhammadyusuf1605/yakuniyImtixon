import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import UserCon from "../components/UserCon"

function RootLayout() {
    return (
    <>
        <UserCon/>
        <Header/>
        <main className="dark:bg-slate-800">
            <Outlet />
        </main>
    </>
    )
}

export default RootLayout
