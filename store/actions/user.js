export const addClip = ({clip}) => {
  return {
    type: 'ADD_CLIP',
    clip, //clip: clip if the name is same u can shorten
  }
}

export const deleteClip = ({clip}) => {
  return {
    type: 'DELETE_CLIP',
    clip, //clip: clip if the name is same u can shorten
  }
}
