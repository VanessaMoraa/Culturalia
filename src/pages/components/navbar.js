import Link from "next/link"

export default function navbar() {
    return (
        <>
        <ul>
                <li><Link href="/">Logo</Link></li>
                <li><Link href="/inicio">Inicio </Link></li>
                <li><Link href="/usuario">Inicia sesión</Link></li>
            </ul>
            </>
    )
}