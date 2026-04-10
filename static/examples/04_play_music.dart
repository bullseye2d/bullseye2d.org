import 'package:bullseye2d/bullseye2d.dart';

class MusicPlayer extends App {
  MusicPlayer([AppConfig? config]) : super(config);

  @override
  onCreate() async {
    audio.playMusic("assets/music.mp3", true);
  }
}

void main() {
  MusicPlayer();
}

