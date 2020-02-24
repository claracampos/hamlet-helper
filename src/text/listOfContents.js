import React from "react";
import Act1Scene1 from "../text/act1/Act1Scene1";
import Act1Scene2 from "../text/act1/Act1Scene2";
import Act1Scene3 from "../text/act1/Act1Scene3";
import Act1Scene4 from "../text/act1/Act1Scene4";
import Act1Scene5 from "../text/act1/Act1Scene5";
import Act2Scene1 from "../text/act2/Act2Scene1";
import Act2Scene2 from "../text/act2/Act2Scene2";
import Act3Scene1 from "../text/act3/Act3Scene1";
import Act3Scene2 from "../text/act3/Act3Scene2";
import Act3Scene3 from "../text/act3/Act3Scene3";
import Act3Scene4 from "../text/act3/Act3Scene4";
import Act4Scene1 from "../text/act4/Act4Scene1";
import Act4Scene2 from "../text/act4/Act4Scene2";
import Act4Scene3 from "../text/act4/Act4Scene3";
import Act4Scene4 from "../text/act4/Act4Scene4";
import Act4Scene5 from "../text/act4/Act4Scene5";
import Act4Scene6 from "../text/act4/Act4Scene6";
import Act4Scene7 from "../text/act4/Act4Scene7";
import Act5Scene1 from "../text/act5/Act5Scene1";
import Act5Scene2 from "../text/act5/Act5Scene2";

const listOfContents = [
  {
    title: "Act I",
    scenes: [
      "Scene I. Elsinore. A platform before the Castle.",
      "Scene II. Elsinore. A room of state in the Castle",
      "Scene III. A room in Polonius’s house.",
      "Scene IV. The platform.",
      "Scene V. A more remote part of the Castle."
    ],
    components: [
      <Act1Scene1 />,
      <Act1Scene2 />,
      <Act1Scene3 />,
      <Act1Scene4 />,
      <Act1Scene5 />
    ]
  },
  {
    title: "Act II",
    scenes: [
      "Scene I. A room in Polonius’s house.",
      "Scene II. A room in the Castle."
    ],
    components: [<Act2Scene1 />, <Act2Scene2 />]
  },
  {
    title: "Act III",
    scenes: [
      "Scene I. A room in the Castle.",
      "Scene II. A hall in the Castle.",
      "Scene III. A room in the Castle.",
      "Scene IV. Another room in the Castle."
    ],
    components: [<Act3Scene1 />, <Act3Scene2 />, <Act3Scene3 />, <Act3Scene4 />]
  },
  {
    title: "Act IV",
    scenes: [
      "Scene I. A room in the Castle.",
      "Scene II. Another room in the Castle.",
      "Scene III. Another room in the Castle.",
      "Scene IV. A plain in Denmark.",
      "Scene V. Elsinore. A room in the Castle.",
      "Scene VI. Another room in the Castle.",
      "Scene VII. Another room in the Castle."
    ],
    components: [
      <Act4Scene1 />,
      <Act4Scene2 />,
      <Act4Scene3 />,
      <Act4Scene4 />,
      <Act4Scene5 />,
      <Act4Scene6 />,
      <Act4Scene7 />
    ]
  },
  {
    title: "Act V",
    scenes: ["Scene I. A churchyard.", "Scene II. A hall in the Castle."],
    components: [<Act5Scene1 />, <Act5Scene2 />]
  }
];

export default listOfContents;
