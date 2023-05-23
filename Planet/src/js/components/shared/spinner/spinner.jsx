import React from "react";

export const Spinner = ({loadingText}) => {
  return (
    <div className="spinnerWrap">
        <div className="loadingio-spinner-spin-d3mtgzoxi6">
        <div className="ldio-dlddypcolna">
            <div>
            <div></div>
            </div>
            <div>
            <div></div>
            </div>
            <div>
            <div></div>
            </div>
            <div>
            <div></div>
            </div>
            <div>
            <div></div>
            </div>
            <div>
            <div></div>
            </div>
            <div>
            <div></div>
            </div>
            <div>
            <div></div>
            </div>
        </div>
        </div>
        {loadingText && <p className="subtitle" style={{textAlign: 'center'}}>{loadingText}</p>}
    </div>
  );
};
