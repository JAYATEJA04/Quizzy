export const fetchDashBoardResults = async ({
  basePath,
  level,
  endpoint,
}: any) => {
  try {
    console.log('hi dudududud', basePath, level, endpoint);

    const response = await fetch(
      `http://192.168.0.3:3000/${basePath}/${level}/${endpoint}`,
    );

    console.log('this is get fetchDashboardResults and the response is:');

    if (!response.ok) {
      throw new Error('Failed to fetch results');
    }

    return response.json();
  } catch (error) {
    console.log(`Can't fetch the results you want: ${error}`);
  }
};
