import React from 'react';

const Homepage: React.FC = () => {
    return (
        <div>
            <header>
                <h1>Welcome to My Portfolio</h1>
            </header>
            <main>
                <section>
                    <h2>About Me</h2>
                    <p>Hi, I'm Jacob Solano, a fullstack developer currently studying at Brown University.</p>
                </section>
                <section>
                    <h2>Projects</h2>
                    <ul>
                        <li>Project 1</li>
                        <li>Project 2</li>
                        <li>Project 3</li>
                    </ul>
                </section>
                <section>
                    <h2>Contact</h2>
                    <p>You can reach me at <a href="mailto:gilbert_solano@brown.edu">gilbert_solano@brown.edu</a></p>
                </section>
            </main>
            <footer>
                <p>&copy; 2025 Jacob Solano</p>
            </footer>
        </div>
    );
};

export default Homepage;