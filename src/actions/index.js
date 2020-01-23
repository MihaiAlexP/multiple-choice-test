export const toggleStatus = (id, status) => ({
  type: 'TOGGLE_STATUS',
  id,
  status
});

export const toggleVariant = (id, variant) => ({
  type: 'TOGGLE_VARIANT',
  id,
  variant
});

export const updateResults = (totalCount, correctCount) => ({
  type: 'UPDATE_RESULTS',
  totalCount,
  correctCount
});
