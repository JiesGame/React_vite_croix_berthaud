# Projet Final THP - La Croix Berthaud - Frontend

Création de notre Projet Final en équipe.

Notre dépôt GitHub : [TeamKiTu](https://github.com/TeamKiTu)

Lien vers le site en production : [Maison de Quartier - La Croix Berthaud](https://maison-quartier-croix-berthaud.vercel.app/)

Dépôt GitHub du backend : [API Rails La Croix Berthaud](https://github.com/JiesGame/API_rails_croix_berthaud)

Lien vers le Trello : [Trello La Croix Berthaud](https://trello.com/b/QNTJJxP8/croixberthaud)

## Description

Cette application React constitue la partie visible du nouveau site de la Maison de Quartier - La Croix Berthaud. Sur le site, l'administrateur peut publier des articles et proposer des activités. Il peut également gérer l'ensemble du site (utilisateurs, articles, activités, etc.). L'utilisateur, une fois connecté, peut s'inscrire à l'association et aux différentes activités proposées sur le site.
---------------
## Application

### Création de l'application LaCroixBerthaud

- Création de l'application React

```bash
npm create vite@latest my-project -- --template react
```
Branchement Tailwind :
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Les routes
Les routes React sont générées et parcourues avec react-router-dom :

```javascript
<Router>
  <Layout>
    <Routes>
      <Route element={<AdminRoutes/>}>
        <Route path='admin_users' element={<AdminUsers />}/>
        <Route path='admin_articles' element={<AdminArticles />}/>
        <Route path='admin_create_article' element={<AdminCreateArticle />}/>
        <Route path='admin_edit_article/:id' element={<AdminEditArticle />}/>
        <Route path='admin_activities' element={<AdminActivities />}/>
        <Route path='admin_create_activity' element={<AdminCreateActivity />}/>
        <Route path='admin_edit_activity/:id' element={<AdminEditActivity />}/>
      </Route>
      <Route element={<PrivateRoutes/>}>
        <Route path='change_profile' element={<ChangeProfile />}/>
        <Route path='delete_account' element={<DeleteProfile />}/>
        <Route path='inscription' element={<Inscription />}/>
        <Route path="profile" element={<Profile/>} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace/>}/>
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='forgot_password' element={<ForgotPassword />} />
      <Route path='reset_password/:token' element={<ResetPassword />} />
      <Route path='article/:id' element={<ShowArticle />}/>
      <Route path='user_charter' element={<UserCharter />} />
      <Route path='cgu' element={<Cgu />} />
      <Route path="donation" element={<Donation />} />
      <Route path="thank_you" element={<ThanksForDonation />} />
      <Route path="contact" element={<Contact />} />
      <Route path="search" element={<Search />} />
      <Route path="prices" element={<Prices />} />
    </Routes>
  </Layout>
</Router>
```

Les routes sont divisées en trois catégories :

- Routes admin "AdminRoutes" : Il s'agit des routes des pages accessibles uniquement par l'administrateur. Depuis ces pages, il peut appliquer divers outils administratifs aux utilisateurs enregistrés, gérer les inscriptions aux activités des utilisateurs (et de leurs familles), aux articles, ainsi qu'aux activités.
- Routes privées "PrivateRoutes" : Ces routes sont destinées à l'utilisateur connecté. Elles permettent l'accès aux pages personnelles de l'utilisateur une fois connecté et lui offrent la possibilité d'éditer son profil, supprimer son compte et s'inscrire aux activités.
- Routes indépendantes : Il s'agit des pages accessibles par tous les visiteurs et utilisateurs.
---------------
### Parcours utilisateur

L'utilisateur arrive sur la page "/" qui est la page d'accueil. Depuis celle-ci, plusieurs possibilités s'offrent à lui. Il peut :

- parcourir les différentes catégories d'articles et consulter chaque article.
- accéder à la page "/register" pour créer un compte et/ou à la page "/login" avec son compte.
- accéder à la page "/donation" pour faire un don à l'association.
- effectuer une recherche dans l'input présent dans la barre de navigation, pour rechercher des articles par leurs noms ou leurs contenus.
- depuis le footer, accéder aux CGU, au règlement intérieur, à la page de contact, ainsi qu'au Facebook de l'association et au site de la ville depuis les images cliquables.
- Une fois enregistré et connecté, il peut accéder à la page "/inscription" depuis le bouton "MON COMPTE" pour s'inscrire et/ou inscrire les membres de sa famille. Les paiements se font via Stripe, un module de Rails. Il a également accès à la page "profil" qui lui permet de voir et éditer son profil. Il peut également se déconnecter.
---------------
### Parcours administrateur
En plus du parcours utilisateur, l'administrateur a la possibilité de se rendre sur la page d'administration en cliquant sur le bouton "MON COMPTE". Par défaut, il est redirigé vers "/admin_articles". Depuis cette page, il peut créer, éditer, commenter ou supprimer chaque article, en les triant par catégorie. Un composant de notre application appelé "AdminPanel" permet à l'administrateur de naviguer entre les différentes pages.

Il peut aller sur la page "/admin_users" pour voir la liste des utilisateurs et les supprimer. Il peut également aller sur la page "/admin_activities" pour éditer les activités. Enfin, il peut se rendre sur la page "/admin_member_activities" pour voir, valider ou refuser les activités des membres d'une famille.

Dans la navbar, le bouton de donation devient, pour l'administrateur, un bouton de création d'article.
---------------
### L'équipe

- [NicolasCHIRON](https://github.com/NicolasCHIRON)
- [Videloff](https://github.com/Videloff)
- [NicolasVdev](https://github.com/NicolasVdev)
