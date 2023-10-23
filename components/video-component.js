var videoSec = Vue.component('video-comp',{
    name : 'video-comp',
    template : `<div class="video-sec">
                    <video autoplay muted loop>
                        <source src="assets/images/Underwater.mp4" type="video/mp4">
                    </video>
                    
                    <div class="container d-flex flex-column justify-content-center gap-3">
                        <h1>The ultimate diving guide to the northern red sea.</h1>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                        
                        <button>
                            Discover
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6007 0.623438L19.8733 6.89598L13.6007 13.1685L12.435 12.0028L16.7092 7.72862H0.556059V6.06334H16.7092L12.435 1.78913L13.6007 0.623438Z" fill="#007AFF"/>
                            </svg>                    
                        </button>
                    </div>
                </div>`
})