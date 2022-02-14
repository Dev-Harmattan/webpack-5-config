import '../styles/index.scss';
import image from '../images/image2.png';

import Recipes from "./Recipes";
const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hi hao, React</h1>
          <img src={image} alt="display image" width="250"/>
        </section>
        <Recipes />
      </main>
    </>
  )
}

export default App;