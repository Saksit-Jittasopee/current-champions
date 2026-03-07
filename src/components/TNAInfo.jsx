import TNAX from '../assets/TNA/LeonSlaterX.jpg';
import TNATag from '../assets/TNA/HardyBoyzTNATagTeam.png';
import "./TNAInfo.css";

const TNAInfo = ({title}) =>{
    return(
    <><main>
        <h3>{title}</h3>
            <div class="card-group">
                <div class="card-tnamen">
                    <div class="card-body">
                        <img src="https://s.yimg.com/ny/api/res/1.2/CbUL8ys2oNGbECe_ci8roQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MDtjZj13ZWJw/https://media.zenfs.com/en/wrestle_zone_910/7557165abe036381c7d77328bba4ca8d" class="card-img-top" alt="TNA World Championship" />
                        <a href="https://en.wikipedia.org/wiki/Mike_Santana"><h3 class="card-title">Mike Santana</h3></a>
                        <p class="card-text">Defeated Frankie Kazarian on the Thursday Night Impact!'s AMC debut.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">TNA World Championship</small>
                        <small class="text-muted">Date Won: Thursday Night Impact! premiere on AMC (15/Jan/2026)</small>
                        <small class="text-muted">Days Held: 51+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>

                <div class="card-tnawomen">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdzDEMFqkjw8rhgTrcZrD_a63ioKKsSPm-A&s" class="card-img-top" alt="TNA Knockouts World Championship" />
                        <a href="https://en.wikipedia.org/wiki/Arianna_Grace"><h3 class="card-title">Arianna Grace</h3></a>
                        <p class="card-text">Defeated Léi Ying Lee at No Surrender to win her first title.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">TNA Knockouts World Championship</small>
                        <small class="text-muted">Date Won: No Surrender 2026 (13/Feb/2026)</small>
                        <small class="text-muted">Days Held: 22+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-tnamen">
                    <div class="card-body">
                        <img src="https://411mania.com/wp-content/uploads/2026/02/Trey-Miguel-TNA-No-Surrender-2026.png" class="card-img-top" alt="TNA International Championship" />
                        <a href="https://en.wikipedia.org/wiki/Trey_Miguel"><h3 class="card-title">Trey Miguel</h3></a>
                        <p class="card-text">Defeated Channing "Stacks" Lorenzo at No Surrender. This was Trey Miguel's Feast or Fired opportunity.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">TNA International Championship</small>
                        <small class="text-muted">Date Won: No Surrender 2026 (13/Feb/2026)</small>
                        <small class="text-muted">Days Held: 22+ Days</small>
                        <small class="text-muted">Reign: 1</small>
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
                        <small class="text-muted">Days Held: 230+ Days</small>
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
                        <small class="text-muted">Days Held: 230+ Days</small>
                        <small class="text-muted">Reign: 4</small>
                    </div>
                </div>

                <div class="card-tnawomen">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-b6Ugqg7soY9QEy0yAVl40Vfxv4g9xdDiAg&s" class="card-img-top" alt="TNA Knockouts World Tag Team Championship" />
                        <a href=""><h3 class="card-title">The Elegance Brand (Heather by Elegance and M by Elegance)</h3></a>
                        <p class="card-text">Defeated The IInspiration (Jessie McKay and Cassie Lee) on Thursday Night Impact!'s AMC debut.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">TNA Knockouts World Tag Team Championship</small>
                        <small class="text-muted">Date Won: Thursday Night Impact! premiere on AMC (15/Jan/2026)</small>
                        <small class="text-muted">Days Held: 51+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>
            </div>
        </main>
            </>
            )
}

export default TNAInfo;