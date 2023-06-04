import { uuidv4 } from "uuidv4";

function chillHop() {
  return [
    {
      name: "Apple",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/05/9e6aaa4e04b9e4054f8ed2586d331113e82247da-1024x1024.jpg",
      artist: "J.Folk",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=58833",
      id: uuidv4(),
      active: false,
    },
    {
      name: "It’s Okay",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/05/5683fa8ae05221c0d06eeedd90fe00e653d27c48-1024x1024.jpg",
      artist: "Yasper",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=58833",
      id: uuidv4(),
      active: "false",
    },
    {
      name: "No problem",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/11/379d68b8db2ba38393c379a5cdf74ff8b255ae9a-1024x1024.jpg",
      artist: "Misha, cocabona, J.Lamotta",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=58833",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Changes in Time",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/07/49bc1653b33bd42e570ecdeba7be86e8bd1b5c38-1024x1024.jpg",
      artist: "Shrimpnose",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=58833",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Humility Piece",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/09/ce636ede9d5fc9fc2417ce40af98060fbcbdadca-1024x1024.jpg",
      artist: "Psalm Trees",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=58833",
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
