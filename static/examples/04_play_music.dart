import 'package:bullseye2d/bullseye2d.dart';

class MusicPlayer extends App {
  @override
  onCreate() async {
    audio.playMusic("music.mp3", true);
  }
}

void main() {
  MusicPlayer();
}

