import 'package:bullseye2d/bullseye2d.dart';

class SpritesApp extends App {
  static const zoomFactor = 7.0;
  late Images sprites;
  double frame = 0;

  @override
  onCreate() async {
    final spriteSheet = "my_sheet.png";
    sprites = resources.loadImage(spriteSheet,
      frameWidth: 32, frameHeight: 32);
  }

  @override
  onUpdate() {
    frame += 0.15;
  }

  @override
  onRender() {
    var rotation = frame / 2.0;
    var frame = frame.floor() % sprites.length;

    gfx.clear(0, 0, 0);
    gfx.drawImage(sprites, frame,
      mouse.x, mouse.y,
      rotation,
      zoomFactor, zoomFactor);
  }
}

void main() {
  SpritesApp();
}
