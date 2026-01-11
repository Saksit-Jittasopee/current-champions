import IWGPJrHeavy from '../assets/NJPW/DoukiIWGPJr.jpg';
import NJPWStrong from '../assets/NJPW/IshiiStrong.jpg';
import NJPWTV from '../assets/NJPW/ELPTV.jpg';
import IWGPTag from '../assets/NJPW/kobrother.png';
import IWGPJrTag from '../assets/NJPW/HOTIWGPJrTag.jpg';
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
                        <img src="https://preview.redd.it/yota-tsuji-revives-the-iwgp-heavyweight-championship-at-new-v0-fym6d2b74lbg1.jpeg?width=640&crop=smart&auto=webp&s=ea86032a26a763d72d88936372a77dc41deb51de" class="card-img-top" alt="IWGP World Heavyweight Championship" />
                        <a href="https://en.wikipedia.org/wiki/Yota_Tsuji"><h3 class="card-title">Yota Tsuji</h3></a>
                        <p class="card-text">Defeated Konosuke Takeshita in a Winner Takes All match, in which Tsuji's IWGP Global Heavyweight Championship was also on the line, at Wrestle Kingdom 20.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">IWGP Heavyweight Championship</small>
                        <small class="text-muted">Date Won: Wrestle Kingdom 20 (4/Jan/2026)</small>
                        <small class="text-muted">Days Held: 3+ Days</small>
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
                        <small class="text-muted">Days Held: 86+ Days</small>
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
                        <small class="text-muted">Days Held: 86+ Days</small>
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
                        <small class="text-muted">Days Held: 93+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>

                <div class="card-njpwmen">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwA42v_Kev8CtlRkC2f3LZf67ubCBsC6Nvw&s" class="card-img-top" alt="NEVER Openweight Championship" />
                        <a href="https://en.wikipedia.org/wiki/Aaron_Wolf_(judoka)"><h3 class="card-title">Aaron Wolf</h3></a>
                        <p class="card-text">Defeated Evil at Wrestle Kingdom 20 to win his first title in NJPW.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NEVER Openweight Championship</small>
                        <small class="text-muted">Date Won: Wrestle Kingdom 20 (4/Jan/2026)</small>
                        <small class="text-muted">Days Held: 3+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-njpwstrong">
                    <div class="card-body">
                        <img src={NJPWStrong} class="card-img-top" alt="NJPW Strong Openweight Championship" />
                        <a href="https://en.wikipedia.org/wiki/Tomohiro_Ishii"><h3 class="card-title">Tomohiro Ishii</h3></a>
                        <p class="card-text">Defeated Gabe Kidd in a 30-minute iron man match, which Ishii won 2–1 in sudden death overtime at Windy City Riot.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NJPW Strong Openweight Championship</small>
                        <small class="text-muted">Date Won: Windy City Riot 2025 (11/Apr/2025)</small>
                        <small class="text-muted">Days Held: 271+ Days</small>
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
                        <small class="text-muted">Days Held: 3+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-njpwmen">
                    <div class="card-body">
                        <img src={NJPWTV} class="card-img-top" alt="NJPW World Television Championship" />
                        <a href="https://en.wikipedia.org/wiki/El_Phantasmo"><h3 class="card-title">El Phantasmo</h3></a>
                        <p class="card-text">Defeated Great-O-Khan at Wrestling Hizen no Kuni.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NJPW World Television Championship</small>
                        <small class="text-muted">Date Won: Wrestling Hizen no Kuni (29/Apr/2025)</small>
                        <small class="text-muted">Days Held: 253+ Days</small>
                        <small class="text-muted">Reign: 2</small>
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
                        <small class="text-muted">Days Held: 101+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-njpwjrmen">
                    <div class="card-body">
                        <img src={IWGPJrTag} class="card-img-top" alt="IWGP Junior Heavyweight Tag Team Championship" />
                        <a href="https://en.wikipedia.org/wiki/House_of_Torture"><h3 class="card-title">House of Torture</h3></a><a href="https://en.wikipedia.org/wiki/Sho_(wrestler)">Sho</a><a href="https://en.wikipedia.org/wiki/Douki">Douki</a>
                        <p class="card-text">Defeated Master Wato and Yoh at Dominion 6.15 in Osaka-jo Hall.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">IWGP Junior Heavyweight Tag Team Championship</small>
                        <small class="text-muted">Date Won: Dominion 6.15 in Osaka-jo Hall (15/June/2025)</small>
                        <small class="text-muted">Days Held: 206+ Days</small>
                        <small class="text-muted">Reign: 1 (Sho - 6 | Douki - 1)</small>
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
                        <small class="text-muted">Days Held: 54+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-njpwmen">
                    <div class="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZVoZ1XwoTpyzZW7cUPI0njcQOcFqh8r-Oqw&s" class="card-img-top" alt="NEVER Openweight 6-Man Tag Team Championship" />
                        <a href="https://en.wikipedia.org/wiki/TMDK"><h3 class="card-title">TMDK</h3></a><a href="https://en.wikipedia.org/wiki/Zack_Sabre_Jr.">Zack Sabre Jr.</a><a href="https://en.wikipedia.org/wiki/Ryohei_Oiwa">Ryohei Oiwa</a><a href="https://en.wikipedia.org/wiki/Hartley_Jackson">Hartley Jackson</a>
                        <p class="card-text">Last eliminated Boltin Oleg and Bishamon in an 8-team Ranbo at Wrestle Kingdom 20.</p>
                    </div>
                        <div class="card-footer">
                            <small class="text-muted">NEVER Openweight 6-Man Tag Team Championship</small>
                            <small class="text-muted">Date Won: Wrestle Kingdom 20 (4/Jan/2026)</small>
                            <small class="text-muted">Days Held: 3+ Days</small>
                            <small class="text-muted">Reign: 1</small>
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
                        <small class="text-muted">Days Held: 187+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

            </div>
        </main>
            </>
            )
}

export default NJPWInfo;