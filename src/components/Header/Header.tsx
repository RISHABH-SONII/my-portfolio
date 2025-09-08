import Image from "next/image";
import classes from "./Header.module.css";
import Link from "next/link";

const Header = () => {
    return (
        <nav className={classes.navbar}>
            <div className={classes.firstSection}>
        <text>
          <Link href="/" className={classes.HeaderLogo}>
            <Image
              className={classes.logo}
              src={IMAGES.headerlogo.src}
              alt="headerlogo"
            />
          </Link>
        </text>
      </div>
        </nav>
    )
}