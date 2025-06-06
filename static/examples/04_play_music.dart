import 'package2d:bullseye/bullseye.dart';

class MusicPlayer extends App {
  @override
  onCreate() async {
    audio.playMusic("music.mp3", true);
  }
}

void main() {
  MusicPlayer();
}

