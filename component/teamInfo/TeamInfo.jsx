import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./teamInfo.css";
import teamData from "../../teamData.json";

function TeamInfo() {
  const { id } = useParams();
  console.log(id);
  const team = teamData?.teamData.find((team) => team.id == id);
  console.log(team);
  return (
    <div>
      <div className="activityPage-body">
        {team && (
          <table
            key={team.id}
            className="activityPage-body"
            style={{ backgroundImage: `url(${team.image})` }}
          >
            <tbody>
              <tr>
                <td className="ActivityBanner">
                  <h1>{team.title}</h1>
                </td>
              </tr>
              <tr>
                <td className="activity-explanation"></td>
              </tr>
            </tbody>
          </table>
        )}
        <p className="p-teamInfo">
        We place emphasis on the individual and give individual attention to
        each student. Our school strives for excellence and unquestionable
        professionalism. Our {team.title} team implements all these and gives
        pride to our school.
      </p>
      </div>
      
    </div>
  );
}

export default TeamInfo;
