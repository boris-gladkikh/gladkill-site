// Shows for the Tour page. Upcoming vs past is worked out from today's date,
// so order here doesn't matter.
//   start / end: "YYYY-MM-DD" (end only for multi-day shows)
//   city:        "City, ST" for US shows
//   country:     only for shows outside the US
//   tickets:     ticket URL; upcoming shows without one have no Tickets button

const tourPosts = [
  { start: "2026-10-02", venue: "Symmetry Festival", city: "Fairfield, IA" },
  { start: "2025-10-03", venue: "Symmetry Festival", city: "Libertyville, IA" },
  {
    start: "2024-09-13",
    end: "2024-09-14",
    venue: "Symmetry Festival",
    city: "Libertyville, IA",
    tickets: "https://www.tixr.com/groups/symmetryfestival/events/smf-95010",
  },
  { start: "2024-09-03", venue: "Afterburn Party", city: "Reno, NV" },
  { start: "2024-06-15", venue: "Volcanic Theater Pub", city: "Bend, OR" },
  { start: "2024-01-26", venue: "Keepspace", city: "Portland, OR" },
  { start: "2023-09-15", venue: "Mission Ballroom", city: "Denver, CO" },
  { start: "2023-07-13", venue: "Phantom Bar", city: "Washington, DC" },
  { start: "2023-07-01", venue: "Monarch Gardens", city: "San Francisco, CA" },
  { start: "2023-06-11", venue: "Stilldream Festival", city: "Wilseyville, CA" },
  { start: "2023-05-20", venue: "Infrasound Festival", city: "Ellendale, MN" },
  { start: "2023-05-12", venue: "North Warehouse", city: "Portland, OR" },
  { start: "2023-04-29", venue: "Black Box Lounge", city: "Denver, CO" },
  { start: "2023-04-14", venue: "North Warehouse", city: "Portland, OR" },
  { start: "2023-03-17", venue: "LA Warehouse", city: "Los Angeles, CA" },
  { start: "2022-12-03", venue: "Pantheon", city: "Seattle, WA" },
  { start: "2021-12-31", venue: "Reflections NYE", city: "Portland, OR" },
  { start: "2021-12-17", venue: "Mercury Lounge", city: "New York, NY" },
  { start: "2021-11-26", venue: "The New Parish", city: "Oakland, CA" },
  { start: "2021-09-08", venue: "Temple", city: "Denver, CO" },
  { start: "2021-09-02", venue: "The Big Dirty", city: "Eugene, OR" },
];

export default tourPosts;
