import Link from "next/link"
import styled from "styled-components"

const NavbarStyled = styled.nav`
    background-color: black;
    height: 4vh;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    nav{
        padding: 0 2rem;
        ul{
            li{
                a{
                    color: white;
                    font-family: 'Roboto', sans-serif;
                }
            }
        }
    }
`

export default function Navbar() {
    return (
        <>
        <NavbarStyled>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            Accueil
                        </Link>
                    </li>
                </ul>
            </nav>
        </NavbarStyled>
        </>
    )
}