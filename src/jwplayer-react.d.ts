// src/jwplayer-react.d.ts
declare module '@jwplayer/jwplayer-react' {
  import { ComponentType } from 'react';

  interface JWPlayerProps {
    playlist?: Array<{ file: string; image?: string; title?: string; description?: string }>;
    onPlay?: () => void;
    onPause?: () => void;
    onComplete?: () => void;
    library?: string;
    config?: {
      file: string;
      image?: string;
      title?: string;
      description?: string;
      width?: string | number;
      aspectratio?: string;
      autostart?: boolean;
      controls?: boolean;
    };
  }

  const JWPlayer: ComponentType<JWPlayerProps>;

  export default JWPlayer;
}
