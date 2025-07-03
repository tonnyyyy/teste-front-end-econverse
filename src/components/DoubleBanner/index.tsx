import "./styles.scss";

interface BannerCard {
  imgSrc: string;
  title: string;
  description: string;
  buttonText: string;
}

interface DoubleBannerProps {
  banners: BannerCard[];
}

const DoubleBanner: React.FC<DoubleBannerProps> = ({ banners }) => {
  return (
    <div className="doublebanner-container">
      {banners.map((b) => (
        <div className="card">
          <img src={b.imgSrc} />
          <div className="content">
            <h2 className="title">{b.title}</h2>
            <p className="description">{b.description}</p>
            <button className="button">{b.buttonText}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoubleBanner;
