import Card from '@components/Card/Card';
import styles from './SectionCards.module.css';

const SectionCards = (props) => {
  const {title, videos} = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>

        {videos.map(video => (
          <Card
            key={video.id}
            title={video.title}
            imgUrl={video.imgUrl}
            size={video.size}/>
        ))}
        
      </div>
    </section>
  );
}

export default SectionCards;