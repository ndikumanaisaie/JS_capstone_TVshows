import { countNumberOfItems, setItems } from './__mocks__/items.js';

test('All items count should be 9', () => {
  const items = [
    {
      show: {
        id: 139,
        url: 'https://www.tvmaze.com/shows/139/girls',
        name: 'Girls',
        type: 'Scripted',
        language: 'English',
        genres: [
          'Drama',
          'Romance',
        ],
        status: 'Ended',
        runtime: 30,
        averageRuntime: 30,
        premiered: '2012-04-15',
        ended: '2017-04-16',
        officialSite: 'http://www.hbo.com/girls',
        schedule: {
          time: '22:00',
          days: [
            'Sunday',
          ],
        },
        rating: {
          average: 6.7,
        },
        weight: 97,
        network: {
          id: 8,
          name: 'HBO',
          country: {
            name: 'United States',
            code: 'US',
            timezone: 'America/New_York',
          },
          officialSite: 'https://www.hbo.com/',
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: 30124,
          thetvdb: 220411,
          imdb: 'tt1723816',
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg',
        },
        summary: '<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>',
        updated: 1611310521,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/shows/139',
          },
          previousepisode: {
            href: 'https://api.tvmaze.com/episodes/1079686',
          },
        },
      },
    },
    {
      show: {
        id: 41734,
        url: 'https://www.tvmaze.com/shows/41734/girls',
        name: 'GIRLS',
        type: 'Scripted',
        language: 'Mongolian',
        genres: [
          'Comedy',
        ],
        status: 'Ended',
        runtime: 41,
        averageRuntime: null,
        premiered: null,
        ended: null,
        officialSite: null,
        schedule: {
          time: '',
          days: [
            'Thursday',
          ],
        },
        rating: {
          average: null,
        },
        weight: 58,
        network: {
          id: 1672,
          name: 'UBS',
          country: {
            name: 'Mongolia',
            code: 'MN',
            timezone: 'Asia/Ulaanbaatar',
          },
          officialSite: null,
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: null,
          imdb: 'tt8709752',
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/191/478539.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/191/478539.jpg',
        },
        summary: null,
        updated: 1632080861,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/shows/41734',
          },
        },
      },
    },
    {
      show: {
        id: 49334,
        url: 'https://www.tvmaze.com/shows/49334/shining-girls',
        name: 'Shining Girls',
        type: 'Scripted',
        language: 'English',
        genres: [
          'Crime',
          'Thriller',
          'Supernatural',
        ],
        status: 'To Be Determined',
        runtime: null,
        averageRuntime: 49,
        premiered: '2022-04-29',
        ended: null,
        officialSite: 'https://tv.apple.com/show/shining-girls/umc.cmc.22xs4xobsimzy5qqdif0rhmdy',
        schedule: {
          time: '',
          days: [
            'Friday',
          ],
        },
        rating: {
          average: 7.8,
        },
        weight: 99,
        network: null,
        webChannel: {
          id: 310,
          name: 'Apple TV+',
          country: null,
          officialSite: 'https://tv.apple.com/',
        },
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: 385810,
          imdb: 'tt2953250',
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/406/1015813.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/406/1015813.jpg',
        },
        summary: '<p><b>Shining Girls</b> is a metaphysical thriller, which follows a Chicago reporter who survived a brutal assault only to find her reality shifting as she hunts down her attacker.</p>',
        updated: 1654448061,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/shows/49334',
          },
          previousepisode: {
            href: 'https://api.tvmaze.com/episodes/2272289',
          },
        },
      },
    },
    {
      show: {
        id: 33320,
        url: 'https://www.tvmaze.com/shows/33320/derry-girls',
        name: 'Derry Girls',
        type: 'Scripted',
        language: 'English',
        genres: [
          'Comedy',
        ],
        status: 'Ended',
        runtime: null,
        averageRuntime: 33,
        premiered: '2018-01-04',
        ended: '2022-05-18',
        officialSite: 'http://www.channel4.com/programmes/derry-girls',
        schedule: {
          time: '',
          days: [],
        },
        rating: {
          average: 8.3,
        },
        weight: 99,
        network: {
          id: 45,
          name: 'Channel 4',
          country: {
            name: 'United Kingdom',
            code: 'GB',
            timezone: 'Europe/London',
          },
          officialSite: 'https://www.channel4.com/',
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: 338903,
          imdb: 'tt7120662',
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/402/1007479.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/402/1007479.jpg',
        },
        summary: "<p>16-year-old Erin Quinn lives with her uncompromising mother, her long-suffering father and the fearsome ‘Granda Joe', a man whose love for his daughters and granddaughters is surpassed only by his contempt for his son-in-law.</p><p>It's the early 90s, and Erin is used to seeing her country on the nightly news and speaking in acronyms (The IRA, The UDA, The RUC). This is a time of armed police in armoured Land Rovers and British Army check points. But it's also the time of Murder She Wrote, The Cranberries, MJ and Lisa Marie, Doc Martens, bomber jackets, The X Files, Nirvana and Wayne's World. And while The Troubles may hang over her home town, Erin has troubles of her own</p>",
        updated: 1655484152,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/shows/33320',
          },
          previousepisode: {
            href: 'https://api.tvmaze.com/episodes/2323336',
          },
        },
      },
    },
    {
      show: {
        id: 42986,
        url: 'https://www.tvmaze.com/shows/42986/paper-girls',
        name: 'Paper Girls',
        type: 'Scripted',
        language: 'English',
        genres: [
          'Drama',
          'Science-Fiction',
        ],
        status: 'In Development',
        runtime: null,
        averageRuntime: null,
        premiered: '2022-07-29',
        ended: null,
        officialSite: null,
        schedule: {
          time: '',
          days: [],
        },
        rating: {
          average: null,
        },
        weight: 98,
        network: null,
        webChannel: {
          id: 3,
          name: 'Prime Video',
          country: null,
          officialSite: 'https://www.primevideo.com',
        },
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: 368187,
          imdb: 'tt10623646',
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/412/1031682.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/412/1031682.jpg',
        },
        summary: '<p><b>Paper Girls </b>follows four young girls who, while out delivering papers on the morning after Halloween in 1988, become unwittingly caught in a conflict between warring factions of time-travelers, sending them on an adventure through time that will save the world. As they travel between our present, the past, and the future — they encounter future versions of themselves and now must choose to embrace or reject their fate. An emotional adventure in which the girls and the women they eventually become are tough, their friendships are authentic, and their journey through time is epic.</p>',
        updated: 1654957528,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/shows/42986',
          },
          nextepisode: {
            href: 'https://api.tvmaze.com/episodes/2342533',
          },
        },
      },
    },
    {
      show: {
        id: 525,
        url: 'https://www.tvmaze.com/shows/525/gilmore-girls',
        name: 'Gilmore Girls',
        type: 'Scripted',
        language: 'English',
        genres: [
          'Drama',
          'Comedy',
          'Romance',
        ],
        status: 'Ended',
        runtime: 60,
        averageRuntime: 60,
        premiered: '2000-10-05',
        ended: '2007-05-15',
        officialSite: null,
        schedule: {
          time: '21:00',
          days: [
            'Tuesday',
          ],
        },
        rating: {
          average: 8.4,
        },
        weight: 97,
        network: {
          id: 5,
          name: 'The CW',
          country: {
            name: 'United States',
            code: 'US',
            timezone: 'America/New_York',
          },
          officialSite: 'https://www.cwtv.com/',
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: 3683,
          thetvdb: 76568,
          imdb: 'tt0238784',
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/4/11308.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/4/11308.jpg',
        },
        summary: '<p><b>Gilmore Girls</b> is a drama centering around the relationship between a thirtysomething single mother and her teen daughter living in Stars Hollow, Connecticut.</p>',
        updated: 1618158592,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/shows/525',
          },
          previousepisode: {
            href: 'https://api.tvmaze.com/episodes/47639',
          },
        },
      },
    },
    {
      show: {
        id: 23542,
        url: 'https://www.tvmaze.com/shows/23542/good-girls',
        name: 'Good Girls',
        type: 'Scripted',
        language: 'English',
        genres: [
          'Drama',
          'Comedy',
          'Crime',
        ],
        status: 'Ended',
        runtime: 60,
        averageRuntime: 60,
        premiered: '2018-02-26',
        ended: '2021-07-22',
        officialSite: 'https://www.nbc.com/good-girls',
        schedule: {
          time: '21:00',
          days: [
            'Thursday',
          ],
        },
        rating: {
          average: 7.2,
        },
        weight: 96,
        network: {
          id: 1,
          name: 'NBC',
          country: {
            name: 'United States',
            code: 'US',
            timezone: 'America/New_York',
          },
          officialSite: 'https://www.nbc.com/',
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: 328577,
          imdb: 'tt6474378',
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/297/744253.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/297/744253.jpg',
        },
        summary: '<p><b>Good Girls</b> follows three "good girl" suburban wives and mothers who suddenly find themselves in desperate circumstances and decide to stop playing it safe, and risk everything to take their power back.</p>',
        updated: 1627294164,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/shows/23542',
          },
          previousepisode: {
            href: 'https://api.tvmaze.com/episodes/2108575',
          },
        },
      },
    },
    {
      show: {
        id: 59431,
        url: 'https://www.tvmaze.com/shows/59431/surfside-girls',
        name: 'Surfside Girls',
        type: 'Scripted',
        language: 'English',
        genres: [
          'Drama',
          'Children',
          'Family',
        ],
        status: 'In Development',
        runtime: null,
        averageRuntime: null,
        premiered: '2022-08-19',
        ended: null,
        officialSite: null,
        schedule: {
          time: '',
          days: [],
        },
        rating: {
          average: null,
        },
        weight: 90,
        network: null,
        webChannel: {
          id: 310,
          name: 'Apple TV+',
          country: null,
          officialSite: 'https://tv.apple.com/',
        },
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: null,
          imdb: null,
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/382/956651.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/382/956651.jpg',
        },
        summary: "<p>Sam and Jade are psyched to spend their summer riding the waves and catching the rays. That is until they meet a ghost. The girls dive head-first into a mystery about a pirate ship and the cursed treasure that allegedly lies beneath Surfside's beloved Danger Point bluff. After meeting a pirate ghost named Remi, Sam wants to help him break the curse while Jade is determined to find a scientific explanation for the existence of ghosts. To solve the mystery, Sam and Jade will need to combine their very different approaches of logic and imagination. Together, they are determined to connect the clues, solve the mystery and save Surfside... and maybe they'll help a couple of pirate ghosts along the way.</p>",
        updated: 1652452313,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/shows/59431',
          },
          nextepisode: {
            href: 'https://api.tvmaze.com/episodes/2327822',
          },
        },
      },
    },
    {
      show: {
        id: 42726,
        url: 'https://www.tvmaze.com/shows/42726/florida-girls',
        name: 'Florida Girls',
        type: 'Scripted',
        language: 'English',
        genres: [
          'Comedy',
        ],
        status: 'Ended',
        runtime: 30,
        averageRuntime: 30,
        premiered: '2019-07-10',
        ended: '2019-08-07',
        officialSite: 'https://poptv.com/floridagirls',
        schedule: {
          time: '22:00',
          days: [
            'Wednesday',
          ],
        },
        rating: {
          average: 6.7,
        },
        weight: 46,
        network: {
          id: 88,
          name: 'Pop',
          country: {
            name: 'United States',
            code: 'US',
            timezone: 'America/New_York',
          },
          officialSite: null,
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: 363682,
          imdb: 'tt8548870',
        },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/203/508390.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/203/508390.jpg',
        },
        summary: "<p><b>Florida Girls</b> follows four women who are forced to confront their stagnant lives when their only ambitious friend moves away to follow her dreams. Bound by their friendship, they will attempt to navigate life's curveballs while living below the poverty line.</p>",
        updated: 1583390100,
        _links: {
          self: {
            href: 'https://api.tvmaze.com/shows/42726',
          },
          previousepisode: {
            href: 'https://api.tvmaze.com/episodes/1673960',
          },
        },
      },
    },
  ];
  setItems(items);
  expect(countNumberOfItems()).toBe(9);
});
