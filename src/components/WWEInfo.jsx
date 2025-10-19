import Undisputed from '../assets/WWE/Cody-Rhodes-WWE-SummerSlam-2025.png';
import WorldHeavyweight from '../assets/WWE/seth-rollins-celebrates-winning-wwe-109148013.png';
import WomenChampion from '../assets/WWE/Tiffany-Stratton-Women-Championship.webp';
import WomenWorld from '../assets/WWE/stephanie-vaquer.webp';
import MenInter from '../assets/WWE/DominikWrestlemania.jpeg';
import WomenInter from '../assets/WWE/BeckyLynch-Inter.webp';
import MenUS from '../assets/WWE/IljaDragunovUS.jpeg';
import WomenUS from '../assets/WWE/Giulia_WomenUS.webp';
import RawTag from '../assets/WWE/0_Finn-BalorJD-McDonagh.webp';
import SmackdownTag from '../assets/WWE/wyatt-sicks-summerslam-080325.webp';
import WomenTag from '../assets/WWE/charlotte-flair-winning-the-tag-titles-with-alexa.webp';
import "./WWEInfo.css";

    const WWEInfo = ({title}) =>{
    return(
    <><main>
        <h3>{title}</h3>
            <div class="card-group">
                <div class="card-smackdown">
                    <div class="card-body">
                        <img src={Undisputed} class="card-img-top" alt="Undisputed WWE Championship" />
                        <a href="https://en.wikipedia.org/wiki/Cody_Rhodes"><h3 class="card-title">"The American Nightmare" Cody Rhodes</h3></a>
                        <p class="card-text">Defeating John Cena at Summerslam 2025 in a Street Fight Match to reclaim the Undisputed WWE Championship.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Undisputed WWE Championship</small>
                        <small class="text-muted">Date Won: Summerslam 2025: Night 2 (3/Aug/2025)</small>
                        <small class="text-muted">Days Held: 64+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>

                <div class="card-raw">
                    <div class="card-body">
                        <img src={WorldHeavyweight} class="card-img-top" alt="WWE World Heavweight Championship" />
                        <a href="https://en.wikipedia.org/wiki/Seth_Rollins"><h3 class="card-title">Seth Rollins</h3></a>
                        <p class="card-text">Cashing in on CM Punk to win the WWE World Heavyweight Championship in his 2nd reign.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE World Heavyweight Championship</small>
                        <small class="text-muted">Date Won: Summerslam 2025: Night 1 (2/Aug/2025)</small>
                        <small class="text-muted">Days Held: 65+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>

                <div class="card-smackdown">
                    <div class="card-body">
                        <img src={WomenChampion} class="card-img-top" alt="WWE Women's Championship" />
                        <a href="https://en.wikipedia.org/wiki/Tiffany_Stratton"><h3 class="card-title">Tiffany Stratton</h3></a>
                        <p class="card-text">Cashing in on Nia Jax to win her first WWE Women's Championship.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Women's Championship</small>
                        <small class="text-muted">Date Won: Smackdown (3/Jan/2025)</small>
                        <small class="text-muted">Days Held: 276+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-raw">
                    <div class="card-body">
                        <img src={WomenWorld} class="card-img-top" alt="WWE Women's World Championship" />
                        <a href="https://en.wikipedia.org/wiki/Stephanie_Vaquer"><h3 class="card-title">Stephanie Vaquer</h3></a>
                        <p class="card-text">Defeating IYO SKY in a match to determine the vacant WWE Women's World Championship.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Women's World Championship</small>
                        <small class="text-muted">Date Won: Wrestlepalooza 2025 (20/Sep/2025)</small>
                        <small class="text-muted">Days Held: 16+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-raw">
                    <div class="card-body">
                        <img src={MenInter} class="card-img-top" alt="WWE Intercontinental Championship" />
                        <a href="https://en.wikipedia.org/wiki/Dominik_Mysterio"><h3 class="card-title">Dominik Mysterio</h3></a>
                        <p class="card-text">Defeating Bron Breakker, Finn Balor, and Penta in a fatal 4 way match to win the WWE Intercontinental Championship at WrestleMania 41 Night 2 in his first reign.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Intercontinental Championship</small>
                        <small class="text-muted">Date Won: WrestleMania 41: Night 2 (20/Apr/2025)</small>
                        <small class="text-muted">Days Held: 169+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-raw">
                    <div class="card-body">
                        <img src={WomenInter} class="card-img-top" alt="WWE Women's Intercontinental Championship" />
                        <a href="https://en.wikipedia.org/wiki/Becky_Lynch"><h3 class="card-title">Becky Lynch</h3></a>
                        <p class="card-text">Defeating Lyra Valkyria to win her first WWE Women's Intercontinental Championship.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Women's Intercontinental Championship</small>
                        <small class="text-muted">Date Won: Money in the Bank 2025 (7/June/2025)</small>
                        <small class="text-muted">Days Held: 121+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-smackdown">
                    <div class="card-body">
                        <img src={MenUS} class="card-img-top" alt="WWE United States Championship" />
                        <a href="https://en.wikipedia.org/wiki/Ilja_Dragunov"><h3 class="card-title">Ilja Dragunov</h3></a>
                        <p class="card-text">Defeating Solo Sikoa to win the WWE United States Championship.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE United States Championship</small>
                        <small class="text-muted">Date Won: Smackdown (17/Oct/2025)</small>
                        <small class="text-muted">Days Held: 1+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-smackdown">
                    <div class="card-body">
                        <img src={WomenUS} class="card-img-top" alt="WWE Women's United States Championship" />
                        <a href="https://en.wikipedia.org/wiki/Giulia_(wrestler)"><h3 class="card-title">Giulia</h3></a>
                        <p class="card-text">Defeating Zelina Vega to win her first WWE Women's United States Championship.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Women's United States Championship</small>
                        <small class="text-muted">Date Won: Smackdown (27/June/2025)</small>
                        <small class="text-muted">Days Held: 101+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-raw">
                    <div class="card-body">
                        <img src={RawTag} class="card-img-top" alt="WWE World Tag Team Championship" />
                        <a href="https://en.wikipedia.org/wiki/The_Judgment_Day"><h3 class="card-title">The Judgment Day (Finn Balor & JD McDonagh)</h3></a>
                        <p class="card-text">Defeating The New Day (Kofi Kingston & Xavier Wood) to win the WWE World Tag Team Championship in their second reign together.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE World Tag Team Championship</small>
                        <small class="text-muted">Date Won: Raw (30/June/2025)</small>
                        <small class="text-muted">Days Held: 98+ Days</small>
                        <small class="text-muted">Reign: 2 (Finn Balor - 4 | JD McDonagh - 2)</small>
                    </div>
                </div>

                <div class="card-smackdown">
                    <div class="card-body">
                        <img src={SmackdownTag} class="card-img-top" alt="WWE Tag Team Championship" />
                        <a href="https://en.wikipedia.org/wiki/The_Wyatt_Sicks"><h3 class="card-title">The Wyatt Sicks (Dexter Lumis & Joe Gacy)</h3></a>
                        <p class="card-text">Defeating The Street Profits to win the WWE Tag Team Championship.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Tag Team Championship</small>
                        <small class="text-muted">Date Won: Smackdown (11/July/2025)</small>
                        <small class="text-muted">Days Held: 87+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-open">
                    <div class="card-body">
                        <img src={WomenTag} class="card-img-top" alt="WWE Women's Tag Team Championship" />
                        <a href="https://en.wikipedia.org/wiki/Alexa_Bliss"><h3 class="card-title">Alexa Bliss</h3></a><a href="https://en.wikipedia.org/wiki/Charlotte_Flair"><h3 class="card-title">Charlotte Flair</h3></a>
                        <p class="card-text">Defeating The Judgment Day (Raquel Rodriguez & Roxamne Perez) at Summerslam 2025: Night 1 to win their first reign as WWE Women's Tag Team Championship together.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Women's Tag Team Championship</small>
                        <small class="text-muted">Date Won: Summerslam 2025: Night 1 (2/Aug/2025)</small>
                        <small class="text-muted">Days Held: 65+ Days</small>
                        <small class="text-muted">Reign: 1 (Alexa Bliss - 4 | Charlotte Flair - 2) </small>
                    </div>
                </div>
            </div>
        </main>
            </>
            )
}

export default WWEInfo;