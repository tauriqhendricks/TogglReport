import { ReportDataMonthly, ReportMonthly } from "../models/report-monthly.model";
import { ReportWeekly } from "../models/report-weekly.model";

export class ReportTestData {

  constructor(
    private since: string,
    private until: string,
    private amountOfDays?: number
  ) { }

  getWeekTestData(): ReportWeekly {

    if (this.amountOfDays === 1)
      return { ...this.testDataFor1Day } as ReportWeekly;

    if (this.amountOfDays === 2)
      return { ...this.testDataFor2Days } as ReportWeekly;

    if (this.amountOfDays === 3)
      return { ...this.testDataFor3Days } as ReportWeekly;

    if (this.amountOfDays === 4)
      return { ...this.testDataFor4Days } as ReportWeekly;

    return { ...this.testDataFor5Days } as ReportWeekly;

  }

  getMonthTestData(): ReportMonthly {

    return { ...this.testDataForMonth } as ReportMonthly;

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
    data: [
      {
        client: null,
        dur: '30399000',
        end: "2021-10-29T19:25:23+02:00",
        endDate: new Date('Fri Oct 29 2021 19:25:23'),
        pid: null,
        project: null,
        start: "2021-10-29T10:58:44+02:00",
        startDate: new Date('Fri Oct 29 2021 10:58:44'),
        uid: '7258724',
        user: "Thulani",
      }, {
        client: null,
        dur: '3109000',
        end: "2021-10-04T03:27:51+02:00",
        endDate: new Date('Mon Oct 04 2021 03:27:51'),
        pid: null,
        project: null,
        start: "2021-10-04T02:36:02+02:00",
        startDate: new Date('Mon Oct 04 2021 02:36:02'),
        uid: '6999158',
        user: "Kndenze"
      }, {
        client: null,
        dur: '7409000',
        end: "2021-10-29T01:32:07+02:00",
        endDate: new Date('Fri Oct 29 2021 01:32:07'),
        pid: null,
        project: null,
        start: "2021-10-28T23:28:38+02:00",
        startDate: new Date('Thu Oct 28 2021 23:28:38'),
        uid: '7258724',
        user: "Thulani"
      }, {
        client: null,
        dur: '2183000',
        end: "2021-10-28T23:18:33+02:00",
        endDate: new Date('Thu Oct 28 2021 23:18:33'),
        pid: null,
        project: null,
        start: "2021-10-28T22:42:10+02:00",
        startDate: new Date('Thu Oct 28 2021 22:42:10'),
        uid: '7258724',
        user: "Thulani"
      }, {
        client: null,
        dur: '10980000',
        end: "2021-10-28T17:29:15+02:00",
        endDate: new Date('Thu Oct 28 2021 17:29:15'),
        pid: null,
        project: null,
        start: "2021-10-28T14:26:15+02:00",
        startDate: new Date('Thu Oct 28 2021 14:26:15'),
        uid: '7008242',
        user: "Geo Coetzee"
      }, {
        client: null,
        dur: '16848000',
        end: "2021-10-28T12:51:46+02:00",
        endDate: new Date('Thu Oct 28 2021 12:51:46'),
        pid: null,
        project: null,
        start: "2021-10-28T08:10:58+02:00",
        startDate: new Date('Thu Oct 28 2021 08:10:58'),
        uid: '7008242',
        user: "Geo Coetzee"
      }, {
        client: null,
        dur: '4634000',
        end: "2021-10-27T16:08:12+02:00",
        endDate: new Date('Wed Oct 27 2021 16:08:12'),
        pid: null,
        project: null,
        start: "2021-10-27T14:50:58+02:00",
        startDate: new Date('Wed Oct 27 2021 14:50:58'),
        uid: '7258724',
        user: "Thulani"
      }, {
        client: null,
        dur: '2000',
        end: "2021-10-27T14:50:34+02:00",
        endDate: new Date('Wed Oct 27 2021 14:50:34'),
        pid: null,
        project: null,
        start: "2021-10-27T14:50:32+02:00",
        startDate: new Date('Wed Oct 27 2021 14:50:32'),
        uid: '7258724',
        user: "Thulani"
      }, {
        client: null,
        dur: '1922000',
        end: "2021-10-27T14:47:10+02:00",
        endDate: new Date('Wed Oct 27 2021 14:47:10'),
        pid: '171072183',
        project: "Bitcube Internship",
        start: "2021-10-27T14:15:08+02:00",
        startDate: new Date('Wed Oct 27 2021 14: 15: 08'),
        uid: '7008242',
        user: "Geo Coetzee"
      }, {
        client: null,
        dur: '12766000',
        end: "2021-10-27T14:50:02+02:00",
        endDate: new Date('Wed Oct 27 2021 14:50:02'),
        pid: null,
        project: null,
        start: "2021-10-27T11:17:16+02:00",
        startDate: new Date('Wed Oct 27 2021 11:17:16'),
        uid: '7258724',
        user: "Thulani"
      }

    ],
    groupBy: 'users',
    since: this.since,
    until: this.until

  }



}