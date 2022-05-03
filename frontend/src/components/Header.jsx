import Banner from './Banner.jpeg';

export default function Header(props) {
  return (
    <div className="Header">
      <img className="Banner" src={Banner} alt={props.alt} />
    </div>
  );
}
