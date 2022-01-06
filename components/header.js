import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="root-header">
            <Profile />
            <SideHeader />
        </header>
    );
}

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-wrapper">
                <div className="profile-picture-wrapper">
                    {/* <Image src="" alt="profile-picture" /> */}
                </div>
                <div className="profile-name-wrapper">
                    <div>
                        <p>USERNAME</p>
                    </div>
                    <div>
                        <span>76</span>
                        <progress value="70%"></progress>
                    </div>
                </div>
            </div>
            <div className="contact-socials">
                <ul className="contacts-container">
                    <li className="contact-item">CS</li>
                    <li className="contact-item">TW</li>
                    <li className="contact-item">IG</li>
                </ul>
            </div>
        </div>
    );
};

const SideHeader = () => {
    return (
        <section className="sideheader-container">
            <Currency />
            <Options />
        </section>
    );
};

const Currency = () => {
    return (
        <section className="currency-container">
            <div className="currency-wrapper ticket">
                {/* <Image src="" alt="currency-icon" /> */}
                <span>3428</span>
            </div>
            <div className="currency-wrapper gold">
                {/* <Image src="" alt="currency-icon" /> */}
                <span>24975</span>
            </div>
            <div className="currency-wrapper diamond">
                {/* <Image src="" alt="currency-icon" /> */}
                <span>274</span>
                <Link href="#">
                    <a>+</a>
                </Link>
            </div>
        </section>
    );
};

const Options = () => {
    return (
        <ul className="option-list">
            <li className="option-item">LEADERBOARDS</li>
            <li className="option-item">STREAMS</li>
            <li className="option-item">INBOX</li>
            <li className="option-item">SETTINGS</li>
            <li className="option-item">DEVICE</li>
        </ul>
    );
};
