export const handleCategoryChange = (payload) => ({
    type: 'CHANGE_CATEGORY',
    payload,
});

export const handleDifficultyChange = (payload) => ({
    type: 'CHANGE_DIFFICULTY',
    payload,
});

export const handleTypeChange = (payload) => ({
    type: 'CHANGE_TYPE',
    payload,
});

export const handleAmountQuestions = payload => ({
    type: 'CHANGE_AMOUNT_QUESTIONS',
    payload,
});

export const handleScoreChange = (payload) => ({
    type: 'CHANGE_SCORE',
    payload,
})