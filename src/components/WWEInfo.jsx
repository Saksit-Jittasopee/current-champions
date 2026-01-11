import WorldHeavyweight from '../assets/WWE/CMPunkWHC.png';
import WomenChampion from '../assets/WWE/JadeWomen.png';
import WomenWorld from '../assets/WWE/stephanie-vaquer.webp';
import MenInter from '../assets/WWE/Dom2.webp';
import SmackdownTag from '../assets/WWE/wyatt-sicks-summerslam.webp';
import "./WWEInfo.css";

    const WWEInfo = ({title}) =>{
    return(
    <><main>
        <h3>{title}</h3>
            <div class="card-group">
                <div class="card-smackdown">
                    <div class="card-body">
                        <img src="https://preview.redd.it/drew-mcintyre-is-the-new-wwe-undisputed-champion-v0-uepi4040becg1.jpeg?width=640&crop=smart&auto=webp&s=841f196c9db14d164e32587d3d5ddc7274bd4369" class="card-img-top" alt="Undisputed WWE Championship" />
                        <a href="https://en.wikipedia.org/wiki/Drew_McIntyre"><h3 class="card-title">Drew McIntyre</h3></a>
                        <p class="card-text">Defeated Cody Rhodes in a Three Stages of Hell match on SmackDown. The three stages were: a standard singles match, a Falls Count Anywhere match, and a Steel Cage match; McIntyre won the first and third.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Undisputed WWE Championship</small>
                        <small class="text-muted">Date Won: Smackdown (9/Jan/2026)</small>
                        <small class="text-muted">Days Held: 2+ Days</small>
                        <small class="text-muted">Reign: 3</small>
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
                        <small class="text-muted">Days Held: 70+ Days</small>
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
                        <small class="text-muted">Days Held: 70+ Days</small>
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
                        <small class="text-muted">Days Held: 112+ Days</small>
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
                        <small class="text-muted">Days Held: 42+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>

                <div class="card-raw">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnohCzer17CeR_q99_kLTOGEFdS7pT576a0Q&s" class="card-img-top" alt="WWE Women's Intercontinental Championship" />
                        <a href="https://en.wikipedia.org/wiki/Becky_Lynch"><h3 class="card-title">Becky Lynch</h3></a>
                        <p class="card-text">Defeated Maxxine Dupri during the Raw on Netflix Anniversary Show.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Women's Intercontinental Championship</small>
                        <small class="text-muted">Date Won: Raw (5/Jan/2026)</small>
                        <small class="text-muted">Days Held: 5+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>

                <div class="card-smackdown">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCYuUrBz7QKAkS7_JOmqTqvXaFkSiNeJRgg&s" class="card-img-top" alt="WWE United States Championship" />
                        <a href="https://en.wikipedia.org/wiki/Carmelo_Hayes"><h3 class="card-title">Carmelo Hayes</h3></a>
                        <p class="card-text">Defeated Ilja Dragunov in an open challenge on SmackDown. WWE recognizes Hayes's reign as beginning on December 26, 2025, when the match aired on tape delay.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE United States Championship</small>
                        <small class="text-muted">Date Won: Smackdown (26/Dec/2025)</small>
                        <small class="text-muted">Days Held: 15+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-smackdown">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wjE0-I9pLChSXHEp2nghClG-J6J6Lcc04Q&s" class="card-img-top" alt="WWE Women's United States Championship" />
                        <a href="https://en.wikipedia.org/wiki/Giulia_(wrestler)"><h3 class="card-title">Giulia</h3></a>
                        <p class="card-text">Defeated Chelsea Green on SmackDown to become US Champions again.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Women's United States Championship</small>
                        <small class="text-muted">Date Won: Smackdown (2/Jan/2026)</small>
                        <small class="text-muted">Days Held: 8+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>

                <div class="card-raw">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAsrUwUczYJAJFFelefUQOWpuJT5xEl0I8oQ&s" class="card-img-top" alt="WWE World Tag Team Championship" />
                        <a href="https://en.wikipedia.org/wiki/The_Usos"><h3 class="card-title">The Usos (Jey Uso & Jimmy Uso)</h3></a>
                        <p class="card-text">Defeated AJ Styles and Dragon Lee on Raw.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE World Tag Team Championship</small>
                        <small class="text-muted">Date Won: Raw (29/Dec/2025)</small>
                        <small class="text-muted">Days Held: 12+ Days</small>
                        <small class="text-muted">Reign: 4 (Jey Uso - 5 | Jimmy Uso - 4)</small>
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
                        <small class="text-muted">Days Held: 183+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-open">
                    <div class="card-body">
                        <img src="https://staticg.sportskeeda.com/editor/2026/01/14f49-17676651717393-1920.jpg?w=640" class="card-img-top" alt="WWE Women's Tag Team Championship" />
                        <a href="https://en.wikipedia.org/wiki/Iyo_Sky"><h3 class="card-title">IYO SKY</h3></a><a href="https://en.wikipedia.org/wiki/Rhea_Ripley"><h3 class="card-title">Rhea Ripley</h3></a>
                        <p class="card-text">Defeated The Kabuki Warriors (Asuka and Kairi Sane) during the Raw on Netflix Anniversary Show.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Women's Tag Team Championship</small>
                        <small class="text-muted">Date Won: Raw (5/Jan/2026)</small>
                        <small class="text-muted">Days Held: 5+ Days</small>
                        <small class="text-muted">Reign: 1 (IYO SKY - 3 | Rhea Ripley - 2) </small>
                    </div>
                </div>
            </div>
        </main>
            </>
            )
}

export default WWEInfo;