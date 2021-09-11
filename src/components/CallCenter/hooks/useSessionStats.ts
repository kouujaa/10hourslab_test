import { useQuery } from "@apollo/client";
import { GET_SESSIONS } from "src/api/queries/sessions";
import { changeDate } from "src/utils/helperFunctions";
import { transformSessionDataForGraph } from "src/utils/helperFunctions";

const useSessions = () => {
  const { data, loading } = useQuery(GET_SESSIONS, {
    fetchPolicy: "cache-and-network",
  });
  const allSessions = changeDate(data?.allSessions, "MMM");
  const graphReadySessions = transformSessionDataForGraph(allSessions);
  console.log(allSessions, graphReadySessions)
  return { data: allSessions, graphReadySessions, loading };
};
export default useSessions;
