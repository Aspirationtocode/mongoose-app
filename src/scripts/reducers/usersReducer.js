const initialState = {
	fetched: false,
	fetching: false,
	data: [],
	error: null,
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		default: {
			return state;
		}
	}
};

export default usersReducer;
