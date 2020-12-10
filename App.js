/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import YouTube from 'react-native-youtube';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const videos = [
  {
    contentLink: 'YvIIDz843BA',
  },
  {
    contentLink: 'AhttAg8HBy4',
  },
  {
    contentLink: 'khdDFlAIjyI',
  },
  {
    contentLink: 'KQ67fDlqqhc',
  },
  {
    contentLink: 'Ei-wtJ3GJRs',
  },
  {
    contentLink: 'PUkAguR-VV4',
  },
  {
    contentLink: 'LpBr5ehG1lE',
  },
  {
    contentLink: '4E0EcmKYdX0',
  },
  {
    contentLink: 'L3TWwqsXL8I',
  },
];

class App extends React.Component {
  state = {
    videoIndex: 0,
  };

  render() {
    const config = {
      velocityThreshold: 0.1,
      directionalOffsetThreshold: 90,
    };
    return (
      <SafeAreaView
        style={{justifyContent: 'center', flex: 1, backgroundColor: 'black'}}>
        <GestureRecognizer
          onSwipeDown={() =>
            this.setState({videoIndex: this.state.videoIndex - 1})
          }
          onSwipeUp={() =>
            this.setState({videoIndex: this.state.videoIndex + 1})
          }
          style={{
            flex: 1,
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          config={config}>
          <YouTube
            videoId={videos[this.state.videoIndex].contentLink} // The YouTube video ID
            play // control playback of video with true/false
            //fullscreen // control whether the video should play in fullscreen or inline
            onReady={(e) => this.setState({isReady: true})}
            onChangeState={(e) => this.setState({status: e.state})}
            onChangeQuality={(e) => this.setState({quality: e.quality})}
            onError={(e) => this.setState({error: e.error})}
            showinfo={false}
            style={{alignSelf: 'center', height: 300, width: 400}}
          />
        </GestureRecognizer>
      </SafeAreaView>
    );
  }
}

export default App;
