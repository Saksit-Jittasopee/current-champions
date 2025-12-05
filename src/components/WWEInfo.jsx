import Undisputed from '../assets/WWE/Cody-Rhodes-WWE-SummerSlam-2025.png';
import WorldHeavyweight from '../assets/WWE/CMPunkWHC.png';
import WomenChampion from '../assets/WWE/JadeWomen.png';
import WomenWorld from '../assets/WWE/stephanie-vaquer.webp';
import MenInter from '../assets/WWE/Dom2.webp';
import WomenInter from '../assets/WWE/maxxinechamp.jpg';
import MenUS from '../assets/WWE/IljaDragunovUS.jpeg';
import WomenUS from '../assets/WWE/ChelseaUS.jpg';
import RawTag from '../assets/WWE/AJLEE.jpg';
import SmackdownTag from '../assets/WWE/wyatt-sicks-summerslam.webp';
import WomenTag from '../assets/WWE/Kabuki-Warriors.jpeg';
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
                        <small class="text-muted">Days Held: 32+ Days</small>
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
                        <small class="text-muted">Days Held: 74+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-raw">
                    <div class="card-body">
                        <img src={MenInter} class="card-img-top" alt="WWE Intercontinental Championship" />
                        <a href="https://en.wikipedia.org/wiki/Dominik_Mysterio"><h3 class="card-title">Dominik Mysterio</h3></a>
                        <p class="card-text">Defeated John Cena at Survivor Series: WarGames to regain his Intercontinental Champions.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Intercontinental Championship</small>
                        <small class="text-muted">Date Won: Survivor Series: WarGames 2025 (29/Nov/2025)</small>
                        <small class="text-muted">Days Held: 4+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>

                <div class="card-raw">
                    <div class="card-body">
                        <img src={WomenInter} class="card-img-top" alt="WWE Women's Intercontinental Championship" />
                        <a href="https://en.wikipedia.org/wiki/Maxxine_Dupri"><h3 class="card-title">Maxxine Dupri</h3></a>
                        <p class="card-text">Defeated Becky Lynch on Raw to win her champions in WWE.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Women's Intercontinental Championship</small>
                        <small class="text-muted">Date Won: Raw (17/Nov/2025)</small>
                        <small class="text-muted">Days Held: 16+ Days</small>
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
                        <a href="https://en.wikipedia.org/wiki/Chelsea_Green"><h3 class="card-title">Chelsea Green</h3></a>
                        <p class="card-text">Defeated Giulia on SmackDown to become two times US Champions.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Women's United States Championship</small>
                        <small class="text-muted">Date Won: Smackdown (7/Nov/2025)</small>
                        <small class="text-muted">Days Held: 26+ Days</small>
                        <small class="text-muted">Reign: 2</small>
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
                        <small class="text-muted">Days Held: 44+ Days</small>
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
                        <small class="text-muted">Days Held: 145+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-open">
                    <div class="card-body">
                        <img src={WomenTag} class="card-img-top" alt="WWE Women's Tag Team Championship" />
                        <a href="https://en.wikipedia.org/wiki/The_Kabuki_Warriors"><h3 class="card-title">The Kabuki Warriors (Asuka & Kairi Sane)</h3></a>
                        <p class="card-text">Defeated Alexa Bliss and Charlotte Flair on Raw.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Women's Tag Team Championship</small>
                        <small class="text-muted">Date Won: Raw (10/Nov/2025)</small>
                        <small class="text-muted">Days Held: 23+ Days</small>
                        <small class="text-muted">Reign: 3 (Asuka - 5 | Kairi Sane - 3) </small>
                    </div>
                </div>
            </div>
        </main>
            </>
            )
}

export default WWEInfo;