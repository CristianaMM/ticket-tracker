import React from "react";
import styles from "./App.module.scss";
import library from "./data/fa-library";
import Card from "./components/Card";
import team from "./data/team";

const App = () => {
  return (
    <div className={styles.main}>
      <h1>Ticket Tracker</h1>
      <section className={styles.team}>
        {team.map((person) => (
          <Card name={person.name} role={person.role} key={person.id} />
        ))}
      </section>
    </div>
  );
};

export default App;

// 1. Change title in public/index.html
// 2. Rename src/App.js => App.jsx
// 3. Clear out code from return in App.jsx
// 4. Clear out code from App.css
// 5. Add global reset to index.css
// 6. Install sass
// 7. Rename App.css => App.module.scss & change import
