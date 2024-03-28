"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function PresPage() { //? Template, copier le code en laissant tout sauf le <h1> et le <p>
  const pathname = usePathname().split("/");
  return(
    <>
      <h1>Présentation</h1>
      <p>Ceci est un <b>exemple</b>.</p>
      
      <Link href={`/${pathname[1]}/${pathname[2]}`}>Retour</Link>
    </>
  )
}