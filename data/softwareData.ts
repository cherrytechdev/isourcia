export type Feature = {
  name: string;
  initial?: string;
  evolution?: string;
  amplitude?: string;
  included?: string
};

export type Software = {
  bGround?: string
  title: string;
  description: string[];
  tables: {
    title: string;
    features: Feature[];
  }[];
};

export const softwareData: Record<string, Software> = {
  logicielGestion: {
    bGround: "/img/gestion.svg",
    title: "Logiciel de gestion",
    description: [
      "Parce que chaque entreprise est unique, nous avons conçu un outil de gestion qui s'adapte à votre organisation et à vos besoins tout en restant simple et fonctionnel.",
      "Les workflows achats et ventes de 8gestion sont le reflet de vos process internes de suivi et de validation des pièces.",
      "Que vous gériez le stock d’une boutique de vêtements ou des articles complexes en numéro de série sur plusieurs dépôts, 8gestion est l’outil qui vous permet d’anticiper vos besoins en approvisionnement, suivre vos prix de revient, et valoriser vos actifs.",
      "Facturer vos clients au plus tôt, suivre le recouvrement de vos créances, gérer les règlements  clients et fournisseurs, 8gestion vous permet de dégager du temps sur les tâches administratives pour vous concentrer sur votre business.",
      "Parce que la réussite de votre entreprise dépend de votre capacité à analyser votre performance pour anticiper les écueils et saisir les opportunités, 8gestion dispose de fonctionnalités de recherche et d’analyse intuitives qui vous permettront de mettre en place un véritable système d’information et de pilotage"
    ],
    tables: [
    {
      title: "Gestion des ventes",
      features: [
        { name: "Gestion des clients (nom, prénom, téléphone, e-mail, réseaux sociaux… )", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Gestion des articles (standard, emballages, port, texte, …)", initial: "1", evolution: "Multiple", amplitude: "Multiple" },
        { name: "Gestion des abonnements", initial: "", evolution: "", amplitude: "✓" },
        { name: "Gestion des nomenclatures commerciales", initial: "", evolution: "Simple", amplitude: "✓" },
        { name: "Gestion des articles dérivés (taille-couleur par exemple)", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Gestion des représentants", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Gestion managers des représentants", initial: "", evolution: "", amplitude: "✓" },
        { name: "Gestion multilingue", initial: "", evolution: "✓", amplitude: "✓" },
        { name: "Gestion de références, libellés et codes-barres spécifiques par client", initial: "", evolution: "", amplitude: "✓" },
        { name: "Affectation des modèles de mise en page par client", initial: "", evolution: "", amplitude: "✓" },
        { name: "Gestion des pièces de vente (devis, commande, BL, facture…)", initial: "Simple", evolution: "Etendue", amplitude: "Illimitée" },
        { name: "Paramétrage avancé du workflow", initial: "", evolution: "", amplitude: "✓" },
        { name: "Personnalisation de vos pièces de ventes (devis, factures …)", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Gestion des reliquats", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Gestion des tarifs", initial: "Simple", evolution: "Normal", amplitude: "✓" },
        { name: "Gestion des promotions – Article de promotion", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Gestion des frais article", initial: "", evolution: "✓", amplitude: "✓" },
        { name: "Statistiques (client, article, CA, marge, gamme, famille, catégorie, représentant …)", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Gestion des différents modes de règlement", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Visualisation des factures clients non réglées", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Gestion documentaire clients et fournisseurs", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Gestion documentaire étendue – Associer un document à une pièce", initial: "", evolution: "", amplitude: "✓" },
      ],
    },

    {
      title: "Gestion des achats",
        features: [
          { name: "Gestion des fournisseurs (nom, prénom, téléphone, email, réseaux sociaux…)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des références fournisseurs", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des pièces d'achats (demandes d'achat, commandes, réceptions, factures)", initial: "Simple", evolution: "✓", amplitude: "✓" },
          { name: "Paramétrage avancé du workflow", initial: "", evolution: "", amplitude: "✓" },
          { name: "Gestion des tarifs fournisseurs", initial: "1", evolution: "✓", amplitude: "✓" },
          { name: "Statistiques (fournisseurs, produits, CA, gamme, famille, catégorie…)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Personnalisation de vos pièces d'achats (commande, bons de réception …)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des frais produit (Frais de Douane, Transport, Emballage..)", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des frais d'approche (Frais sur Articles, Annexes, les deux)", initial: "", evolution: "", amplitude: "✓" },
          { name: "Visualisation des commandes et factures en cours", initial: "✓", evolution: "✓", amplitude: "✓" },
        ],
    },

    {
      title: "Gestion des stocks",
      features: [
        { name: "Gestion de plusieurs dépôts", initial: "", evolution: "✓", amplitude: "✓" },
        { name: "Gestion des types de dépôts (SAV, client, secondaire)", initial: "", evolution: "", amplitude: "✓" },
        { name: "Gestion des stocks de réservation", initial: "", evolution: "", amplitude: "✓" },
        { name: "Gestion du stock par pièce (transfert, entrée, sortie)", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Gestion des numéros de lots et des dates de péremption", initial: "", evolution: "", amplitude: "✓" },
        { name: "Gestion des numéros de série", initial: "", evolution: "", amplitude: "✓" },
        { name: "Visualisation des différents mouvements de stock", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Calcul automatique du besoin en approvisionnement", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Gestion de l'Inventaire (à date, en valeur)", initial: "✓", evolution: "✓", amplitude: "✓" },
      ],
    },

    {
      title: "Fabrication",
      features: [
        { name: "Gestion des fabrications", initial: "", evolution: "Simple", amplitude: "Etendue" },
        { name: "Gestion des ordres de fabrication", initial: "", evolution: "", amplitude: "✓" },
      ],
    },

    {
      title: "Autres fonctionnalités",
      features: [
        { name: "Gestion des utilisateurs par groupe", initial: "2", evolution: "Illimitée", amplitude: "Illimitée" },
        { name: "Gestion des menus par groupe", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Gestion des autorisations avancées (champ par champ)", initial: "", evolution: "✓", amplitude: "✓" },
        { name: "Gestion des obligations par groupe (champ par champ)", initial: "", evolution: "", amplitude: "✓" },
        { name: "Gestion des niveaux d'accès aux données", initial: "", evolution: "", amplitude: "✓" },
        { name: "Association d’un client à un commercial", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Gestion des droits sur les portefeuilles commandes clients", initial: "", evolution: "", amplitude: "✓" },
        { name: "Gestion de champs libres (clients, articles …) nombre de champs libres", initial: "3", evolution: "3", amplitude: "10" },
        { name: "Gestion des devises", initial: "2", evolution: "5", amplitude: "Illimitée" },
        { name: "Gestion des TVA et TPF", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Gestion des autres taxes", initial: "", evolution: "✓", amplitude: "✓" },
        { name: "Connexions à distance – Accès distant à un serveur à partir d’un poste Utilisateur", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Gestion de plusieurs établissements au sein d’un même dossier dans un contexte de Groupe et Filiales", initial: "", evolution: "", amplitude: "✓" },
        { name: "Automate d'import / export (échanges avec site web ou autre)", initial: "", evolution: "", amplitude: "✓" },
        { name: "Support localisation dans une langue (FR,EN,ES,…)", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Interface utilisateur en anglais", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Interface utilisateur en espagnol", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Interface utilisateur en langue établissement", initial: "", evolution: "", amplitude: "✓" },
        { name: "Gestion multilangue des utilisateurs", initial: "", evolution: "", amplitude: "✓" },
        { name: "Synchronisation multisite", initial: "", evolution: "", amplitude: "✓" },
        { name: "Prise de commande autonome (base locale synchronisable)", initial: "1", evolution: "5", amplitude: "Illimitée" },
        { name: "Mise en page personnalisable des modèles", initial: "✓", evolution: "✓", amplitude: "✓" },
        { name: "Transformations de pièces", initial: "Fixé", evolution: "Modifiable", amplitude: "Illimitée" },
        { name: "Gestion des personnes", initial: "", evolution: "✓", amplitude: "✓" },
      ],
    },
  ],
  },
  compta: {
    bGround: "/img/compta.svg",
    title: "Comptabilité",
    description: [
      "Grâce à l’intégration des logiciels 8sens, la plupart des écritures comptables sont générées automatiquement par 8gestion, évitant les double-saisies et permettant de libérer le comptable pour des tâches de contrôle et de suivi.",
      "Vous travaillez à l’international ? 8compta gère les opérations en multi-devises et vous permet même d’éditer des reportings financiers et comptables en différentes devises.",
      "Vous déléguez à votre expert comptable une grande partie du suivi comptable ? 8compta sait exporter et importer les informations dans les formats les plus communément utilisés.",
      "Les fonctionnalités de comptabilité analytique et budgétaire vous permettent de répondre aux besoins du contrôle de gestion et de suivre la performance de votre entreprise.",
      "Les écritures de simulation vous permettent de visualiser l’impact des décisions comptables avant la finalisation des états financiers."
    ],
    tables: [
      {
        title: "Comptabilité générale",
        features: [
          { name: "Nombre d'exercices illimité", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Plan comptable pré paramétré", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des journaux", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Saisie d’écritures par journal / période", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Saisie d'écritures de situation", initial: "", evolution: "", amplitude: "✓" },
          { name: "Saisie d'écritures multi-devises", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Extrait de compte", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Extrait d’écritures (plusieurs comptes)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Recherche multi-exercice d'écritures", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Rapprochement bancaire (journal / compte)", initial: "Compte", evolution: "✓", amplitude: "✓" },
          { name: "Importation des relevés bancaires (formats QIF, OFX)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Comptabilité multi-établissements", initial: "", evolution: "", amplitude: "✓" },
          { name: "Gestion des affaires et des représentants", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion d'écriture de situation", initial: "", evolution: "", amplitude: "✓" },
        ],
      },
      {
        title: "Comptabilité tiers",
        features: [
          { name: "Gestion des clients, fournisseurs, salariés, autres…", initial: "Clients, Fournisseurs uniquement", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des modes de règlement", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des relances", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Lettrage, Pointage", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Lettrage automatique", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Extrait de compte et lettrage à partir de la balance", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des règlements SEPA (virement, prélèvement)", initial: "Virements uniquement", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des effets", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des taxes", initial: "✓", evolution: "✓", amplitude: "✓" },
        ],
      },
      {
        title: "Analytique et budgétaire",
        features: [
          { name: "Saisie analytique", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Plan analytique", initial: "", evolution: "1", amplitude: "illimité" },
          { name: "Axe d’analyse", initial: "1 axe, gestion simple", evolution: "1 axe gestion simple", amplitude: "nombre illimité, gestion étendu" },
          { name: "Extrait d'écriture analytique (plusieurs sections)", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Budgets sur comptes annuels", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Budgets sur sections analytiques", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Saisie des révisions budgétaire simplifiees", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Simulations budgétaires", initial: "", evolution: "✓", amplitude: "✓" },
        ],
      },
      {
        title: "Documents comptables",
        features: [
          { name: "Personnalisation de tous les documents comptables", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Extrait de comptes", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Journal Général", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Grand livre", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Balance générale", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Balance âgée", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Echéancier", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Bilan (état préparatoire)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Compte de résultat (état préparatoire)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Soldes intermédiaires de gestion", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Création de documents de reporting", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Déclaration de taxes (état préparatoire)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Export des écritures et des balances", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Extrait de comptes analytique", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Etats analytiques (balance, grand livre, balance inversée …)", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Extrait de comptes par affaire", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Gestion documentaire (tiers, écritures, exercices, sections)", initial: "✓", evolution: "✓", amplitude: "✓" },
        ],
      },
      {
        title: "Autres fonctionnalités",
        features: [
          { name: "Gestion d’écritures de situation", initial: "", evolution: "", amplitude: "✓" },
          { name: "Import / Export selon formats des principaux éditeurs du marché", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Import / Export selon formats personnalisés", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des utilisateurs par groupe", initial: "2", evolution: "illimité", amplitude: "illimité" },
          { name: "Gestion des menus par groupe", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des autorisations avancées (champ par champ)", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des obligations par groupe (champ par champ)", initial: "", evolution: "", amplitude: "✓" },
          { name: "Gestion des niveaux d'accès aux données", initial: "", evolution: "", amplitude: "✓" },
          { name: "Association d'un client à un commercial", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des droits sur les portefeuilles commandes clients", initial: "", evolution: "", amplitude: "✓" },
          { name: "Gestion de champs libres (clients, articles …) nombre de champs libres", initial: "3", evolution: "3", amplitude: "10" },
          { name: "Gestion des devises", initial: "2", evolution: "5", amplitude: "illimité" },
          { name: "Gestion des différentes taxes", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Connexions à distance", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion de plusieurs établissements (dans la même base de données)", initial: "", evolution: "", amplitude: "✓" },
          { name: "Automate d'import / export (échanges avec d'autres dossiers comptables)", initial: "", evolution: "", amplitude: "✓" },
          { name: "Support localisation dans une langue (FR, EN, ES, …)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Interface d'utilisateur / export (échanges avec site web ou autre)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Interface d'utilisateur en anglais", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Interface d'utilisateur en espagnol", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Gestion multilangue des utilisateurs", initial: "", evolution: "", amplitude: "✓" },
          { name: "Interface utilisateur en langue établissement", initial: "", evolution: "", amplitude: "✓" },
          { name: "Synchronisation multisite", initial: "", evolution: "", amplitude: "✓" },
          { name: "Gestion d'établissements (dans la même base de données)", initial: "", evolution: "", amplitude: "✓" },
          { name: "Synchronisation multisite des dossiers comptables", initial: "", evolution: "", amplitude: "✓" },
          { name: "Gestion documentaire des tiers", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion documentaire étendue (tiers, écritures, exercices, sections)", initial: "", evolution: "✓", amplitude: "✓" },
        ],
      },
    ],
  },
  xrm: {
    bGround: "/img/xrm.svg",
    title: "XRM",
    description: [
      "Parce que la maîtrise du partage de l’information est l’une des clés du succès, 8xrm va au-delà des outils classiques et vous accompagne dans une gestion étendue des relations de votre entreprise.",
      "Suivre les échanges avec vos prospects et vos clients, gérer les tâches de vos collaborateurs, générer des mailings personnalisés, enrichir les données de veille concurrentielle, 8xrm vous permet d’être plus efficient.",
      "Grâce à l’intégration des logiciels 8sens, les devis et commandes saisis dans 8xrm sont disponibles dans 8gestion pour les traitements suivants et vous retrouvez dans 8xrm vos catalogues articles, historiques des ventes ou situation des comptes clients."
    ],
    tables: [
      {
        title: "Domaines",
        features: [
          { name: "Gestion des prospects (nom, prénom, téléphone, email…)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des clients (en lien avec la gestion commerciale)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des articles (en lien avec la gestion commerciale)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des collaborateurs (utilisateurs, représentants…)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des affaires", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des partenaires", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des produits", initial: "", evolution: "", amplitude: "✓" },
          { name: "Gestion des fournisseurs", initial: "", evolution: "", amplitude: "✓" },
          { name: "Gestion des concurrents", initial: "", evolution: "", amplitude: "✓" },
          { name: "Gestion des produits concurrents", initial: "", evolution: "", amplitude: "✓" },
          { name: "Création de devis concurrents (génération automatique)", initial: "", evolution: "", amplitude: "✓" },
          { name: "Statistiques devis concurrents", initial: "", evolution: "", amplitude: "✓" },
          { name: "Offres commerciales", initial: "", evolution: "", amplitude: "✓" },
          { name: "Gestion des campagnes (commerciales, marketing)", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des tarifs", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Autres tiers (salariés, interco…)", initial: "", evolution: "", amplitude: "✓" },
        ],
      },
      {
        title: "Evénements et suivi commercial",
        features: [
          { name: "Gestion de la relation client (courriels, notes, agenda, téléphone, SMS…)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion de la relation fournisseurs (courriels, notes, agenda, téléphone, SMS…)", initial: "", evolution: "", amplitude: "✓" },
          { name: "Planification de tâches et d’alarmes", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Consultation des pièces (par clients, prospects)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Consultation des historiques prospects, clients, partenaires, articles…", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion d’agendas (synchronisation avec Google Agenda et iCal)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Statistiques à la demande", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Génération de rapports d'activité journaliers", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Gestion de portefeuille par commercial", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Prise de commande autonome (base locale synchronisable)", initial: "✓", evolution: "✓", amplitude: "✓" },
        ],
      },
      {
        title: "Marketing",
        features: [
          { name: "Qualification de prospects avancée (selon statistiques)", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "E-mailing", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Campagne de SMS", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des campagnes", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Gestion de mailing ciblé", initial: "✓", evolution: "✓", amplitude: "✓" },
        ],
      },
      {
        title: "Autres fonctionnalités",
        features: [
          { name: "Gestion des utilisateurs par groupe", initial: "2", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des menus par groupe", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des autorisations avancées (champ par champ)", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des obligations par groupe (champ par champ)", initial: "", evolution: "", amplitude: "✓" },
          { name: "Gestion des niveaux d'accès aux données", initial: "", evolution: "", amplitude: "✓" },
          { name: "Association d’un client à un commercial", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des droits sur les portefeuilles clients", initial: "", evolution: "", amplitude: "✓" },
          { name: "Gestion de champs libres (clients, articles…)", initial: "3", evolution: "3", amplitude: "10" },
          { name: "Gestion des devises", initial: "2", evolution: "5", amplitude: "Illimité" },
          { name: "Gestion des TVA et TPF", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des autres taxes", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Connexions à distance", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion de plusieurs établissements (dans la même base de données)", initial: "", evolution: "", amplitude: "✓" },
          { name: "Automate d'import / export (échanges avec site web ou autre)", initial: "", evolution: "", amplitude: "✓" },
          { name: "Gestion multilangue des utilisateurs", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Support localisation dans une langue (FR,EN,ES,…)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Interface d'utilisateur / export (échanges avec site web ou autre)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Interface utilisateur en anglais", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Interface utilisateur en espagnol", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Interface utilisateur en langue établissement", initial: "", evolution: "", amplitude: "✓" },
          { name: "Synchronisation multisite", initial: "", evolution: "", amplitude: "✓" },
          { name: "Prise de commande autonome (base locale synchronisable)", initial: "1", evolution: "5", amplitude: "Illimité" },
          { name: "Mise en page personnalisable des modèles", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des personnes", initial: "", evolution: "✓", amplitude: "✓" },
          { name: "Transformations de pièces", initial: "Fixé", evolution: "Modifiable", amplitude: "Illimité" },
          { name: "Création de devis et commandes", initial: "✓", evolution: "✓", amplitude: "✓" },
        ],
      },
    ],
  },
  
  tpv: {
    bGround: "/img/tpv.svg",
    title: "TPV",
    description: [
      "Un terminal point de vente allié à la puissance fonctionnelle de 8Gestion pour les entreprises de vente au détail.",
      "Scannez les articles lors du passage en caisse, fidélisez vos clients, gérez le fonds de caisse, l’interface de caisse assure le front office de votre magasin.",
      "Les fonctions de gestion sont disponibles dans 8Tpv et vous facilitent la gestion du back office de votre entreprise."
    ],
    tables: [
      {
        title: "Caisse",
        features: [
          { name: "Gestion de la caisse (tickets, règlements, impression de tickets)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des codes barres", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des périphériques dédiés (codes barres, douchette, tiroir-caisse …)", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des cartes de fidélité", initial: "✓", evolution: "✓", amplitude: "✓" },
          { name: "Gestion de la caisse en devises", initial: "2", evolution: "✓", amplitude: "✓" },
          { name: "Gestion des différents caissiers", initial: "✓", evolution: "✓", amplitude: "✓" },
        ],
      },
    ],
  },

  ewms: {
    bGround: "/img/ewms.svg",
    title: "eWMS",
    description: [
      "Une interface mobile, connectée à 8gestion pour être plus efficace dans la gestion des stocks.",
      "La mise à jour des quantités reçues ou l’identification des numéros de série livrés est automatique depuis le terminal mobile vers la base de données 8sens, et vous permet de suivre l’avancement des process."
    ],
    tables: [
      {
        title: "Caisse",
        features: [
            { name: "Entrées de stock", included: "✓" },
            { name: "Réalisation des inventaires", included: "✓" },
            { name: "Scan des marchandises reçues", included: "✓" },
            { name: "Saisie/scan des numéros de lots", included: "✓" },
            { name: "Saisie/scan des numéros de série", included: "✓" },
            { name: "Préparation de commande", included: "✓" },
            { name: "Conformité du colis / bon de commande", included: "✓" },
            { name: "Adaptation au process de commande spécifique", included: "✓" },
            { name: "Gestion des emplacements dans le dépôt", included: "✓" },
            { name: "Option validation directe des quantités", included: "✓" },
            { name: "Validation de lignes groupées par articles", included: "✓" },
            { name: "Compatible PDA avec scan barcode ou flashcode professionnel", included: "✓" },
            { name: "Intégré à la gestion", included: "✓" },
        ],
      },
    ],
  },

  print: {
    title: "8print",
    description: [
      "8print permet de concevoir et réaliser ses impressions papier ou PDF selon la forme que vous souhaitez. Il permet d’extraire les données de votre choix au sein de la base 8sens et de les mettre en forme selon vos principes graphiques. Votre charte est respectée, vos impératifs de gestion aussi.",
    ],
    tables: [
      {
        title: "",
        features: [
          { name: "Charte graphique personnalisée", included: "✓" },
          { name: "Formats d'impression paramétrables", included: "✓" },
          { name: "Intégration d'images, de logo, etc.", included: "✓" },
          { name: "Impression de Factur-x (Factures hybrides)", included: "✓" },
          { name: "Paramétrage des polices de caractères", included: "✓" },
          { name: "Calculs de formules au sein des documents", included: "✓" },
          { name: "Impression multi-pages", included: "✓" },
          { name: "Intégration de champs spécifiques", included: "✓" },
          { name: "Modèles prédéfinis par type de pièce", included: "✓" },
          { name: "Intégration de formules de calcul", included: "✓" },
          { name: "Impression de codes barres", included: "✓" },
          { name: "Personnalisation des reportings et des états financiers", included: "✓" },
          { name: "Enchainement de plusieurs modèles (ex: facture + CGV)", included: "✓" },
        ],
      },
    ],
  },

  police: {
    title: "Police Code Barre",
    description: [
      "Choisissez parmi différents standards de codes-barres, adaptés à vos besoins d'impression.",
    ],
    tables: [
      {
        title: "Catalogue",
        features: [
          { name: "CODE 39 300 ppp – 30 pts – Légende et sans légende", included: "80€" },
          { name: "2/5 Entrelacé 300 ppp – 30 pts – Légende et sans légende", included: "180€" },
          { name: "EAN 8 et 13 300 ppp – 30 pts – Légende et sans légende (ISBN et ISSN)", included: "180€" },
          { name: "Code 128 300 ppp – 30 pts – Légende et sans légende : Module A, B – Module C", included: "200€" },
          { name: "EAN 128 300 ppp – 60 pts – Module A, B, C", included: "250€" },
        ],
      },
    ],
  }
};
