import 'package:flutter/material.dart';
import 'package:vmusic/services/my_audio_handler.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key, required this.audioHandler});

  final MyAudioHandler audioHandler;
  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}
