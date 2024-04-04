"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function PresPage() { //? Template, copier le code en laissant tout sauf le <h1> et le <p>
  const pathname = usePathname().split("/");
  return(
    <>
      <h1>Procréation, hormones et sexualité</h1>
      <h2>Vocabulaire</h2>
      <ul>
        <li><b>Phénotype: </b>: ensemble de caractères morphologiques ou chimiques observables chez un individu.</li>
        <li><b>Gamètes</b>: cellule reproductrice femelle ou mâle.</li>
        <li><b>Gonades</b>: organes reproducteurs qui produisent des gamètes.</li>
        <li><b>Gonosome</b>: chromosome dont la fonction est la détermination du sexe.</li>
      </ul>
      
      <Link href={`/${pathname[1]}/${pathname[2]}`}>Retour</Link>
    </>
  )
}