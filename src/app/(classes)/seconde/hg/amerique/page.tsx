"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function PresPage() { //? Template, copier le code en laissant tout sauf le <h1> et le <p>
  const pathname = usePathname().split("/");
  return(
    <>
      <h1>TITRE INCONNU</h1>
      <h2>Pourquoi les Européens partent-ils à la découverte du monde à la fin du XV<sup>ème</sup>?</h2>
      <h3>1. Des motivations aux découvertes</h3>
      <p>Les Européens connaissent principalement le large bassin méditérannéen depuis l'Antiquité. Les cartes du géographe <b>Ptolémée (II<sup>ème</sup>)</b> renseignent sur une partie des 3 continents: <b>l'Europe, Nord de l'Afrique et l'Asie</b>.</p>
      <p>Ptolémée (II<sup>ème</sup>):</p>
      <ul>
        <li>Afrique (reliée Antarctique)</li>
        <li>Europe</li>
        <li>Asie (Proche / Moyen-Orient)</li>
      </ul>
      <p>XV<sup>ème</sup>:</p>
      <ul>
        <li>Afrique (sud déformé)</li>
        <li>Europe</li>
        <li>Asie (Proche / Moyen-Orient)</li>
      </ul>
      <p>Il y avait peu de progrès cartographiques.</p>

      <p>→ A la fin du XV<sup>ème</sup>, de nouvelles <b>motivations</b> poussent les <b>Anglais</b> et les <b>Espagnols</b> à faure de nouvelles découvertes maritimes.</p>
      <ul>
        <li>L'empire Ottoman</li>
      </ul>
      <p>En <b>1453</b>, l'empire Ottoman dirigé pari<i> Mehmed II</i> et ayant son apogée avec <i>Soliman le Magnifique</i> fait <b>tomber</b> l'empire Byzantin.</p>
      <p>C'est une période de durcissement et de tension entre le monde Chrétien et l'empire Ottoman.</p>
      <p>Il devient donc difficile d'accéder à certaines ressources d'Orient, ils cherchent donc des moyens de <b>contourner</b> pour récupérer de l'épice ou de la porcelaine.</p>
      <ul>
        <li>La motivation économique</li>
      </ul>
      <p><b>Atteindre directement</b> les ressources rares permmetrait d'éviter les <b>intermédiaires</b> qui appliquent des <b>marges</b>.</p>
      <ul>
        <li>Une série d'innovation technique</li>
      </ul>
      <p>Elle va permettre de faire des <b>explorations</b>: un nouveau modèle de bateau qui permet d'éviter les naufrages et de remonter les fleuves et apparu: la <b>caravelle</b>.</p>
      <p>Le <b>mât</b> et <b>pivotant</b>: il s'adapte en fonction de la direction du vent pour garder le cap le plus droit possible.</p>
      <p>Un nouveau <b>gouvernail</b>: le gouvernail d'estambat qui permet de tourner de manière efficace.</p>
      <p>Une série de <b>nouveaux instruments de repérage</b>: (la boussole), le sextant et l'astrolabe.</p>
      <p>Des <b>cartes maritimes: les portants</b>. Un compas qui indique les distances, les principaux récifs, les ports et les vents dominants.</p>
      <ul>
        <li>Volonté d'évangéliser l'humanité</li>
      </ul>
      <p>L'Islam et le Christianisme sont des religions conquérantes.</p>
      <ul>
        <li>La <b>curiosité scientifique</b>, le défi, le goût de l'aventure.</li>
      </ul>

      <h2>Comment se mettent en place et s'organisent les 1<sup>ers</sup> empires coloniaux? L'exemple du monde espagnol.</h2>
      <h3>1. Une conquête rapide et violente</h3>
      <p><b>Découvertes 1492 ⭢ 1519</b></p>
      <p><b>Conquistador</b>: conquérant espagnol ou portugais ayant ayant conquis l'Amérique.</p>
      <h4>⭢ Herman Cortès</h4>
      <p>Il conquis l'<b>embire Aztèque</b> entre <b>1519 et 1521</b>, qui contient environ <b>20 millions</b> d'habitants, dont la capitale est <b>Tenochtitlan</b> et dont le souverain fragile est <b>Mochtezuma II</b>.</p>
      <p>Environ <b>400 conquistadors</b> étaient présents.</p>
      <p>Ils étaient arrivés dans la capitale car leur arrivée correspondait à une <b>prophétie Aztèque</b> qui annoncait l'arrivée d'émissaires de Quetzalcoatl.</p>
      <p>Il se font recevoir dans le palais de l'Empereur et prennent en otage l'aristocratie Aztèqeue.</p>
      <p>En partant, ils leur ont donné la <b>variole</b>.</p>
      <p><b>La Malinche</b>, Amérindienne servait de traductrice. Elle a été christianisée.</p>
      <p>La domination Aztèque était mal percue à cause des <b>guerres fleuries</b> où des jeunes personnes sont enlevées pour les offrir en <b>sacrifice</b>. Ils avaient peur de la fin d'un cycle. Tout cela est très mal passé aux yeux des chrétiens Espagnols.</p>

      <h4>⭢ Francisco Pizaro</h4>
      <p>Conquiert l'<b>empire Inca 1531 ⭢ 1533</b> (Pérou, Chili). La capitale est <b>Cuzco</b>, l'empereur est <b>Atahualpa</b>.</p>
      <p>L'empereur était peu méfiant, il rencontre donc les espagnols sans protection. Malheureusement, il n'appréciait pas la Bible donc les Espagnols massacrent l'aristocratie. L'Empereur est capturé et ransoné. Bien qu'elle fut payée, l'empereur avait tout de même été éliminé.</p>
      <p>L'emplacement de l'Empire Inca est surprenant car il est instalé dans le <b>Machu Piccu</b>.</p>

      <h4>Conclusion</h4>
      <ul>
        <li>Les Espagnols ce sont appuyés sur une <b>aristocratie naïve</b>.</li>
        <li>Ils ont été cruels, en partie à cause des <b>sacrifices humains</b></li>
        <li>Ils étaient en <b>supérioritée technologique</b>, et il y a eu un choc de la rencontre.</li>
        <li>Ils ont su nouer des <b>alliances avec les tribus locales</b>.</li>
        <li>Ils ont profité des <b>tensions internes</b>.</li>
        <li>Choc microbien : hécatombes avec la <b>variole.</b></li>
      </ul>

      <h3>2. L'instauration des colonies</h3>
      <p><b>Colonie</b>: territoire administré par une <b>puissance étrangère</b> et <b>exploité économiquement</b>.</p>
      <p>Les Conquistadors ne les <b>gèrent pas</b>.</p>
      <p>La <b>Nouvelle Espagne</b> remplace l'Empire Aztèque.</p>
      <p><b>Antonio Mendoza</b> l'administre; il est le vice-roi de la NE. Il a été missionné par le Roi d'Espagne <b>Charles Quint</b> (Empereur du Saint Empire Romain-Germanique, rival de François 1<sup>er</sup>).</p>
      <p>Le vice-roi assure l'ordre et la justice dans la NE découpée en <b>audiencias</b>, chacuns controlés par des gouverneurs.</p>
      <p>Les audiencias sont divisées en suivant le <b>système de l'encomandia</b>.</p>
      <p>Un colon appelé <b>encomendero</b> se voit confié des terres qu'ils doivent mettre en valeur en montrant les populations Amerindiennes réduites au travail forcé. Ils doivent également <b>christianiser</b> la population.</p>
      <p>Ensuite, les ressources sont pillées. Les conditions de travail sont <b>terribles</b>, notamment dans les <b>mines</b> : sous-oxygénisation, utilisation de mercure pour trier l'or, éboulements...</p>
      <ul>
        <li>Région de Potosi (Bolivie): mines d'argent</li>
        <li>St Domingue (Haïti + Rép. Dominicaine): mines d'or</li>
      </ul>
      <p>Forte volonté d'<b>acculturation</b>:</p>
      <p>Envoi de missionnaires qui vont <b>évangéliser</b>, imposer le christianisme. <b>Destruction systématique</b> de tout ce qui fait référence aux cultures Aztèques / Amérindiennes : temples rasés et remplacés par lieux de cultes chrétiens.</p>
      <p>La capitale est devenue <b>Mexico</b>.</p>
      <p>Elle contient une cathédrale et un évêque.</p>
      <p>Tous les objets de cultes sont <b>fondus et exportés vers l'Europe</b>.</p>
      <p>Tous les noms de lieux sont remplacés par des <b>noms Espagnols</b>.</p>

      <h3>3. La controverse de Valladolid fixe le sort des Amérindiens (1550 ⭢ 1551)</h3>
      <p><b>Valladolid</b> est une ville.</p>
      <p>La <b>controverse</b> est un <b>débat sérieux</b> organisé à la demande de Charles Quint sous arbitrage du pape. Ils doivent répondre à une question: <b>les Amérindiens ont-ils une âme?</b>.</p>
      <p>Deux personnages principaux:</p>
      <ul>
        <li><b>Sepulueda</b> : il instruit à charge. Il remet en cause l'<b>humanaité</b> des Amérindiens. Il dénonce leur barbarie, notamment avec les sacrifices humains ou encore une religion <i><b>payenne</b></i> avec leur polythéisme. Il émet également l'argument qu'ils vivent <b>à moitié nu</b>.</li>
        <li><b>Bartholome de Las Casas</b>. Ancien évèque de Mexico. Il tente de <b>protéger</b> les Amérindiens et dénonce les actes commis par les colons (<b>travail forcé</b>).</li>
      </ul>
      
      <Link href={`/${pathname[1]}/${pathname[2]}`}>Retour</Link>
    </>
  )
}