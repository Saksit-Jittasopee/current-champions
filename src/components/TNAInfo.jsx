import TNAMen from '../assets/TNA/MikeSantanaTNAWorld.webp';
import TNAKO from '../assets/TNA/Kelani-Jordan-TNA-Victory-Road-2025.jpg';
import TNAInter from '../assets/TNA/TNA-Impact-Steve-Maclin.png';
import TNAX from '../assets/TNA/LeonSlaterX.jpg';
import TNATag from '../assets/TNA/HardyBoyzTNATagTeam.png';
import TNAKOTag from '../assets/TNA/TheIInspiration.jpg';
import "./TNAInfo.css";

const TNAInfo = ({title}) =>{
    return(
    <><main>
        <h3>{title}</h3>
            <div class="card-group">
                <div class="card-tnamen">
                    <div class="card-body">
                        <img src={TNAMen} class="card-img-top" alt="TNA World Championship" />
                        <a href="https://en.wikipedia.org/wiki/Mike_Santana"><h3 class="card-title">Mike Santana</h3></a>
                        <p class="card-text">Defeated Trick Williams at Bound for Glory to win his first world title.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">TNA World Championship</small>
                        <small class="text-muted">Date Won: Bound for Glory 2025 (12/Oct/2025)</small>
                        <small class="text-muted">Days Held: 21+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-tnawomen">
                    <div class="card-body">
                        <img src={TNAKO} class="card-img-top" alt="TNA Knockouts World Championship" />
                        <a href="https://en.wikipedia.org/wiki/Kelani_Jordan"><h3 class="card-title">Kelani Jordan</h3></a>
                        <p class="card-text">Jordan and Léi Yǐng Lee won a battle royal at Victory Road to advance to a singles match for the vacated title later that night, which was won by Jordan. Previous champion Ash by Elegance had vacated the title earlier in the night.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">TNA Knockouts World Championship</small>
                        <small class="text-muted">Date Won: Victory Road 2025 (26/Sep/2025)</small>
                        <small class="text-muted">Days Held: 37+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-tnamen">
                    <div class="card-body">
                        <img src={TNAInter} class="card-img-top" alt="TNA International Championship" />
                        <a href="https://en.wikipedia.org/wiki/Steve_Maclin"><h3 class="card-title">Steve Maclin</h3></a>
                        <p class="card-text">Defeated Frankie Kazarian at Bound for Glory</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">TNA International Championship</small>
                        <small class="text-muted">Date Won: Bound for Glory 2025 (12/Oct/2025)</small>
                        <small class="text-muted">Days Held: 21+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>

                <div class="card-tnamen">
                    <div class="card-body">
                        <img src={TNAX} class="card-img-top" alt="TNA X Division Championship" />
                        <a href="https://en.wikipedia.org/wiki/Leon_Slater"><h3 class="card-title">Leon Slater</h3></a>
                        <p class="card-text">Defeated Moose at Slammiversary to win the title which he is also the youngest TNA X Division Champions.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">TNA X Division Championship</small>
                        <small class="text-muted">Date Won: Slammiversary 2025 (20/July/2025)</small>
                        <small class="text-muted">Days Held: 105+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-tnamen">
                    <div class="card-body">
                        <img src={TNATag} class="card-img-top" alt="TNA World Tag Team Championship" />
                        <a href="https://en.wikipedia.org/wiki/The_Hardy_Boyz"><h3 class="card-title">The Hardys (Jeff Hardy & Matt Hardy)</h3></a>
                        <p class="card-text">Defeated previous champions The Nemeth Brothers (Nic Nemeth and Ryan Nemeth), The Rascalz (Myron Reed and Zachary Wentz), and Fir$t Cla$$ (A. J. Francis and KC Navarro) in a Four-way tag team ladder match at Slammiversary.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">TNA World Tag Team Championship</small>
                        <small class="text-muted">Date Won: Slammiversary 2025 (20/July/2025)</small>
                        <small class="text-muted">Days Held: 105+ Days</small>
                        <small class="text-muted">Reign: 4</small>
                    </div>
                </div>

                <div class="card-tnawomen">
                    <div class="card-body">
                        <img src={TNAKOTag} class="card-img-top" alt="TNA Knockouts World Tag Team Championship" />
                        <a href="https://en.wikipedia.org/wiki/The_IInspiration"><h3 class="card-title">The IInspiration (Jessie McKay & Cassie Lee)</h3></a>
                        <p class="card-text">Defeated The Elegance Brand (represented by Heather and M by Elegance) during the Impact! tapings to win the titles. (Airing October 2)</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">TNA Knockouts World Tag Team Championship</small>
                        <small class="text-muted">Date Won: Impact! (27/Sep/2025)</small>
                        <small class="text-muted">Days Held: 35+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>
            </div>
        </main>
            </>
            )
}

export default TNAInfo;