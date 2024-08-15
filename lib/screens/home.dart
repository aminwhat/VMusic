import 'package:flutter/material.dart';
import 'package:vmusic/constants/text_style.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'VMusic',
          style: outStyle(fontWeight: FontWeight.bold),
        ),
      ),
      body: Container(),
    );
  }
}
