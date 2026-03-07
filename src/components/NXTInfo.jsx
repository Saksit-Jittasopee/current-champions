import NXTWomen from '../assets/NXT/JacyJayneNXTWomen.webp';
import NXTHC from '../assets/NXT/stacks.png';
import WWEWomenSpeed from '../assets/NXT/FallonHenley.jpg';
import "./NXTInfo.css";

const NXTInfo = ({title}) =>{
    return(
    <><main>
        <h3>{title}</h3>
            <div class="card-group">
                <div class="card-nxtmen">
                    <div class="card-body">
                        <img src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2026/02/1200/675/wwe-joe-hendry-021626-2.jpg?ve=1&tl=1" class="card-img-top" alt="NXT Championship" />
                        <a href="https://en.wikipedia.org/wiki/Joe_Hendry"><h3 class="card-title">Joe Hendry</h3></a>
                        <p class="card-text">Defeated Ricky Saints, Dion Lennox, Sean Legacy, Jackson Drake, Shiloh Hill, and Keanu Carver in a seven-man ladder match to win the vacant title; previous champion Oba Femi voluntarily relinquished the title to go to the main roster.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NXT Championship</small>
                        <small class="text-muted">Date Won: NXT (3/Feb/2026)</small>
                        <small class="text-muted">Days Held: 32+ Days</small>
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
                        <small class="text-muted">Days Held: 109+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>

                <div class="card-nxtmen">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTo3wtp7SAbJBgVN01MBWREFig9iJoblHzQ&s" class="card-img-top" alt="NXT North American Championship" />
                        <a href="https://en.wikipedia.org/wiki/Myles_Borne"><h3 class="card-title">Myles Borne</h3></a>
                        <p class="card-text">Defeated Ethan Page on NXT and change the title back to original version.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NXT North American Championship</small>
                        <small class="text-muted">Date Won: NXT (24/Feb/2026)</small>
                        <small class="text-muted">Days Held: 11+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-nxtwomen">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9zaCGvvXd5ik0lp8rTtJmbl2TOdfnaSZLWA&s" class="card-img-top" alt="NXT Women's North American Championship" />
                        <a href="https://en.wikipedia.org/wiki/Izzi_Dame"><h3 class="card-title">Izzi Dame</h3></a>
                        <p class="card-text">Defeated Thea Hail in an open challenge at NXT: New Year's Evil.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NXT Women's North American Championship</small>
                        <small class="text-muted">Date Won: NXT: New Year's Evil 2026 (6/Jan/2026)</small>
                        <small class="text-muted">Days Held: 60+ Days</small>
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
                        <small class="text-muted">Days Held: 256+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-nxtmen">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2FQo0XUIi7ECsfyVKqVirePZYTcO8qWMrww&s" class="card-img-top" alt="NXT Tag Team Championship" />
                        <a href="https://en.wikipedia.org/wiki/The_Vanity_Project_(professional_wrestling)"><h3 class="card-title">The Vanity Project (Brad Baylor and Ricky Smokes)</h3></a>
                        <p class="card-text">Defeated DarkState (Osiris Griffin and Saquon Shugars) on NXT.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NXT Tag Team Championship</small>
                        <small class="text-muted">Date Won: NXT (24/Feb/2026)</small>
                        <small class="text-muted">Days Held: 11+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-nxtmen">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthdgT3A_NIgeKH9c8QSpTkjZ8ERjSoPuLtg&s" class="card-img-top" alt="WWE Speed Championship" />
                        <a href="https://en.wikipedia.org/wiki/Aigle_Blanc"><h3 class="card-title">Elio LeFleur</h3></a>
                        <p class="card-text">Defeated defending champion Jasper Troy and Eli Knight in a triple threat match with a seven-minute time limit on NXT.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">WWE Speed Championship</small>
                        <small class="text-muted">Date Won: NXT (24/Feb/2026)</small>
                        <small class="text-muted">Days Held: 11+ Days</small>
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
                        <small class="text-muted">Days Held: 109+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>
            </div>
        </main>
            </>
            )
}

export default NXTInfo;