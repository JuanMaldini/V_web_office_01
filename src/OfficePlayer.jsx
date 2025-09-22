import "./App.css";

function OfficePlayer() {
  return (
    <div className="rooot">
      <iframe
        style={{ visibility: 'visible', border: 'none',width: '100%',height: '100%'}}
        id='iframe_1'
        src='https://connector.eagle3dstreaming.com/v6/eyJvd25lciI6IlZhbmlzaGluZ1BvaW50M0QiLCJhcHBOYW1lIjoiVk9mZmljZSIsImNvbmZpZ05hbWUiOiJWT2ZmaWNlIn0='
        title='Office Configurator'
        allowFullScreen
      />
    </div>
  );
}

export default OfficePlayer;