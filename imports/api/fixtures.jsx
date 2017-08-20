import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';

export const menuItems = [
  {
    title: 'Basic facts'
  },
  {
    title: 'Begginings'
  },
  {
    title: 'Rockets'
  },
  {
    title: 'Astronauts'
  },
  {
    title: 'Contact'
  }
]

export const projectSummary = [
  {
    designation: 'AS-201',
    description: 'First flight of Saturn IB and Block I CSM; suborbital to Atlantic Ocean; qualified heat shield to orbital reentry speed',
    date: 'Feb 26, 1966',
  },
  {
    designation: 'AS-203',
    description: 'No spacecraft; observations of liquid hydrogen fuel behavior in orbit, to support design of S-IVB restart capability',
    date: '	Jul 5, 1966',
  },
  {
    designation: 'AS-202',
    description: '	Suborbital flight of CSM to Pacific Ocean',
    date: 'Aug 25, 1966',
  },
  {
    designation: 'Apollo 1',
    description: '	Not flown; all crew members perished in fire on launch pad on January 27, 1967',
    date: 'Feb 21, 1967	',
  },
  {
    designation: 'Apollo 4',
    description: 'First test flight of Saturn V, placed a CSM in a high Earth orbit; demonstrated S-IVB restart; qualified CM heat shield to lunar reentry speed',
    date: 'Nov 9, 1967	',
  },
  {
    designation: 'Apollo 5',
    description: 'Earth orbital flight test of LM, launched on Saturn IB; demonstrated ascent and descent propulsion; man-rated the LM',
    date: 'Apr 4, 1968',
  },
  {
    designation: 'Apollo 6',
    description: 'Unmanned, attempted demonstration of trans-lunar injection, and direct-return abort using SM engine; three engine failures, including failure of S-IVB restart. Flight controllers used SM engine to repeat Apollo 4s flight profile. Man-rated the Saturn V',
    date: 'Oct 11–22, 1968',
  },
  {
    designation: 'Apollo 7',
    description: 'First manned Earth orbital demonstration of Block II CSM, launched on Saturn IB. First live television publicly broadcast from a manned mission',
    date: 'Dec 21–27, 1968',
  },
  {
    designation: 'Apollo 8',
    description: 'First manned flight to Moon; CSM made 10 lunar orbits in 20 hours.',
    date: 'Jan 22–23, 1968',
  },
  {
    designation: 'Apollo 9',
    description: 'First manned flight of CSM and LM in Earth orbit; demonstrated Portable Life Support System to be used on the lunar surface',
    date: 'Mar 3–13, 1969	',
  },
  {
    designation: 'Apollo 10',
    description: 'Dress rehearsal for first lunar landing; flew LM down to 50,000 feet (15 km) from lunar surface',
    date: 'May 18–26, 1969',
  },
  {
    designation: 'Apollo 11',
    description: 'First manned landing, in Tranquility Base, Sea of Tranquility. Surface EVA time: 2:31 hr. Samples returned: 47.51 pounds (21.55 kg)',
    date: 'May 18–26, 1969',
  },
  {
    designation: 'Apollo 12',
    description: 'Second landing, in Ocean of Storms near Surveyor 3 . Surface EVA time: 7:45 hr. Samples returned: 75.62 pounds (34.30 kg)',
    date: 'Nov 14–24, 1969	',
  },
  {
    designation: 'Apollo 13',
    description: 'Third landing attempt aborted near the Moon, due to SM failure. Crew used LM as "life boat" to return to Earth.',
    date: 'Apr 11–17, 1970	',
  },
  {
    designation: 'Apollo 14',
    description: 'Third landing, in Fra Mauro formation, located northeast of the Sea of Storms. Surface EVA time: 9:21 hr. Samples returned: 94.35 pounds (42.80 kg).',
    date: 'Jan 31 – Feb 9, 1971	',
  },
  {
    designation: 'Apollo 15',
    description: 'First Extended LM and rover, landed in Hadley-Apennine, located near the Sea of Showers/Rains. Surface EVA time:18:33 hr. Samples returned: 169.10 pounds (76.70 kg).',
    date: 'Jul 26 – Aug 7, 1971',
  },
  {
    designation: 'Apollo 16',
    description: 'Landed in Plain of Descartes. Surface EVA time: 20:14 hr. Samples returned: 207.89 pounds (94.30 kg).',
    date: 'Apr 16–27, 1972	',
  },
  {
    designation: 'Apollo 17',
    description: 'Only Saturn V night launch. Landed in Taurus-Littrow. First geologist on the Moon. Final manned Moon landing. Surface EVA time: 22:02 hr. Samples returned: 243.40 pounds (110.40 kg).',
    date: 'Dec 7–19, 1972',
  },
]
