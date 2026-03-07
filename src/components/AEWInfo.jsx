import AEWNational from '../assets/AEW/RicochetNational.jpg';
import AEWTag from '../assets/AEW/FTR3x.jpg';
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
                        <small class="text-muted">Days Held: 69+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>

                <div class="card-aewwomen">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0z1ELAHP6zWDpjrdgiH97w4LW9P4KKi5WQ&s" class="card-img-top" alt="AEW Women's World Championship" />
                        <a href="https://en.wikipedia.org/wiki/Thekla_(wrestler)"><h3 class="card-title">Thekla</h3></a>
                        <p class="card-text">Defeated Kris Statlander in a Strap match on Dynamite.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW Women's World Championship</small>
                        <small class="text-muted">Date Won: Dynamite (11/Feb/2026)</small>
                        <small class="text-muted">Days Held: 23+ Days</small>
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
                        <small class="text-muted">Days Held: 69+ Days</small>
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
                        <small class="text-muted">Days Held: 237+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-aewmen">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24A08MugIrCzEBp7KfUE5RG09EuJKt5lTeg&s" class="card-img-top" alt="AEW TNT Championship" />
                        <a href="https://en.wikipedia.org/wiki/Kyle_Fletcher"><h3 class="card-title">Kyle Fletcher</h3></a>
                        <p class="card-text">Defeated Tommaso Ciampa on Dynamite and change the title to pink version.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW TNT Championship</small>
                        <small class="text-muted">Date Won: Dynaite (11/Feb/2025)</small>
                        <small class="text-muted">Days Held: 23+ Days</small>
                        <small class="text-muted">Reign: 2</small>
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
                        <small class="text-muted">Days Held: 104+ Days</small>
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
                        <small class="text-muted">Days Held: 65+ Days</small>
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
                        <small class="text-muted">Days Held: 104+ Days</small>
                        <small class="text-muted">Reign: 3</small>
                    </div>
                </div>

                <div class="card-aewmen">
                    <div class="card-body">
                        <img src="https://preview.redd.it/the-don-callis-family-now-owns-the-aew-trios-titles-after-v0-u8kne5e557ng1.jpeg?width=1080&crop=smart&auto=webp&s=6034fab22dff818000597ee4cfef51b364002be7" class="card-img-top" alt="AEW World Trios Championship" />
                        <a href="https://en.wikipedia.org/wiki/The_Don_Callis_Family"><h3 class="card-title">The Don Callis Family</h3></a><a href="https://en.wikipedia.org/wiki/Kazuchika_Okada">Kazuchika Okada</a><a href="https://en.wikipedia.org/wiki/Kyle_Fletcher">Kyle Fletcher</a><a href="https://en.wikipedia.org/wiki/Mark_Davis_(wrestler)">Mark Davis</a>
                        <p class="card-text">Defeated Jet Set Rodeo ("Hangman" Adam Page, "Speedball" Mike Bailey, and "The Jet" Kevin Knight) on Dynamite.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">AEW World Trios Championship</small>
                        <small class="text-muted">Date Won: Dynamite (4/Mar/2026)</small>
                        <small class="text-muted">Days Held: 2+ Days</small>
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
                        <small class="text-muted">Days Held: 86+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>
            </div>
        </main>
            </>
            )
}

export default AEWInfo;