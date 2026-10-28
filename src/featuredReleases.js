import React from "react";

// Releases shown in the About page "Featured album" section, newest first.
// One release renders open on desktop; on mobile each is a collapsible row.

const featuredReleases = [
  {
    title: "Ossuary",
    coverUrl: "/covers/ossuary-cover.jpg",
    genre: "post-dubstep / bass / wave",
    released: "May 18, 2021",
    links: [
      { label: "Buy on Bandcamp", url: "https://gladkill.bandcamp.com/album/ossuary" },
      { label: "Listen on Spotify", url: "https://open.spotify.com/album/2A0O93A2o1J9mf0OovwSnf" },
    ],
    description: (
      <>
        <em>Ossuary</em> has been a longtime coming. His official follow up to
        2016’s <em>After Death</em>, Ossuary is a collection of post-dubstep
        compositions with influences ranging from wave, garage, grime, bass
        music, trap, melodic hip hop to everything in-between. With a heavy
        emphasis on melody and harmony, Gladkill has put together a compendium
        of songs that go beyond their electronic origin.
      </>
    ),
    quote:
      "I wanted to write tracks with recognizable and unforgettable melodies. If I was to sit down at a piano, or pick up a guitar and play a phrase, you would know exactly which song I was playing.",
    story:
      "An ossuary is a building, chest or site made to serve as the final resting place of human remains. The album was influenced by Gladkill’s father’s passing in late 2017. With the album nearing completion in late 2018, the drive holding the primary project files for the album was damaged and the backup corrupted. Feeling completely dis-heartened, Gladkill stepped away from releasing new music and left a lot of the tracks on this album unfinished and abandoned. With renewed musical inspiration (and a good amount of free time due to COVID) Gladkill painstakingly rebuilt and re-recorded the original tracks and wrote new material to accompany the original vision throughout 2019 and 2020. The release of this album marks a tremendous burden removed from the artist’s shoulders. With a reinvigorated passion for songwriting and performance, Gladkill is back, and is ready to continue pushing and evolving the melodic low end sound that he has helped pioneer.",
  },
];

export default featuredReleases;
