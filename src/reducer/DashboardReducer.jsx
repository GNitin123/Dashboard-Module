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

  messages: [
    {
      userId: 2,
      message:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...',
      createdAt: `${new Date().toLocaleTimeString()} | yesterday`,
      profilePic:
        'https://media.istockphoto.com/photos/profile-picture-of-smiling-millennial-man-in-glasses-posing-picture-id1262376609?k=20&m=1262376609&s=612x612&w=0&h=bKrWVDHkRyxLfmghmXjIopJ0ptMNnmirGdhHiYVo1ng=',
    },
    {
      userId: 1,
      message:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall",
      createdAt: `${new Date().toLocaleTimeString()} | yesterday`,
      profilePic:
        'https://media.istockphoto.com/photos/middle-aged-man-smiling-at-the-camera-picture-id1323163855?k=20&m=1323163855&s=612x612&w=0&h=toV5tWlpSzYEdRxeTKUgenLbxtX2qeKyKfTF8IIKv60=',
    },
    {
      userId: 2,
      message:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum ',
      createdAt: `${new Date().toLocaleTimeString()} | yesterday`,
      profilePic:
        'https://media.istockphoto.com/photos/profile-picture-of-smiling-millennial-man-in-glasses-posing-picture-id1262376609?k=20&m=1262376609&s=612x612&w=0&h=bKrWVDHkRyxLfmghmXjIopJ0ptMNnmirGdhHiYVo1ng=',
    },
    {
      userId: 1,
      message:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words ',
      createdAt: `${new Date().toLocaleTimeString()} | yesterday`,
      profilePic:
        'https://media.istockphoto.com/photos/middle-aged-man-smiling-at-the-camera-picture-id1323163855?k=20&m=1323163855&s=612x612&w=0&h=toV5tWlpSzYEdRxeTKUgenLbxtX2qeKyKfTF8IIKv60=',
    },
  ],
}

export const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REORDER_TASK':
      return { ...state, taskList: action.payload }
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      }
    default:
      return state
  }
}
