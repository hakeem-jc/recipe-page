import Image from "next/image";
import styles from "./page.module.css";
import omelette from "@/images/omelette.jpeg";

export default function Home() {
  return (
    <main className={styles.main}>
       <article className={styles.recipeContainer}>
        <Image
            className={styles.image}
            src={omelette}
            alt="Omellete"
            width={375}
            height={171}
            priority
          />

        <section className={styles.content}>
          <article>
            <h1 className={styles.descriptionTitle} >Simple Omelette Recipe</h1>
            <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
          </article>

          <article className={styles.prepTime}>
            <h2 className={styles.prepTitle}>Preparation time</h2>
            <ul className={styles.listItem}>
              <li><span className={styles.bold}>Total:</span> Approximately 10 minutes</li>
              <li><span className={styles.bold}>Preparation:</span> 5 minutes</li>
              <li><span className={styles.bold}>Cooking:</span> 5 minutes</li>
            </ul>
          </article>

          <article className={styles.ingredientSection}>
            <h2>Ingredients</h2>
            <ul className={styles.listItem}>
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
          </article>

          <article className={styles.instructionSection}>
            <h2>Instructions</h2>
            <ol className={styles.listItem} >
              <li>
                <span className={styles.bold}>Beat the eggs</span>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
              </li>
              <li>
                <span className={styles.bold}>Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.
              </li>
              <li>
                <span className={styles.bold}>Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
              </li>
              <li>
                <span className={styles.bold}>Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
              </li>
              <li>
                <span className={styles.bold}>Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
              </li>
              <li>
                <span className={styles.bold}>Enjoy:</span> Serve hot, with additional salt and pepper if needed.
              </li>
            </ol>
          </article>

          <article>
            <h2>Nutrition</h2>
            <p>The table below shows nutritional values per serving without the additional fillings.</p>
            <div className={styles.nutritionInfo}>
              <div className={styles.row}>
                <div className={styles.cell}>Calories</div>
                <div className={styles.coloredCell}>277kcal</div>
              </div>

              <div className={styles.row}>
                <div className={styles.cell}>Carbs</div>
                <div className={styles.coloredCell}>0g</div>
              </div>

              <div className={styles.row}>
                <div className={styles.cell}>Protein</div>
                <div className={styles.coloredCell}>20g</div>
              </div>

              <div className={styles.row}>
                <div className={styles.cell}>Fat</div>
                <div className={styles.coloredCell}>22g</div>
              </div>
            </div>
          </article>
        </section>
       </article>

      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/hakeem-jc">Hakeem Clarke</a>.
      </footer>
    </main>
  );
}
