import 'package:flutter/material.dart';
import 'package:vmusic/models/song.dart';

class PlaylistProvider extends ChangeNotifier {
  final List<Song> _playlist = [];
}
