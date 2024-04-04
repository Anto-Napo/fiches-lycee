"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function PresPage() { //? Template, copier le code en laissant tout sauf le <h1> et le <p>
  const pathname = usePathname().split("/");
  return(
    <>
      <h1>La valeur ajoutée</h1>
      <h2>La TVA</h2>
      <p>Elle est incorporée au prix, c&apos;est un impôt.</p>
      <p>Il n y a pas de TVA aux aéroports internationaux car ils n&apos;appartiennent pas à l&apos;Etat.</p>
      <p>Il est indolore: on ne se rend pas compte de son montant</p>
      <p>Il est indirect: il n&apos;est pas directement versé à l&apos;Etat mais est donné aux commercants qui le verse ensuite à l&apos;Etat. C&apos;est celui qui rapporte le plus à l&apos;Etat (≈ 50%)</p>
      <ul>
        <li>Taux normal: 20%</li>
        <li>Taux réduit: 5,5% Biens de 1<sup>ère</sup> nécéssité (nourriture)</li>
      </ul>

      <h2>La valeur ajoutée</h2>
      <p>C&apos;est une richesse créée par un agent économique, l&apos;entreprise.</p>
      <p>Rappel: la consommation intermédiaire est un bien consommé ou détruit pendant la production d&apos;un produit.</p>
      <p>Valeur ajoutée = prix de vente - consommation intermédiaire</p>
      
      <Link href={`/${pathname[1]}/${pathname[2]}`}>Retour</Link>
    </>
  )
}