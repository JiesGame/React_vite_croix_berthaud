
# THP FINAL PROJECT - La croix berthaud - Front

Création de notre Projet Final en équipe.

Notre github : TeamKiTu

Lien du site en production : https://maison-quartier-croix-berthaud.vercel.app/

Github du backend : https://github.com/JiesGame/API_rails_croix_berthaud

Lien du Trello : https://trello.com/b/QNTJJxP8/croixberthaud




## Description

Cette application React, est la partie visible du nouveau site de la Maison de quartier - La Croix Berthaud.
Sur le site, l'administrateur peut poster ses articles, proposer des activités. Il peut également administrer l'ensemble du site (Utilisateur, Articles, Activités, etc).
L'utilisateur lui, une fois connecté, peut s'insrire à l'association et au différentes activités sur le site.
## Parcours utilisateur
L'utilisateur arrive sur la page "/" qui est le home. Depuis celle-ci, plusieurs possibilités s'offrent à lui. Il peut :

- parcourir les différentes catégories d'articles, et même au show de chaque article.
- acceder à la page "/register" pour se créer un compte et/ou à la page de "/login" avec son compte.
- acceder à la page de "/donation" pour faire un don à l'association.
- faire une recherche dans l'input présent dans la barre de navigation, pour rechercher des articles par leurs noms ou leurs contenus.
- depuis le footer, accéder aux CGU, au Réglement intérieur, à la page de contact, ainsi qu'au Facebook de l'association et au site de la ville depuis les images cliquables.

Une fois enregistré et connecté, il peut depuis le bouton "MON COMPTE", il peut accéder à la page "/inscription" pour s'incrire et/ou inscrire les membres de sa famille. Les paiements se font depuis Stripe, un gem de Rails.
Il a également accès à la page "profil" qui lui permet de voir et éditer son profil. Il lui est également possible de se déconnecter.
## Parcours administrateur

En plus du parcours utilisateur, l'administrateur a dans le déroulant du bouton "MON COMPTE" la possibilité de se rendre sur la page administration qui est par défault sur "/admin_articles". Depuis celle-ci, il peut créer, éditer, commenter ou supprimer chaque article, en les triant par catégorie.
Un composant de notre application du nom de "AdminPanel" permet à l'administrateur de changer de page.
Il peut aller sur la page "/admin_users" pour voir la liste des utilisteurs et les supprimer.
il peut également aller sur la page "/admin_activities" pour éditer les activités.
Pour finir, il peut se rendre sur la page "/admin_member_activities" pour voir, valider ou refuser des activités des membres d'une famille.

Dans la navbar, le bouton de donation devient pour l'administrateur un bouton de création d'article.
## Application

Création de l’application LaCroixBerthaud

Création de l'application React
```
npm create vite@latest my-project -- --template react
```
Branchement Tailwind
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---
#### Les routes

Les routes React son générées et parcourus avec react-router-dom

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
Les Routes sont divisées en trois catégories qui sont les suivent :
- Routes admin "AdminRoutes" : Ce sont les routes des pages uniquement accessible par l'administrateur. Depuis ces pages, il peut appliquer divers outils administratifs aux utilisateurs enregistrés, gérer les inscriptions aux activités des utilisateurs (et leurs familles), aux articles, ainsi qu'aux activités.
- Routes Privée "PrivateRoutes" : Ces routes servent à l'utilisateur connécté. Elle permettent l'accès aux pages personnelles de l'utilisateur une fois connécté et lui offre la possible d'éditer son profil, supprimer son compte et s'inscrire aux activités.
- Routes indépendantes : Ce sont les pages par tous les visiteurs et utilisateurs.


## Installations

react-rooter-dom
```
pnpm install react-hook-form
```
react-hook-form
```
pnpm install react-hook-form
pnpm install @hookform/resolvers
```
YUP
```
pnpm install yup
```

Axios
```
pnpm install axios
```
Cookies
```
pnpm install js-cookie
```
Jotai
```
pnpm install jotai
```
Toastify
```
pnpm install react-toastify
```
PropTypes
```
pnpm install --save prop-types
```
file-saver
```
pnpm install file-saver
```
date-fns
```
pnpm install date-fns
```
stripe
```
pnpm install @stripe/react-stripe-js @stripe/stripe-js
```
tw-elements
```
pnpm install tw-elements
```
## L'équipe

- [NicolasCHIRON](https://github.com/NicolasCHIRON)
- [Videloff](https://github.com/Videloff)
- [NicolasVdev](https://github.com/NicolasVdev)
