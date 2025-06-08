const getQuizContent = async (BASE_URL, Topictitle, setQuizContent) => {
  try {
    const response = await fetch(`${BASE_URL}/quiz/${Topictitle}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const quizData = await response.json();
    setQuizContent(quizData);
    console.log(`${Topictitle} data has been loaded successfully!`);
  } catch (error) {
    console.error(`Error fetching quiz data: ${error}`);
  }
};

export default getQuizContent;
