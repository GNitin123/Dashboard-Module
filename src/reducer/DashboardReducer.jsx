export const initialState = {
  user: {
    id: 1,
    name: 'John Wick',
    role: 'Developer',
  },
  taskList: [
    {
      id: 1,
      title: 'wash a car',
      status: 'latest Task',
      description: 'Written by bob',
      type: 'success',
    },
    {
      id: 2,
      title: 'buy some vegetables',
      status: 'rejected',
      description: 'By Jon',
      type: 'danger',
    },
    {
      id: 3,
      title: 'service the car',
      status: '',
      description: 'Written by bob',
      type: '',
      imageURL:
        'https://media.istockphoto.com/photos/profile-picture-of-smiling-millennial-man-in-glasses-posing-picture-id1262376609?k=20&m=1262376609&s=612x612&w=0&h=bKrWVDHkRyxLfmghmXjIopJ0ptMNnmirGdhHiYVo1ng=',
    },
    {
      id: 4,
      title: 'cook food',
      status: 'planned',
      description: 'Written by bob',
      type: 'info',
    },
    {
      id: 5,
      title: 'upload new Photo',
      status: '',
      description: 'Written by mark',
      type: '',
      imageURL:
        'https://media.istockphoto.com/photos/middle-aged-man-smiling-at-the-camera-picture-id1323163855?k=20&m=1323163855&s=612x612&w=0&h=toV5tWlpSzYEdRxeTKUgenLbxtX2qeKyKfTF8IIKv60=',
    },
    {
      id: 6,
      title: 'wash a Bike',
      status: 'latest Task',
      description: 'Written by John',
      type: 'success',
    },
    {
      id: 7,
      title: 'traveling',
      status: 'rejected',
      description: 'Written by bob',
      type: 'danger',
    },
    {
      id: 8,
      title: 'buy a new phone',
      status: 'planned',
      description: 'Written by bob',
      type: 'info',
    },
  ],
}

export const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REORDER_TASK':
      return { ...state, taskList: action.payload }

    default:
      return state
  }
}
