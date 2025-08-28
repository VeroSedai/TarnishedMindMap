import { MousePointers, WhoIsOnline, useHTMLPin, Comments, useComments, useMouse, Realtime } from '@superviz/react-sdk'
import { useViewport } from 'reactflow'
import { useEffect } from 'react'
import DnDFlow from '../DragDrop/DnDFlow'

export default function Room({ participantId }) {
	const { x, y, zoom } = useViewport()
	const { openThreads } = useComments()

	const { pin } = useHTMLPin({
		containerId: 'react-flow-container',
		dataAttributeName: 'data-id',
		dataAttributeValueFilters: [/.*null-(target|source)$/],
	})

	const handleOpenThreads = () => {
		openThreads()
	}

	const onMountComments = () => {
		openThreads()
	}

	const { transform } = useMouse();

	useEffect(() => {
		if (transform) {
			transform({ translate: { x, y }, scale: zoom })
		}
	}, [x, y, zoom, transform])

     useEffect(() => {
        const element = document.querySelector(".react-flow__pane");

        if (!element) return;

        element.setAttribute("data-superviz-id", "plane");
    }, []);

	return (
		<>
			<div id='comments'></div>
			<Realtime />
			<WhoIsOnline position="bottom-right"/>
			<Comments pin={pin} onPinActive={handleOpenThreads} onMount={onMountComments} position='left' />
			<MousePointers elementId='react-flow-container' transform={{ translate: { x, y }, scale: zoom }} />
			<DnDFlow  participantId={participantId} />
		</>
	)
}
