"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function PresPage() { //? Template, copier le code en laissant tout sauf le <h1> et le <p>
  const pathname = usePathname().split("/");
  return(
    <>
      <h1>Commentaire</h1>
      <h2>Genres</h2>
      <p>Mouvement réaliste ou courant réaliste</p>
      <ul>
        <li>Réalisme = représentation de la société</li>
        <li>Naturalisme = extension réalisme</li>
        <ul>
          <li>Termes scientifiques</li>
          <li>Précis</li>
          <li>Beaucoup de description</li>
        </ul>
        <li>Propositions = juxtaposée, coordonée, subordonée</li>
      </ul>

      <h2>Brouillon</h2>
      <table border={1}>
        <tr>
          <td>Citation</td>
          <td>Procédé</td>
          <td>Interprétation</td>
        </tr>
      </table>
      
      <Link href={`/${pathname[1]}/${pathname[2]}`}>Retour</Link>
    </>
  )
}