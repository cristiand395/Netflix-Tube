import Image from 'next/image'
import {motion} from 'framer-motion';
import cls from 'classnames';
import styles  from './Card.module.css'

const Card = (props) => {
  const { imgUrl = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', size = 'medium' } = props;

  const sizingStyles = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem
  }

  return (
    <div className={styles.container}>
      <motion.div 
        className={cls(styles.imgMotionWrapper, sizingStyles[size])}
        whileHover={{ scale: 1.1 }}>
        <Image
          className={styles.cardImg}
          src={imgUrl}
          alt="Image"
          layout='fill'/>
      </motion.div>
    </div>
  );
}

export default Card;