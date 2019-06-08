import React from 'react';
import { Text } from 'react-native';

CardCounter = ({ deck, style }) => (
  deck ?
    <Text style={style}>
      {deck.questions
        ? (deck.questions.length === 1
          ? `1 card`
          : `${deck.questions.length} cards`)
        : `No cards yet`
      }
    </Text>
  : null
)

export default CardCounter;