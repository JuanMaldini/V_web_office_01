import "./App.css";

function OfficePlayer() {
  return (
    <div className="rooot">
      <iframe
      style={{ visibility: 'visible', border: 'none' }}
      id='iframe_1'
      src='https://connector.eagle3dstreaming.com/v6/eyJvd25lciI6IlZhbmlzaGluZ1BvaW50M0QiLCJhcHBOYW1lIjoiVk9mZmljZSIsImNvbmZpZ05hbWUiOiJWT2ZmaWNlIn0='
      height='100%'
      width='100%'
      allowfullscreen
      title='host'
      ></iframe>
    </div>
  );
}

export default OfficePlayer;