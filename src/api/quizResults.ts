export const fetchDashBoardResults = async ({basePath, endpoint}: any) => {
  try {
    console.log('hi dudududud', basePath, endpoint);

    const response = await fetch(
      `http://192.162.0.5:3000/${basePath}/${endpoint}`,
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
