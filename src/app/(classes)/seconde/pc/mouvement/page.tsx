"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function PresPage() { //? Template, copier le code en laissant tout sauf le <h1> et le <p>
  const pathname = usePathname().split("/");
  return(
    <>
      <h1>Description du mouvement</h1>

      <h2>Système et référentiel</h2>

      <h3>Système</h3>
      <p>Le système est l&apos;objet étudié.</p>

      <h3>Référentiel</h3>
      <p>Le référentiel peut être <b>héliocentrique</b>, par rapport au système solaire, <b>terrestre</b> pour un objet présent sur terre ou un <b>objet donné</b>.</p>

      <h3>Vecteur déplacement</h3>
      <img src="/pc/vecteurmm&apos;.png" alt="vecteur MM&apos;" className="imgvecteurmm&apos;"/>
      <p>Un vecteur nommé <i><span className="vecteur">MM&apos;</span></i> possède 3 caractéristiques: </p>
      <ul>
        <li><b>Direction</b>: droite MM&apos;</li>
        <li><b>Sens</b>: de M vers M&apos;</li>
        <li><b>Valeur</b> ou <b>Norme</b> ou <b>Distance</b>: Distance en m ou cm notée MM&apos; entre M et M&apos;</li>
      </ul>

      <h2>Vecteur vitesse d&apos;un système</h2>

      <h3>Vecteur vitesse moyenne</h3>
      <img src="/pc/vectvitmoy.png" alt="Vecteur vitesse moyenne" className="vectvitmoy"/>
      <p>3 caractéristiques:</p>
      <ul>
        <li><b>Direction</b>: droite MM&apos;</li>
        <li><b>Sens</b>: M vers M&apos;</li>
        <li><b>Valeur</b>: notée v (sans flèche), unité: m/s ou cm/s</li>
      </ul>
      <p>Colinéaire avec le vecteur d&apos;origine. t▲=t&apos;-t </p>
      <p>Exprimé généralement en secondes</p>

      <h3>Vecteur vitesse instantanée</h3>
      <p>C&apos;est la vitesse moyenne entre 2 points dont la distance est très faible.</p>

      <h2>Décrire un mouvement</h2>
      <ul>
        <li>Trajectoire (rectiligne, curviligne, parabolique ou circulaire)</li>
        <li>Évolution de la vitesse (uniforme, accélérée ou ralentie)</li>
      </ul>      
      <Link href={`/${pathname[1]}/${pathname[2]}`}>Retour</Link>
    </>
  )
}