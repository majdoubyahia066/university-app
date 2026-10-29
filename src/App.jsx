import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import photo from "./assets/photo.jpg";

const etudiants = [
  {
    prenom: "yahia",
    nom: "majdoub",
    email: "majdoubyahia066@gmail.com",
    telephone: "+216 24828009",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "moknine",
    image: photo,
  },
  {
    prenom: "Aziz",
    nom: "Trabelsi",
    email: "aziz.trabelsi@gmail.com",
    telephone: "+216 22 345 678",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "1ème année",
    groupe: "lcs",
    ville: "Sousse",
  },
  {
    prenom: "Mariem",
    nom: "Khalfallah",
    email: "mariem.khalfallah@gmail.com",
    telephone: "+216 27 567 890",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Tunis",
  },
    {
    prenom: "salma",
    nom: "jemni",
    email: "jemnisalma4@gmail.com",
    telephone: "+216 93 855 678",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "mahdia",
  },
    {
    prenom: "Ahmed",
    nom: "gharbi",
    email: "ahmed477@gmail.com",
    telephone: "+216 54 345 001",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "1ème année",
    groupe: "lcs",
    ville: "msaken",
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />

      <main className="container">
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;