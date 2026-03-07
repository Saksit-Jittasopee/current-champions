import IWGPJrHeavy from '../assets/NJPW/DoukiIWGPJr.jpg';
import IWGPTag from '../assets/NJPW/kobrother.png';
import NJPWStrongTag from '../assets/NJPW/NJPWStrongCMLL.jpg';
import NJPWTamashii from '../assets/NJPW/PrettyBoysTamashii.jpg';
import "./NJPWInfo.css";

const NJPWInfo = ({title}) =>{
    return(
    <><main>
        <h3>{title}</h3>
            <div class="card-group">
                <div class="card-njpwmen">
                    <div class="card-body">
                        <img src="https://preview.redd.it/yota-tsuji-revives-the-iwgp-heavyweight-championship-at-new-v0-fym6d2b74lbg1.jpeg?width=640&crop=smart&auto=webp&s=ea86032a26a763d72d88936372a77dc41deb51de" class="card-img-top" alt="IWGP Heavyweight Championship" />
                        <a href="https://en.wikipedia.org/wiki/Yota_Tsuji"><h3 class="card-title">Yota Tsuji</h3></a>
                        <p class="card-text">Defeated Konosuke Takeshita in a Winner Takes All match, in which Tsuji's IWGP Global Heavyweight Championship was also on the line, at Wrestle Kingdom 20.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">IWGP Heavyweight Championship</small>
                        <small class="text-muted">Date Won: Wrestle Kingdom 20 (4/Jan/2026)</small>
                        <small class="text-muted">Days Held: 62+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-njpwwomen">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSRsWFtmy2q3ME8b9km0Fn1E7Fwh57umU9ng&s" class="card-img-top" alt="IWGP Women's Championship" />
                        <a href="https://en.wikipedia.org/wiki/Syuri"><h3 class="card-title">Syuri</h3></a>
                        <p class="card-text">Defeated Sareee at King of Pro-Wrestling to reclaim her IWGP Women's Champions.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">IWGP Women's Championship</small>
                        <small class="text-muted">Date Won: King of Pro-Wrestling 2025 (13/Oct/2025)</small>
                        <small class="text-muted">Days Held: 145+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>

                <div class="card-njpwmen">
                    <div class="card-body">
                        <img src="https://preview.redd.it/yota-tsuji-revives-the-iwgp-heavyweight-championship-at-new-v0-fym6d2b74lbg1.jpeg?width=640&crop=smart&auto=webp&s=ea86032a26a763d72d88936372a77dc41deb51de" class="card-img-top" alt="IWGP Global Heavyweight Championship" />
                        <a href="https://en.wikipedia.org/wiki/Yota_Tsuji"><h3 class="card-title">Yota Tsuji</h3></a>
                        <p class="card-text">Defeated Gabe Kidd at King of Pro-Wrestling to reclaim his IWGP Global Heavyweight Champions.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">IWGP Global Heavyweight Championship</small>
                        <small class="text-muted">Date Won: King of Pro-Wrestling 2025 (13/Oct/2025)</small>
                        <small class="text-muted">Days Held: 145+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>

                <div class="card-njpwjrmen">
                    <div class="card-body">
                        <img src={IWGPJrHeavy} class="card-img-top" alt="IWGP Junior Heavyweight Championship" />
                        <a href="https://en.wikipedia.org/wiki/Douki"><h3 class="card-title">Douki</h3></a>
                        <p class="card-text">Defeated El Desperado at Road to King of Pro Wrestling: Night 2.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">IWGP Junior Heavyweight Championship</small>
                        <small class="text-muted">Date Won: Road to King of Pro Wrestling: Night 2 (6/Oct/2025)</small>
                        <small class="text-muted">Days Held: 152+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>

                <div class="card-njpwmen">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQApCA5qj7bIZGe0zUhzUieukgCxq9MRM8P-A&s" class="card-img-top" alt="NEVER Openweight Championship" />
                        <a href="https://en.wikipedia.org/wiki/Ren_Narita"><h3 class="card-title">Ren Narita</h3></a>
                        <p class="card-text">Defeated Aaron Wolf at The New Beginning in Osaka.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NEVER Openweight Championship</small>
                        <small class="text-muted">Date Won: The New Beginning in Osaka 2026 (11/Feb/2026)</small>
                        <small class="text-muted">Days Held: 24+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-njpwstrong">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTRl6nID2OqLzqGCAVkI0f88BUsdL3Rxv1Cg&s" class="card-img-top" alt="NJPW Strong Openweight Championship" />
                        <a href="https://en.wikipedia.org/wiki/Boltin_Oleg"><h3 class="card-title">Boltin Oleg</h3></a>
                        <p class="card-text">Defeated Tomohiro Ishii at The New Beginning USA.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NJPW Strong Openweight Championship</small>
                        <small class="text-muted">Date Won: The New Beginning USA 2026 (27/Feb/2026)</small>
                        <small class="text-muted">Days Held: 8+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-njpwstrong">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSRsWFtmy2q3ME8b9km0Fn1E7Fwh57umU9ng&s" class="card-img-top" alt="NJPW Strong Women's Championship" />
                        <a href="https://en.wikipedia.org/wiki/Syuri"><h3 class="card-title">Syuri</h3></a>
                        <p class="card-text">Defeated Saya Kamitani in a Winner Takes All match, where Syuri's IWGP Women's Championship was also on the line, at Wrestle Kingdom 20.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NJPW Strong Women's Championship</small>
                        <small class="text-muted">Date Won: Wrestle Kingdom 20 (4/Jan/2026)</small>
                        <small class="text-muted">Days Held: 62+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-njpwmen">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBQhyPV4P3cnXRw27_18mSx27rqv_bfjyTA&s" class="card-img-top" alt="NJPW World Television Championship" />
                        <a href="https://en.wikipedia.org/wiki/Konosuke_Takeshita"><h3 class="card-title">Konosuke Takeshita</h3></a>
                        <p class="card-text">Defeated El Phantasmo at The New Beginning USA.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NJPW World Television Championship</small>
                        <small class="text-muted">Date Won: The New Beginning USA 2026 (27/Feb/2026)</small>
                        <small class="text-muted">Days Held: 8+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-njpwmen">
                    <div class="card-body">
                        <img src={IWGPTag} class="card-img-top" alt="IWGP Tag Team Championship" />
                        <a href="https://en.wikipedia.org/wiki/List_of_Bullet_Club_members#Sub-groups"><h3 class="card-title">Knock Out Brothers</h3></a><a href="https://en.wikipedia.org/wiki/Oskar_Leube">Oskar</a><a href="https://en.wikipedia.org/wiki/Yuto_Nakashima">Yuto-Ice</a>
                        <p class="card-text">Defeated Taichi and Tomohiro Ishii at Destruction in Kobe.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">IWGP Tag Team Championship</small>
                        <small class="text-muted">Date Won: Destruction in Kobe 2025 (28/Sep/2025)</small>
                        <small class="text-muted">Days Held: 160+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-njpwjrmen">
                    <div class="card-body">
                        <img src="https://www.njpw.co.jp/wp-content/uploads/2026/03/HCumHrza4AAE5iz.jpg" class="card-img-top" alt="IWGP Junior Heavyweight Tag Team Championship" />
                        <a href=""><h3 class="card-title">Super Extremes</h3></a><a href="https://en.wikipedia.org/wiki/Taiji_Ishimori">Taiji Ishimori</a><a href="https://en.wikipedia.org/wiki/Robbie_X">Robbie X</a>
                        <p class="card-text">Defeated Ichiban Sweet Boys (Robbie Eagles and Kosei Fujita) at NJPW 54th Anniversary Show.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">IWGP Junior Heavyweight Tag Team Championship</small>
                        <small class="text-muted">Date Won: NJPW 54th Anniversary Show (6/Mar/2026)</small>
                        <small class="text-muted">Days Held: 1+ Days</small>
                        <small class="text-muted">Reign: 1 (Taiji Ishimori - 4 | Robbie X - 1)</small>
                    </div>
                </div>

                <div class="card-njpwstrong">
                    <div class="card-body">
                        <img src={NJPWStrongTag} class="card-img-top" alt="NJPW Strong Openweight Tag Team Championship" />
                        <a><h3 class="card-title">Los Hermanos Chávez</h3></a><a href="https://en.wikipedia.org/wiki/%C3%81ngel_de_Oro">Ángel de Oro</a><a href="https://en.wikipedia.org/wiki/Niebla_Roja">Niebla Roja</a>
                        <p class="card-text">Defeated United Empire (TJP and Templario) at CMLL Viernes Espectacular.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NJPW Strong Openweight Tag Team Championship</small>
                        <small class="text-muted">Date Won: CMLL Viernes Espectacular 2025 (14/Nov/2025)</small>
                        <small class="text-muted">Days Held: 113+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-njpwmen">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWX_GtdaCVdNNZkdfDoDu_pvDjxGSw7L7lrA&s" class="card-img-top" alt="NEVER Openweight 6-Man Tag Team Championship" /> <br></br>
                        <a href="https://en.wikipedia.org/wiki/Boltin_Oleg">Boltin Oleg</a><a href="https://en.wikipedia.org/wiki/Bishamon_(professional_wrestling)">Bishamon (Hirooki Goto and Yoshi-Hashi)</a>
                        <p class="card-text">Defeated TMDK (Zack Sabre Jr., Ryohei Oiwa, and Hartley Jackson) at Road to the New Beginning: Night 1.</p>
                    </div>
                        <div class="card-footer">
                            <small class="text-muted">NEVER Openweight 6-Man Tag Team Championship</small>
                            <small class="text-muted">Date Won: Road to the New Beginning: Night 1 (19/Jan/2026)</small>
                            <small class="text-muted">Days Held: 47+ Days</small>
                            <small class="text-muted">Reign: 1 (Boltin Oleg - 3 | Hirooki Goto - 3 | Yoshi-Hashi - 3)</small>
                    </div>
                </div>

                <div class="card-njpwmen">
                    <div class="card-body">
                        <img src={NJPWTamashii} class="card-img-top" alt="NJPW TAMASHII Tag Team Championship" />
                        <a><h3 class="card-title">The Pretty Boys</h3></a><a>Magic Mark</a><a>Pretty Richie</a>
                        <p class="card-text">Defeated Young Blood (Oskar Leube and Yuto Nakashima) in a tournament final at Tamashii: Cold War to become the inaugural champions.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NJPW TAMASHII Tag Team Championship</small>
                        <small class="text-muted">Date Won: Tamashii: Cold War (4/July/2025)</small>
                        <small class="text-muted">Days Held: 246+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

            </div>
        </main>
            </>
            )
}

export default NJPWInfo;