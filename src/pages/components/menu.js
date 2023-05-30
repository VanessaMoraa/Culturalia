import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <button onClick={toggleMenu}>Abrir menú</button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "30px",
            right: "0",
            background: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            zIndex: "100",
          }}
        >
          <ul>
            <li>
              <Link href="/perfiles">Perfiles destacados</Link>
            </li>
            <li>
              <Link href="/agenda">Agenda cultural</Link>
            </li>
            <li>
              <Link href="/foro">Foro</Link>
            </li>
            <li>
              <Link href="/usuario">Usuario</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
