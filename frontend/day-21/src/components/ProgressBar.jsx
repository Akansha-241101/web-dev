const ProgressBar = ({ progressValue }) => {
  return (
    <section className="progress-bar-section">
      <div className="progress-bar-container">
        <div className="progress-bar-header">
          <h3>Progress Bar filled by</h3>
          <p>{progressValue}%</p>
        </div>
        <div className="progress-bar">
          <div
            className="progress-value"
            style={{
              width: `${progressValue}%`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;
