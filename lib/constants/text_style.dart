import 'package:flutter/material.dart';
import 'package:vmusic/constants/color.dart';

TextStyle outStyle({
  FontWeight fontWeight = FontWeight.normal,
  double fontSize = 14,
  Color color = whiteColor,
}) {
  return TextStyle(
    fontSize: fontSize,
    color: color,
    fontWeight: fontWeight,
  );
}
