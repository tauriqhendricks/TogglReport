import { ReportMonthly } from "../models/report-monthly.model";
import { ReportWeekly } from "../models/report-weekly.model";

export class ReportTestData {

  constructor(
    private since: string,
    private until: string
  ) { }

  getWeekTestData(amountOfDays: number): ReportWeekly {

    if (amountOfDays === 1)
      return { ...this.testDataFor1Day } as ReportWeekly;

    if (amountOfDays === 2)
      return { ...this.testDataFor2Days } as ReportWeekly;

    if (amountOfDays === 3)
      return { ...this.testDataFor3Days } as ReportWeekly;

    if (amountOfDays === 4)
      return { ...this.testDataFor4Days } as ReportWeekly;

    return { ...this.testDataFor5Days } as ReportWeekly;

  }

  getMonthTestData(period: string): ReportMonthly {

    let month = new Date().getMonth();
    if (period === 'last')
      month--;
    if (month < 0)
      month = 11;

    let testDataForMonth = { ...this.testDataForMonth } as ReportMonthly;

    testDataForMonth.data.forEach(data => {

      data.startDate = new Date(data.start);
      data.endDate = new Date(data.end);

      data.startDate.setMonth(month)
      data.endDate.setMonth(month)

    });

    return testDataForMonth;

  }

  private testDataFor1Day: ReportWeekly = {

    total_grand: 50906222,
    total_billable: null,
    total_currencies: [{
      amount: null,
      currency: null
    }],
    data: [{
      pid: '',
      uid: '12311',
      title: {
        user: 'Adam',
        client: '',
        project: ''
      },
      totals: ['20324000', null, null, null, null, null, null, '20324000'],
      details: [{
        pid: '',
        uid: '12311',
        title: {
          user: '',
          client: '',
          project: ''
        },
        totals: []
      }]
    }, {
      pid: '',
      uid: '2223',
      title: {
        user: 'Winston',
        client: '',
        project: ''
      },
      totals: ['18360000', null, null, null, null, null, null, '18360000'],
      details: [{
        pid: '',
        uid: '12311',
        title: {
          user: '',
          client: '',
          project: ''
        },
        totals: []
      }]
    }, {
      pid: '',
      uid: '1',
      title: {
        user: 'Amy',
        client: '',
        project: ''
      },
      totals: ['12222222', null, null, null, null, null, null, '12222222'],
      details: [{
        pid: '',
        uid: '12311',
        title: {
          user: '',
          client: '',
          project: ''
        },
        totals: []
      }]
    }],
    week_totals: ['50906222', null, null, null, null, null, null, '50906222'],
    groupBy: 'users',
    since: this.since,
    until: this.until

  };

  private testDataFor2Days: ReportWeekly = {

    total_grand: 136866222,
    total_billable: null,
    total_currencies: [{
      amount: null,
      currency: null
    }],
    data: [{
      pid: '',
      uid: '12311',
      title: {
        user: 'Adam',
        client: '',
        project: ''
      },
      totals: ['20324000', '18360000', null, null, null, null, null, '38684000'],
      details: [{
        pid: '',
        uid: '12311',
        title: {
          user: '',
          client: '',
          project: ''
        },
        totals: []
      }]
    }, {
      pid: '',
      uid: '2223',
      title: {
        user: 'Winston',
        client: '',
        project: ''
      },
      totals: ['18360000', '28800000', null, null, null, null, null, '47160000'],
      details: [{
        pid: '',
        uid: '12311',
        title: {
          user: '',
          client: '',
          project: ''
        },
        totals: []
      }]
    }, {
      pid: '',
      uid: '1',
      title: {
        user: 'Amy',
        client: '',
        project: ''
      },
      totals: ['12222222', '38800000', null, null, null, null, null, '51022222'],
      details: [{
        pid: '',
        uid: '12311',
        title: {
          user: '',
          client: '',
          project: ''
        },
        totals: []
      }]
    }],
    week_totals: ['50906222', '85960000', null, null, null, null, null, '136866222'],
    groupBy: 'users',
    since: this.since,
    until: this.until

  };

  private testDataFor3Days: ReportWeekly = {

    total_grand: 212854222,
    total_billable: null,
    total_currencies: [{
      amount: null,
      currency: null
    }],
    data: [{
      pid: '',
      uid: '12311',
      title: {
        user: 'Adam',
        client: '',
        project: ''
      },
      totals: ['20324000', '18360000', '21744000', null, null, null, null, '60428000'],
      details: [{
        pid: '',
        uid: '12311',
        title: {
          user: '',
          client: '',
          project: ''
        },
        totals: []
      }]
    }, {
      pid: '',
      uid: '2223',
      title: {
        user: 'Winston',
        client: '',
        project: ''
      },
      totals: ['18360000', '28800000', '25884000', null, null, null, null, '73044000'],
      details: [{
        pid: '',
        uid: '12311',
        title: {
          user: '',
          client: '',
          project: ''
        },
        totals: []
      }]
    }, {
      pid: '',
      uid: '1',
      title: {
        user: 'Amy',
        client: '',
        project: ''
      },
      totals: ['12222222', '38800000', '28360000', null, null, null, null, '79382222'],
      details: [{
        pid: '',
        uid: '12311',
        title: {
          user: '',
          client: '',
          project: ''
        },
        totals: []
      }]
    }],
    week_totals: ['50906222', '85960000', '75988000', null, null, null, null, '212854222'],
    groupBy: 'users',
    since: this.since,
    until: this.until

  };

  private testDataFor4Days: ReportWeekly = {

    total_grand: 277494633,
    total_billable: null,
    total_currencies: [{
      amount: null,
      currency: null
    }],
    data: [{
      pid: '',
      uid: '12311',
      title: {
        user: 'Adam',
        client: '',
        project: ''
      },
      totals: ['20324000', '18360000', '21744000', '25884000', null, null, null, '86312000'],
      details: [{
        pid: '',
        uid: '12311',
        title: {
          user: '',
          client: '',
          project: ''
        },
        totals: []
      }]
    }, {
      pid: '',
      uid: '2223',
      title: {
        user: 'Winston',
        client: '',
        project: ''
      },
      totals: ['18360000', '28800000', '25884000', '21111111', null, null, null, '94155111'],
      details: [{
        pid: '',
        uid: '12311',
        title: {
          user: '',
          client: '',
          project: ''
        },
        totals: []
      }]
    }, {
      pid: '',
      uid: '1',
      title: {
        user: 'Amy',
        client: '',
        project: ''
      },
      totals: ['12222222', '38800000', '28360000', '17645300', null, null, null, '97027522'],
      details: [{
        pid: '',
        uid: '12311',
        title: {
          user: '',
          client: '',
          project: ''
        },
        totals: []
      }]
    }],
    week_totals: ['50906222', '85960000', '75988000', '64640411', null, null, null, '277494633'],
    groupBy: 'users',
    since: this.since,
    until: this.until

  };

  private testDataFor5Days: ReportWeekly = {

    total_grand: 115817000,
    total_billable: null,
    total_currencies: [{
      amount: null,
      currency: null
    }],
    data: [{
      pid: '',
      uid: '12311',
      title: {
        user: 'Adam',
        client: '',
        project: ''
      },
      totals: ['20324000', '25973000', '21744000', '23922000', '23854000', null, null, '115848000'],
      details: [{
        pid: '',
        uid: '12311',
        title: {
          user: '',
          client: '',
          project: ''
        },
        totals: []
      }]
    }, {
      pid: '',
      uid: '2223',
      title: {
        user: 'Winston',
        client: '',
        project: ''
      },
      totals: ['25884000', '22320000', '18360000', '30600000', '28800000', null, null, '125964000'],
      details: [{
        pid: '',
        uid: '12311',
        title: {
          user: '',
          client: '',
          project: ''
        },
        totals: []
      }]
    }, {
      pid: '',
      uid: '1',
      title: {
        user: 'Amy',
        client: '',
        project: ''
      },
      totals: ['20884000', '12222222', '28360000', '18800000', '38800000', null, null, '119066222'],
      details: [{
        pid: '',
        uid: '12311',
        title: {
          user: '',
          client: '',
          project: ''
        },
        totals: []
      }]
    }],
    week_totals: ['67092000', '60515222', '68464000', '73322000', '91454000', null, null, '360878222'],
    groupBy: 'users',
    since: this.since,
    until: this.until

  };

  private testDataForMonth: ReportMonthly = {

    total_grand: 1101984000,
    total_currencies: [{
      amount: 'null',
      currency: 'null'
    }],
    total_billable: null,
    total_count: 96,
    per_page: 50,
    data: [{
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 21774000,
      end: "2021-10-01T12:43:14+02:00",
      endDate: null,
      id: 2192707993,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-01T06:40:20+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-01T12:43:14+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "MCV2-CompServicesModule",
      dur: 3109000,
      end: "2021-10-04T03:27:51+02:00",
      endDate: null,
      id: 2194877962,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-04T02:36:02+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 6999158,
      updated: "2021-10-04T03:27:54+02:00",
      use_stop: true,
      user: "Kndenze"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 3035000,
      end: "2021-10-04T07:58:11+02:00",
      endDate: null,
      id: 2195014786,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-04T07:07:36+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-29T06:54:27+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 19911000,
      end: "2021-10-04T13:36:58+02:00",
      endDate: null,
      id: 2195061134,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-04T08:05:07+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-04T13:37:00+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 8460000,
      end: "2021-10-04T17:32:31+02:00",
      endDate: null,
      id: 2195799214,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-04T15:11:31+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-04T17:32:31+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "Github",
      dur: 890000,
      end: "2021-10-04T18:39:56+02:00",
      endDate: null,
      id: 2196337550,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-04T18:25:06+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-04T19:39:59+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "Github",
      dur: 1485000,
      end: "2021-10-04T19:39:59+02:00",
      endDate: null,
      id: 2196337561,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-04T19:15:14+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-04T19:40:02+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "Github",
      dur: 1684000,
      end: "2021-10-04T20:08:17+02:00",
      endDate: null,
      id: 2196337889,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-04T19:40:13+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-04T20:08:19+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 26233000,
      end: "2021-10-05T13:59:48+02:00",
      endDate: null,
      id: 2196949331,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-05T06:42:35+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-05T13:59:52+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "Github Practice",
      dur: 3000,
      end: "2021-10-05T10:14:04+02:00",
      endDate: null,
      id: 2197210148,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-05T10:14:01+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-05T10:14:27+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "Github Practice",
      dur: 649000,
      end: "2021-10-05T10:25:17+02:00",
      endDate: null,
      id: 2197210903,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-05T10:14:28+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-05T10:25:20+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "Github Practice",
      dur: 2263000,
      end: "2021-10-05T12:04:09+02:00",
      endDate: null,
      id: 2197341697,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-05T11:26:26+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-05T12:04:12+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 4008000,
      end: "2021-10-05T14:43:13+02:00",
      endDate: null,
      id: 2197573754,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-05T13:36:25+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-05T14:43:15+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 10798000,
      end: "2021-10-05T17:35:24+02:00",
      endDate: null,
      id: 2197647511,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-05T14:35:26+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-05T17:35:23+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 19693000,
      end: "2021-10-05T20:49:18+02:00",
      endDate: null,
      id: 2197759398,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-05T15:21:05+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-05T20:49:19+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "MCV2-PersonMain",
      dur: 15855000,
      end: "2021-10-06T05:26:12+02:00",
      endDate: null,
      id: 2198617038,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-06T01:01:57+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 6999158,
      updated: "2021-10-06T05:26:15+02:00",
      use_stop: true,
      user: "Kndenze"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "C# Best Practices",
      dur: 7540000,
      end: "2021-10-06T12:07:04+02:00",
      endDate: null,
      id: 2199079933,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-06T10:01:24+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-06T12:07:06+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "C# Best Practices",
      dur: 3876000,
      end: "2021-10-06T14:45:20+02:00",
      endDate: null,
      id: 2199424485,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-06T13:40:44+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-06T14:45:21+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "C# Types(Classes)",
      dur: 3178000,
      end: "2021-10-06T15:51:24+02:00",
      endDate: null,
      id: 2199562590,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-06T14:58:26+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-06T15:51:25+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 3846000,
      end: "2021-10-06T17:56:27+02:00",
      endDate: null,
      id: 2199804827,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-06T16:52:21+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-06T17:56:29+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "MCV2-PersonMain",
      dur: 6223000,
      end: "2021-10-07T06:27:03+02:00",
      endDate: null,
      id: 2200619565,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-07T04:43:20+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 6999158,
      updated: "2021-10-07T06:27:05+02:00",
      use_stop: true,
      user: "Kndenze"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "Unit Testing",
      dur: 8800000,
      end: "2021-10-07T14:19:09+02:00",
      endDate: null,
      id: 2201090799,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-07T11:52:29+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-07T14:19:12+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 12104000,
      end: "2021-10-07T18:29:53+02:00",
      endDate: null,
      id: 2201407412,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-07T15:08:09+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-07T18:29:55+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 12356000,
      end: "2021-10-07T19:07:13+02:00",
      endDate: null,
      id: 2201475516,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-07T15:41:17+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-07T19:07:20+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 30129000,
      end: "2021-10-08T14:20:43+02:00",
      endDate: null,
      id: 2202474597,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-08T05:58:34+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-08T14:20:43+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "Unit Testing , Automation Cont'd",
      dur: 12655000,
      end: "2021-10-08T13:36:58+02:00",
      endDate: null,
      id: 2202691972,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-08T10:06:03+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-08T13:36:59+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 10940000,
      end: "2021-10-08T17:45:19+02:00",
      endDate: null,
      id: 2203082506,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-08T14:42:59+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-08T17:45:22+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 14207000,
      end: "2021-10-08T19:42:06+02:00",
      endDate: null,
      id: 2203277014,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-08T15:45:19+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-08T19:43:35+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 20038000,
      end: "2021-10-11T12:17:01+02:00",
      endDate: null,
      id: 2204710445,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-11T06:43:03+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-11T12:17:01+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 3563000,
      end: "2021-10-11T10:07:31+02:00",
      endDate: null,
      id: 2204857281,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-11T09:08:08+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-11T16:16:48+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "Practical code implementation",
      dur: 7000,
      end: "2021-10-11T11:18:15+02:00",
      endDate: null,
      id: 2205084175,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-11T11:18:08+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-11T11:18:15+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 11023000,
      end: "2021-10-11T15:35:08+02:00",
      endDate: null,
      id: 2205200074,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-11T12:31:25+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-11T15:35:09+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "MCV2-PersonMain",
      dur: 13394000,
      end: "2021-10-12T06:50:54+02:00",
      endDate: null,
      id: 2206337723,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-12T03:07:40+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 6999158,
      updated: "2021-10-12T06:50:57+02:00",
      use_stop: true,
      user: "Kndenze"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 22700000,
      end: "2021-10-12T12:54:22+02:00",
      endDate: null,
      id: 2206458442,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-12T06:36:02+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-12T12:54:24+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "practical code implementation",
      dur: 12632000,
      end: "2021-10-12T14:11:20+02:00",
      endDate: null,
      id: 2206768535,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-12T10:40:48+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-12T14:11:21+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 4822000,
      end: "2021-10-12T14:25:05+02:00",
      endDate: null,
      id: 2206989283,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-12T13:04:43+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-12T14:25:06+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "practical code implementation",
      dur: 9895000,
      end: "2021-10-12T18:20:57+02:00",
      endDate: null,
      id: 2207277026,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-12T15:36:02+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-12T18:20:58+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 9134000,
      end: "2021-10-13T09:09:15+02:00",
      endDate: null,
      id: 2208276017,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-13T06:37:01+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-13T09:59:21+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "Practical code implementation",
      dur: 3000,
      end: "2021-10-13T09:49:48+02:00",
      endDate: null,
      id: 2208488063,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-13T09:49:45+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-13T09:49:49+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "Practical code implementation",
      dur: 2000,
      end: "2021-10-13T09:50:02+02:00",
      endDate: null,
      id: 2208488430,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-13T09:50:00+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-13T09:50:08+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "VO2 Practical implementation",
      dur: 9284000,
      end: "2021-10-13T12:24:48+02:00",
      endDate: null,
      id: 2208488627,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-13T09:50:04+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-13T12:24:50+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 14544000,
      end: "2021-10-13T14:01:41+02:00",
      endDate: null,
      id: 2208503665,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-13T09:59:17+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-13T14:01:41+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 8437000,
      end: "2021-10-13T17:02:03+02:00",
      endDate: null,
      id: 2208958614,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-13T14:41:26+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-13T17:02:10+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "Eval video VO2",
      dur: 1799000,
      end: "2021-10-13T17:38:43+02:00",
      endDate: null,
      id: 2209265600,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-13T17:08:44+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-13T17:38:46+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "VO2 Practical Code Implementation Fix",
      dur: 3853000,
      end: "2021-10-13T18:59:47+02:00",
      endDate: null,
      id: 2209351486,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-13T17:55:34+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-13T19:10:49+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "MCV2-PersonMain",
      dur: 5942000,
      end: "2021-10-14T07:31:21+02:00",
      endDate: null,
      id: 2210128575,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-14T05:52:19+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 6999158,
      updated: "2021-10-14T19:55:09+02:00",
      use_stop: true,
      user: "Kndenze"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 23376000,
      end: "2021-10-14T12:49:02+02:00",
      endDate: null,
      id: 2210084296,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-14T06:19:26+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-14T12:49:01+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "v03 Practical code implementation",
      dur: 10880000,
      end: "2021-10-14T12:06:55+02:00",
      endDate: null,
      id: 2210231850,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-14T09:05:35+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-14T12:06:56+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "practical code implementation",
      dur: 2000,
      end: "2021-10-14T13:51:13+02:00",
      endDate: null,
      id: 2210686237,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-14T13:51:11+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-14T13:51:15+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "VO2 Practical implementation",
      dur: 1000,
      end: "2021-10-14T13:51:21+02:00",
      endDate: null,
      id: 2210686521,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-14T13:51:20+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-14T13:51:24+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 12710000,
      end: "2021-10-14T18:02:29+02:00",
      endDate: null,
      id: 2210766565,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-14T14:30:39+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-14T18:02:29+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "V04 Practical Implementation",
      dur: 17552000,
      end: "2021-10-14T19:37:17+02:00",
      endDate: null,
      id: 2210791317,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-14T14:44:45+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-14T19:48:19+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 26283000,
      end: "2021-10-15T12:34:49+02:00",
      endDate: null,
      id: 2211970487,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-15T05:16:46+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-15T12:34:49+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "Eval video VO2",
      dur: 1000,
      end: "2021-10-15T11:24:54+02:00",
      endDate: null,
      id: 2212296591,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-15T11:24:53+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-15T11:24:56+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "Reviewing VO's Domain Entities",
      dur: 21962000,
      end: "2021-10-15T17:30:59+02:00",
      endDate: null,
      id: 2212297584,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-15T11:24:57+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-15T19:59:20+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 12391000,
      end: "2021-10-17T11:22:41+02:00",
      endDate: null,
      id: 2213732229,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-17T07:56:10+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-17T11:22:44+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 13168000,
      end: "2021-10-18T09:51:49+02:00",
      endDate: null,
      id: 2214214602,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-18T06:12:21+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-18T09:51:59+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "DDD",
      dur: 25038000,
      end: "2021-10-18T17:03:28+02:00",
      endDate: null,
      id: 2214482186,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-18T10:06:10+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-18T18:59:27+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 14439000,
      end: "2021-10-18T14:08:16+02:00",
      endDate: null,
      id: 2214484939,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-18T10:07:37+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-18T14:08:17+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 5346000,
      end: "2021-10-18T16:34:55+02:00",
      endDate: null,
      id: 2215001031,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-18T15:05:49+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-18T16:34:58+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "MCV2-PersonMain",
      dur: 6906000,
      end: "2021-10-18T20:49:08+02:00",
      endDate: null,
      id: 2215464711,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-18T18:54:02+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 6999158,
      updated: "2021-10-18T20:49:11+02:00",
      use_stop: true,
      user: "Kndenze"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 20975000,
      end: "2021-10-19T13:01:20+02:00",
      endDate: null,
      id: 2216152746,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-19T07:11:45+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-19T13:01:22+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "DDD Cont'd",
      dur: 26580000,
      end: "2021-10-19T17:45:52+02:00",
      endDate: null,
      id: 2216475264,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-19T10:22:52+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-19T17:45:53+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 8348000,
      end: "2021-10-19T16:31:38+02:00",
      endDate: null,
      id: 2216782307,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-19T14:12:30+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-19T19:04:24+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "MCV2-PersonMain",
      dur: 2572000,
      end: "2021-10-19T16:46:16+02:00",
      endDate: null,
      id: 2217007556,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-19T16:03:24+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 6999158,
      updated: "2021-10-19T16:46:17+02:00",
      use_stop: true,
      user: "Kndenze"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 13590000,
      end: "2021-10-20T09:56:53+02:00",
      endDate: null,
      id: 2217965905,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-20T06:10:23+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-20T09:56:53+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "MCV2-PersonMain",
      dur: 9449000,
      end: "2021-10-20T14:02:24+02:00",
      endDate: null,
      id: 2218362999,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-20T11:24:55+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 6999158,
      updated: "2021-10-20T14:02:25+02:00",
      use_stop: true,
      user: "Kndenze"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "Khorikov code review",
      dur: 22702000,
      end: "2021-10-20T17:47:25+02:00",
      endDate: null,
      id: 2218372205,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-20T11:29:03+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-20T17:47:27+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 16391000,
      end: "2021-10-20T17:45:59+02:00",
      endDate: null,
      id: 2218522135,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-20T13:12:48+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-20T17:46:00+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 22418000,
      end: "2021-10-21T12:59:12+02:00",
      endDate: null,
      id: 2219797076,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-21T06:45:34+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-21T12:59:16+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "XUnit testing",
      dur: 30540000,
      end: "2021-10-21T18:23:42+02:00",
      endDate: null,
      id: 2220013574,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-21T09:54:42+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-21T18:23:45+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "MCV2-PersonMain",
      dur: 12177000,
      end: "2021-10-21T16:48:15+02:00",
      endDate: null,
      id: 2220343741,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-21T13:25:18+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 6999158,
      updated: "2021-10-21T16:48:18+02:00",
      use_stop: true,
      user: "Kndenze"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 13068000,
      end: "2021-10-21T17:31:19+02:00",
      endDate: null,
      id: 2220385959,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-21T13:53:31+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-21T17:31:21+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 21662000,
      end: "2021-10-22T13:33:08+02:00",
      endDate: null,
      id: 2221580846,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-22T07:32:06+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-22T13:33:08+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "XUnit testing cont'd",
      dur: 24894000,
      end: "2021-10-22T16:56:05+02:00",
      endDate: null,
      id: 2221765399,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-22T10:01:11+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-22T16:56:07+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 7509000,
      end: "2021-10-22T16:13:49+02:00",
      endDate: null,
      id: 2222107897,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-22T14:08:40+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-22T16:13:49+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 13611000,
      end: "2021-10-23T11:22:22+02:00",
      endDate: null,
      id: 2222994424,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-23T07:35:31+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-23T11:22:22+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 7003000,
      end: "2021-10-25T08:13:07+02:00",
      endDate: null,
      id: 2223782011,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-25T06:16:24+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-25T08:13:09+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 14767000,
      end: "2021-10-25T12:30:54+02:00",
      endDate: null,
      id: 2223883197,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-25T08:24:47+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-25T12:30:55+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 30223000,
      end: "2021-10-25T18:22:17+02:00",
      endDate: null,
      id: 2224048362,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-25T09:58:34+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-25T18:22:20+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 23186000,
      end: "2021-10-26T12:33:20+02:00",
      endDate: null,
      id: 2225705338,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-26T06:06:54+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-26T12:34:54+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "VO5 Practical Implementation.",
      dur: 30554000,
      end: "2021-10-26T21:48:31+02:00",
      endDate: null,
      id: 2226285416,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-26T13:19:17+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-27T11:17:15+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 5224000,
      end: "2021-10-26T14:50:12+02:00",
      endDate: null,
      id: 2226291035,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-26T13:23:08+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-26T14:50:14+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 11334000,
      end: "2021-10-27T09:53:32+02:00",
      endDate: null,
      id: 2227602669,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-27T06:44:38+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-27T09:53:35+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 12375000,
      end: "2021-10-27T13:37:23+02:00",
      endDate: null,
      id: 2227859373,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-27T10:11:08+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-27T13:37:23+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "V06 Practical Implementation",
      dur: 12766000,
      end: "2021-10-27T14:50:02+02:00",
      endDate: null,
      id: 2227967274,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-27T11:17:16+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-27T14:50:04+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 1922000,
      end: "2021-10-27T14:47:10+02:00",
      endDate: null,
      id: 2228235405,
      is_billable: false,
      pid: 171072183,
      project: "Bitcube Internship",
      project_color: "0",
      project_hex_color: "#525266",
      start: "2021-10-27T14:15:08+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-27T14:47:10+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "V07 Practical Implementation",
      dur: 2000,
      end: "2021-10-27T14:50:34+02:00",
      endDate: null,
      id: 2228306761,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-27T14:50:32+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-27T14:50:45+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "V07 Practical Implementation",
      dur: 4634000,
      end: "2021-10-27T16:08:12+02:00",
      endDate: null,
      id: 2228307636,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-27T14:50:58+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-28T21:58:50+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 16848000,
      end: "2021-10-28T12:51:46+02:00",
      endDate: null,
      id: 2229479549,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-28T08:10:58+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-28T12:51:48+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 10980000,
      end: "2021-10-28T17:29:15+02:00",
      endDate: null,
      id: 2230036107,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-28T14:26:15+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-29T06:51:59+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "Re-looking Github & Git",
      dur: 2183000,
      end: "2021-10-28T23:18:33+02:00",
      endDate: null,
      id: 2230819446,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-28T22:42:10+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-28T23:18:34+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "Re-looking Github & Git",
      dur: 7409000,
      end: "2021-10-29T01:32:07+02:00",
      endDate: null,
      id: 2230866609,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-28T23:28:38+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-29T10:58:45+02:00",
      use_stop: true,
      user: "Thulani"
    },
    {
      billable: null,
      client: null,
      cur: null,
      description: "C# Best Practices , improving on the Basics",
      dur: 30399000,
      end: "2021-10-29T19:25:23+02:00",
      endDate: null,
      id: 2231430022,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-29T10:58:44+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7258724,
      updated: "2021-10-29T19:25:24+02:00",
      use_stop: true,
      user: "Thulani"
    }, {
      billable: null,
      client: null,
      cur: null,
      description: "",
      dur: 6842000,
      end: "2021-10-29T08:47:22+02:00",
      endDate: null,
      id: 2231137059,
      is_billable: false,
      pid: null,
      project: null,
      project_color: "0",
      project_hex_color: null,
      start: "2021-10-29T06:53:20+02:00",
      startDate: null,
      tags: [],
      task: null,
      tid: null,
      uid: 7008242,
      updated: "2021-10-29T08:47:21+02:00",
      use_stop: true,
      user: "Geo Coetzee"
    }],
    groupBy: 'users',
    since: this.since,
    until: this.until

  }


  //   private testDataForMonth: ReportMonthly = {

  //   total_grand: 1101984000,
  //   total_currencies: [{
  //     amount: 'null',
  //     currency: 'null'
  //   }],
  //   total_billable: null,
  //   total_count: 96,
  //   per_page: 50,
  //   data: [
  //     {
  //       billable: null,
  //       client: null,
  //       cur: null,
  //       description: "",
  //       dur: 21774000,
  //       end: "2021-10-01T12:43:14+02:00",
  //       endDate: new Date('Fri Oct 01 2021 12:43:14'),
  //       id: 2192707993,
  //       is_billable: false,
  //       pid: 171072183,
  //       project: "Bitcube Internship",
  //       project_color: "0",
  //       project_hex_color: "#525266",
  //       start: "2021-10-01T06:40:20+02:00",
  //       startDate: new Date('Fri Oct 01 2021 06 40:20'),
  //       tags: [],
  //       task: null,
  //       tid: null,
  //       uid: 7008242,
  //       updated: "2021-10-01T12:43:14+02:00",
  //       use_stop: true,
  //       user: "Geo Coetzee"
  //     }, {
  //       billable: null,
  //       client: null,
  //       cur: null,
  //       description: "MCV2-CompServicesModule",
  //       dur: 3109000,
  //       end: "2021-10-04T03:27:51+02:00",
  //       endDate: new Date('Mon Oct 04 2021 03:27:51'),
  //       id: 2194877962,
  //       is_billable: false,
  //       pid: null,
  //       project: null,
  //       project_color: "0",
  //       project_hex_color: null,
  //       start: "2021-10-04T02:36:02+02:00",
  //       startDate: new Date('Mon Oct 04 2021 02:36:02'),
  //       tags: [],
  //       task: null,
  //       tid: null,
  //       uid: 6999158,
  //       updated: "2021-10-04T03:27:54+02:00",
  //       use_stop: true,
  //       user: "Kndenze"
  //     }, {
  //       billable: null,
  //       client: null,
  //       cur: null,
  //       description: "",
  //       dur: 3035000,
  //       end: "2021-10-04T07:58:11+02:00",
  //       endDate: new Date('Mon Oct 04 2021 07:58:11'),
  //       id: 2195014786,
  //       is_billable: false,
  //       pid: 171072183,
  //       project: "Bitcube Internship",
  //       project_color: "0",
  //       project_hex_color: "#525266",
  //       start: "2021-10-04T07:07:36+02:00",
  //       startDate: new Date('Mon Oct 04 2021 07:07:36'),
  //       tags: [],
  //       task: null,
  //       tid: null,
  //       uid: 7008242,
  //       updated: "2021-10-29T06:54:27+02:00",
  //       use_stop: true,
  //       user: "Geo Coetzee"
  //     }, {
  //       billable: null,
  //       client: null,
  //       cur: null,
  //       description: "",
  //       dur: 19911000,
  //       end: "2021-10-04T13:36:58+02:00",
  //       endDate: new Date('Mon Oct 04 2021 13:36:58'),
  //       id: 2195061134,
  //       is_billable: false,
  //       pid: 171072183,
  //       project: "Bitcube Internship",
  //       project_color: "0",
  //       project_hex_color: "#525266",
  //       start: "2021-10-04T08:05:07+02:00",
  //       startDate: new Date('Mon Oct 04 2021 08:05:07'),
  //       tags: [],
  //       task: null,
  //       tid: null,
  //       uid: 7008242,
  //       updated: "2021-10-04T13:37:00+02:00",
  //       use_stop: true,
  //       user: "Geo Coetzee"
  //     }, {
  //       billable: null,
  //       client: null,
  //       cur: null,
  //       description: "",
  //       dur: 8460000,
  //       end: "2021-10-04T17:32:31+02:00",
  //       endDate: new Date('Mon Oct 04 2021 17:32:31'),
  //       id: 2195799214,
  //       is_billable: false,
  //       pid: 171072183,
  //       project: "Bitcube Internship",
  //       project_color: "0",
  //       project_hex_color: "#525266",
  //       start: "2021-10-04T15:11:31+02:00",
  //       startDate: new Date('Mon Oct 04 2021 15:11:31'),
  //       tags: [],
  //       task: null,
  //       tid: null,
  //       uid: 7008242,
  //       updated: "2021-10-04T17:32:31+02:00",
  //       use_stop: true,
  //       user: "Geo Coetzee"
  //     }, {
  //       billable: null,
  //       client: null,
  //       cur: null,
  //       description: "Github",
  //       dur: 890000,
  //       end: "2021-10-04T18:39:56+02:00",
  //       endDate: new Date('Mon Oct 04 2021 18:39:56'),
  //       id: 2196337550,
  //       is_billable: false,
  //       pid: null,
  //       project: null,
  //       project_color: "0",
  //       project_hex_color: null,
  //       start: "2021-10-04T18:25:06+02:00",
  //       startDate: new Date('Mon Oct 04 2021 18:25:06'),
  //       tags: [],
  //       task: null,
  //       tid: null,
  //       uid: 7258724,
  //       updated: "2021-10-04T19:39:59+02:00",
  //       use_stop: true,
  //       user: "Thulani"
  //     }, {
  //       billable: null,
  //       client: null,
  //       cur: null,
  //       description: "Github",
  //       dur: 1485000,
  //       end: "2021-10-04T19:39:59+02:00",
  //       endDate: new Date('Mon Oct 04 2021 19:39:59'),
  //       id: 2196337561,
  //       is_billable: false,
  //       pid: null,
  //       project: null,
  //       project_color: "0",
  //       project_hex_color: null,
  //       start: "2021-10-04T19:15:14+02:00",
  //       startDate: new Date('Mon Oct 04 2021 19: 15: 14'),
  //       tags: [],
  //       task: null,
  //       tid: null,
  //       uid: 7258724,
  //       updated: "2021-10-04T19:40:02+02:00",
  //       use_stop: true,
  //       user: "Thulani"
  //     }, {
  //       billable: null
  //   client: null
  //   cur: null
  //   description: "Github"
  //   dur: 1684000
  //   end: "2021-10-04T20:08:17+02:00"
  //   endDate: Mon Oct 04 2021 20: 08: 17 GMT + 0200(South Africa Standard Time) {}
  //   id: 2196337889
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-04T19:40:13+02:00"
  //   startDate: Mon Oct 04 2021 19: 40: 13 GMT + 0200(South Africa Standard Time) {}
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-04T20:08:19+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 26233000
  //   end: "2021-10-05T13:59:48+02:00"
  //   endDate: Tue Oct 05 2021 13: 59: 48 GMT + 0200(South Africa Standard Time) { }
  // id: 2196949331
  // is_billable: false
  // pid: 171072183
  // project: "Bitcube Internship"
  // project_color: "0"
  // project_hex_color: "#525266"
  // start: "2021-10-05T06:42:35+02:00"
  // startDate: Tue Oct 05 2021 06: 42: 35 GMT + 0200(South Africa Standard Time) { }
  // tags: []
  // task: null
  // tid: null
  // uid: 7008242
  // updated: "2021-10-05T13:59:52+02:00"
  // use_stop: true
  // user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Github Practice"
  //   dur: 3000
  //   end: "2021-10-05T10:14:04+02:00"
  //   endDate: Tue Oct 05 2021 10: 14: 04 GMT + 0200(South Africa Standard Time) { }
  //   id: 2197210148
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-05T10:14:01+02:00"
  //   startDate: Tue Oct 05 2021 10: 14: 01 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-05T10:14:27+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Github Practice"
  //   dur: 649000
  //   end: "2021-10-05T10:25:17+02:00"
  //   endDate: Tue Oct 05 2021 10: 25: 17 GMT + 0200(South Africa Standard Time) { }
  //   id: 2197210903
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-05T10:14:28+02:00"
  //   startDate: Tue Oct 05 2021 10: 14: 28 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-05T10:25:20+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Github Practice"
  //   dur: 2263000
  //   end: "2021-10-05T12:04:09+02:00"
  //   endDate: Tue Oct 05 2021 12: 04: 09 GMT + 0200(South Africa Standard Time) { }
  //   id: 2197341697
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-05T11:26:26+02:00"
  //   startDate: Tue Oct 05 2021 11: 26: 26 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-05T12:04:12+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 4008000
  //   end: "2021-10-05T14:43:13+02:00"
  //   endDate: Tue Oct 05 2021 14: 43: 13 GMT + 0200(South Africa Standard Time) { }
  //   id: 2197573754
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-05T13:36:25+02:00"
  //   startDate: Tue Oct 05 2021 13: 36: 25 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-05T14:43:15+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 10798000
  //   end: "2021-10-05T17:35:24+02:00"
  //   endDate: Tue Oct 05 2021 17: 35: 24 GMT + 0200(South Africa Standard Time) { }
  //   id: 2197647511
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-05T14:35:26+02:00"
  //   startDate: Tue Oct 05 2021 14: 35: 26 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-05T17:35:23+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 19693000
  //   end: "2021-10-05T20:49:18+02:00"
  //   endDate: Tue Oct 05 2021 20: 49: 18 GMT + 0200(South Africa Standard Time) { }
  //   id: 2197759398
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-05T15:21:05+02:00"
  //   startDate: Tue Oct 05 2021 15: 21: 05 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-05T20:49:19+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "MCV2-PersonMain"
  //   dur: 15855000
  //   end: "2021-10-06T05:26:12+02:00"
  //   endDate: Wed Oct 06 2021 05: 26: 12 GMT + 0200(South Africa Standard Time) { }
  //   id: 2198617038
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-06T01:01:57+02:00"
  //   startDate: Wed Oct 06 2021 01: 01: 57 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 6999158
  //   updated: "2021-10-06T05:26:15+02:00"
  //   use_stop: true
  //   user: "Kndenze"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "C# Best Practices"
  //   dur: 7540000
  //   end: "2021-10-06T12:07:04+02:00"
  //   endDate: Wed Oct 06 2021 12: 07: 04 GMT + 0200(South Africa Standard Time) { }
  //   id: 2199079933
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-06T10:01:24+02:00"
  //   startDate: Wed Oct 06 2021 10: 01: 24 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-06T12:07:06+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "C# Best Practices"
  //   dur: 3876000
  //   end: "2021-10-06T14:45:20+02:00"
  //   endDate: Wed Oct 06 2021 14: 45: 20 GMT + 0200(South Africa Standard Time) { }
  //   id: 2199424485
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-06T13:40:44+02:00"
  //   startDate: Wed Oct 06 2021 13: 40: 44 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-06T14:45:21+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "C# Types(Classes)"
  //   dur: 3178000
  //   end: "2021-10-06T15:51:24+02:00"
  //   endDate: Wed Oct 06 2021 15: 51: 24 GMT + 0200(South Africa Standard Time) { }
  //   id: 2199562590
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-06T14:58:26+02:00"
  //   startDate: Wed Oct 06 2021 14: 58: 26 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-06T15:51:25+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 3846000
  //   end: "2021-10-06T17:56:27+02:00"
  //   endDate: Wed Oct 06 2021 17: 56: 27 GMT + 0200(South Africa Standard Time) { }
  //   id: 2199804827
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-06T16:52:21+02:00"
  //   startDate: Wed Oct 06 2021 16: 52: 21 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-06T17:56:29+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "MCV2-PersonMain"
  //   dur: 6223000
  //   end: "2021-10-07T06:27:03+02:00"
  //   endDate: Thu Oct 07 2021 06: 27: 03 GMT + 0200(South Africa Standard Time) { }
  //   id: 2200619565
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-07T04:43:20+02:00"
  //   startDate: Thu Oct 07 2021 04: 43: 20 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 6999158
  //   updated: "2021-10-07T06:27:05+02:00"
  //   use_stop: true
  //   user: "Kndenze"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Unit Testing"
  //   dur: 8800000
  //   end: "2021-10-07T14:19:09+02:00"
  //   endDate: Thu Oct 07 2021 14: 19: 09 GMT + 0200(South Africa Standard Time) { }
  //   id: 2201090799
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-07T11:52:29+02:00"
  //   startDate: Thu Oct 07 2021 11: 52: 29 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-07T14:19:12+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 12104000
  //   end: "2021-10-07T18:29:53+02:00"
  //   endDate: Thu Oct 07 2021 18: 29: 53 GMT + 0200(South Africa Standard Time) { }
  //   id: 2201407412
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-07T15:08:09+02:00"
  //   startDate: Thu Oct 07 2021 15: 08: 09 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-07T18:29:55+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 12356000
  //   end: "2021-10-07T19:07:13+02:00"
  //   endDate: Thu Oct 07 2021 19: 07: 13 GMT + 0200(South Africa Standard Time) { }
  //   id: 2201475516
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-07T15:41:17+02:00"
  //   startDate: Thu Oct 07 2021 15: 41: 17 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-07T19:07:20+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 30129000
  //   end: "2021-10-08T14:20:43+02:00"
  //   endDate: Fri Oct 08 2021 14: 20: 43 GMT + 0200(South Africa Standard Time) { }
  //   id: 2202474597
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-08T05:58:34+02:00"
  //   startDate: Fri Oct 08 2021 05: 58: 34 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-08T14:20:43+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Unit Testing , Automation Cont'd"
  //   dur: 12655000
  //   end: "2021-10-08T13:36:58+02:00"
  //   endDate: Fri Oct 08 2021 13: 36: 58 GMT + 0200(South Africa Standard Time) { }
  //   id: 2202691972
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-08T10:06:03+02:00"
  //   startDate: Fri Oct 08 2021 10: 06: 03 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-08T13:36:59+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 10940000
  //   end: "2021-10-08T17:45:19+02:00"
  //   endDate: Fri Oct 08 2021 17: 45: 19 GMT + 0200(South Africa Standard Time) { }
  //   id: 2203082506
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-08T14:42:59+02:00"
  //   startDate: Fri Oct 08 2021 14: 42: 59 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-08T17:45:22+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 14207000
  //   end: "2021-10-08T19:42:06+02:00"
  //   endDate: Fri Oct 08 2021 19: 42: 06 GMT + 0200(South Africa Standard Time) { }
  //   id: 2203277014
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-08T15:45:19+02:00"
  //   startDate: Fri Oct 08 2021 15: 45: 19 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-08T19:43:35+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 20038000
  //   end: "2021-10-11T12:17:01+02:00"
  //   endDate: Mon Oct 11 2021 12: 17: 01 GMT + 0200(South Africa Standard Time) { }
  //   id: 2204710445
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-11T06:43:03+02:00"
  //   startDate: Mon Oct 11 2021 06: 43: 03 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-11T12:17:01+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 3563000
  //   end: "2021-10-11T10:07:31+02:00"
  //   endDate: Mon Oct 11 2021 10: 07: 31 GMT + 0200(South Africa Standard Time) { }
  //   id: 2204857281
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-11T09:08:08+02:00"
  //   startDate: Mon Oct 11 2021 09: 08: 08 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-11T16:16:48+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Practical code implementation"
  //   dur: 7000
  //   end: "2021-10-11T11:18:15+02:00"
  //   endDate: Mon Oct 11 2021 11: 18: 15 GMT + 0200(South Africa Standard Time) { }
  //   id: 2205084175
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-11T11:18:08+02:00"
  //   startDate: Mon Oct 11 2021 11: 18: 08 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-11T11:18:15+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 11023000
  //   end: "2021-10-11T15:35:08+02:00"
  //   endDate: Mon Oct 11 2021 15: 35: 08 GMT + 0200(South Africa Standard Time) { }
  //   id: 2205200074
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-11T12:31:25+02:00"
  //   startDate: Mon Oct 11 2021 12: 31: 25 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-11T15:35:09+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "MCV2-PersonMain"
  //   dur: 13394000
  //   end: "2021-10-12T06:50:54+02:00"
  //   endDate: Tue Oct 12 2021 06: 50: 54 GMT + 0200(South Africa Standard Time) { }
  //   id: 2206337723
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-12T03:07:40+02:00"
  //   startDate: Tue Oct 12 2021 03: 07: 40 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 6999158
  //   updated: "2021-10-12T06:50:57+02:00"
  //   use_stop: true
  //   user: "Kndenze"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 22700000
  //   end: "2021-10-12T12:54:22+02:00"
  //   endDate: Tue Oct 12 2021 12: 54: 22 GMT + 0200(South Africa Standard Time) { }
  //   id: 2206458442
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-12T06:36:02+02:00"
  //   startDate: Tue Oct 12 2021 06: 36: 02 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-12T12:54:24+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "practical code implementation"
  //   dur: 12632000
  //   end: "2021-10-12T14:11:20+02:00"
  //   endDate: Tue Oct 12 2021 14: 11: 20 GMT + 0200(South Africa Standard Time) { }
  //   id: 2206768535
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-12T10:40:48+02:00"
  //   startDate: Tue Oct 12 2021 10: 40: 48 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-12T14:11:21+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 4822000
  //   end: "2021-10-12T14:25:05+02:00"
  //   endDate: Tue Oct 12 2021 14: 25: 05 GMT + 0200(South Africa Standard Time) { }
  //   id: 2206989283
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-12T13:04:43+02:00"
  //   startDate: Tue Oct 12 2021 13: 04: 43 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-12T14:25:06+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "practical code implementation"
  //   dur: 9895000
  //   end: "2021-10-12T18:20:57+02:00"
  //   endDate: Tue Oct 12 2021 18: 20: 57 GMT + 0200(South Africa Standard Time) { }
  //   id: 2207277026
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-12T15:36:02+02:00"
  //   startDate: Tue Oct 12 2021 15: 36: 02 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-12T18:20:58+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 9134000
  //   end: "2021-10-13T09:09:15+02:00"
  //   endDate: Wed Oct 13 2021 09: 09: 15 GMT + 0200(South Africa Standard Time) { }
  //   id: 2208276017
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-13T06:37:01+02:00"
  //   startDate: Wed Oct 13 2021 06: 37: 01 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-13T09:59:21+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Practical code implementation"
  //   dur: 3000
  //   end: "2021-10-13T09:49:48+02:00"
  //   endDate: Wed Oct 13 2021 09: 49: 48 GMT + 0200(South Africa Standard Time) { }
  //   id: 2208488063
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-13T09:49:45+02:00"
  //   startDate: Wed Oct 13 2021 09: 49: 45 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-13T09:49:49+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Practical code implementation"
  //   dur: 2000
  //   end: "2021-10-13T09:50:02+02:00"
  //   endDate: Wed Oct 13 2021 09: 50: 02 GMT + 0200(South Africa Standard Time) { }
  //   id: 2208488430
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-13T09:50:00+02:00"
  //   startDate: Wed Oct 13 2021 09: 50: 00 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-13T09:50:08+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "VO2 Practical implementation"
  //   dur: 9284000
  //   end: "2021-10-13T12:24:48+02:00"
  //   endDate: Wed Oct 13 2021 12: 24: 48 GMT + 0200(South Africa Standard Time) { }
  //   id: 2208488627
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-13T09:50:04+02:00"
  //   startDate: Wed Oct 13 2021 09: 50: 04 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-13T12:24:50+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 14544000
  //   end: "2021-10-13T14:01:41+02:00"
  //   endDate: Wed Oct 13 2021 14: 01: 41 GMT + 0200(South Africa Standard Time) { }
  //   id: 2208503665
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-13T09:59:17+02:00"
  //   startDate: Wed Oct 13 2021 09: 59: 17 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-13T14:01:41+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 8437000
  //   end: "2021-10-13T17:02:03+02:00"
  //   endDate: Wed Oct 13 2021 17: 02: 03 GMT + 0200(South Africa Standard Time) { }
  //   id: 2208958614
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-13T14:41:26+02:00"
  //   startDate: Wed Oct 13 2021 14: 41: 26 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-13T17:02:10+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Eval video VO2"
  //   dur: 1799000
  //   end: "2021-10-13T17:38:43+02:00"
  //   endDate: Wed Oct 13 2021 17: 38: 43 GMT + 0200(South Africa Standard Time) { }
  //   id: 2209265600
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-13T17:08:44+02:00"
  //   startDate: Wed Oct 13 2021 17: 08: 44 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-13T17:38:46+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "VO2 Practical Code Implementation Fix"
  //   dur: 3853000
  //   end: "2021-10-13T18:59:47+02:00"
  //   endDate: Wed Oct 13 2021 18: 59: 47 GMT + 0200(South Africa Standard Time) { }
  //   id: 2209351486
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-13T17:55:34+02:00"
  //   startDate: Wed Oct 13 2021 17: 55: 34 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-13T19:10:49+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "MCV2-PersonMain"
  //   dur: 5942000
  //   end: "2021-10-14T07:31:21+02:00"
  //   endDate: Thu Oct 14 2021 07: 31: 21 GMT + 0200(South Africa Standard Time) { }
  //   id: 2210128575
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-14T05:52:19+02:00"
  //   startDate: Thu Oct 14 2021 05: 52: 19 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 6999158
  //   updated: "2021-10-14T19:55:09+02:00"
  //   use_stop: true
  //   user: "Kndenze"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 23376000
  //   end: "2021-10-14T12:49:02+02:00"
  //   endDate: Thu Oct 14 2021 12: 49: 02 GMT + 0200(South Africa Standard Time) { }
  //   id: 2210084296
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-14T06:19:26+02:00"
  //   startDate: Thu Oct 14 2021 06: 19: 26 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-14T12:49:01+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "v03 Practical code implementation"
  //   dur: 10880000
  //   end: "2021-10-14T12:06:55+02:00"
  //   endDate: Thu Oct 14 2021 12: 06: 55 GMT + 0200(South Africa Standard Time) { }
  //   id: 2210231850
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-14T09:05:35+02:00"
  //   startDate: Thu Oct 14 2021 09: 05: 35 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-14T12:06:56+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "practical code implementation"
  //   dur: 2000
  //   end: "2021-10-14T13:51:13+02:00"
  //   endDate: Thu Oct 14 2021 13: 51: 13 GMT + 0200(South Africa Standard Time) { }
  //   id: 2210686237
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-14T13:51:11+02:00"
  //   startDate: Thu Oct 14 2021 13: 51: 11 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-14T13:51:15+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "VO2 Practical implementation"
  //   dur: 1000
  //   end: "2021-10-14T13:51:21+02:00"
  //   endDate: Thu Oct 14 2021 13: 51: 21 GMT + 0200(South Africa Standard Time) { }
  //   id: 2210686521
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-14T13:51:20+02:00"
  //   startDate: Thu Oct 14 2021 13: 51: 20 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-14T13:51:24+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 12710000
  //   end: "2021-10-14T18:02:29+02:00"
  //   endDate: Thu Oct 14 2021 18: 02: 29 GMT + 0200(South Africa Standard Time) { }
  //   id: 2210766565
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-14T14:30:39+02:00"
  //   startDate: Thu Oct 14 2021 14: 30: 39 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-14T18:02:29+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "V04 Practical Implementation"
  //   dur: 17552000
  //   end: "2021-10-14T19:37:17+02:00"
  //   endDate: Thu Oct 14 2021 19: 37: 17 GMT + 0200(South Africa Standard Time) { }
  //   id: 2210791317
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-14T14:44:45+02:00"
  //   startDate: Thu Oct 14 2021 14: 44: 45 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-14T19:48:19+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 26283000
  //   end: "2021-10-15T12:34:49+02:00"
  //   endDate: Fri Oct 15 2021 12: 34: 49 GMT + 0200(South Africa Standard Time) { }
  //   id: 2211970487
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-15T05:16:46+02:00"
  //   startDate: Fri Oct 15 2021 05: 16: 46 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-15T12:34:49+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Eval video VO2"
  //   dur: 1000
  //   end: "2021-10-15T11:24:54+02:00"
  //   endDate: Fri Oct 15 2021 11: 24: 54 GMT + 0200(South Africa Standard Time) { }
  //   id: 2212296591
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-15T11:24:53+02:00"
  //   startDate: Fri Oct 15 2021 11: 24: 53 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-15T11:24:56+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Reviewing VO's Domain Entities"
  //   dur: 21962000
  //   end: "2021-10-15T17:30:59+02:00"
  //   endDate: Fri Oct 15 2021 17: 30: 59 GMT + 0200(South Africa Standard Time) { }
  //   id: 2212297584
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-15T11:24:57+02:00"
  //   startDate: Fri Oct 15 2021 11: 24: 57 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-15T19:59:20+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 12391000
  //   end: "2021-10-17T11:22:41+02:00"
  //   endDate: Sun Oct 17 2021 11: 22: 41 GMT + 0200(South Africa Standard Time) { }
  //   id: 2213732229
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-17T07:56:10+02:00"
  //   startDate: Sun Oct 17 2021 07: 56: 10 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-17T11:22:44+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 13168000
  //   end: "2021-10-18T09:51:49+02:00"
  //   endDate: Mon Oct 18 2021 09: 51: 49 GMT + 0200(South Africa Standard Time) { }
  //   id: 2214214602
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-18T06:12:21+02:00"
  //   startDate: Mon Oct 18 2021 06: 12: 21 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-18T09:51:59+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "DDD"
  //   dur: 25038000
  //   end: "2021-10-18T17:03:28+02:00"
  //   endDate: Mon Oct 18 2021 17: 03: 28 GMT + 0200(South Africa Standard Time) { }
  //   id: 2214482186
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-18T10:06:10+02:00"
  //   startDate: Mon Oct 18 2021 10: 06: 10 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-18T18:59:27+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 14439000
  //   end: "2021-10-18T14:08:16+02:00"
  //   endDate: Mon Oct 18 2021 14: 08: 16 GMT + 0200(South Africa Standard Time) { }
  //   id: 2214484939
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-18T10:07:37+02:00"
  //   startDate: Mon Oct 18 2021 10: 07: 37 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-18T14:08:17+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 5346000
  //   end: "2021-10-18T16:34:55+02:00"
  //   endDate: Mon Oct 18 2021 16: 34: 55 GMT + 0200(South Africa Standard Time) { }
  //   id: 2215001031
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-18T15:05:49+02:00"
  //   startDate: Mon Oct 18 2021 15: 05: 49 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-18T16:34:58+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "MCV2-PersonMain"
  //   dur: 6906000
  //   end: "2021-10-18T20:49:08+02:00"
  //   endDate: Mon Oct 18 2021 20: 49: 08 GMT + 0200(South Africa Standard Time) { }
  //   id: 2215464711
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-18T18:54:02+02:00"
  //   startDate: Mon Oct 18 2021 18: 54: 02 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 6999158
  //   updated: "2021-10-18T20:49:11+02:00"
  //   use_stop: true
  //   user: "Kndenze"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 20975000
  //   end: "2021-10-19T13:01:20+02:00"
  //   endDate: Tue Oct 19 2021 13: 01: 20 GMT + 0200(South Africa Standard Time) { }
  //   id: 2216152746
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-19T07:11:45+02:00"
  //   startDate: Tue Oct 19 2021 07: 11: 45 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-19T13:01:22+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "DDD Cont'd"
  //   dur: 26580000
  //   end: "2021-10-19T17:45:52+02:00"
  //   endDate: Tue Oct 19 2021 17: 45: 52 GMT + 0200(South Africa Standard Time) { }
  //   id: 2216475264
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-19T10:22:52+02:00"
  //   startDate: Tue Oct 19 2021 10: 22: 52 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-19T17:45:53+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 8348000
  //   end: "2021-10-19T16:31:38+02:00"
  //   endDate: Tue Oct 19 2021 16: 31: 38 GMT + 0200(South Africa Standard Time) { }
  //   id: 2216782307
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-19T14:12:30+02:00"
  //   startDate: Tue Oct 19 2021 14: 12: 30 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-19T19:04:24+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "MCV2-PersonMain"
  //   dur: 2572000
  //   end: "2021-10-19T16:46:16+02:00"
  //   endDate: Tue Oct 19 2021 16: 46: 16 GMT + 0200(South Africa Standard Time) { }
  //   id: 2217007556
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-19T16:03:24+02:00"
  //   startDate: Tue Oct 19 2021 16: 03: 24 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 6999158
  //   updated: "2021-10-19T16:46:17+02:00"
  //   use_stop: true
  //   user: "Kndenze"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 13590000
  //   end: "2021-10-20T09:56:53+02:00"
  //   endDate: Wed Oct 20 2021 09: 56: 53 GMT + 0200(South Africa Standard Time) { }
  //   id: 2217965905
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-20T06:10:23+02:00"
  //   startDate: Wed Oct 20 2021 06: 10: 23 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-20T09:56:53+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "MCV2-PersonMain"
  //   dur: 9449000
  //   end: "2021-10-20T14:02:24+02:00"
  //   endDate: Wed Oct 20 2021 14: 02: 24 GMT + 0200(South Africa Standard Time) { }
  //   id: 2218362999
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-20T11:24:55+02:00"
  //   startDate: Wed Oct 20 2021 11: 24: 55 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 6999158
  //   updated: "2021-10-20T14:02:25+02:00"
  //   use_stop: true
  //   user: "Kndenze"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Khorikov code review"
  //   dur: 22702000
  //   end: "2021-10-20T17:47:25+02:00"
  //   endDate: Wed Oct 20 2021 17: 47: 25 GMT + 0200(South Africa Standard Time) { }
  //   id: 2218372205
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-20T11:29:03+02:00"
  //   startDate: Wed Oct 20 2021 11: 29: 03 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-20T17:47:27+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 16391000
  //   end: "2021-10-20T17:45:59+02:00"
  //   endDate: Wed Oct 20 2021 17: 45: 59 GMT + 0200(South Africa Standard Time) { }
  //   id: 2218522135
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-20T13:12:48+02:00"
  //   startDate: Wed Oct 20 2021 13: 12: 48 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-20T17:46:00+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 22418000
  //   end: "2021-10-21T12:59:12+02:00"
  //   endDate: Thu Oct 21 2021 12: 59: 12 GMT + 0200(South Africa Standard Time) { }
  //   id: 2219797076
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-21T06:45:34+02:00"
  //   startDate: Thu Oct 21 2021 06: 45: 34 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-21T12:59:16+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "XUnit testing"
  //   dur: 30540000
  //   end: "2021-10-21T18:23:42+02:00"
  //   endDate: Thu Oct 21 2021 18: 23: 42 GMT + 0200(South Africa Standard Time) { }
  //   id: 2220013574
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-21T09:54:42+02:00"
  //   startDate: Thu Oct 21 2021 09: 54: 42 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-21T18:23:45+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "MCV2-PersonMain"
  //   dur: 12177000
  //   end: "2021-10-21T16:48:15+02:00"
  //   endDate: Thu Oct 21 2021 16: 48: 15 GMT + 0200(South Africa Standard Time) { }
  //   id: 2220343741
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-21T13:25:18+02:00"
  //   startDate: Thu Oct 21 2021 13: 25: 18 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 6999158
  //   updated: "2021-10-21T16:48:18+02:00"
  //   use_stop: true
  //   user: "Kndenze"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 13068000
  //   end: "2021-10-21T17:31:19+02:00"
  //   endDate: Thu Oct 21 2021 17: 31: 19 GMT + 0200(South Africa Standard Time) { }
  //   id: 2220385959
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-21T13:53:31+02:00"
  //   startDate: Thu Oct 21 2021 13: 53: 31 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-21T17:31:21+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 21662000
  //   end: "2021-10-22T13:33:08+02:00"
  //   endDate: Fri Oct 22 2021 13: 33: 08 GMT + 0200(South Africa Standard Time) { }
  //   id: 2221580846
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-22T07:32:06+02:00"
  //   startDate: Fri Oct 22 2021 07: 32: 06 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-22T13:33:08+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "XUnit testing cont'd"
  //   dur: 24894000
  //   end: "2021-10-22T16:56:05+02:00"
  //   endDate: Fri Oct 22 2021 16: 56: 05 GMT + 0200(South Africa Standard Time) { }
  //   id: 2221765399
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-22T10:01:11+02:00"
  //   startDate: Fri Oct 22 2021 10: 01: 11 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-22T16:56:07+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 7509000
  //   end: "2021-10-22T16:13:49+02:00"
  //   endDate: Fri Oct 22 2021 16: 13: 49 GMT + 0200(South Africa Standard Time) { }
  //   id: 2222107897
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-22T14:08:40+02:00"
  //   startDate: Fri Oct 22 2021 14: 08: 40 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-22T16:13:49+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 13611000
  //   end: "2021-10-23T11:22:22+02:00"
  //   endDate: Sat Oct 23 2021 11: 22: 22 GMT + 0200(South Africa Standard Time) { }
  //   id: 2222994424
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-23T07:35:31+02:00"
  //   startDate: Sat Oct 23 2021 07: 35: 31 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-23T11:22:22+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 7003000
  //   end: "2021-10-25T08:13:07+02:00"
  //   endDate: Mon Oct 25 2021 08: 13: 07 GMT + 0200(South Africa Standard Time) { }
  //   id: 2223782011
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-25T06:16:24+02:00"
  //   startDate: Mon Oct 25 2021 06: 16: 24 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-25T08:13:09+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 14767000
  //   end: "2021-10-25T12:30:54+02:00"
  //   endDate: Mon Oct 25 2021 12: 30: 54 GMT + 0200(South Africa Standard Time) { }
  //   id: 2223883197
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-25T08:24:47+02:00"
  //   startDate: Mon Oct 25 2021 08: 24: 47 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-25T12:30:55+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 30223000
  //   end: "2021-10-25T18:22:17+02:00"
  //   endDate: Mon Oct 25 2021 18: 22: 17 GMT + 0200(South Africa Standard Time) { }
  //   id: 2224048362
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-25T09:58:34+02:00"
  //   startDate: Mon Oct 25 2021 09: 58: 34 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-25T18:22:20+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 23186000
  //   end: "2021-10-26T12:33:20+02:00"
  //   endDate: Tue Oct 26 2021 12: 33: 20 GMT + 0200(South Africa Standard Time) { }
  //   id: 2225705338
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-26T06:06:54+02:00"
  //   startDate: Tue Oct 26 2021 06: 06: 54 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-26T12:34:54+02:00"
  //   use_stop: true
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "VO5 Practical Implementation."
  //   dur: 30554000
  //   end: "2021-10-26T21:48:31+02:00"
  //   endDate: Tue Oct 26 2021 21: 48: 31 GMT + 0200(South Africa Standard Time) { }
  //   id: 2226285416
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-26T13:19:17+02:00"
  //   startDate: Tue Oct 26 2021 13: 19: 17 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-27T11:17:15+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 5224000
  //   end: "2021-10-26T14:50:12+02:00"
  //   endDate: Tue Oct 26 2021 14: 50: 12 GMT + 0200(South Africa Standard Time) { }
  //   id: 2226291035
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-26T13:23:08+02:00"
  //   startDate: Tue Oct 26 2021 13: 23: 08 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-26T14:50:14+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 11334000
  //   end: "2021-10-27T09:53:32+02:00"
  //   endDate: Wed Oct 27 2021 09: 53: 32 GMT + 0200(South Africa Standard Time) { }
  //   id: 2227602669
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-27T06:44:38+02:00"
  //   startDate: Wed Oct 27 2021 06: 44: 38 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-27T09:53:35+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 12375000
  //   end: "2021-10-27T13:37:23+02:00"
  //   endDate: Wed Oct 27 2021 13: 37: 23 GMT + 0200(South Africa Standard Time) { }
  //   id: 2227859373
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-27T10:11:08+02:00"
  //   startDate: Wed Oct 27 2021 10: 11: 08 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-27T13:37:23+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "V06 Practical Implementation"
  //   dur: 12766000
  //   end: "2021-10-27T14:50:02+02:00"
  //   endDate: Wed Oct 27 2021 14: 50: 02 GMT + 0200(South Africa Standard Time) { }
  //   id: 2227967274
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-27T11:17:16+02:00"
  //   startDate: Wed Oct 27 2021 11: 17: 16 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-27T14:50:04+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 1922000
  //   end: "2021-10-27T14:47:10+02:00"
  //   endDate: Wed Oct 27 2021 14: 47: 10 GMT + 0200(South Africa Standard Time) { }
  //   id: 2228235405
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-27T14:15:08+02:00"
  //   startDate: Wed Oct 27 2021 14: 15: 08 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-27T14:47:10+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "V07 Practical Implementation"
  //   dur: 2000
  //   end: "2021-10-27T14:50:34+02:00"
  //   endDate: Wed Oct 27 2021 14: 50: 34 GMT + 0200(South Africa Standard Time) { }
  //   id: 2228306761
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-27T14:50:32+02:00"
  //   startDate: Wed Oct 27 2021 14: 50: 32 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-27T14:50:45+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "V07 Practical Implementation"
  //   dur: 4634000
  //   end: "2021-10-27T16:08:12+02:00"
  //   endDate: Wed Oct 27 2021 16: 08: 12 GMT + 0200(South Africa Standard Time) { }
  //   id: 2228307636
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-27T14:50:58+02:00"
  //   startDate: Wed Oct 27 2021 14: 50: 58 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-28T21:58:50+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 16848000
  //   end: "2021-10-28T12:51:46+02:00"
  //   endDate: Thu Oct 28 2021 12: 51: 46 GMT + 0200(South Africa Standard Time) { }
  //   id: 2229479549
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-28T08:10:58+02:00"
  //   startDate: Thu Oct 28 2021 08: 10: 58 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-28T12:51:48+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 10980000
  //   end: "2021-10-28T17:29:15+02:00"
  //   endDate: Thu Oct 28 2021 17: 29: 15 GMT + 0200(South Africa Standard Time) { }
  //   id: 2230036107
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-28T14:26:15+02:00"
  //   startDate: Thu Oct 28 2021 14: 26: 15 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-29T06:51:59+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Re-looking Github & Git"
  //   dur: 2183000
  //   end: "2021-10-28T23:18:33+02:00"
  //   endDate: Thu Oct 28 2021 23: 18: 33 GMT + 0200(South Africa Standard Time) { }
  //   id: 2230819446
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-28T22:42:10+02:00"
  //   startDate: Thu Oct 28 2021 22: 42: 10 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-28T23:18:34+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Re-looking Github & Git"
  //   dur: 7409000
  //   end: "2021-10-29T01:32:07+02:00"
  //   endDate: Fri Oct 29 2021 01: 32: 07 GMT + 0200(South Africa Standard Time) { }
  //   id: 2230866609
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-28T23:28:38+02:00"
  //   startDate: Thu Oct 28 2021 23: 28: 38 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-29T10:58:45+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 6842000
  //   end: "2021-10-29T08:47:22+02:00"
  //   endDate: Fri Oct 29 2021 08: 47: 22 GMT + 0200(South Africa Standard Time) { }
  //   id: 2231137059
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-29T06:53:20+02:00"
  //   startDate: Fri Oct 29 2021 06: 53: 20 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-29T08:47:21+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "C# Best Practices , improving on the Basics"
  //   dur: 30399000
  //   end: "2021-10-29T19:25:23+02:00"
  //   endDate: Fri Oct 29 2021 19: 25: 23 GMT + 0200(South Africa Standard Time) { }
  //   id: 2231430022
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-29T10:58:44+02:00"
  //   startDate: Fri Oct 29 2021 10: 58: 44 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-29T19:25:24+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // },
  // //  second list start
  // {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "VO2 Practical Code Implementation Fix"
  //   dur: 3853000
  //   end: "2021-10-13T18:59:47+02:00"
  //   endDate: Wed Oct 13 2021 18: 59: 47 GMT + 0200(South Africa Standard Time) { }
  //   id: 2209351486
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-13T17:55:34+02:00"
  //   startDate: Wed Oct 13 2021 17: 55: 34 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-13T19:10:49+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Eval video VO2"
  //   dur: 1799000
  //   end: "2021-10-13T17:38:43+02:00"
  //   endDate: Wed Oct 13 2021 17: 38: 43 GMT + 0200(South Africa Standard Time) { }
  //   id: 2209265600
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-13T17:08:44+02:00"
  //   startDate: Wed Oct 13 2021 17: 08: 44 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-13T17:38:46+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 8437000
  //   end: "2021-10-13T17:02:03+02:00"
  //   endDate: Wed Oct 13 2021 17: 02: 03 GMT + 0200(South Africa Standard Time) { }
  //   id: 2208958614
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-13T14:41:26+02:00"
  //   startDate: Wed Oct 13 2021 14: 41: 26 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-13T17:02:10+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 14544000
  //   end: "2021-10-13T14:01:41+02:00"
  //   endDate: Wed Oct 13 2021 14: 01: 41 GMT + 0200(South Africa Standard Time) { }
  //   id: 2208503665
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-13T09:59:17+02:00"
  //   startDate: Wed Oct 13 2021 09: 59: 17 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-13T14:01:41+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "VO2 Practical implementation"
  //   dur: 9284000
  //   end: "2021-10-13T12:24:48+02:00"
  //   endDate: Wed Oct 13 2021 12: 24: 48 GMT + 0200(South Africa Standard Time) { }
  //   id: 2208488627
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-13T09:50:04+02:00"
  //   startDate: Wed Oct 13 2021 09: 50: 04 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-13T12:24:50+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Practical code implementation"
  //   dur: 2000
  //   end: "2021-10-13T09:50:02+02:00"
  //   endDate: Wed Oct 13 2021 09: 50: 02 GMT + 0200(South Africa Standard Time) { }
  //   id: 2208488430
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-13T09:50:00+02:00"
  //   startDate: Wed Oct 13 2021 09: 50: 00 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-13T09:50:08+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Practical code implementation"
  //   dur: 3000
  //   end: "2021-10-13T09:49:48+02:00"
  //   endDate: Wed Oct 13 2021 09: 49: 48 GMT + 0200(South Africa Standard Time) { }
  //   id: 2208488063
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-13T09:49:45+02:00"
  //   startDate: Wed Oct 13 2021 09: 49: 45 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-13T09:49:49+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "VO2 Practical implementation"
  //   dur: 16000
  //   end: "2021-10-13T09:49:44+02:00"
  //   endDate: Wed Oct 13 2021 09: 49: 44 GMT + 0200(South Africa Standard Time) { }
  //   id: 2208488058
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-13T09:49:28+02:00"
  //   startDate: Wed Oct 13 2021 09: 49: 28 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-13T09:49:47+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 9134000
  //   end: "2021-10-13T09:09:15+02:00"
  //   endDate: Wed Oct 13 2021 09: 09: 15 GMT + 0200(South Africa Standard Time) { }
  //   id: 2208276017
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-13T06:37:01+02:00"
  //   startDate: Wed Oct 13 2021 06: 37: 01 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-13T09:59:21+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "practical code implementation"
  //   dur: 9895000
  //   end: "2021-10-12T18:20:57+02:00"
  //   endDate: Tue Oct 12 2021 18: 20: 57 GMT + 0200(South Africa Standard Time) { }
  //   id: 2207277026
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-12T15:36:02+02:00"
  //   startDate: Tue Oct 12 2021 15: 36: 02 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-12T18:20:58+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 4822000
  //   end: "2021-10-12T14:25:05+02:00"
  //   endDate: Tue Oct 12 2021 14: 25: 05 GMT + 0200(South Africa Standard Time) { }
  //   id: 2206989283
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-12T13:04:43+02:00"
  //   startDate: Tue Oct 12 2021 13: 04: 43 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-12T14:25:06+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "practical code implementation"
  //   dur: 12632000
  //   end: "2021-10-12T14:11:20+02:00"
  //   endDate: Tue Oct 12 2021 14: 11: 20 GMT + 0200(South Africa Standard Time) { }
  //   id: 2206768535
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-12T10:40:48+02:00"
  //   startDate: Tue Oct 12 2021 10: 40: 48 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-12T14:11:21+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 22700000
  //   end: "2021-10-12T12:54:22+02:00"
  //   endDate: Tue Oct 12 2021 12: 54: 22 GMT + 0200(South Africa Standard Time) { }
  //   id: 2206458442
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-12T06:36:02+02:00"
  //   startDate: Tue Oct 12 2021 06: 36: 02 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-12T12:54:24+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "MCV2-PersonMain"
  //   dur: 13394000
  //   end: "2021-10-12T06:50:54+02:00"
  //   endDate: Tue Oct 12 2021 06: 50: 54 GMT + 0200(South Africa Standard Time) { }
  //   id: 2206337723
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-12T03:07:40+02:00"
  //   startDate: Tue Oct 12 2021 03: 07: 40 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 6999158
  //   updated: "2021-10-12T06:50:57+02:00"
  //   use_stop: true
  //   user: "Kndenze"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 11023000
  //   end: "2021-10-11T15:35:08+02:00"
  //   endDate: Mon Oct 11 2021 15: 35: 08 GMT + 0200(South Africa Standard Time) { }
  //   id: 2205200074
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-11T12:31:25+02:00"
  //   startDate: Mon Oct 11 2021 12: 31: 25 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-11T15:35:09+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Practical code implementation"
  //   dur: 7000
  //   end: "2021-10-11T11:18:15+02:00"
  //   endDate: Mon Oct 11 2021 11: 18: 15 GMT + 0200(South Africa Standard Time) { }
  //   id: 2205084175
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-11T11:18:08+02:00"
  //   startDate: Mon Oct 11 2021 11: 18: 08 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-11T11:18:15+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 3563000
  //   end: "2021-10-11T10:07:31+02:00"
  //   endDate: Mon Oct 11 2021 10: 07: 31 GMT + 0200(South Africa Standard Time) { }
  //   id: 2204857281
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-11T09:08:08+02:00"
  //   startDate: Mon Oct 11 2021 09: 08: 08 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-11T16:16:48+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 20038000
  //   end: "2021-10-11T12:17:01+02:00"
  //   endDate: Mon Oct 11 2021 12: 17: 01 GMT + 0200(South Africa Standard Time) { }
  //   id: 2204710445
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-11T06:43:03+02:00"
  //   startDate: Mon Oct 11 2021 06: 43: 03 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-11T12:17:01+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 14207000
  //   end: "2021-10-08T19:42:06+02:00"
  //   endDate: Fri Oct 08 2021 19: 42: 06 GMT + 0200(South Africa Standard Time) { }
  //   id: 2203277014
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-08T15:45:19+02:00"
  //   startDate: Fri Oct 08 2021 15: 45: 19 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-08T19:43:35+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 10940000
  //   end: "2021-10-08T17:45:19+02:00"
  //   endDate: Fri Oct 08 2021 17: 45: 19 GMT + 0200(South Africa Standard Time) { }
  //   id: 2203082506
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-08T14:42:59+02:00"
  //   startDate: Fri Oct 08 2021 14: 42: 59 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-08T17:45:22+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Unit Testing , Automation Cont'd"
  //   dur: 12655000
  //   end: "2021-10-08T13:36:58+02:00"
  //   endDate: Fri Oct 08 2021 13: 36: 58 GMT + 0200(South Africa Standard Time) { }
  //   id: 2202691972
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-08T10:06:03+02:00"
  //   startDate: Fri Oct 08 2021 10: 06: 03 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-08T13:36:59+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 30129000
  //   end: "2021-10-08T14:20:43+02:00"
  //   endDate: Fri Oct 08 2021 14: 20: 43 GMT + 0200(South Africa Standard Time) { }
  //   id: 2202474597
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-08T05:58:34+02:00"
  //   startDate: Fri Oct 08 2021 05: 58: 34 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-08T14:20:43+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 12356000
  //   end: "2021-10-07T19:07:13+02:00"
  //   endDate: Thu Oct 07 2021 19: 07: 13 GMT + 0200(South Africa Standard Time) { }
  //   id: 2201475516
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-07T15:41:17+02:00"
  //   startDate: Thu Oct 07 2021 15: 41: 17 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-07T19:07:20+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 12104000
  //   end: "2021-10-07T18:29:53+02:00"
  //   endDate: Thu Oct 07 2021 18: 29: 53 GMT + 0200(South Africa Standard Time) { }
  //   id: 2201407412
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-07T15:08:09+02:00"
  //   startDate: Thu Oct 07 2021 15: 08: 09 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-07T18:29:55+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Unit Testing"
  //   dur: 8800000
  //   end: "2021-10-07T14:19:09+02:00"
  //   endDate: Thu Oct 07 2021 14: 19: 09 GMT + 0200(South Africa Standard Time) { }
  //   id: 2201090799
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-07T11:52:29+02:00"
  //   startDate: Thu Oct 07 2021 11: 52: 29 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-07T14:19:12+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "MCV2-PersonMain"
  //   dur: 6223000
  //   end: "2021-10-07T06:27:03+02:00"
  //   endDate: Thu Oct 07 2021 06: 27: 03 GMT + 0200(South Africa Standard Time) { }
  //   id: 2200619565
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-07T04:43:20+02:00"
  //   startDate: Thu Oct 07 2021 04: 43: 20 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 6999158
  //   updated: "2021-10-07T06:27:05+02:00"
  //   use_stop: true
  //   user: "Kndenze"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 3846000
  //   end: "2021-10-06T17:56:27+02:00"
  //   endDate: Wed Oct 06 2021 17: 56: 27 GMT + 0200(South Africa Standard Time) { }
  //   id: 2199804827
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-06T16:52:21+02:00"
  //   startDate: Wed Oct 06 2021 16: 52: 21 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-06T17:56:29+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "C# Types(Classes)"
  //   dur: 3178000
  //   end: "2021-10-06T15:51:24+02:00"
  //   endDate: Wed Oct 06 2021 15: 51: 24 GMT + 0200(South Africa Standard Time) { }
  //   id: 2199562590
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-06T14:58:26+02:00"
  //   startDate: Wed Oct 06 2021 14: 58: 26 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-06T15:51:25+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "C# Best Practices"
  //   dur: 3876000
  //   end: "2021-10-06T14:45:20+02:00"
  //   endDate: Wed Oct 06 2021 14: 45: 20 GMT + 0200(South Africa Standard Time) { }
  //   id: 2199424485
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-06T13:40:44+02:00"
  //   startDate: Wed Oct 06 2021 13: 40: 44 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-06T14:45:21+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "C# Best Practices"
  //   dur: 7540000
  //   end: "2021-10-06T12:07:04+02:00"
  //   endDate: Wed Oct 06 2021 12: 07: 04 GMT + 0200(South Africa Standard Time) { }
  //   id: 2199079933
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-06T10:01:24+02:00"
  //   startDate: Wed Oct 06 2021 10: 01: 24 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-06T12:07:06+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "MCV2-PersonMain"
  //   dur: 15855000
  //   end: "2021-10-06T05:26:12+02:00"
  //   endDate: Wed Oct 06 2021 05: 26: 12 GMT + 0200(South Africa Standard Time) { }
  //   id: 2198617038
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-06T01:01:57+02:00"
  //   startDate: Wed Oct 06 2021 01: 01: 57 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 6999158
  //   updated: "2021-10-06T05:26:15+02:00"
  //   use_stop: true
  //   user: "Kndenze"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 19693000
  //   end: "2021-10-05T20:49:18+02:00"
  //   endDate: Tue Oct 05 2021 20: 49: 18 GMT + 0200(South Africa Standard Time) { }
  //   id: 2197759398
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-05T15:21:05+02:00"
  //   startDate: Tue Oct 05 2021 15: 21: 05 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-05T20:49:19+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 10798000
  //   end: "2021-10-05T17:35:24+02:00"
  //   endDate: Tue Oct 05 2021 17: 35: 24 GMT + 0200(South Africa Standard Time) { }
  //   id: 2197647511
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-05T14:35:26+02:00"
  //   startDate: Tue Oct 05 2021 14: 35: 26 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-05T17:35:23+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 4008000
  //   end: "2021-10-05T14:43:13+02:00"
  //   endDate: Tue Oct 05 2021 14: 43: 13 GMT + 0200(South Africa Standard Time) { }
  //   id: 2197573754
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-05T13:36:25+02:00"
  //   startDate: Tue Oct 05 2021 13: 36: 25 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-05T14:43:15+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Github Practice"
  //   dur: 2263000
  //   end: "2021-10-05T12:04:09+02:00"
  //   endDate: Tue Oct 05 2021 12: 04: 09 GMT + 0200(South Africa Standard Time) { }
  //   id: 2197341697
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-05T11:26:26+02:00"
  //   startDate: Tue Oct 05 2021 11: 26: 26 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-05T12:04:12+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Github Practice"
  //   dur: 649000
  //   end: "2021-10-05T10:25:17+02:00"
  //   endDate: Tue Oct 05 2021 10: 25: 17 GMT + 0200(South Africa Standard Time) { }
  //   id: 2197210903
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-05T10:14:28+02:00"
  //   startDate: Tue Oct 05 2021 10: 14: 28 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-05T10:25:20+02:00"
  //   use_stop: true
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Github Practice"
  //   dur: 3000
  //   end: "2021-10-05T10:14:04+02:00"
  //   endDate: Tue Oct 05 2021 10: 14: 04 GMT + 0200(South Africa Standard Time) { }
  //   id: 2197210148
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-05T10:14:01+02:00"
  //   startDate: Tue Oct 05 2021 10: 14: 01 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-05T10:14:27+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 26233000
  //   end: "2021-10-05T13:59:48+02:00"
  //   endDate: Tue Oct 05 2021 13: 59: 48 GMT + 0200(South Africa Standard Time) { }
  //   id: 2196949331
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-05T06:42:35+02:00"
  //   startDate: Tue Oct 05 2021 06: 42: 35 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-05T13:59:52+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Github"
  //   dur: 1684000
  //   end: "2021-10-04T20:08:17+02:00"
  //   endDate: Mon Oct 04 2021 20: 08: 17 GMT + 0200(South Africa Standard Time) { }
  //   id: 2196337889
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-04T19:40:13+02:00"
  //   startDate: Mon Oct 04 2021 19: 40: 13 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-04T20:08:19+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Github"
  //   dur: 1485000
  //   end: "2021-10-04T19:39:59+02:00"
  //   endDate: Mon Oct 04 2021 19: 39: 59 GMT + 0200(South Africa Standard Time) { }
  //   id: 2196337561
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-04T19:15:14+02:00"
  //   startDate: Mon Oct 04 2021 19: 15: 14 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-04T19:40:02+02:00"
  //   use_stop: true
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "Github"
  //   dur: 890000
  //   end: "2021-10-04T18:39:56+02:00"
  //   endDate: Mon Oct 04 2021 18: 39: 56 GMT + 0200(South Africa Standard Time) { }
  //   id: 2196337550
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-04T18:25:06+02:00"
  //   startDate: Mon Oct 04 2021 18: 25: 06 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7258724
  //   updated: "2021-10-04T19:39:59+02:00"
  //   use_stop: true
  //   user: "Thulani"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 8460000
  //   end: "2021-10-04T17:32:31+02:00"
  //   endDate: Mon Oct 04 2021 17: 32: 31 GMT + 0200(South Africa Standard Time) { }
  //   id: 2195799214
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-04T15:11:31+02:00"
  //   startDate: Mon Oct 04 2021 15: 11: 31 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-04T17:32:31+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 19911000
  //   end: "2021-10-04T13:36:58+02:00"
  //   endDate: Mon Oct 04 2021 13: 36: 58 GMT + 0200(South Africa Standard Time) { }
  //   id: 2195061134
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-04T08:05:07+02:00"
  //   startDate: Mon Oct 04 2021 08: 05: 07 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-04T13:37:00+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 3035000
  //   end: "2021-10-04T07:58:11+02:00"
  //   endDate: Mon Oct 04 2021 07: 58: 11 GMT + 0200(South Africa Standard Time) { }
  //   id: 2195014786
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-04T07:07:36+02:00"
  //   startDate: Mon Oct 04 2021 07: 07: 36 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-29T06:54:27+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: "MCV2-CompServicesModule"
  //   dur: 3109000
  //   end: "2021-10-04T03:27:51+02:00"
  //   endDate: Mon Oct 04 2021 03: 27: 51 GMT + 0200(South Africa Standard Time) { }
  //   id: 2194877962
  //   is_billable: false
  //   pid: null
  //   project: null
  //   project_color: "0"
  //   project_hex_color: null
  //   start: "2021-10-04T02:36:02+02:00"
  //   startDate: Mon Oct 04 2021 02: 36: 02 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 6999158
  //   updated: "2021-10-04T03:27:54+02:00"
  //   use_stop: true
  //   user: "Kndenze"
  // }, {
  //   billable: null
  //   client: null
  //   cur: null
  //   description: ""
  //   dur: 21774000
  //   end: "2021-10-01T12:43:14+02:00"
  //   endDate: Fri Oct 01 2021 12: 43: 14 GMT + 0200(South Africa Standard Time) { }
  //   id: 2192707993
  //   is_billable: false
  //   pid: 171072183
  //   project: "Bitcube Internship"
  //   project_color: "0"
  //   project_hex_color: "#525266"
  //   start: "2021-10-01T06:40:20+02:00"
  //   startDate: Fri Oct 01 2021 06: 40: 20 GMT + 0200(South Africa Standard Time) { }
  //   tags: []
  //   task: null
  //   tid: null
  //   uid: 7008242
  //   updated: "2021-10-01T12:43:14+02:00"
  //   use_stop: true
  //   user: "Geo Coetzee"
  // }

  //     ],
  // groupBy: 'users',
  //   since: this.since,
  //     until: this.until

  //   }


}