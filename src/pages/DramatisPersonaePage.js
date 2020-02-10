import React from "react";

import { Link } from "react-router-dom";

const DramatisPersonaePage = () => (
  <div className="bg-yellow p-5 d-flex flex-column align-items-center">
    <h1 className="mb-4 font-italic">Dramatis Personae</h1>
    <ul>
      <li>HAMLET, Prince of Denmark.</li>
      <li>CLAUDIUS, King of Denmark, Hamlet’s uncle.</li>
      <li>The GHOST of the late king, Hamlet’s father.</li>
      <li>GERTRUDE, the Queen, Hamlet’s mother, now wife of Claudius.</li>
      <li>POLONIUS, Lord Chamberlain.</li>
      <li>LAERTES, Son to Polonius.</li>
      <li>OPHELIA, Daughter to Polonius.</li>
      <li>HORATIO, Friend to Hamlet.</li>
      <li>FORTINBRAS, Prince of Norway.</li>
      <li>VOLTEMAND, Courtier.</li>
      <li>CORNELIUS, Courtier.</li>
      <li>ROSENCRANTZ, Courtier.</li>
      <li>GUILDENSTERN, Courtier.</li>
      <li>MARCELLUS, Officer.</li>
      <li>BARNARDO, Officer.</li>
      <li>FRANCISCO, a Soldier</li>
      <li>OSRIC, Courtier.</li>
      <li>REYNALDO, Servant to Polonius.</li>
      <li>Players.</li>
      <li>A Gentleman, Courtier.</li>
      <li>A Priest.</li>
      <li>Two Clowns, Grave-diggers.</li>
      <li>A Captain.</li>
      <li>English Ambassadors.</li>
      <li>
        Lords, Ladies, Officers, Soldiers, Sailors, Messengers, and Attendants.
      </li>
    </ul>
    <Link to="/" className="btn btn-dark font-italic mt-4">
      Go home
    </Link>
  </div>
);

export default DramatisPersonaePage;
