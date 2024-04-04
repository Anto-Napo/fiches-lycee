"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function PresPage() { //? Template, copier le code en laissant tout sauf le <h1> et le <p>
  const pathname = usePathname().split("/");
  return(
    <>
      <h1>Investissements</h1>
      <h2>Deux formes d&apos;investissements</h2>
      <h3>Investissement matériel</h3>
      <p>On peut le <b>toucher</b></p>
      <p>4 types:</p>
      <ul>
        <li>Capacité: l&apos;entreprise augmente ses <b>capacités de production</b>. Elle s&apos;agrandit, créé de <b>nouveaux locaux</b> et augmente son <b>parc de machines</b>.</li>
        <li>Productivité: l&apos;entreprise achète des <b>machines plus performantes</b>. Elle <b>remplace</b> ses machines obsolètes.</li>
        <li>Remplacement: <b>remplacer</b> des machines usées par des mêmes machines <b>neuves</b>.</li>
        <li>Aquisition de logiciels</li>
      </ul>

      <h3>Investissement immatériel</h3>
      <p>On ne peut <b>pas le toucher</b></p>
      <p>3 types:</p>
      <ul>
        <li>Marketing: agrandir sa <b>visibilité</b>, faire <b>connaître</b> ses produits.</li>
        <li>Recherche et développement: <b>innover</b>. Problème de l&apos;<b>obsolécensce programée</b>: le produit devient obsolète rapidement. La <b>course à l&apos;innovation</b> rend des produits obsolètes.</li>
        <li>Formation des salariés</li>
      </ul>

      <h2>Comment financer un investissement?</h2>
      <ul>
        <li>Bénéfices mis en résèrve.</li>
        <li>Emprunts</li>
        <li>SA: nouvelles actions pour financer. Augmentation du capital.</li>
      </ul>
      
      <Link href={`/${pathname[1]}/${pathname[2]}`}>Retour</Link>
    </>
  )
}