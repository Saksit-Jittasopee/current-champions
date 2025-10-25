import NXTMen from '../assets/NXT/ricky-saints-nxt-champion.png';
import NXTWomen from '../assets/NXT/JacyJayneNXTWomen.webp';
import NXTNA from '../assets/NXT/EthanPageNA.webp';
import NXTWomenNA from '../assets/NXT/SolRucaDoubleChamp.png';
import NXTHC from '../assets/NXT/stacks.png';
import NXTTag from '../assets/NXT/HardyBoyzNXTTagTeam.png';
import WWESpeed from '../assets/NXT/el-grande-americano.webp';
import WWEWomenSpeed from '../assets/NXT/SolRucaDoubleChamp.png';
import "./NXTInfo.css";

const NXTInfo = ({title}) =>{
    return(
    <><main>
        <h3>{title}</h3>
            <div class="card-group">
                <div class="card-nxtmen">
                    <div class="card-body">
                        <img src={NXTMen} class="card-img-top" alt="NXT Championship" />
                        <a href="https://en.wikipedia.org/wiki/Ricky_Saints"><h3 class="card-title">Ricky Saints</h3></a>
                        <p class="card-text">Defeated Oba Femi at No Mercy to win his first NXT Championship.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NXT Championship</small>
                        <small class="text-muted">Date Won: NXT No Mercy 2025 (27/Sep/2025)</small>
                        <small class="text-muted">Days Held: 21+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-nxtwomen">
                    <div class="card-body">
                        <img src={NXTWomen} class="card-img-top" alt="NXT Women's Championship" />
                        <a href="https://en.wikipedia.org/wiki/Jacy_Jayne"><h3 class="card-title">Jacy Jayne</h3></a>
                        <p class="card-text">Defeated Stephanie Vaquer on a shocking win to win her first NXT Women's Championship.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NXT Women's Championship</small>
                        <small class="text-muted">Date Won: NXT (27/May/2025)</small>
                        <small class="text-muted">Days Held: 144+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-nxtmen">
                    <div class="card-body">
                        <img src={NXTNA} class="card-img-top" alt="NXT North American Championship" />
                        <a href="https://en.wikipedia.org/wiki/Ethan_Page"><h3 class="card-title">Ethan Page</h3></a>
                        <p class="card-text">Defeated Ricky Saints on NXT to win the North American Championship later changed to Canadian Championship.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NXT North American Championship</small>
                        <small class="text-muted">Date Won: NXT (27/May/2025)</small>
                        <small class="text-muted">Days Held: 144+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-nxtwomen">
                    <div class="card-body">
                        <img src={NXTWomenNA} class="card-img-top" alt="NXT Women's North American Championship" />
                        <a href="https://en.wikipedia.org/wiki/Sol_Ruca"><h3 class="card-title">Sol Ruca</h3></a>
                        <p class="card-text">Defeated Izzi Dame, Kelani Jordan, Lola Vice, Thea Hail, and Zaria in a six-woman ladder match to win the vacant championship at Stand & Deliver. Previous champion Stephanie Vaquer relinquished the title due to also holding the NXT Women's Championship.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NXT Women's North American Championship</small>
                        <small class="text-muted">Date Won: NXT Stand & Deliver 2025 (19/Apr/2025)</small>
                        <small class="text-muted">Days Held: 182+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-nxtmen">
                    <div class="card-body">
                        <img src={NXTHC} class="card-img-top" alt="NXT Heritage Cup" />
                        <a href="https://en.wikipedia.org/wiki/Channing_%22Stacks%22_Lorenzo"><h3 class="card-title">Channing "Stacks" Lorenzo</h3></a>
                        <p class="card-text">Defeated Tony D'Angelo by 2–1 to win the vacant title on NXT. Previous champion Noam Dar relinquished the title due to injury.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NXT Heritage Cup</small>
                        <small class="text-muted">Date Won: NXT (24/June/2025)</small>
                        <small class="text-muted">Days Held: 116+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-nxtmen">
                    <div class="card-body">
                        <img src={NXTTag} class="card-img-top" alt="NXT Tag Team Championship" />
                        <a href="https://en.wikipedia.org/wiki/The_Hardy_Boyz"><h3 class="card-title">The Hardy Boyz (Jeff Hardy & Matt Hardy)</h3></a>
                        <p class="card-text">Defeated DarkState (Dion Lennox and Osiris Griffin) in a Winners Take All match, in which The Hardy Boyz defended the TNA World Tag Team Championship, at NXT vs. TNA Showdown.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NXT Tag Team Championship</small>
                        <small class="text-muted">Date Won: NXT vs. TNA Showdown (7/Oct/2025)</small>
                        <small class="text-muted">Days Held: 11+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-nxtmen">
                    <div class="card-body">
                        <img src={WWESpeed} class="card-img-top" alt="WWE Speed Championship" />
                        <a href="https://en.wikipedia.org/wiki/Chad_Gable"><h3 class="card-title">El Grande Americano I</h3></a>
                        <p class="card-text">Defeated Dragon Lee on Speed. WWE recognizes Americano's reign as beginning on May 7, 2025, when the match aired on tape delay.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Speed Championship</small>
                        <small class="text-muted">Date Won: WWE Speed Tournament (5/May/2025)</small>
                        <small class="text-muted">Days Held: 166+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-nxtwomen">
                    <div class="card-body">
                        <img src={WWEWomenSpeed} class="card-img-top" alt="WWE Women's Speed Championship" />
                        <a href="https://en.wikipedia.org/wiki/Sol_Ruca"><h3 class="card-title">Sol Ruca</h3></a>
                        <p class="card-text">Defeated Candice LeRae on Speed. WWE recognizes Ruca's reign as beginning on April 16, 2025, when the match aired on tape delay.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Women's Speed Championship</small>
                        <small class="text-muted">Date Won: WWE Speed Tournament (11/Apr/2025)</small>
                        <small class="text-muted">Days Held: 190+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>
            </div>
        </main>
            </>
            )
}

export default NXTInfo;