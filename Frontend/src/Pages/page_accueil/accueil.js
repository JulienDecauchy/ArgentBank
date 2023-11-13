import React from "react";

import Column from "../../Components/home-column/home-column";
import ColumnData from "../../Components/home-column-data/home-column-data";

function Accueil() {
    return (
        <>
            <main>
                <div class="hero">
                    <section class="hero-content">
                        <h2 class="sr-only">Promoted Content</h2>
                        <p class="subtitle">No fees.</p>
                        <p class="subtitle">No minimum deposit.</p>
                        <p class="subtitle">High interest rates.</p>
                        <p class="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <section class="features">
                    <h2 class="sr-only">Features</h2>
                    {ColumnData.map(({icon, title, description}) => (
                        <Column 
                            icon={icon}
                            title={title}
                            description={description}
                        />
                    ))}
                </section>
            </main>
        </>
    )
}

export default Accueil