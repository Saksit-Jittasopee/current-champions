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
                        <img src="https://media.bleacherreport.com/image/upload/v1723452501/vaalsvsm2vbotfn8vlpa.jpg" class="card-img-top" alt="Undisputed WWE Championship" />
                        <a href="https://en.wikipedia.org/wiki/Cody_Rhodes"><h3 class="card-title">Cody Rhodes</h3></a>
                        <p class="card-text">Defeated Drew McIntyre on SmackDown to win back his WWE Championship.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Undisputed WWE Championship</small>
                        <small class="text-muted">Date Won: Smackdown (7/Mar/2026)</small>
                        <small class="text-muted">Days Held: 1+ Days</small>
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
                        <small class="text-muted">Days Held: 126+ Days</small>
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
                        <small class="text-muted">Days Held: 126+ Days</small>
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
                        <small class="text-muted">Days Held: 168+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-raw">
                    <div class="card-body">
                        <img src="https://preview.redd.it/penta-intercontinental-champion-v0-2xgjusyoyqmg1.png?width=1919&format=png&auto=webp&s=8f84a25d59dc6fd7af007732186636687cc47f66" class="card-img-top" alt="WWE Intercontinental Championship" />
                        <a href="https://en.wikipedia.org/wiki/Pentag%C3%B3n_Jr."><h3 class="card-title">Penta</h3></a>
                        <p class="card-text">Defeated Dominik Mysterio on Raw with Dominik being cursed by Danhausen before the match.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Intercontinental Championship</small>
                        <small class="text-muted">Date Won: Raw (2/Mar/2025)</small>
                        <small class="text-muted">Days Held: 5+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-raw">
                    <div class="card-body">
                        <img src="https://www.wwe.com/f/styles/wwe_16_9_xl/public/2026/03/036_RAW_03022026CA_52010.jpg" class="card-img-top" alt="WWE Women's Intercontinental Championship" />
                        <a href="https://en.wikipedia.org/wiki/AJ_Lee"><h3 class="card-title">AJ Lee</h3></a>
                        <p class="card-text">Defeated Becky Lynch at Elimination Chamber.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Women's Intercontinental Championship</small>
                        <small class="text-muted">Date Won: Elimination Chamber 2026 (28/Feb/2026)</small>
                        <small class="text-muted">Days Held: 7+ Days</small>
                        <small class="text-muted">Reign: 1</small>
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
                        <small class="text-muted">Days Held: 78+ Days</small>
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
                        <small class="text-muted">Days Held: 64+ Days</small>
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
                        <small class="text-muted">Days Held: 68+ Days</small>
                        <small class="text-muted">Reign: 4 (Jey Uso - 5 | Jimmy Uso - 4)</small>
                    </div>
                </div>

                <div class="card-smackdown">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1agZViFkFDdUuEzyt350iOYasPPQ67Yd6A&s" class="card-img-top" alt="WWE Tag Team Championship" />
                        <a href="https://en.wikipedia.org/wiki/The_Bloodline_(professional_wrestling)"><h3 class="card-title">The MFTs (Solo Sikoa and Tama Tonga)</h3></a>
                        <p class="card-text">Defeated The Wyatt Sicks (Dexter Lumis and Joe Gacy) on SmackDown.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Tag Team Championship</small>
                        <small class="text-muted">Date Won: Smackdown (23/Jan/2026)</small>
                        <small class="text-muted">Days Held: 43+ Days</small>
                        <small class="text-muted">Reign: 1 (Solo Sikoa - 1 | Tama Tonga - 2)</small>
                    </div>
                </div>

                <div class="card-open">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPCGdCwKQKxSVzehyd16jQLc_c1FLXpyMGTg&s" class="card-img-top" alt="WWE Women's Tag Team Championship" />
                        <h3 class="card-title">The Irresistible Forces</h3><a href="https://en.wikipedia.org/wiki/Nia_Jax">Nia Jax</a><a href="https://en.wikipedia.org/wiki/Lash_Legend">Lash Legend</a>
                        <p class="card-text">Defeated Rhiyo (Rhea Ripley and Iyo Sky) on SmackDown.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Women's Tag Team Championship</small>
                        <small class="text-muted">Date Won: Smackdown (27/Feb/2026)</small>
                        <small class="text-muted">Days Held: 8+ Days</small>
                        <small class="text-muted">Reign: 1 (Nia Jax - 3 | Lash Legend - 1) </small>
                    </div>
                </div>
            </div>
        </main>
            </>
            )
}

export default WWEInfo;