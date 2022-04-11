import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from './Navbar.module.css'

const Navbar = (props) => { 

  const [showDropdown, setShowDropdown] = useState(false);
  const {username} = props;

  const router = useRouter();

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickLiked = (e) => {
    e.preventDefault();
    router.push("/liked");
  };

  const handleShowDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoLink} href="/" passHref>
          <div className={styles.logoWrapper}>
            <Image
              src="/static/netflix.svg"
              alt="Netflix logo"
              width="128px"
              height="34px"
            />
          </div>
        </Link>

        <ul className={styles.navItems}>
          <li className={styles.navItem} 
            onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} 
            onClick={handleOnClickLiked}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div onClick={handleShowDropdown}>
            <button className={styles.usernameBtn} >
              <p className={styles.username}>{username}</p>
              {/** Expand more icon */}
              <Image
                src={"/static/expand_more.svg"}
                alt="Expand dropdown"
                width="24px"
                height="24px"
              />
            </button>

            {showDropdown && (
              <div className={styles.navDropdown}>
                <Link href='/login' passHref>
                  <div>
                    <a className={styles.linkName} >
                      Sign out
                    </a>
                    <div className={styles.lineWrapper}></div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;