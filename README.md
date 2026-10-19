# Portfolio — Malo-Valentin Lequy

Portfolio personnel consacré à mon parcours en informatique, à mes projets et à mes centres d’intérêt : systèmes, réseaux, cybersécurité et développement web.

**[Consulter le portfolio](https://mvdu01.github.io/portfolio/)** · **[LinkedIn](https://www.linkedin.com/in/malo-valentin-lequy/)** · **[CV au format PDF](./CV_Malo-Valentin_LEQUY_WEB.pdf)**

## Présentation

Le site est hébergé sur **GitHub Pages**. Il repose sur HTML, CSS et JavaScript, sans framework ni étape de compilation. Le formulaire utilise **FormSubmit.co** pour transmettre les messages par e-mail.

Le contenu reste en cours d’actualisation : certaines indications « à compléter » sont encore présentes.

## Évolutions réalisées

- Refonte de l’interface : fond clair, violet profond, nouvelle typographie et sections numérotées.
- Nouvel accueil avec accès direct aux projets et au CV.
- Création d’une illustration de laboratoire virtuel en **HTML, CSS et SVG** : serveur Windows, poste client, terminal et connexions réseau. Ce visuel est construit dans la page ; il ne dépend pas d’une image externe.
- Présentation des projets avec visuels, technologies, ressources et fiches détaillées.
- Regroupement des compétences en systèmes et virtualisation, développement, réseaux et sécurité.
- Présentation des badges Cisco et du parcours de formation.
- Adaptation de la mise en page aux petits écrans, avec menu mobile et parcours affiché sur une colonne.
- Amélioration de la structure HTML : titre principal, zone de contenu principale, lien d’accès rapide, libellés de formulaire et indications accessibles.
- Prise en compte de la préférence de réduction des animations.
- Révision du changement de langue français/anglais : textes, champs du formulaire, messages d’état, langue du document, titre et description.
- Remplacement de l’ancienne logique de fenêtre de développement par les interactions de la nouvelle version.
- Remplacement de Formspree par **FormSubmit.co**, avec confirmation d’envoi dans la page.
- Actualisation du CV PDF.
- Suppression du bandeau « Proposition V2 » et de son lien « Voir l’original ».
- Nettoyage des anciennes images devenues inutiles : `fr-flag.png`, `gb-flag.png`, `logo-linkedin.png` et `icone.png`. L’icône du site est désormais un SVG intégré au HTML.

## Fonctionnalités

### Navigation et langues

La navigation permet de rejoindre les projets, les compétences, le parcours et le contact. Sur mobile, le menu se referme après sélection d’un lien ; il peut aussi être fermé avec la touche Échap.

Le bouton FR/EN change la langue pendant la visite. Les documents PDF et les sites externes conservent leur propre langue.

### Projets

- **Laboratoire Windows Server** : deux machines virtuelles VMware, installation de rôles serveur et tests avec un poste client. Le tutoriel est accessible en PDF.
- **TechWave** : site pour un événement technologique fictif, avec accès à la démonstration.

Chaque projet dispose d’une fiche détaillée ouverte dans une fenêtre modale. La touche Échap permet de la fermer.

Le visuel TechWave présenté dans le portfolio est une **illustration**, pas une capture fidèle du site externe. Les détails techniques encore inconnus sont signalés comme étant à compléter.

### Formulaire de contact

Les champs demandés sont le nom, l’adresse e-mail et le message. Les données sont transmises à FormSubmit.co ; le site ne possède pas de serveur de messagerie personnel.

Le formulaire comprend :

- la validation des champs obligatoires et du format de l’adresse e-mail ;
- un champ piège antispam (`_honey`) ;
- un indicateur d’envoi et le blocage des soumissions simultanées ;
- une confirmation après réponse positive de FormSubmit ;
- la gestion des erreurs réseau et un délai maximal de 20 secondes ;
- la conservation des champs en cas d’échec ;
- des messages en français et en anglais.

L’adresse de réception est remplacée dans le HTML par l’identifiant fourni par FormSubmit. Le JavaScript lit l’attribut `action` du formulaire et construit automatiquement l’URL AJAX :

```html
<form id="contact-form"
      action="https://formsubmit.co/IDENTIFIANT_FORMSUBMIT"
      method="POST">
```

L’activation du formulaire et la réception réelle d’un message ont été confirmées par le propriétaire pendant la mise en place. Cette confirmation ne constitue pas une surveillance continue du service.

**L’envoi est volontairement désactivé lorsque le site est ouvert directement en `file://`.** Pour le tester, utiliser GitHub Pages ou un serveur HTTP local.

## Organisation du dépôt

| Fichier | Rôle |
| --- | --- |
| `index.html` | Structure, contenu français, formulaire et icône SVG intégrée |
| `style.css` | Mise en page, couleurs, illustrations, adaptation mobile et styles accessibles |
| `script.js` | Traduction, menu mobile, fiches de projets et envoi du formulaire |
| `CV_Malo-Valentin_LEQUY_WEB.pdf` | CV accessible depuis le site |
| `Tutoriel_Windows_Server.pdf` | Documentation du laboratoire Windows Server |
| `networking-basics.png` | Badge Cisco Networking Basics |
| `introduction-to-cybersecurity.png` | Badge Cisco Introduction to Cybersecurity |
| `README.md` | Présentation et documentation du projet |

Les liens vers les PDF et les badges pointent actuellement vers l’adresse publique du portfolio. Une modification de leur nom ou du chemin d’hébergement nécessite de mettre à jour les références.

## Consulter et modifier le site

Aucune installation de dépendances n’est nécessaire. Les fichiers peuvent être consultés directement dans un navigateur pour un aperçu visuel.

Pour tester avec un serveur local, depuis le dossier du projet et si Python est installé :

```sh
python -m http.server 8000
```

Ouvrir ensuite `http://localhost:8000`.

Pour les mises à jour :

1. Modifier le contenu français dans `index.html`.
2. Adapter les traductions anglaises, les textes des fiches de projets et les messages du formulaire dans `script.js`.
3. Modifier les styles dans `style.css`.
4. Vérifier l’affichage sur ordinateur et mobile, le changement de langue et les liens.
5. Enregistrer les modifications sur la branche utilisée par GitHub Pages, puis contrôler le site publié.

Pour changer la destination du formulaire, remplacer l’identifiant dans l’attribut `action` de `index.html`. Si une nouvelle adresse est configurée, suivre l’activation demandée par FormSubmit et vérifier la réception d’un message.

## Contenu restant à finaliser

- Actualiser les compétences et le parcours sur le site avec les informations professionnelles les plus récentes.
- Préciser l’objectif professionnel, la disponibilité et la mobilité.
- Compléter les fiches projets : rôle exact, versions, difficultés, tests, résultats et liens vers le code.
- Ajouter les dates et liens de vérification des badges lorsque disponibles.
- Retirer les annotations de préparation lorsque le contenu est prêt.
- Revoir la directive `<meta name="robots" content="noindex,nofollow">`, encore présente : elle demande aux moteurs de ne pas indexer le site. La retirer lorsque le portfolio est prêt à être référencé.

---

Portfolio de **Malo-Valentin Lequy** — documentation actualisée le **19 octobre 2026**.
