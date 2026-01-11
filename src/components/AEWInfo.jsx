import AEWWomen from '../assets/AEW/Kris-Statlander-Wins-Champ.webp';
import AEWTNT from '../assets/AEW/MarkBriscoeTNT.jpg';
import AEWNational from '../assets/AEW/RicochetNational.jpg';
import AEWTag from '../assets/AEW/FTR3x.jpg';
import AEWTrios from '../assets/AEW/TheOpps.jpg';
import "./AEWInfo.css";

const AEWInfo = ({title}) =>{
    return(
    <><main>
        <h3>{title}</h3>
            <div class="card-group">
                <div class="card-aewmen">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeKcOo0jcEfp9omPlHhOz27svgbX_MOgCcCA&s" class="card-img-top" alt="AEW World Championship" />
                        <a href="https://en.wikipedia.org/wiki/MJF"><h3 class="card-title">MJF</h3></a>
                        <p class="card-text">Defeated previous champion Samoa Joe, Swerve Strickland, and "Hangman" Adam Page in a four-way match at Worlds End.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW World Championship</small>
                        <small class="text-muted">Date Won: Worlds End 2025 (27/Dec/2025)</small>
                        <small class="text-muted">Days Held: 10+ Days</small>
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
                        <small class="text-muted">Days Held: 108+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                {/* <div class="card-aewmen">
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
                </div> */}

                <div class="card-aewmen">
                    <div class="card-body">
                        <img src="https://images2.minutemediacdn.com/image/upload/c_crop,x_0,y_155,w_5889,h_3312/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/wrestling_on_fannation/01kdkagrymthc0enrfqg.jpg" class="card-img-top" alt="AEW Continental Championship" />
                        <a href="https://en.wikipedia.org/wiki/Jon_Moxley"><h3 class="card-title">Jon Moxley</h3></a>
                        <p class="card-text">Defeated Kazuchika Okada in the final of the 2025 Continental Classic at Worlds End.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW Continental Championship</small>
                        <small class="text-muted">Date Won: Worlds End 2025 (27/Dec/2025)</small>
                        <small class="text-muted">Days Held: 10+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-aewmen">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUP7feJgbAjboQQy5qj51CLN7M5RrNmqvpPA&s" class="card-img-top" alt="AEW International Championship" />
                        <a href="https://en.wikipedia.org/wiki/Kazuchika_Okada"><h3 class="card-title">"The Rainmaker" Kazuchika Okada</h3></a>
                        <p class="card-text">Defeated Kenny Omega at All In in a Winner Takes All Unification match to determine the inaugural Unified Champion, and in which Okada's Continental Championship and Omega's International Championship were also on the line. After Okada lost the Continental Championship at Worlds End on December 27, 2025, the Unified Championship was deactivated.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW International Championship</small>
                        <small class="text-muted">Date Won: All In: Texas (12/July/2025)</small>
                        <small class="text-muted">Days Held: 178+ Days</small>
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
                        <small class="text-muted">Days Held: 45+ Days</small>
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
                        <small class="text-muted">Days Held: 45+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-aewwomen">
                    <div class="card-body">
                        <img src="https://d1fcaprh3kb5t7.cloudfront.net/wp-content/uploads/2025/12/31220931/G9i-LFvWwAA2-WW.jpeg" class="card-img-top" alt="AEW TBS Championship"/>
                        <a href="https://en.wikipedia.org/wiki/Willow_Nightingale"><h3 class="card-title">Willow Nightingale</h3></a>
                        <p class="card-text">Defeated Mercedes Moné at Dynamite: New Year's Smash.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW TBS Championship</small>
                        <small class="text-muted">Date Won: Dynamite: New Year's Smash 2025 (31/Dec/2025)</small>
                        <small class="text-muted">Days Held: 6+ Days</small>
                        <small class="text-muted">Reign: 2</small>
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
                        <small class="text-muted">Days Held: 45+ Days</small>
                        <small class="text-muted">Reign: 3</small>
                    </div>
                </div>

                <div class="card-aewmen">
                    <div class="card-body">
                        <img src={AEWTrios} class="card-img-top" alt="AEW World Trios Championship" />
                        <h3 class="card-title">The Opps</h3><a href="https://en.wikipedia.org/wiki/Samoa_Joe">Samoa Joe</a><a href="https://en.wikipedia.org/wiki/Powerhouse_Hobbs">Powerhouse Hobbs</a><a href="https://en.wikipedia.org/wiki/Katsuyori_Shibata">Katsuyori Shibata</a>
                        <p class="card-text">Defeated previous champions Death Riders (Claudio Castagnoli, Wheeler Yuta, and Jon Moxley) at Dynamite: Spring BreakThru.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW World Trios Championship</small>
                        <small class="text-muted">Date Won: Dynamite: Spring BreakThru (16/Apr/2025)</small>
                        <small class="text-muted">Days Held: 265+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-aewwomen">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMSL0neBVTo5PIBLoUEifDGiVfBvKP87xNQ&s" class="card-img-top" alt="AEW Women's World Tag Team Championship" />
                        <h3 class="card-title">The Babes of Wrath</h3><a href="https://en.wikipedia.org/wiki/Harley_Cameron">Harley Cameron</a><a href="https://en.wikipedia.org/wiki/Willow_Nightingale">Willow Nightingale</a>
                        <p class="card-text">Defeated Timeless Love Bombs ("Timeless" Toni Storm and Mina Shirakawa) in a tournament final to become the inaugural champions at Dynamite: Winter Is Coming.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW Women's World Tag Team Championship</small>
                        <small class="text-muted">Date Won: Dynamite: Winter Is Coming 2025 (10/Dec/2025)</small>
                        <small class="text-muted">Days Held: 27+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>
            </div>
        </main>
            </>
            )
}

export default AEWInfo;