// clear selectedoptions
export const clearSelectedOptions = async (baseURL, QuizTitle) => {
  try {
    const url = `${baseURL}/${QuizTitle}/selected-options`;
    console.log(url);
    const response = await fetch(url, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Selected options cleared successfully:', data);
  } catch (error) {
    console.error('Error clearing selected options:', error);
  }
};

// store selected options
export const storeSelectedOption = async (
  option,
  baseUrl,
  QuizTitle,
  QuizLevel,
  questionCount,
  quizQuestions,
) => {
  try {
    const url = `${baseUrl}/quiz/${QuizTitle}/${QuizLevel}/${
      questionCount + 1
    }/answer`;

    const responseExpected = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        questionId: quizQuestions[questionCount].id,
        selectedOption: option,
      }),
    });

    if (!responseExpected.ok) {
      throw new Error(`HTTP error: ${responseExpected.status}`);
    }

    const data = await responseExpected.json();
    // console.log(data);

    console.log('Option stored successfully:', data);
  } catch (error) {
    console.log(`Error storing selected option: ${error}`);
  }
};
