"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function PresPage() { //? Template, copier le code en laissant tout sauf le <h1> et le <p>
  const pathname = usePathname().split("/");
  return(
    <>
      <h1>Tonalité lyrique</h1>

      <h2>Qu'est ce que le lyrisme?</h2>
      <p>Le terme vient du mot <b><i>lyre</i></b>, instrument associé au poète et musicien grec <b>Orphée</b>. La mythologie dit qu'il parvenait à charmer les bêtes sauvages, à apaiser les dieux et à exprimer l'amour et la souffrance.</p>
      <p>Depuis le <b>XIX<sup>ème</sup></b> siècle, il est utilisé pour caractériser <b>l'expression des sentiments</b> et des <b>émotions personnelles</b>. On dira ainsi qu'un texte est lyrique s'il <b>traduit ce que ressent celui qui parle</b>.</p>

      <h2>Caractéristiques du registre lyrique</h2>
      <p>Utilisation fréquence de la <b>1<sup>ère</sup> personne</b> et présence de l'interlocuteur.</p>
      <p><b>Ponctuation</b> qui exprime les élans et mouvements des sentiments: <b>exclamations, interjections, interrogations</b>.</p>
      <p>L'<b>alexandrin</b> et souvent utilisé.</p>
      <p><b>Rythme</b> qui souligne l'<b>intensité</b> et l'<b>évolution</b> des sentiments ressentis ou exprimés.</p>
      <p>Figures d'<b>analogie</b>, d'<b>amplification</b> et d'<b>atténuation</b>.</p>
      <p><b>Musicalité</b> (<b>assonances, allitérations</b>) qui traduit les <b>sentiments exprimés</b>.</p>

      <h2>Thèmes et genres</h2>
      <p>On parle surout de <b>poésie lyrique</b>, mais on en retrouve aussi au <b>théâtre</b>, dans les <b>romans</b>, dans les <b>autobiographies</b> et dans les <b>lettres</b>.</p>
      <p>Thèmes: <b className="red-text">l'amour, la mort, le temps, la nature, l'enfance, le bonheur...</b></p>
      <p>Quand le lyrisme est l'expression de la <b>tristesse</b>, de la <b>nostalgie</b>, des <b>regrets</b> ou de <b>douleur du passé</b>, on parle de <b>lyrisme élégiaque</b> (surtout dans la <b>poésie romantique</b>).</p>
      <ul>
        <li><b>Sonnet</b>: <b>2 quatrins + 2 tercets, décasyllabes</b></li>
        <li><b>Ode: 3 strophes, bref. Autant de vers pour chaque strophes.</b></li>
      </ul>
      
      <Link href={`/${pathname[1]}/${pathname[2]}`}>Retour</Link>
    </>
  )
}