import IWGPWorld from '../assets/NJPW/KonosukeTakeshitaIWGP.webp';
import IWGPWomen from '../assets/NJPW/SyuriIWGP.png';
import IWGPGlobal from '../assets/NJPW/YotaTsujiGlobal.webp';
import Never from '../assets/NJPW/EVIL.jpg';
import IWGPJrHeavy from '../assets/NJPW/DoukiIWGPJr.jpg';
import NJPWStrong from '../assets/NJPW/IshiiStrong.jpg';
import NJPWStrongWomen from '../assets/NJPW/SayaKamitaniStrong.png';
import NJPWTV from '../assets/NJPW/ELPTV.jpg';
import IWGPTag from '../assets/NJPW/kobrother.png';
import IWGPJrTag from '../assets/NJPW/HOTIWGPJrTag.jpg';
import NJPWStrongTag from '../assets/NJPW/UENjpwStrongTag.jpg';
import NeverSixTag from '../assets/NJPW/Never6man.png';
import NJPWTamashii from '../assets/NJPW/PrettyBoysTamashii.jpg';
import "./NJPWInfo.css";

const NJPWInfo = ({title}) =>{
    return(
    <><main>
        <h3>{title}</h3>
            <div class="card-group">
                <div class="card-njpwmen">
                    <div class="card-body">
                        <img src={IWGPWorld} class="card-img-top" alt="IWGP World Heavyweight Championship" />
                        <a href="https://en.wikipedia.org/wiki/Konosuke_Takeshita"><h3 class="card-title">Konosuke Takeshita</h3></a>
                        <p class="card-text">Defeated Zack Sabre Jr. at King of Pro-Wrestling. He is also a G1-Climax Winner.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">IWGP World Heavyweight Championship</small>
                        <small class="text-muted">Date Won: King of Pro-Wrestling 2025 (13/Oct/2025)</small>
                        <small class="text-muted">Days Held: 10+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-njpwwomen">
                    <div class="card-body">
                        <img src={IWGPWomen} class="card-img-top" alt="IWGP Women's Championship" />
                        <a href="https://en.wikipedia.org/wiki/Syuri"><h3 class="card-title">Syuri</h3></a>
                        <p class="card-text">Defeated Sareee at King of Pro-Wrestling to reclaim her IWGP Women's Champions.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">IWGP Women's Championship</small>
                        <small class="text-muted">Date Won: King of Pro-Wrestling 2025 (13/Oct/2025)</small>
                        <small class="text-muted">Days Held: 10+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>

                <div class="card-njpwmen">
                    <div class="card-body">
                        <img src={IWGPGlobal} class="card-img-top" alt="IWGP Global Heavyweight Championship" />
                        <a href="https://en.wikipedia.org/wiki/Yota_Tsuji"><h3 class="card-title">Yota Tsuji</h3></a>
                        <p class="card-text">Defeated Gabe Kidd at King of Pro-Wrestling to reclaim his IWGP Global Heavyweight Champions.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">IWGP Global Heavyweight Championship</small>
                        <small class="text-muted">Date Won: King of Pro-Wrestling 2025 (13/Oct/2025)</small>
                        <small class="text-muted">Days Held: 10+ Days</small>
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
                        <small class="text-muted">Days Held: 17+ Days</small>
                        <small class="text-muted">Reign: 2</small>
                    </div>
                </div>

                <div class="card-njpwmen">
                    <div class="card-body">
                        <img src={Never} class="card-img-top" alt="NEVER Openweight Championship" />
                        <a href="https://en.wikipedia.org/wiki/Evil_(wrestler)"><h3 class="card-title">EVIL</h3></a>
                        <p class="card-text">Defeated Boltin Oleg at King of Pro-Wrestling to win his 4th NEVER Openweight Champions.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NEVER Openweight Championship</small>
                        <small class="text-muted">Date Won: King of Pro-Wrestling 2025 (13/Oct/2025)</small>
                        <small class="text-muted">Days Held: 10+ Days</small>
                        <small class="text-muted">Reign: 4</small>
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
                        <small class="text-muted">Days Held: 195+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-njpwstrong">
                    <div class="card-body">
                        <img src={NJPWStrongWomen} class="card-img-top" alt="NJPW Strong Women's Championship" />
                        <a href="https://en.wikipedia.org/wiki/Saya_Kamitani"><h3 class="card-title">Saya Kamitani</h3></a>
                        <p class="card-text">Defeated AZM in a Winner Takes All match, where Kamitani's World of Stardom Championship was on the line, at Stardom In Korakuen.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NJPW Strong Women's Championship</small>
                        <small class="text-muted">Date Won: Stardom In Korakuen 2025 (25/Sep/2025)</small>
                        <small class="text-muted">Days Held: 27+ Days</small>
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
                        <small class="text-muted">Days Held: 177+ Days</small>
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
                        <small class="text-muted">Days Held: 25+ Days</small>
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
                        <small class="text-muted">Days Held: 130+ Days</small>
                        <small class="text-muted">Reign: 1 (Sho - 6 | Douki - 1)</small>
                    </div>
                </div>

                <div class="card-njpwstrong">
                    <div class="card-body">
                        <img src={NJPWStrongTag} class="card-img-top" alt="NJPW Strong Openweight Tag Team Championship" />
                        <a href="https://en.wikipedia.org/wiki/United_Empire"><h3 class="card-title">United Empire</h3></a><a href="https://en.wikipedia.org/wiki/T._J._Perkins">TJP</a><a href="https://en.wikipedia.org/wiki/Templario">Templario</a>
                        <p class="card-text">Defeated World Class Wrecking Crew (Royce Isaacs and Jorel Nelson) at Resurgence.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">NJPW Strong Openweight Tag Team Championship</small>
                        <small class="text-muted">Date Won: Resurgence 2025 (9/May/2025)</small>
                        <small class="text-muted">Days Held: 168+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

                <div class="card-njpwmen">
                    <div class="card-body">
                        <img src={NeverSixTag} class="card-img-top" alt="NEVER Openweight 6-Man Tag Team Championship" />
                        <a href="https://en.wikipedia.org/wiki/Master_Wato"><h3 class="card-title">Master Wato</h3></a><a href="https://en.wikipedia.org/wiki/Toru_Yano"><h3 class="card-title">Toru Yano</h3></a><a href="https://en.wikipedia.org/wiki/Yoh_(wrestler"><h3 class="card-title">Yoh</h3></a>
                        <p class="card-text">Defeated House of Torture (Ren Narita, Sho and Yujiro Takahashi) at New Japan Soul 2025: Night 8.</p>
                    </div>
                        <div class="card-footer">
                            <small class="text-muted">NEVER Openweight 6-Man Tag Team Championship</small>
                            <small class="text-muted">Date Won: New Japan Soul 2025: Night 8 (4/July/2025)</small>
                            <small class="text-muted">Days Held: 112+ Days</small>
                            <small class="text-muted">Reign: 1 (Master Wato - 1 | Toru Yano - 7 | Yoh - 2)</small>
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
                        <small class="text-muted">Days Held: 112+ Days</small>
                        <small class="text-muted">Reign: 1</small>
                    </div>
                </div>

            </div>
        </main>
            </>
            )
}

export default NJPWInfo;