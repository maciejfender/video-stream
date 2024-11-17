document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('videoStream');
    
    async function startCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: true,
                audio: true 
            });
            videoElement.srcObject = stream;
        } catch (err) {
            console.error('Error accessing camera:', err);
        }
    }

    // Start camera when the page loads
    startCamera();
}); 