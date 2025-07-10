import { warningStyle } from './styles.ts';
import styles from './styled-component.module.css';

export default function StyledComponent() {
  let selectedStyle = warningStyle
  return <p style={selectedStyle} className={styles.text}>Style Component</p>
}