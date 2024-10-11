import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    User,
    CallControls,
    SpeakerLayout,
    StreamTheme,
    useCallStateHooks,
    ParticipantView,
} from '@stream-io/video-react-sdk';

import '@stream-io/video-react-sdk/dist/css/styles.css';



const apiKey = 'pq6vdzmry47q';
const userId = 'quangdtdev';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicXVhbmdkdGRldiJ9.WinuEhhcnJJzmmNGrD_UHPzThGN6luqc-hRF46ieo3I';

//const user: User = { id: userId };
const callid = 'audio_room_9f0874d9-8687-4ba4-a85e-985fd84f4627';

const client = new StreamVideoClient({ apiKey, User: { id: userId }, token });
const call = client.call('audio_room', callid);
call.getOrCreate();

export const MyCallApp = () => {
    // Assuming you have the 'client' and 'call' created
    return (
        <StreamVideo client={client}>
            <StreamCall call={call}>
                <StreamTheme>
                    <SpeakerLayout />
                    <CallControls />
                </StreamTheme>
            </StreamCall>
        </StreamVideo>
    );
};

export const callVideoUI = () => {
    const { useParticipants } = useCallStateHooks();
    const participants = useParticipants();
    return (
        <>
            {participants.map((p) => (
                <ParticipantView participant={p} key={p.sessionId} />
            ))}
        </>
    );
};

export const getStream = () => {
    return (
        <StreamVideo client={client} >
            <StreamCall call={call}>
            /* <MyVideoUI /> */
            </StreamCall>
            < /StreamVideo>
            );
};

export const VideoButton = () => {
  const {useCameraState} = useCallStateHooks();
            const {camera, isMute} = useCameraState();
            return (
            <button onClick={() => camera.toggle()}>
                {isMute ? 'Turn on camera' : 'Turn off camera'}
            </button>
            );
};
