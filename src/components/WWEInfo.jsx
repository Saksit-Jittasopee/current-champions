import Undisputed from '../assets/WWE/Cody-Rhodes-WWE-SummerSlam-2025.png';
import WorldHeavyweight from '../assets/WWE/CMPunkWHC.png';
import WomenChampion from '../assets/WWE/JadeWomen.png';
import WomenWorld from '../assets/WWE/stephanie-vaquer.webp';
import MenInter from '../assets/WWE/DominikWrestlemania.jpeg';
import WomenInter from '../assets/WWE/BeckyLynch-Inter.webp';
import MenUS from '../assets/WWE/IljaDragunovUS.jpeg';
import WomenUS from '../assets/WWE/Giulia_WomenUS.webp';
import RawTag from '../assets/WWE/AJLEE.jpg';
import SmackdownTag from '../assets/WWE/wyatt-sicks-summerslam.webp';
import WomenTag from '../assets/WWE/charlotte-alexa-tag.webp';
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
                        <small class="text-muted">Days Held: 91+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>

                <div class="card-raw">
                    <div class="card-body">
                        <img src={WorldHeavyweight} class="card-img-top" alt="WWE World Heavweight Championship" />
                        <a href="https://en.wikipedia.org/wiki/CM_Punk"><h3 class="card-title">CM Punk</h3></a>
                        <p class="card-text">Defeated Jey Uso at Saturday Night's Main Event to win the vacant title. The previous champion Seth Rollins was stripped off the title after he suffered a shoulder injury.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE World Heavyweight Championship</small>
                        <small class="text-muted">Date Won: Saturday Night's Main Event XLI (1/Nov/2025)</small>
                        <small class="text-muted">Days Held: 1+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>

                <div class="card-smackdown">
                    <div class="card-body">
                        <img src={WomenChampion} class="card-img-top" alt="WWE Women's Championship" />
                        <a href="https://en.wikipedia.org/wiki/Jade_Cargill"><h3 class="card-title">Jade Cargill</h3></a>
                        <p class="card-text">Defeated Tiffany Stratton at Saturday Night's Main Event to win her first WWE Women's Championship.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Women's Championship</small>
                        <small class="text-muted">Date Won: Saturday Night's Main Event XLI (1/Nov/2025)</small>
                        <small class="text-muted">Days Held: 1+ Days</small>
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
                        <small class="text-muted">Days Held: 43+ Days</small>
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
                        <small class="text-muted">Days Held: 196+ Days</small>
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
                        <small class="text-muted">Days Held: 148+ Days</small>
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
                        <small class="text-muted">Days Held: 16+ Days</small>
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
                        <small class="text-muted">Days Held: 128+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-raw">
                    <div class="card-body">
                        <img src={RawTag} class="card-img-top" alt="WWE World Tag Team Championship" />
                        <a href="https://en.wikipedia.org/wiki/AJ_Styles"><h3 class="card-title">AJ Styles</h3></a><a href="https://en.wikipedia.org/wiki/Dragon_Lee_(wrestler)"><h3 class="card-title">Dragon Lee</h3></a>
                        <p class="card-text">Defeated The Judgment Day (Finn Bálor and JD McDonagh) on Raw.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE World Tag Team Championship</small>
                        <small class="text-muted">Date Won: Raw (20/Oct/2025)</small>
                        <small class="text-muted">Days Held: 13+ Days</small>
                        <small class="text-muted">Reign: 1 (AJ Styles - 2 | Dragon Lee - 1)</small>
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
                        <small class="text-muted">Days Held: 114+ Days</small>
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
                        <small class="text-muted">Days Held: 92+ Days</small>
                        <small class="text-muted">Reign: 1 (Alexa Bliss - 4 | Charlotte Flair - 2) </small>
                    </div>
                </div>
            </div>
        </main>
            </>
            )
}

export default WWEInfo;