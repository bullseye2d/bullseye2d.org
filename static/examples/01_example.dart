import 'package:bullseye2d/bullseye.dart';

class HelloWorld extends App {
  @override
  onRender() {
    gfx.clear(0, 0, 0);
    gfx.drawCircle(mouse.x, mouse.y, 32);
  }
}

void main() {
  HelloWorld();
}
