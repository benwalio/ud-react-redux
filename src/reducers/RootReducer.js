const initialState = {
    cards: [
        {
            id: 1,
            title: 'bob',
            body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, nesciunt deserunt officia est in, dolorum natus exercitationem reprehenderit, expedita eaque mollitia aperiam labore magnam nostrum quia voluptatem consectetur ratione sed?'
        },
        {
            id: 2,
            title: 'aaron',
            body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, nesciunt deserunt officia est in, dolorum natus exercitationem reprehenderit, expedita eaque mollitia aperiam labore magnam nostrum quia voluptatem consectetur ratione sed?'
        },
        {
            id: 3,
            title: 'jess',
            body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, nesciunt deserunt officia est in, dolorum natus exercitationem reprehenderit, expedita eaque mollitia aperiam labore magnam nostrum quia voluptatem consectetur ratione sed?'
        },
    ]
};

const RootReducer = (state = initialState, action) => {
    return state;
};

export default RootReducer;