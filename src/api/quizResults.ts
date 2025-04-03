export const fetchDashBoardResults = async (basePath, endpoint) => {
  try {
    const response = await fetch(
      `http://192.162.0.5:3000/${basePath}/${endpoint}`,
    );

    if (!response.ok) {
      throw new Error('Failed to fetch results');
    }

    return response.json();
  } catch (error) {
    console.log(`Can't fetch the results you want: ${error}`);
  }
};
