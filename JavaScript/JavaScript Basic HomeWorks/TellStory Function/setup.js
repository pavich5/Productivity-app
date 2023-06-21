function createStory(arr) {
    let name = arr[0];
    let mood = arr[1];
    let activity = arr[2];
    return `Once upon a time, there was a person named ${name} who was feeling ${mood}. To cheer ${name} up, 
    they decided to go for a ${activity}. It was a great day and ${name} felt much better after their adventure.`;
  }

    let arr = ['Sara', 'happy', 'walk'];
    let story = createStory(arr);


    console.log(story)