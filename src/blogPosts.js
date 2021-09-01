const blogPosts = [
  {
    title: "Gladkill Live - Denver, CO 9/8/2021",
    createdOn: "August 30, 2021",
    imgSrc: "/blogImg/denver-flyer-sep-2021.png",
    featured: true,
    links: [
      {
        name: 'tickets',
        url: 'https://www.universe.com/events/wormhole-wednesday-tickets-LT8M1B',
      }
    ],
    body: 'Starting next month, the awesome humans at Wormhole Entertainment will be bringing back wormhole Wednesdays - not only to the bay area, but to Denver as well. I am beyond excited to kick things off in Denver on 9/8/21. See you there!'
  },
  {
    title: "Gladkill Live - Eugene, OR 9/2/2021",
    createdOn: "August 20, 2021",
    imgSrc: "/blogImg/eugene-flyer-sep-2021.png",
    featured: true,
    links: [
      {
        name: 'tickets',
        url: 'https://www.ticketweb.com/event/wormhole-thursdays-w-gladkill-the-big-dirty-tickets/11303515',
      }
    ],
    body: 'Very excited to be coming back to Eugene, OR with labrat on sept 2! Wormhole Entertainment continues expanding and I\'m honored to kick off wormhole thursdays at the Big Dirty.'
  },
  {
    title: "Mobilecoin Radio Live Stream",
    createdOn: "June 21, 2021",
    imgSrc: "/blogImg/mobilecoinradio.png",
    featured: false,
    links: [
      {
        name: 'stream link',
        url: 'https://www.twitch.tv/mobilecoinradio',
      }
    ],
    body: 'I\'ll be doing a live set for the good folks over at Mobilecoin Radio. Tune in for live streams from some talented folks on Friday, June 25th at 1PM PST.'
    
  },
  {
    title: "July SoCal Show Announcement!",
    createdOn: "June 2, 2021",
    imgSrc: "/blogImg/kb-flyer.jpeg",
    featured: false,
    links: [
      {
        name: 'ticket link',
        url: 'https://kickbackatthepark.eventbrite.com',
      }
    ],
    body: 'SoCal -  coming back  your way with a stacked lineup in July. Sound Xperiment presents: Kick Back at the Park, Featuring Yheti, Truth, Tsuruda, Jantsen, myself + Many More on July 10-11th, 2021 from 12:00pm - 10:00pm.'
    
  },
  {
    title: "Ossuary Out Now!",
    createdOn: "May 18, 2021",
    imgSrc: "/covers/ossuary-cover.jpg",
    featured: true,
    links: [
      {
        name: 'Buy on Bandcamp',
        url: 'https://gladkill.bandcamp.com/album/ossuary',
      },
      {
        name: 'Listen on Spotify',
        url: 'https://open.spotify.com/album/2A0O93A2o1J9mf0OovwSnf',
      },
    ],
    body: 'Presenting \'Ossuary\'. A collection of ten tracks written over the last several years, with influences ranging from wave, garage, grime, bass music, trap, melodic hip hop to everything in-between. This is a very special album to me and a huge cathartic experience finally releasing it into the world. Thank you for listening.'
  },
  {
    title: "Analog Whispers - Second Single From 'Ossuary'.",
    createdOn: "May 4, 2021",
    imgSrc: "/blogImg/analog-whispers-cover.jpg",
    links: [
      {
        name: 'The Untz write-up',
        url: 'https://www.theuntz.com/news/gladkill-teases-long-awaited-album-with-analog-whispers/',
      },
      {
        name: 'listen on Soundcloud',
        url: 'https://soundcloud.com/theuntz/gladkill-analog-whispers?fbclid=IwAR0tctq_ayPhV8vmhXaztKaNJPR7iIwRwDF7lcoD9g-YrOEEBWxOm1P-MsE',
      },
      {
        name: 'Buy on Bandcamp',
        url: 'https://gladkill.bandcamp.com/track/analog-whispers',
      },
    ],
    featured: true,
    body: 'Presenting \'Analog Whispers\', the second single off of \'Ossuary\'. Special shout out to The Untz for premiering this single - it is definitely one of my favorites off of the album. You  can find their awesome write-up about it below. '

  },
  {
    title: "Ashes - First Single From 'Ossuary'.",
    createdOn: "May 4, 2021",
    imgSrc: "/blogImg/ashes-cover.jpg",
    featured: true,
    links: [
      {
        name: 'Buy on Bandcamp',
        url: 'https://gladkill.bandcamp.com/track/ashes',
      },
      {
        name: 'Listen on Soundcloud',
        url: 'https://soundcloud.com/.../ashes-ossuary-coming-may-18-2021',
      },
      {
        name: 'Listen on Spotify',
        url: 'https://open.spotify.com/album/2A0O93A2o1J9mf0OovwSnf',
      },
    ],
    body: 'The first single off of Gladkill\'s long awaited album \'Ossuary\', \'Ashes\' is a return to form, setting the mood with haunting vocal ambience intertwined with melancholy piano and deep rich bass. \'Ossuary\' will be available everywhere you stream music on May 18, 2021.'
  },
  {
    title: "Gladkill Is Now On Audius.",
    createdOn: "May 4, 2021",
    imgSrc: "/blogImg/audius-admat.jpg",
    links: [
      {
        name: 'Audius Link',
        url: 'https://audius.co/gladkill'
      },
    ],
    body: 'Gladkill is now on Audius! Come check out my latest compilation, \'Coven Collection\', as well as future upcoming tunes on this platform.',
  },
  {
    title: "Satellite Respond: August Falls",
    createdOn: "December 15th, 2020",
    imgSrc: "/blogImg/sr-august-falls-cover.jpg",
    links: [
      {
        name: 'The Untz write-up',
        url: 'www.theuntz.com/news/gladkill-rei…e-respond-outfit/',
      },
      {
        name: 'Buy on Bandcamp',
        url: 'https://satelliterespond.bandcamp.com/track/august-falls',
      },
      {
        name: 'Listen on Soundcloud',
        url: 'https://soundcloud.com/theuntz/satellite-respond-august-falls?fbclid=IwAR2KZp4SUZQOU_X2gzHUHTb8iqrZ0pdV9Ej63QwgKkTc-KHrEst570daal4',
      },
      {
        name: 'Listen on Spotify',
        url: 'https://open.spotify.com/album/56ScyI3j56ssa4G8m3Achx',
      },
    ],
    body: 'The third single from the Satellite Respond project, "August Falls" shows yet another facet of the Satellite Respond sound, taking a more traditionally instrumental indie rock approach. Special thanks to the Untz for featuring this single and doing a write-up for the project, which you can find below.',
  },
  {
    title: "Satellite Respond: Medusa",
    createdOn: "October 26th, 2020",
    imgSrc: "/blogImg/sr-medusa-cover.jpg",
    links: [
      {
        name: 'Buy on Bandcamp',
        url: 'https://satelliterespond.bandcamp.com/track/medusa',
      },
      {
        name: 'Listen on Soundcloud',
        url: 'https://soundcloud.com/satellite-respond/medusa',
      },
      {
        name: 'Listen on Spotify',
        url: 'https://open.spotify.com/album/4Fic00AoJ0nTiDqBqCVzzj',
      },
    ],
    body:
      "The second single from Gladkill’s project ‘Satellite Respond’ is available now, everywhere you listen to music. 'Medusa' features haunting vocoded vocals of loss,love and reconciliation mixed with evolving analog synth textures overlaid on complex percusion.",
  },
  {
    title: "Satellite Respond: Fugue State",
    createdOn: "September 22th, 2020",
    imgSrc: "/blogImg/sr-fugue-state-cover.jpg",
    links: [
      {
        name: 'Buy on Bandcamp',
        url: 'https://satelliterespond.bandcamp.com/track/fugue-state',
      },
      {
        name: 'Listen on Soundcloud',
        url: 'https://soundcloud.com/satellite-respond/fugue-state',
      },
      {
        name: 'Listen on Spotify',
        url: 'https://open.spotify.com/album/0GrGoapuXsN9in1XWZmkNG',
      },
    ],
    body:
      "The first single from Gladkill’s other project ‘Satellite Respond’ is available now, everywhere you listen to music. Live guitar, vocals, and piano meet glitchy drums, ambient soundscapes and haunting melodies to create Satellite Respond’s nuanced other-worldly sound.  Next single coming very soon, as well as the debut EP “Transmission Zero” in early 2021.",
  },
  {
    title: "Sophrosyne Sound",
    createdOn: "August 12th, 2020",
    imgSrc: "/blogImg/sophro-mini-2.jpg",
    links: [
      {
         name:'Booking Contact',
         url:'mailto:izzy@sophrosynesound.com'
      },
      {
        name:'Sophrosyne Sound Home',
        url:'https://sophrosynesound.com',
      },
    ],
    body:
      "The Gladkill project is now being represented by Sophrosyne Sound. This marks the beginning of an amazing new chapter in my musical journey and I can't wait to share what the future of my music holds. Reach out to izzy@sophrosynesound.com for booking and general inquiries.",
  },
  {
    title: "Welcome To The New Site.",
    createdOn: "July 10th, 2020",
    imgSrc: "/blogImg/gk-tree.jpg",
    body:
      "Welcome to the new and improved Gladkillmusic.com, where you can find all news, releases, free music, show announcements and more. Stay tuned for new releases, exclusive merch drops, and up to date information. ",
  },
  {
    title: "Coven Collection Now Available!",
    createdOn: "March 20th, 2020",
    imgSrc: "/blogImg/coven-cover-mini.jpg",
    links: [
      {
        name: 'Buy on Bandcamp',
        url: 'https://gladkill.bandcamp.com/album/coven-collection',
      },
      {
        name: 'Listen on Spotify',
        url: 'https://open.spotify.com/album/7pMQE3kI4iKJoUthxjBsIX',
      },
    ],
    body: `Introducing the Coven Collection. 19 tracks from 2016-2019 that have not seen the light of day, from WiPs to mixtape-exclusives to Live-only tracks. Now available everywhere you listen to music.`,
  },
];

export default blogPosts;


