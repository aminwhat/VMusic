import 'dart:typed_data';
import 'package:audio_service/audio_service.dart';
import 'package:flutter/material.dart';
import 'package:transparent_image/transparent_image.dart';
import 'package:vmusic/services/fetch_songs.dart';
import 'package:vmusic/services/my_audio_handler.dart';

class SongWidget extends StatelessWidget {
  const SongWidget({
    super.key,
    required this.audioHandler,
    required this.item,
    required this.index,
  });

  final MyAudioHandler audioHandler;
  final MediaItem item;
  final int index;

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<MediaItem?>(
      stream: audioHandler.mediaItem,
      builder: (context, itemSnapshot) {
        if (itemSnapshot.data != null) {
          return DecoratedBox(
            decoration: BoxDecoration(
              color: itemSnapshot.data != item
                  ? Theme.of(context).colorScheme.primaryContainer
                  : null,
            ),
            child: ListTile(
              leading: Container(
                height: 45,
                width: 45,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  color: Theme.of(context).colorScheme.primaryContainer,
                ),
                child: itemSnapshot.data!.artUri == null
                    ? const Icon(Icons.music_note)
                    : FutureBuilder<Uint8List?>(
                        future: toImage(uri: item.artUri!),
                        builder: (context, snapshot) {
                          if (snapshot.data != null) {
                            return ClipRRect(
                              borderRadius: BorderRadius.circular(10),
                              child: FadeInImage(
                                placeholder: MemoryImage(kTransparentImage),
                                image: MemoryImage(snapshot.data!),
                                fit: BoxFit.cover,
                              ),
                            );
                          }

                          return const SizedBox.shrink();
                        },
                      ),
              ),
              title: Text(
                item.title,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
              ),
              subtitle: Text(item.artist.toString()),
            ),
          );
        }

        return const SizedBox.shrink();
      },
    );
  }
}
