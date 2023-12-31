import PropTypes from "prop-types";
import React from "react";

const FeatureIconSevenSingle = ({ data, spaceBottomClass, textAlignClass }) => {
  return (
    <div className="col-md-4">
      <div
        className={`support-wrap-6 support-shape ${
          spaceBottomClass ? spaceBottomClass : ""
        } ${textAlignClass ? textAlignClass : ""}`}>
        <div className="support-content-6">
          <img src={process.env.PUBLIC_URL + data.image} alt="polyfood" />
          <h5>{data.title}</h5>
          <p>{data.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

FeatureIconSevenSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string,
  textAlignClass: PropTypes.string,
};

export default FeatureIconSevenSingle;
