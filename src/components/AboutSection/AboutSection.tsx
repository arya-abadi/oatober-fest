import styles from './AboutSection.module.scss';

export default function AboutSection() {
    return (
        <main>
            <section className={styles.aboutSection}>
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">Exciting products for people who care about health</h2>
                </div>
                <div className="grid-row">
                    <div className="grid-col-1-of-2">
                        <h3 className="hading-tertiary u-margin-bottom-small">You're going to enjoy of your breakfast!</h3>
                        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
                            aperiam autem commodi deleniti dignissimos doloremque iure necessitatibus nisi nobis
                            officiis optio quidem quo quos sequi sint, tenetur ullam vitae!
                        </p>

                        <h3 className="hading-tertiary u-margin-bottom-small">You're going to stay healthy and fit!</h3>
                        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
                            aperiam autem commodi deleniti dignissimos doloremque iure necessitatibus nisi nobis
                            officiis optio quidem quo quos sequi sint, tenetur ullam vitae!
                        </p>
                    </div>
                    <div className="grid-col-1-of-2">image</div>
                </div>
            </section>
        </main>
    )
}