import AEWWorld from '../assets/AEW/AEW-ADAM-PAGE.webp';
import AEWWomen from '../assets/AEW/Kris-Statlander-Wins-Womens-World-Championship-at-AEW-All-Out.webp';
import AEWUnified from '../assets/AEW/updated-kazuchika-okada-render-shared-by-aew-v0-f205jjjo0wff1.webp';
import AEWCont from '../assets/AEW/updated-kazuchika-okada-render-shared-by-aew-v0-f205jjjo0wff1.webp';
import AEWInter from '../assets/AEW/updated-kazuchika-okada-render-shared-by-aew-v0-f205jjjo0wff1.webp';
import AEWTNT from '../assets/AEW/flectherTNT.png';
import AEWTBS from '../assets/AEW/Mone10Belts.jpg';
import AEWTag from '../assets/AEW/BrodidoTag.webp';
import AEWTrios from '../assets/AEW/TheOpps.jpg';
import AEWWomenTag from '../assets/AEW/Vacant.png';
import "./AEWInfo.css";

const AEWInfo = ({title}) =>{
    return(
    <><main>
        <h3>{title}</h3>
            <div class="card-group">
                <div class="card-aewmen">
                    <div class="card-body">
                        <img src={AEWWorld} class="card-img-top" alt="AEW World Championship" />
                        <a href="https://en.wikipedia.org/wiki/%22Hangman%22_Adam_Page"><h3 class="card-title">"Hangman" Adam Page</h3></a>
                        <p class="card-text">Defeated Jon Moxley in a Texas Deathmatch at All In: Texas.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW World Championship</small>
                        <small class="text-muted">Date Won: All In: Texas 2025 (12/July/2025)</small>
                        <small class="text-muted">Days Held: 98+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>

                <div class="card-aewwomen">
                    <div class="card-body">
                        <img src={AEWWomen} class="card-img-top" alt="AEW Women's World Championship" />
                        <a href="https://en.wikipedia.org/wiki/Kris_Statlander"><h3 class="card-title">Kris Statlander</h3></a>
                        <p class="card-text">Defeated defending champion "Timeless" Toni Storm, Jamie Hayter, and Thekla in a four-way match at All Out.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW Women's World Championship</small>
                        <small class="text-muted">Date Won: All Out 2025 (20/Sep/2025)</small>
                        <small class="text-muted">Days Held: 28+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-aewmen">
                    <div class="card-body">
                        <img src={AEWUnified} class="card-img-top" alt="AEW Unified Championship" />
                        <a href="https://en.wikipedia.org/wiki/Kazuchika_Okada"><h3 class="card-title">"The Rainmaker" Kazuchika Okada</h3></a>
                        <p class="card-text">Defeated Kenny Omega at All In in a Winner Takes All Unification match to determine the inaugural Unified Champion, and in which Okada's Continental Championship and Omega's International Championship were also on the line.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW Unified Championship</small>
                        <small class="text-muted">Date Won: All In: Texas (12/July/2025)</small>
                        <small class="text-muted">Days Held: 98+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-aewmen">
                    <div class="card-body">
                        <img src={AEWCont} class="card-img-top" alt="AEW Continental Championship" />
                        <a href="https://en.wikipedia.org/wiki/Kazuchika_Okada"><h3 class="card-title">"The Rainmaker" Kazuchika Okada</h3></a>
                        <p class="card-text">Defeated Eddie Kingston on Dynamite to win the AEW Continental Championship which he held for nearly two years now.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW Continental Championship</small>
                        <small class="text-muted">Date Won: Dynamite (20/Mar/2024)</small>
                        <small class="text-muted">Days Held: 577+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-aewmen">
                    <div class="card-body">
                        <img src={AEWInter} class="card-img-top" alt="AEW International Championship" />
                        <a href="https://en.wikipedia.org/wiki/Kazuchika_Okada"><h3 class="card-title">"The Rainmaker" Kazuchika Okada</h3></a>
                        <p class="card-text">Defeated Kenny Omega at All In in a Winner Takes All Unification match to determine the inaugural Unified Champion, and in which Okada's Continental Championship and Omega's International Championship were also on the line.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW International Championship</small>
                        <small class="text-muted">Date Won: All In: Texas (12/July/2025)</small>
                        <small class="text-muted">Days Held: 98+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-aewmen">
                    <div class="card-body">
                        <img src={AEWTNT} class="card-img-top" alt="AEW TNT Championship" />
                        <a href="https://en.wikipedia.org/wiki/Kyle_Fletcher"><h3 class="card-title">Kyle Flecther</h3></a>
                        <p class="card-text">Defeated Dustin Rhodes in a Chicago Street Fight on Collision.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW TNT Championship</small>
                        <small class="text-muted">Date Won: Collision (31/July/2025)</small>
                        <small class="text-muted">Days Held: 79+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-aewwomen">
                    <div class="card-body">
                        <img src={AEWTBS} class="card-img-top" alt="AEW TBS Championship" />
                        <a href="https://en.wikipedia.org/wiki/Mercedes_Mon%C3%A9"><h3 class="card-title">Mercedes Moné</h3></a>
                        <p class="card-text">Defeated Willow Nightingale at Double or Nothing and she is now holding 10 belts currently.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW TBS Championship</small>
                        <small class="text-muted">Date Won: Double or Nothing 2024 (26/May/2024)</small>
                        <small class="text-muted">Days Held: 510+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-aewmen">
                    <div class="card-body">
                        <img src={AEWTag} class="card-img-top" alt="AEW World Tag Team Championship" />
                        <h3 class="card-title">Brodido</h3><a href="https://en.wikipedia.org/wiki/Brody_King">Brody King</a><a href="https://en.wikipedia.org/wiki/Bandido_(wrestler)">Bandido</a>
                        <p class="card-text">Defeated previous champions The Hurt Syndicate (Bobby Lashley and Shelton Benjamin) and FTR (Cash Wheeler and Dax Harwood) in a three-way tag team match at Forbidden Door.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW World Tag Team Championship</small>
                        <small class="text-muted">Date Won: Forbidden Door 2025 (24/Aug/2025)</small>
                        <small class="text-muted">Days Held: 55+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-aewmen">
                    <div class="card-body">
                        <img src={AEWTrios} class="card-img-top" alt="AEW World Trios Championship" />
                        <h3 class="card-title">The Opps</h3><a href="https://en.wikipedia.org/wiki/Samoa_Joe">Samoa Joe</a><a href="https://en.wikipedia.org/wiki/Powerhouse_Hobbs">Powerhouse Hobbs</a><a href="https://en.wikipedia.org/wiki/Katsuyori_Shibata">Katsuyori Shibata</a>
                        <p class="card-text">Defeated previous champions Death Riders (Claudio Castagnoli, Wheeler Yuta, and Jon Moxley)[a] at Dynamite: Spring BreakThru.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW World Trios Championship</small>
                        <small class="text-muted">Date Won: Dynamite: Spring BreakThru (16/Apr/2025)</small>
                        <small class="text-muted">Days Held: 185+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-aewwomen">
                    <div class="card-body">
                        <img src={AEWWomenTag} class="card-img-top" alt="AEW Women's World Tag Team Championship" />
                        <h3 class="card-title">Vacant<a href=""></a><a href=""></a></h3>
                        <p class="card-text">The title was unveiled during Dynamite on September 24, 2025, with the inaugural champions to be determined via a tournament.	</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW Women's World Tag Team Championship</small>
                        <small class="text-muted">Date Won: -</small>
                        <small class="text-muted">Days Held: -</small>
                        <small class="text-muted">Reign: -</small>
                    </div>
                </div>
            </div>
        </main>
            </>
            )
}

export default AEWInfo;