import React from "react";

import Star from "assets/images/Star";
import Label from "assets/images/Label";

const CollegeCard = ({ data }) => {
  return (
    <div className="p-relative">
      {data.promoted && <div className="promoted text-white">promoted</div>}
      <div className="card">
        <div className="d-grid p-2 card-img align-between">
          <div className="bg-squash d-inline-block p-1 rounded-sm justify-self-end mt-2">
            <div className="text-white text-center">
              <span className="heading-3">{data.rating}</span>/5
            </div>
            <div className="text-white">{data.rating_remarks}</div>
          </div>
          <div className="d-flex justify-between">
            <div className="d-grid flow-col gap-2">
              {data.tags.map((tag) => (
                <div
                  className="rounded-full bg-white px-2 text-grey lh-2 text-capitalize"
                  key={tag}
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="text-white">#{data.ranking}</div>
          </div>
        </div>
        <div className="p-2 d-grid gap-2 flow-col justify-between">
          <div>
            <div className="d-flex">
              <div className="heading-3">{data.college_name}</div>
              <div className="ml-1 d-flex align-items-center">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star
                    key={item}
                    fill={data.rating >= item ? "#444444" : "#a2a2a2"}
                  />
                ))}
              </div>
            </div>
            <div className="d-grid gap-2 justify-start flow-col">
              {data.nearest_place.map((place, index) => (
                <React.Fragment key={place}>
                  <div
                    className={index === 0 ? "text-grey" : "text-grey-light"}
                  >
                    {place}
                  </div>
                  {index !== data.nearest_place.length - 1 && (
                    <div className="text-grey-light">|</div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="d-flex mt-1">
              <div className="text-primary text-bold">93% Match :</div>&nbsp;
              <div className="text-grey-light">
                {data.famous_nearest_places}
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex text-grey">
              {data.discount ? (
                <div className="d-flex justify-end w-100">
                  <s>₹{data.original_fees}</s>
                  <div className="pl-1 p-relative">
                    <Label className="tag" width="1.4rem" height="1.4rem" />
                    <div className="price-tag text-white">{data.discount}</div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="text-red heading-2 text-right">
              ₹{data.discount ? data.discounted_fees : data.original_fees}
            </div>
            <div className="text-grey text-md text-right">
              {data.fees_cycle}
            </div>
          </div>
        </div>
        <div className="d-flex justify-between align-items-center">
          <div className="offer-section py-1 px-2 mb-2 bg-primary">
            {data.offertext}
          </div>
          <div className="text-primary d-grid flow-col text-bold pr-2 mb-2">
            {data.amenties.map((benfit, index) => (
              <React.Fragment key={benfit}>
                <div className="text-bold">{benfit}</div>
                {index !== data.nearest_place.length - 1 && (
                  <>&nbsp;&bull;&nbsp;</>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
