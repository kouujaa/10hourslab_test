import moment from "moment";
import _ from "lodash";

export const changeDate = (data, format) => {
  if (data) {
    return data.map((e) => {
      const convertDate = moment(e.created_at).format(format);
      return { ...e, created_at: convertDate };
    });
  } else {
    return [];
  }
};

export const groupByDate = (data) => {
  const hash = data.reduce(
      (p, c) => (
        // eslint-disable-next-line no-sequences
        p[c.created_at] ? p[c.created_at].push(c) : (p[c.created_at] = [c]), p
      ),
      {}
    ),
    enrichedData = Object.keys(hash).map((k) => {
      const filterData = data.filter((e) => e.created_at === k);
      return {
        x: k,
        y: filterData.length,
      };
    });
  return enrichedData;
};
export const groupByBranch = (data) => {
  const hash = data.reduce(
      (p, c) => (
        // eslint-disable-next-line no-sequences
        p[c.branch] ? p[c.branch].push(c) : (p[c.branch] = [c]), p
      ),
      {}
    ),
    enrichedData = Object.keys(hash).map((k) => {
      const filterData = data.filter((e) => e.branch === k);
      return {
        x: k,
        y: filterData.length,
      };
    });
  return enrichedData;
};

export const transformDataForGraph = (data) => groupByDate(data);

export const transformTransactionDataForGraph = (data) => {
  return { byDate: groupByDate(data), byBranch: groupByBranch(data) };
};

export const transformSessionDataForGraph = (data) => {
  return _.sortBy(data.map((e) => {
    return { x: Math.floor(e.long/15), y: Math.floor((e.lat/10)) };
  }), ['long']);
};


