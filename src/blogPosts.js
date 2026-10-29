const blogPosts = [
  // {
  //   title:"",
  //   kind:"",          // RELEASE, MIX, SHOW, ARCHIVE, VIDEO or NEWS
  //   tracks:[],        // optional, mix posts only
  //   createdOn:"",
  //   imgSrc:"",
  //   featured:false,
  //   links:[{name:'',url:''}],
  //   body:"",
  // },
  {
    title:"Nipsey Hussle - Racks in the Middle (Gladkill Edit)",
    kind:"RELEASE",
    createdOn:"September 29, 2026",
    imgSrc:"/blogImg/nipsey-racks-cover.jpg",
    featured:false,
    links:[
      {name:'soundcloud', url: 'https://soundcloud.com/gladkill/racks-edit'},
      {name:'patreon', url: 'https://patreon.com/gladkill'},
    ],   
    body:"stoked to have released the first remix of my Edit Series - Nipsey Hussle - Racks in the Middle (Gladkill Edit) on soundcloud and Patreon!"
  },
  {
    title:"Gladkill: You Are The Knife",
    kind:"RELEASE",
    createdOn:"April 30, 2026",
    imgSrc:"/blogImg/you-are-the-knife-cover.jpg",
    featured:false,
    links:[
      {name:'bandcamp',url:'https://gladkill.bandcamp.com/track/you-are-the-knife'},
      {name:'soundcloud', url: 'https://soundcloud.com/gladkill/youaretheknife'},
      {name: 'spotify',url:'https://open.spotify.com/album/3TSfZyQSvG822yUY9igcV6'}
    ],   
    body: "Presenting the new single from Gladkill, 'You Are The Knife'. Melancholy bass and wave - 'You are the knife I turn inside myself'."
  },
  {
    title:"Gladkill: The Art Of Letting Go",
    kind:"RELEASE",
    createdOn:"April 30, 2026",
    imgSrc:"/blogImg/the-art-of-letting-go-cover.jpg",
    featured:false,
    links:[
      {name:'bandcamp',url:'https://gladkill.bandcamp.com/track/the-art-of-letting-go'},
      {name:'soundcloud', url: 'https://soundcloud.com/gladkill/artoflettinggo'},
      {name: 'spotify',url:'https://open.spotify.com/track/7AMQc9AU2dmft6qe68nIE0?autoplay_ok=1'}
    ],   
    body: "Presenting the new single from Gladkill, 'The Art Of Letting Go'. A melodic meditation on the art of detachment. Availbale Now, everywhere you listen to music."
  },
  {
    title:"Symmetry Festival 2026",
    kind:"NEWS",
    createdOn:"April 14, 2026",
    imgSrc:"/blogImg/symmetry-flyer-26.jpg",
    featured:false,
    links:[
      {name:'Symmetry Fest', url: 'https://symmetryfestival.com/'},
    ],
    body: "Coming back to Symmetry Festival this year - so stoked to play some music for my fam and friends. Always a pleasure to be invited back to this really special event and I can't wait to see how it's grown this year."
  },
  {
    title:"Synthetic Memories - Gladkill Sample Pack",
    kind:"NEWS",
    createdOn:"March 30, 2026",
    imgSrc:"/blogImg/sample-pack-001.jpg",
    featured:false,
    links:[
      {name:'patreon', url: 'https://patreon.com/gladkill'},
    ],
    body: "Stoked to share my first sample pack - Synthetic Memories.58 sounds, basses, melodies, atmospheric samples, and FM synthesized drums & percussion . Available to all paying Patrons $5 and above, or as a one-time purchase for non subscribers."
  },
  {
    title:"KATO - Turn The Lights Off (Gladkill Edit)",
    kind:"RELEASE",
    createdOn:"February 27, 2026",
    imgSrc:"/blogImg/kato-rmx-promo.jpg",
    featured:false,
    links:[
      {name:'patreon', url: 'https://patreon.com/gladkill'},
    ],
    body: "Been making flips of some tracks I'm feeling and I'll be throwing them up on my Patreon for paying members. First up- yeah it's become a meme track but Kato's 'Turn The Lights Off' is a banger. My edit is now available exclusively via Patreon."  
  },
  {
    title:"Hardware Sessions 2026",
    kind:"NEWS",
    createdOn:"February 11, 2026",
    imgSrc:"/blogImg/gk-hw-sessions.jpg",
    featured:false,
    links:[
      {name:'youtube',url:'https://www.youtube.com/@gladkillofficial'},
      {name:'patreon', url: 'https://patreon.com/gladkill'},
    ],  
    body:"What's up yall, I’ve been really putting some work into my Patreon content this year. Aside from the weekly hardware performance videos, I'm working on production tutorials / videos explaining my song-writing approach, sound design sessions, and mixing and engineering tips. I’ve also got a grip of remixes and bootlegs that I wrote over the last year that I’ll be posting exclusively there (since you can’t really post remixes anywhere else without getting copyright strikes!) First one of those is coming next week. The thing I’m most excited about - I’ve been working on a series of sample / melody packs created with a lot of my audio hardware, and the first volume is coming your way in March! And of course, lots of new music coming soon as well. Thank you for listening!"
  },
  {
    title:"Gladkill: Control",
    kind:"RELEASE",
    createdOn:"December 4, 2025",
    imgSrc:"/blogImg/gladkill-control-cover.jpg",
    featured:false,
    links:[
      {name:'bandcamp',url:'https://gladkill.bandcamp.com/track/control'},
      {name:'soundcloud', url: 'https://soundcloud.com/gladkill/control'},
      {name: 'spotify',url:'https://open.spotify.com/album/3TSfZyQSvG822yUY9igcV6'}
    ],    
    body:"Presenting my newest single, 'Control'A melodic track mixing elements of bass & wave, reminiscent of my earlier 'Ghostwork' sound. Out now, everywhere you listen to music.",
  },
  {
    title:"Dark Mode Volume 2: Tracklist and Download",
    kind:"MIX",
    tracks:[
      "Gladkill - ID",
      "Juche - Forgive",
      "Planet V - Stay",
      "Nipsey Hussle - Double Up",
      "Backwhen & Everyst - Halo",
      "Gladkill - ID",
      "Kay.xo - Begin Again (Nick Neutronz remix)",
      "Kareful - This City",
      "TF Marz - Language (W Jevon Ives)",
      "Gladkill - Over (out now)",
      "Nick Neutronz - ID",
      "Eastghost - ID",
      "Ivy Lab - Left With You",
      "Everyst - Avalon",
      "Gladkill - ID",
      "Seraph. - Pulse",
      "Gladkill - ID",
      "Pacific Patterns - ID",
      "Ozer - Blow My High (feat Sussy)",
      "Future - Brazzier (Gladkill RMX)",
      "ESCPE - Nitewalk",
      "Gladkill - ID",
      "Soudiere & Roland Jones - Don't Be Scared",
      "Gladkill - ID",
      "Alex Unger - Made In The East",
      "OAKK - Moving On",
      "Gladkill - ID",
    ],
    createdOn:"November 21, 2025",
    imgSrc:"/blogImg/dark-mode-vol-2-tracklist.jpg",
    featured:false,
    links:[
      {name:'bandcamp',url:'https://gladkill.bandcamp.com/track/dark-mode-volume-2'},
      {name:'soundcloud', url: 'https://soundcloud.com/beatlabradio/beat-lab-537-gladkill-darkmode-vol-2'},
    ],    
    body:"Dark/Mode volume 2 track list now available, as well as exclusive free download via Bandcamp. Thanks for listening! ",
  },
  {
    title:"Dark Mode Volume 2",
    kind:"MIX",
    createdOn:"November 14, 2025",
    imgSrc:"/blogImg/dark-mode-vol-2-cover.jpg",
    featured:false,
    links:[
      {name:'listen via Beat Lab Radio', url: 'https://soundcloud.com/beatlabradio/beat-lab-537-gladkill-darkmode-vol-2'},
    ],
    body:"Gladkill presents the second volume of his Dark/Mode mix series - a curated collection of originals and remixes, as well as unreleased ID's from like-minded producers & tracks from some of Gladkill's favorite artists, ranging from wave, bass, hip-hop, phonk, trap, melodic beats, and everything in between. Dark/Mode serves as a perfect soundtrack for a night drive, an intimate evening, a vibey afterparty, and other assorted after-hours activities.",
  },
  {
    title:"Gladkill: Over",
    kind:"RELEASE",
    createdOn:"October 30, 2025",
    imgSrc:"/blogImg/gladkill-over-cover.jpg",
    featured:false,
    links:[
      {name:'bandcamp',url:'https://gladkill.bandcamp.com/track/over'},
      {name:'soundcloud', url: 'https://soundcloud.com/gladkill/over'},
      {name: 'spotify',url:'https://open.spotify.com/album/4U2SDQGdYOtsj1uWLHpEHA'}
    ],
    body:"Gladkill: Over - the new moody deep bass wave-influenced single, drawing influence from wave and melodic bass. Available now, everywhere you listen to music.",
  },
  {
    title:"Eastghost b2b Gladkill - Symmetry Festival 2025",
    kind:"SHOW",
    createdOn:"October 6, 2025",
    imgSrc:"/blogImg/b2b-symmetry-25.jpeg",
    featured:false,
    links:[],
    body:"EASTGHOST b2b Gladkill set at Symmetry fest was one for the books. what a fun time. Shout out everyone who made it happen. Photography by the super talented Natalia / Intuitive Images",
  },
  {
    title:"Gladkill ft. borisisntreal: Consecution",
    kind:"RELEASE",
    createdOn:"June 20, 2025",
    imgSrc:"/blogImg/borisisntreal-consecution-cover.jpg",
    featured:false,
    links:[
      {name:'bandcamp',url:'https://borisisntreal.bandcamp.com/'},
      {name:'soundcloud', url: 'https://soundcloud.com/borisisntreal/resonantshell'},
      {name: 'spotify',url:'https://open.spotify.com/track/1HEHihmlFYtGhmefLS7ims'}
    ],
    body:"Consecution: A succession;  a sequence. A blending of aesthetics. A succession of sound. Jungle, wave, bass music, and breaks influences melded into a unique sonic experience. Originally appears on “Dark/Mode volume 1” mixtape in late 2024.",
  },
  {
    title:"borisisntreal: resonantshell",
    kind:"RELEASE",
    createdOn:"May 19, 2025",
    imgSrc:"/blogImg/borisisntreal-resonantshell-cover.jpg",
    featured:false,
    links:[
      {name:'bandcamp',url:'https://borisisntreal.bandcamp.com/'},
      {name:'soundcloud', url: 'https://soundcloud.com/borisisntreal/resonantshell'},
      {name: 'spotify',url:'https://open.spotify.com/track/2rPAOkINym79g0y4DYGDlQ'}
    ],
    body: "Exploring the concept that all of reality is a single consciousness experiencing itself. We are resonant shells: a pattern, an echo, a fragment of awareness reflecting the whole. This track captures that liminal space: where identity dissolves, and all that's left is the vibration of being. "
  },
  {
    title:"borisisntreal",
    kind:"NEWS",
    createdOn:"May 12, 2025",
    imgSrc:"/blogImg/bir-face-photo.jpg",
    featured:false,
    links:[
      {name:'website',url:'https://borisisntreal.com'},
      {name:'soundcloud', url: 'https://soundcloud.com/borisisntreal'},
      {name: 'spotify',url:'https://open.spotify.com/artist/6iJpvr5lNYrjdCM5nJ7sRJ'}
    ],
    body:"borisisntreal is the latest audio/visual project from Boris Gladkill. Merging experimental club music with interactive digital art, the project explores technology, identity, and the boundaries between sound and structure. Drawing from years of experience in the bass and electronic music scene, borisisntreal distills elements of breaks, beats, bass, and ambient into a minimal, intentional form.Debut single ‘resonantshell’ coming this Friday, May 16, 2025.",
  },
  {
    title:"Gladkill: HEXES",
    kind:"RELEASE",
    createdOn:"March 7, 2025",
    imgSrc:"/blogImg/hexes-cover.jpg",
    featured:true,
    links:[
      {name:'soundcloud',url:'https://soundcloud.com/gladkill/hexes'},
      {name:'bandcamp',url:'https://gladkill.bandcamp.com/track/hexes'},
    ],
    body:"Presenting my newest single: 'HEXES'. Now streaming everywhere you listen to music. Thanks for listening. ",
  },
  {
    title:"Gladkill Hardware Series 001",
    kind:"VIDEO",
    createdOn:"February 26, 2025",
    imgSrc:"/blogImg/hardware-series-001.jpg",
    featured:true,
    links:[{name:'Watch now',url:'https://www.youtube.com/watch?v=IGHzkTUMHiA'}],
    body:"The first of my new 'Hardware Series' videos is now up -  beats synthesized and performed on assorted hardware synths and set ups. I've been having a lot of fun writing outside of the computer ecosystem and taking a more tactile approach to my song writing.  Go check it out - more coming soon.",
  },
  {
    title:"Archive 002: Pragmatic",
    kind:"ARCHIVE",
    createdOn:"February 05, 2025",
    imgSrc:"/blogImg/gladkill-archives-pragmatic.jpg",
    featured:true,
    links:[
      {name:'Listen Here',
        url:"https://patreon.com/gladkill",
      }
    ],
    body:
    "Presenting the next single in the Archives series - Pragmatic. Listen now and learn more about the track exclusively on my Patreon."
  },
  {
    title:"Archive 001: Systems Critical",
    kind:"ARCHIVE",
    createdOn:"January 22, 2025",
    imgSrc:"/blogImg/gladkill-archives-systems-critical.jpg",
    featured:true,
    links:[
      {name:'Listen Here',
        url:"https://patreon.com/gladkill",
      }
    ],
    body:
    "Presenting the 'Archives' series - Unreleased music from multiple Gladkill eras spanning over multiple genres. Available exclusively via Patreon. You can now listen to the first single, Systems Critical, for free."
  },
  {
    title:"Gladkill Patreon Announce",
    kind:"NEWS",
    createdOn:"January 16, 2025",
    imgSrc:"/blogImg/gladkill-patreon-announce.jpg",
    featured:true,
    links:[
      {name:'Sign Up Free',
        url:"https://patreon.com/gladkill",
      }
    ],
    body:
    "This year I've decided to bring back my Patreon page, with exclusive monthly releases, synth & studio content, A/V art projects, samples & melody packs, and much more. First exclusive single coming very soon."
  },
  {
    title:"Symmetry Festival 2024",
    kind:"SHOW",
    createdOn:"September 11, 2024",
    imgSrc:"/blogImg/symmetry-artist-card-2024.jpg",
    featured:false,
    links:[
      {name:'tickets',
        url:"https://symmetryfestival.com/",
      }
    ],
    body:
    "Stoked to announce I'll be joining many of my wave & bass homies at @symmetryfestival this September. Massive line up full of some of my favorite artists with a whole stage dedicated to the wave sound. See you there."
  },
  {
    title:"'Dark Mode Volume 1'",
    kind:"MIX",
    createdOn:"September 9, 2024",
    imgSrc:"/blogImg/dark-mode-cover.jpg",
    featured:false,
    links:[
      {name:'Soundcloud',
        url:"https://soundcloud.com/beatlabradio/gladkill-darkmode-vol-1-beat-lab-radio-481",
      },
        {name:'Bandcamp',
        url:"https://gladkill.bandcamp.com/track/dark-mode-volume-1",
      }
    ],
    body:
    "I'm very happy to officially announce 'Dark/Mode' volume 1. 'Dark/Mode' is a curated collection of originals, unreleased previews and upcoming cuts, as well as other artists’ songs, ranging from downtempo, trip hop, bass music, to wave, garage, phonk, trap, and everything in between, that lean more towards the silky, melodic, sexy and introspective. A perfect soundtrack for a night drive, a chill evening, relaxing, meditation, and assorted after-hours activities. 'Dark/Mode' is dropping exclusively through Beat Lab Radio this Thursday, 9/12/24."
  },
  {
    title:"Fall 2024 Shows & Releases",
    kind:"NEWS",
    createdOn:"August 29, 2024",
    imgSrc:"/blogImg/fall-2024-shows-releases.jpg",
    featured:false,
    links:[],
    body:
    "Gladkill season is approaching. Fall is always my fav time of year. September kicking off proper with shows & releases!"
  },
  {
    title:"Reno, NV Show Announced",
    kind:"SHOW",
    createdOn:"August 28, 2024",
    imgSrc:"/blogImg/reno-afterburn-2024.jpg",
    featured:false,
    links:[],
    body:
    "Reno, NV! Catch me at Dead Ringer on 9/3 for this dope after burn party with a super stacked lineup. No presales on this one - tix will be at the door. See you there."
  },
  {
    title:"Future Unknown",
    kind:"RELEASE",
    createdOn:"July 10, 2024",
    imgSrc:"/blogImg/future-unknown-cover.jpg",
    featured:false,
    links:[
      {name:'Spotify',
        url:"https://open.spotify.com/artist/7Kpco2hTnFKHUP1Gj8dA17",
      },
      {name:'Soundcloud',
        url:"https://soundcloud.com/gladkill/future-unknown",
      },
      {name:'Bandcamp',
        url:"https://gladkill.bandcamp.com/track/future-unknown",
      }
    ],
    body:
    "Presenting 'Future Unknown' - A contemplation on the impermanence of all things.Out now everywhere you listen to music. Thank you for listening."
  },
  {
    title:"Beat Lab Radio 10 Yr Anniversary Announced",
    kind:"SHOW",
    createdOn:"May 15, 2024",
    imgSrc:"/blogImg/beat-lab-10-year.jpg",
    featured:false,
    links:[{name:'Tickets',url:'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.eventbrite.com%2Fe%2F10-years-of-beat-lab-radio-great-dane-gladkill-chase-manhattan-tickets-865173947567%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR30bA93yk4X-bUkJqUJomjw5VBzmCf4zk2Zn4hi8q1HvMWA_ca3cmMjjjg_aem_xqyyS9pYZkO5km7Wa9NQ9Q&h=AT1rhXTFNvenyG46amBu4ad5Abu5xTOMZ_ExjMq_Y6T5aDSXfc-7jkd8M5tQGay1GZ1i-3jh_S32jXYj0EsDhfVXkayFd7gsNRrxPlnE121-PE6b25qE4LrCjaefE9rKENr-rtPEtJWObvsySMulQQ&__tn__=R]-R&c[0]=AT0t9IbKlaI-6YczE_We223lPnkARIFYgMmjlzFZ-D2zeoLTeOfobVlfcxn0qj9qHoD7l-Kul7enLx9h_K9jIzKfnSg0UJasMm1zZiydsVgDI75iXxvJnZmmRLU6RPph5K0g14BtpkgJX_vNmAX5_MrU84Ed_qNPDvNhy28IH9RhePRcE4gogWfRazV9r9Hl3QFEzQdR1nIaWlB5D-F_V9SzqpUDZpw63iAO'}],
    body:
    "Stoked to announce that I’ll be joining my Beat Lab Radio family for a very special 10 year celebration June 15 in Bend OR. Beat Lab and Matt Wax have been huge supporters of the Gladkill project for over a decade now. I’ve done multiple BL mixes, and played some amazing live Beat Lab events. I can’t wait to celebrate 10 years of consistently fire mixes from cutting edge artists all over the world pushing the boundaries of electronic and bass music. I'll be joining a stacked line-up ft. Great Dane, Chase Manhattan & Welter Weight.",
  },
  {
    title:"Gladkill - Entropy",
    kind:"RELEASE",
    createdOn:"February 21, 2024",
    imgSrc:"/blogImg/entropy-cover.jpg",
    featured:false,
    links:[
      {name:'Spotify',
        url:"https://open.spotify.com/artist/7Kpco2hTnFKHUP1Gj8dA17",
      },
        {name:'Soundcloud',
        url:"https://soundcloud.com/gladkill/entropy",
      },
      
        {name:'Bandcamp',
        url:"https://gladkill.bandcamp.com/track/entropy",
      },
    ],
    body:
    "Presenting 'Entropy' - An emotional meditation on the uncertainty of existence. Out now everywhere you listen to music. Thanks for listening.",
  },
  {
    title:"Gladkill - On The Way",
    kind:"RELEASE",
    createdOn:"January 31, 2024",
    imgSrc:"/blogImg/on-the-way-cover.jpg",
    featured:false,
    links:[
      {name:'Spotify',
        url:"https://open.spotify.com/artist/7Kpco2hTnFKHUP1Gj8dA17",
      },
        {name:'Soundcloud',
        url:"https://soundcloud.com/gladkill/on-the-way",
      },
      
        {name:'Bandcamp',
        url:"https://gladkill.bandcamp.com/track/on-the-way",
      },
    ],
    body:
    "Presenting 'On The Way'. An exploration into melodic maximalism, emotion and harmony. Out now everywhere you listen to music.Thanks for listening.",
  },
  {
    title:"Washington D.C. Show Announced",
    kind:"SHOW",
    createdOn:"July 11, 2023",
    imgSrc:"/blogImg/dc-show-2023.jpg",
    featured:false,
    links:[{name:'Tickets',url:''}],
    body:"Stoked to be coming back to Washington DC this Thursday with the homie ESCPE and a stacked lineup. Can't wait to be back on the East coast!",
  },
  {
    title:"Wormhole Showcase in San Francisco Announced",
    kind:"SHOW",
    createdOn:"June 30, 2023",
    imgSrc:"/blogImg/wormhole-showcase-2023.jpg",
    featured:false,
    links:[{name:'Tickets',url:'https://www.eventbrite.com/e/wormhole-music-group-summer-showcase-tickets-640899958027?fbclid=IwY2xjawErwbdleHRuA2FlbQIxMAABHUyVciHZAFzyGZ3NoILK5mr8Hd1VXdzFZe-qrtTgvKof2mdf1MfjteTB9A_aem_wLqNmdM1jsTuO7bKZTioiQ'}],
    body:"Can't wait to be back in the bay area this weekend for an awesome day party/ Wormhole Music Group showcase tomorrow. Hope to see some friends out for this one. Bringing lots of melodic bass and wave cuts from myself and the homies.",
  },
  {
    title:"Support for Daily Bread and Big K.R.I.T Announced",
    kind:"SHOW",
    createdOn:"June 14, 2023",
    imgSrc:"/blogImg/daily-bread-2023.jpg",
    featured:false,
    links:[{name:'Tickets',url:'https://www.axs.com/series/18643/daily-bread-tickets'}],
    body:
    "It's my pleasure to announce that I'll be joining Daily Bread's  Cinema In The Sky ! An all day event with an insane line-up at Denver CO's Mission Ballroom September 15, 2023.You can get pre-sales this Wednesday, June 14th @ 10am MST / 12pm EST with the password 'TELESCOPE' (not case sensitive!)Can't wait for this one. Going to be a truly special evening of music.",
  },
  {
    title:"Stilldream Festival Announced",
    kind:"SHOW",
    createdOn:"May 31, 2023",
    imgSrc:"/blogImg/stilldream-2023-announce.jpg",
    featured:false,
    links:[{name:'',url:''}],
    body:"Catch me at Stilldream festival in California this june 8-12. An amazing festival with an eclectic underground line-up that I have had the pleasure of playing before. I can't wait to be back.",
  },
  {
    title:"New Single - Sever",
    kind:"RELEASE",
    createdOn:"May 19, 2023",
    imgSrc:"/blogImg/sever-cover.jpg",
    featured:false,
    links:[
      {name:'Spotify',
        url:"https://open.spotify.com/artist/7Kpco2hTnFKHUP1Gj8dA17",
      },
        {name:'Soundcloud',
        url:"https://soundcloud.com/gladkill/sever",
      },
      
        {name:'Bandcamp',
        url:"https://gladkill.bandcamp.com/track/sever",
      },
    ],
    body:"Presenting my new single, 'Sever' - out everywhere you listen to music. ",
  },
  {
    title:"Infrasound 2023 Announced",
    kind:"SHOW",
    createdOn:"May 8, 2023",
    imgSrc:"/blogImg/infrasound-2023.jpg",
    featured:false,
    links:[{name:'',url:''}],
    body:"I'm absolutely elated to announce that I will be joining the diverse and talented line-up at this year's Infrasound festival. Set times are now out. See you saturday May 20th on the Portal stage.",
  },
  {
    title:"Portland Surprise Show Announced",
    kind:"SHOW",
    createdOn:"may 5, 2023",
    imgSrc:"/blogImg/portland-secret-2023.jpg",
    featured:false,
    links:[{name:'',url:''}],
    body:"Secret's out... playing with the wave gang next Friday at North Warehouse for Dripology.  Can't wait, got a very special wave set planned for this one.",
  },
  {
    title:"Gladkill x ESCPE: Ancient",
    kind:"RELEASE",
    createdOn:"March 29, 2023",
    imgSrc:"/blogImg/gladkill-escpe-ancient.jpg",
    featured:false,
    links:[{name:'',url:''}],
    body:"I’m very excited to have my first collab with ESCPE featured on MorFlo Records “Slow Down Volume 1” compilation, out this Friday. This track feels like a perfect mix of our styles, and I’m excited for everyone to hear it.",
  },
  {
    title:"Denver, CO Show Announced",
    kind:"SHOW",
    createdOn:"March 23, 2023",
    imgSrc:"/blogImg/denver-april-2023.jpg",
    featured:false,
    links:[{name:'Tickets',url:'bit.ly/GladkillApr29'}],
    body:"Hyped to be coming back to Denver next month for a night of melodic bass and wave music. See you at The Black Box Lounge 4/29. ",
  },
  {
    title:"SMOKE (Wardub Season 4)",
    kind:"RELEASE",
    createdOn:"March 15, 2023",
    imgSrc:"/blogImg/smoke-cover-2023.jpg",
    featured:false,
    links:[
      {name:'Spotify',
        url:"https://open.spotify.com/album/0DQdOsDBAA826plFeLN4Y5",
      },
        {name:'Soundcloud',
        url:"https://soundcloud.com/gladkill/smoke",
      },
      
        {name:'Bandcamp',
        url:"https://gladkill.bandcamp.com/track/smoke",
      },
    ],
    body:"Presenting my track for Wardubs Season 4. If called upon to create a wardub, you have 24 hours to reply with a beat (keep it under 2min) Then call upon 3 more artists. genre/tempo/vibe doesn’t matter, but flex on ‘em.",
  },
  {
    title:"Portland OR Show Announced",
    kind:"SHOW",
    createdOn:"March 14, 2023",
    imgSrc:"/blogImg/portland-april-2023.jpg",
    featured:false,
    links:[{name:'Tickets',url:''}],
    body:
    "I'm coming back to Portland OR next month with a crazy stacked line-up including Potions, Player Dave and Yung Bae on April 14. I can't wait to share all of this new music with you all. See you there.",
  },
  {
    title:"Gladkill - Dissociate",
    kind:"RELEASE",
    createdOn:"February 24, 2023",
    imgSrc:"/blogImg/dissociate-cover.jpg",
    featured:false,
    links:[
      {name:'Spotify',
      url:"https://open.spotify.com/album/0DQdOsDBAA826plFeLN4Y5",
    },
      {name:'Soundcloud',
      url:"https://soundcloud.com/gladkill/dissociate",
    },
    
      {name:'Bandcamp',
      url:"https://gladkill.bandcamp.com/track/dissociate",
    },
    
],
body: "My new single 'Dissociate' is out now, everywhere you listen to music. It is a harmonious blend of the OG wave sound and the signature Gladkill bass music vibe."
  },
  {
    title:"Los Angeles Show Announce",
    kind:"SHOW",
    createdOn:"February 21, 2023",
    imgSrc:"/blogImg/wormhole-la-2023.jpg",
    featured:false,
    links:[
      {name:'Tickets',
      url:'https://www.eventbrite.com/e/317-dtla-shenanigans-ft-wormhole-music-group-bass-waffles-tickets-557303799667?fbclid=IwAR3OvsnJuUJGy8OeW3RVBp9qm2n09Px0kx9fp1mKo76BsLrFknCzafMAR58'
    },
],
  body:"Very excited to be coming back to Los Angeles next month with my wormhole fam. The line-up features a Wormhole Music Group showcase as well as a Bass Waffles crew showcase. Don't miss out on this one - It's sure to be a crazy time..",
  },
  {
    title:"Triple A Agency",
    kind:"NEWS",
    createdOn:"January 6, 2023",
    imgSrc:"/blogImg/triple-a.jpg",
    featured:false,
    links:[
      {name:'Triple A Agency',
      url:'https://https://triplea.agency/'
    },
],
  body: "Excited to announce that I’ve joined the talented roster over at Triple A agency. Contact Taryn for Gladkill bookings in your area for 2023 and beyond. With plenty of exciting releases and collaborations in the works, I can’t wait to see what this year has in store.",
  },
  {
    title:"Gladkill - 'Orbital' ",
    kind:"RELEASE",
    createdOn:"September 13, 2022",
    imgSrc:"/blogImg/orbital-cover.jpeg",
    featured:false,
    links:[
      {name:'Bandcamp',
      url:'https://gladkill.bandcamp.com/track/orbital'
    },
    {name:'Spotify',
    url:'https://open.spotify.com/album/64U2X6KI4zRxlILUNnf74m',
  }],
    body: "Presenting my new single 'Orbital'. A sci-fi breaks and DnB inspired tune. Mastering by Starkey, artwork by Yama. Now available everywhere you listen to music.",
  },
  {
    title:"Pantheon Live Show Announce",
    kind:"SHOW",
    createdOn:"September 13, 2022",
    imgSrc:"/blogImg/pantheon-announce.jpeg",
    featured:false,
    links:[
      {name:'tickets',
      url:'https://www.eventbrite.com/e/pantheon-tickets-386517553407'
    }],
    body: "I am honored to be a part of the largest wave event in North America so far, presented by SoulFood Music Collective, Human Error Collective and Vibe Digital! A three day event featuring a multitude of Wave music acts from North America, Canada and beyond. This is a cant-miss event if you are a fan of forward-thinking melodic bass music. Get your tickets now!!",
  },
  {
    title:"Potions Live Show Announce",
    kind:"SHOW",
    createdOn:"August 25, 2022",
    imgSrc:"/blogImg/potions-cervantes-show-flyer.jpeg",
    featured:false,
    links:[
      {name:'tickets',
      url:'https://open.spotify.com/album/0yu8O63x0ZUkUoUEUEPldx'
    }],
    body: "Super stoked to be coming back to Denver this October with an incredible curated line-up Got an emotional melodic wave/bass set planned. Can't wait!",
  },
  {
    title:"Gladkill - Vibe Digital Stream",
    kind:"SHOW",
    createdOn:"May 28, 2022",
    imgSrc:"/blogImg/vibe-digital-stream.jpeg",
    featured:false,
    links:[
      {name:'Vibe.Digital Twitch',
      url:'https://www.twitch.tv/vibedigitalusa?fbclid=IwAR1YUOna0qjAeKez6CH3_7LJxqzVl9n8MRQ24QOK1jMG7kjEd801nN5SO0A'
    },
      {name:'Stream on Soundcloud',
      url:'https://soundcloud.com/vibe-digital/episode112?in=vibe-digital/sets/vibe-digital-archives'
    },
  ],
    body:"Announcing a special episode of Vibe Digital’s stream for my EP release. I’ve curated a line-up of forward thinking bass & wave artists, and I’ll be playing a 30 min all original mix. Can’t wait for this one! \n Featuring FRQ NCY, Arael and Aekae. Streaming live via Twitch on Saturday, May 28, 2022.", 
  },
  {
    title:"Gladkill - 'Cold Comfort' EP",
    kind:"RELEASE",
    createdOn:"May 27, 2022",
    imgSrc:"/blogImg/cold-comfort-cover.jpg",
    featured:false,
    links:[
      {name:'Stream/Listen',
      url:'https://open.spotify.com/album/0yu8O63x0ZUkUoUEUEPldx'
    }],
    body:"In his debut release on vibe.digital Recordings, Gladkill strikes the listeners heart in his ‘Cold Comfort’ EP, made for the veteran bass music connoisseur and newcomer alike. ‘Words Inside’ is a heartfelt ballad, setting the tone for the emotional direction of the release. The title track, ‘Cold Comfort,’ maintains the emotional edge and brings the listener into a new depth, both icy and sanguine, while ‘The Way You Like’ is a well built, purple bass inspired banger, suited for nightclubs worldwide. ‘Waterways’ brings it back to Gladkill’s roots and what made him the west coast bass aficionado in the first place, with gorgeous soundscapes in the intro and proper, danceable bass stabs at the drop, and ‘Fragile’ rounds us out with a perfect, vibey set finisher which completes the message for the EP, hitting the balance between attentive poignancy, and energetic brawn.Artwork by Noah B",
  },
  {
    title:"Gladkill - Wardubs S3 - 'Destined'",
    kind:"RELEASE",
    createdOn:"April 21, 2022",
    imgSrc:"/blogImg/gladkill-wardub-cover.jpg",
    featured:false,
    links:[
      {name:'Stream/Listen',
      url:'https://soundcloud.com/gladkill/destined-wardub-s3-reply-to-aekae'
    }],
    body:"The wave music community is deep in Wardub season. For my submission, here's a beat I made in about 4 hours. This was a really fun exercise and I love how this came out -  I'll be mastering it and releasing it on all streaming pretty soon too.",
  },
  {
    title:"Gladkill - 'Expired'",
    kind:"RELEASE",
    createdOn:"April 19, 2022",
    imgSrc:"/blogImg/gladkill-expired-cover.jpg",
    featured:false,
    links:[
      {
        name:'Stream/Listen',
        url:'https://soundcloud.com/gladkill/expired',
      }],
    body:"Here's a quick 2 hour beat I made for ONHELL's twitch stream beat battle the other day. Using  some samples from ONHELL & Gangus 'Mushrooms and tequila' sample pack. You can swoop that directly from ONHELL's site.",
  },
  {
    title:"'Ghost In The Machine' EP",
    kind:"RELEASE",
    createdOn:"February 22, 2022",
    imgSrc:"/blogImg/gladkill-ghost-in-machine-cover.jpg",
    featured:false,
    links:[{
      name:'Spotify',
      url:'https://open.spotify.com/artist/7Kpco2hTnFKHUP1Gj8dA17/discography/all?uri=spotify:album:7r5Qps2zfIOOxmT3o0QVE2'
    },
    {
      name:'Stream/Downoad',
      url:'https://wormholemusicgroup.fanlink.to/gladkillghostinthemachine'
    },],
    body:"Wormhole Music Group is pleased to present Gladkill's Ghost in the Machine. Dripped out in haunting melodies, brooding textures, and rich basslines, this release is a brilliant example of expertly executed minimalism and craftsmanship. Gladkill further cements himself as a true legend in bass music with yet another scintillating and thoroughly satisfying release. ",
  },
  {
    title: "Gladkill Merch is back!",
    kind:"NEWS",
    createdOn: "December 22, 2021",
    imgSrc: "/blogImg/gladkill-merch-2021.jpg",
    featured: false,
    links: [
      {
        name: 'Shop Now',
        url: 'https://gladkillmusic.bigcartel.com/',
      }
    ],
    body: "Get laced up from the waist up! You can click the shop button above, or the link below to visit the all-new Gladkill merch store. Shirts, hats and bucket hats now available - new designs coming in 2022."
  },
  {
    title: "Gladkill Live - Reflections NYE, Portland OR -  December 31 2021",
    kind:"SHOW",
    createdOn: "October 21, 2021",
    imgSrc: "/blogImg/reflections-nye-portland.jpg",
    featured: false,
    links: [
      {
        name: 'tickets',
        url: 'https://aftontickets.com/reflectionsnye?fbclid=IwAR1zTSoyANVJTIiIlglBz_jvcbK-S65Ap0UKSgMxiHU-c7_rXVgTTcCVhuE',
      }
    ],
    body: "I'm stoked to announce that I will be spending New Year's in Portland, OR with the most packed line-up of the year. I will be sharing the stage with such folks as DMVU, Yheti, Digital Ethos, Supertask, Chase Manhattan and much more. Make sure to get your tickets ASAP - an event like this is bound to sell out."
  },
  {
    title: "Gladkill Live - NYC, December 17 2021",
    kind:"SHOW",
    createdOn: "September 15, 2021",
    imgSrc: "/blogImg/vibe-digital-nyc.png",
    featured: false,
    links: [
      {
        name: 'tickets',
        url: 'https://mercuryeastpresents.com/event/vibe-digital-nyc-showcase/?fbclid=IwAR33uhRWn2lpsBoNjVENkE8Y1XK5buo9rdvnimwbuApGo6GmfsCfVmBc16c'
      }
    ],
    body: "Finally coming back to NYC with my Vibe.Digital fam for a night of melodic bass, wave and post-dubstep sounds. I'm delighted to share the stage with fellow Vibe.Digital artists Noah B, WEVLTH, KTrek, and label owner Djedi. Get your tickets below. Make sure not to miss this show, since my reduced touring schedule means this may be my last east coast performance for a while."
  },
  {
    title: "Gladkill Live - Oakland, CA November 26 2021",
    kind:"SHOW",
    createdOn: "September 14, 2021",
    imgSrc: "/blogImg/wormhole-oakland-9-year.jpeg",
    featured: false,
    links: [
      {
        name: 'tickets',
        url: 'https://www.ticketweb.com/event/wormhole-9-year-anniversary-the-new-parish-tickets/11348155?pl=newparish&fbclid=IwAR2ER8FKGkv086-C8fWk4oOj-cHKhwINahgfAD7fqxltHppmGKbE1MEeLL8',
      }
    ],
    body: "Super excited to be coming back to the bay area with Wormhole's 9 year anniversary. Stacked line-up full of amazing sounds. Joining me are Ternion Sound, Chmura, Mythm, Matheny, and more. This is going to be a special one. Grab your tickets now!"
  },
  {
    title: "Gladkill Live - Denver, CO September 8 2021",
    kind:"SHOW",
    createdOn: "August 30, 2021",
    imgSrc: "/blogImg/denver-flyer-sep-2021.jpeg",
    featured: false,
    links: [
      {
        name: 'tickets',
        url: 'https://www.universe.com/events/wormhole-wednesday-tickets-LT8M1B',
      }
    ],
    body: 'Starting next month, the awesome humans at Wormhole Entertainment will be bringing back wormhole Wednesdays - not only to the bay area, but to Denver as well. I am beyond excited to kick things off in Denver on 9/8/21. See you there!'
  },
  {
    title: "Gladkill Live - Eugene, OR September 2 2021",
    kind:"SHOW",
    createdOn: "August 20, 2021",
    imgSrc: "/blogImg/eugene-flyer-sep-2021.png",
    featured: false,
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
    kind:"SHOW",
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
    kind:"SHOW",
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
    kind:"RELEASE",
    createdOn: "May 18, 2021",
    imgSrc: "/covers/ossuary-cover.jpg",
    featured: false,
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
    kind:"RELEASE",
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
    featured: false,
    body: 'Presenting \'Analog Whispers\', the second single off of \'Ossuary\'. Special shout out to The Untz for premiering this single - it is definitely one of my favorites off of the album. You  can find their awesome write-up about it below. '

  },
  {
    title: "Ashes - First Single From 'Ossuary'.",
    kind:"RELEASE",
    createdOn: "May 4, 2021",
    imgSrc: "/blogImg/ashes-cover.jpg",
    featured: false,
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
    kind:"NEWS",
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
    kind:"RELEASE",
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
    kind:"RELEASE",
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
    kind:"RELEASE",
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
    kind:"NEWS",
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
    kind:"NEWS",
    createdOn: "July 10th, 2020",
    imgSrc: "/blogImg/gk-tree.jpg",
    body:
      "Welcome to the new and improved Gladkillmusic.com, where you can find all news, releases, free music, show announcements and more. Stay tuned for new releases, exclusive merch drops, and up to date information. ",
  },
  {
    title: "Coven Collection Now Available!",
    kind:"RELEASE",
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


