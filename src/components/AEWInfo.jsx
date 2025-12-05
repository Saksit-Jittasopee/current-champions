import AEWWorld from '../assets/AEW/SamoaJoe.webp';
import AEWWomen from '../assets/AEW/Kris-Statlander-Wins-Champ.webp';
import AEWUnified from '../assets/AEW/updated-kazuchika-okada.webp';
import AEWCont from '../assets/AEW/updated-kazuchika-okada.webp';
import AEWInter from '../assets/AEW/updated-kazuchika-okada.webp';
import AEWTNT from '../assets/AEW/MarkBriscoeTNT.jpg';
import AEWNational from '../assets/AEW/RicochetNational.jpg';
import AEWTBS from '../assets/AEW/Mone100Belts.jpg';
import AEWTag from '../assets/AEW/FTR3x.jpg';
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
                        <a href="https://en.wikipedia.org/wiki/Samoa_Joe"><h3 class="card-title">Samoa Joe</h3></a>
                        <p class="card-text">Defeated "Hangman" Adam Page in a Steel Cage match at Full Gear.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW World Championship</small>
                        <small class="text-muted">Date Won: Full Gear 2025 (22/Nov/2025)</small>
                        <small class="text-muted">Days Held: 12+ Days</small>
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
                        <small class="text-muted">Days Held: 75+ Days</small>
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
                        <small class="text-muted">Days Held: 145+ Days</small>
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
                        <small class="text-muted">Days Held: 624+ Days</small>
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
                        <small class="text-muted">Days Held: 145+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-aewmen">
                    <div class="card-body">
                        <img src={AEWTNT} class="card-img-top" alt="AEW TNT Championship" />
                        <a href="https://en.wikipedia.org/wiki/Mark_Briscoe"><h3 class="card-title">Mark Briscoe</h3></a>
                        <p class="card-text">Defeated Kyle Fletcher in a No Disqualification match at Full Gear; had Briscoe lost the match, he would have been forced to join Fletcher in the Don Callis Family.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW TNT Championship</small>
                        <small class="text-muted">Date Won: Full Gear 2025 (22/Nov/2025)</small>
                        <small class="text-muted">Days Held: 12+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-aewmen">
                    <div class="card-body">
                        <img src={AEWNational} class="card-img-top" alt="AEW National Championship" />
                        <a href="https://en.wikipedia.org/wiki/Ricochet_(wrestler)"><h3 class="card-title">Ricochet</h3></a>
                        <p class="card-text">Pinned Kevin Knight in a 12-man Casino Gauntlet match to become the inaugural champion at Full Gear.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW National Championship</small>
                        <small class="text-muted">Date Won: Full Gear 2025 (22/Nov/2025)</small>
                        <small class="text-muted">Days Held: 12+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-aewwomen">
                    <div class="card-body">
                        <img src={AEWTBS} class="card-img-top" alt="AEW TBS Championship" />
                        <a href="https://en.wikipedia.org/wiki/Mercedes_Mon%C3%A9"><h3 class="card-title">Mercedes Moné</h3></a>
                        <p class="card-text">Defeated Willow Nightingale at Double or Nothing and she is now holding 13 belts currently.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW TBS Championship</small>
                        <small class="text-muted">Date Won: Double or Nothing 2024 (26/May/2024)</small>
                        <small class="text-muted">Days Held: 557+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-aewmen">
                    <div class="card-body">
                        <img src={AEWTag} class="card-img-top" alt="AEW World Tag Team Championship" />
                        <a href="https://en.wikipedia.org/wiki/FTR_(professional_wrestling)"><h3 class="card-title">FTR (Cash Wheeler & Dax Harwood)</h3></a>
                        <p class="card-text">Defeated Brodido (Brody King and Bandido) at Full Gear.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW World Tag Team Championship</small>
                        <small class="text-muted">Date Won: Full Gear 2025 (22/Nov/2025)</small>
                        <small class="text-muted">Days Held: 12+ Days</small>
                        <small class="text-muted">Reign: 3</small>
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
                        <small class="text-muted">Days Held: 232+ Days</small>
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