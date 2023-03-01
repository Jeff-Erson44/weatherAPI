import Search from "./Search";

export default function Layout({ children }) {
    return (
    <>
        <>
        <Search/>
            { children }
        </>
    </>
    )
}
