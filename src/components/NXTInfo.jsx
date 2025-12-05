import NXTMen from '../assets/NXT/ricky-saints-nxt-champion.png';
import NXTWomen from '../assets/NXT/JacyJayneNXTWomen.webp';
import NXTNA from '../assets/NXT/EthanPageNA.webp';
import NXTWomenNA from '../assets/NXT/BlakeMonroeNXTNA.jpg';
import NXTHC from '../assets/NXT/stacks.png';
import NXTTag from '../assets/NXT/DarkStateTagTeam.webp';
import WWESpeed from '../assets/NXT/JasperTroy.jpg';
import WWEWomenSpeed from '../assets/NXT/FallonHenley.jpg';
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
                        <small class="text-muted">Days Held: 67+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-nxtwomen">
                    <div class="card-body">
                        <img src={NXTWomen} class="card-img-top" alt="NXT Women's Championship" />
                        <a href="https://en.wikipedia.org/wiki/Jacy_Jayne"><h3 class="card-title">Jacy Jayne</h3></a>
                        <p class="card-text">Defeated Tatum Paxley at NXT: Gold Rush - Night 1 to regain her NXT Women's Champions.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NXT Women's Championship</small>
                        <small class="text-muted">Date Won: NXT: Gold Rush - Night 1 (18/Nov/2025)</small>
                        <small class="text-muted">Days Held: 15+ Days</small>
                        <small class="text-muted">Reign: 2</small>
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
                        <small class="text-muted">Days Held: 190+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-nxtwomen">
                    <div class="card-body">
                        <img src={NXTWomenNA} class="card-img-top" alt="NXT Women's North American Championship" />
                        <a href="https://en.wikipedia.org/wiki/Mariah_May"><h3 class="card-title">Blake Monroe</h3></a>
                        <p class="card-text">Defeated Zaria, who defended the title on behalf of previous champion Sol Ruca, at Halloween Havoc.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NXT Women's North American Championship</small>
                        <small class="text-muted">Date Won: NXT Halloween Havoc 2025 (25/Oct/2025)</small>
                        <small class="text-muted">Days Held: 39+ Days</small>
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
                        <small class="text-muted">Days Held: 162+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-nxtmen">
                    <div class="card-body">
                        <img src={NXTTag} class="card-img-top" alt="NXT Tag Team Championship" />
                        <a href="https://en.wikipedia.org/wiki/DarkState"><h3 class="card-title">DarkState (Dion Lennox & Osiris Griffin)</h3></a>
                        <p class="card-text">Defeated The Hardy Boyz (Jeff Hardy and Matt Hardy) at Halloween Havoc in a Broken Rules match to reclaim their title.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NXT Tag Team Championship</small>
                        <small class="text-muted">Date Won: NXT Halloween Havoc 2025 (25/Oct/2025)</small>
                        <small class="text-muted">Days Held: 39+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>

                <div class="card-nxtmen">
                    <div class="card-body">
                        <img src={WWESpeed} class="card-img-top" alt="WWE Speed Championship" />
                        <a href="https://en.wikipedia.org/wiki/Jasper_Troy"><h3 class="card-title">Jasper Troy</h3></a>
                        <p class="card-text">Defeated El Grande Americano II on NXT.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Speed Championship</small>
                        <small class="text-muted">Date Won: NXT (11/Nov/2025)</small>
                        <small class="text-muted">Days Held: 22+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-nxtwomen">
                    <div class="card-body">
                        <img src={WWEWomenSpeed} class="card-img-top" alt="WWE Women's Speed Championship" />
                        <a href="https://en.wikipedia.org/wiki/Fallon_Henley"><h3 class="card-title">Fallon Henley</h3></a>
                        <p class="card-text">Defeated Zaria in a tournament final to win the vacant title in sudden death overtime at NXT: Gold Rush - Night 2; previous champion Sol Ruca relinquished the title due to injury. WWE recognizes Henley's reign as beginning on November 25, 2025, when the match aired on tape delay.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Women's Speed Championship</small>
                        <small class="text-muted">Date Won: NXT: Gold Rush - Night 1 (18/Nov/2025)</small>
                        <small class="text-muted">Days Held: 15+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>
            </div>
        </main>
            </>
            )
}

export default NXTInfo;