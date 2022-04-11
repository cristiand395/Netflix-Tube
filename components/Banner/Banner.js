import styles from './Banner.module.css';
import Image from 'next/image'

const Banner = (props) => {
  const { title, subtitle, imgUrl } = props;

  const handleOnPlay=()=>{
    console.log('play');
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.subTitle}>{subtitle}</h3>
          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon}
              onClick={handleOnPlay}>
                <Image
                  src={'/static/play_arrow.svg'}
                  alt="Pay arrow"
                  width={25}
                  height={25}/>
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage:`url(${imgUrl}`}}
        className={styles.bannerImg}></div>
    </div>
  );
}

export default Banner;