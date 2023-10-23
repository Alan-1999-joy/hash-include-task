var videoSec = Vue.component('footer-comp',{
    name : 'footer-comp',
    template : `<footer>
                    <div class="footer">
                        <div class="container">
                            <div class="download-sec d-flex">
                                <div class="download-sec-left d-flex flex-column align-items-start justify-content-center">
                                    <h6>Download and <br> Start Your Exploration</h6>
                                    <span>Start your journey by exploring new places easily with</span>
                                    <div class="pt-4">
                                        <svg width="181" height="53" viewBox="0 0 181 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M174.189 52.4575H7.52262C3.85762 52.4575 0.855957 49.5309 0.855957 45.9575V6.95752C0.855957 3.38415 3.85762 0.457522 7.52262 0.457522H174.189C177.854 0.457522 180.856 3.38415 180.856 6.95752V45.9575C180.856 49.5309 177.854 52.4575 174.189 52.4575Z" fill="black"/>
                                            <path d="M174.189 1.49914C177.276 1.49914 179.788 3.94802 179.788 6.95752V45.9575C179.788 48.967 177.276 51.4159 174.189 51.4159H7.52262C4.43596 51.4159 1.92429 48.967 1.92429 45.9575V6.95752C1.92429 3.94802 4.43596 1.49914 7.52262 1.49914H174.189ZM174.189 0.457522H7.52262C3.85762 0.457522 0.855957 3.38415 0.855957 6.95752V45.9575C0.855957 49.5309 3.85762 52.4575 7.52262 52.4575H174.189C177.854 52.4575 180.856 49.5309 180.856 45.9575V6.95752C180.856 3.38415 177.854 0.457522 174.189 0.457522Z" fill="#A6A6A6"/>
                                            <path d="M14.7693 10.2578C14.3777 10.6576 14.151 11.28 14.151 12.086V40.8355C14.151 41.6415 14.3777 42.2638 14.7693 42.6636L14.866 42.7513L31.3893 26.6476V26.2673L14.866 10.1636L14.7693 10.2578Z" fill="url(#paint0_linear_1_421)"/>
                                            <path d="M36.8909 32.0182L31.3893 26.6476V26.2673L36.8976 20.8967L37.0209 20.9666L43.5443 24.5854C45.4059 25.6124 45.4059 27.3024 43.5443 28.3359L37.0209 31.9483L36.8909 32.0182Z" fill="url(#paint1_linear_1_421)"/>
                                            <path d="M37.021 31.9484L31.3893 26.4575L14.7693 42.6636C15.3876 43.2974 16.396 43.3737 17.5426 42.74L37.021 31.9484Z" fill="url(#paint2_linear_1_421)"/>
                                            <path d="M37.021 20.9666L17.5426 10.175C16.396 9.54777 15.3876 9.62415 14.7693 10.2579L31.3893 26.4575L37.021 20.9666Z" fill="url(#paint3_linear_1_421)"/>
                                            <path d="M64.0793 13.7743C64.0793 14.8598 63.7459 15.7292 63.0893 16.3776C62.3343 17.1462 61.351 17.533 60.1459 17.533C58.9943 17.533 58.0109 17.1397 57.2043 16.3646C56.3959 15.5781 55.9926 14.6128 55.9926 13.4575C55.9926 12.3021 56.3959 11.3368 57.2043 10.5568C58.0109 9.77521 58.9943 9.38196 60.1459 9.38196C60.7193 9.38196 61.2659 9.49733 61.7876 9.71183C62.3076 9.92796 62.7309 10.2205 63.0376 10.5812L62.3409 11.267C61.8059 10.6511 61.0776 10.3472 60.1459 10.3472C59.3059 10.3472 58.5776 10.6332 57.9593 11.2101C57.3476 11.7886 57.0409 12.5377 57.0409 13.4575C57.0409 14.3772 57.3476 15.1328 57.9593 15.7113C58.5776 16.2817 59.3059 16.5742 60.1459 16.5742C61.0376 16.5742 61.7876 16.2817 62.3793 15.7048C62.7693 15.323 62.991 14.7965 63.0493 14.1237H60.1459V13.1845H64.0193C64.0659 13.3876 64.0793 13.5842 64.0793 13.7743Z" fill="white" stroke="white" stroke-width="0.16" stroke-miterlimit="10"/>
                                            <path d="M70.2243 10.5178H66.586V12.9878H69.866V13.927H66.586V16.397H70.2243V17.3542H65.556V9.56067H70.2243V10.5178Z" fill="white" stroke="white" stroke-width="0.16" stroke-miterlimit="10"/>
                                            <path d="M74.5609 17.3542H73.5309V10.5178H71.2993V9.56067H76.7942V10.5178H74.5609V17.3542Z" fill="white" stroke="white" stroke-width="0.16" stroke-miterlimit="10"/>
                                            <path d="M80.771 17.3542V9.56067H81.7993V17.3542H80.771Z" fill="white" stroke="white" stroke-width="0.16" stroke-miterlimit="10"/>
                                            <path d="M86.3576 17.3542H85.3359V10.5178H83.0959V9.56067H88.5976V10.5178H86.3576V17.3542Z" fill="white" stroke="white" stroke-width="0.16" stroke-miterlimit="10"/>
                                            <path d="M99.0009 16.3516C98.2126 17.1397 97.2359 17.533 96.0709 17.533C94.8993 17.533 93.9226 17.1397 93.1343 16.3516C92.3476 15.5651 91.9559 14.5998 91.9559 13.4575C91.9559 12.3151 92.3476 11.3498 93.1343 10.5633C93.9226 9.77521 94.8993 9.38196 96.0709 9.38196C97.2293 9.38196 98.2059 9.77521 98.9943 10.5698C99.7876 11.3628 100.179 12.3216 100.179 13.4575C100.179 14.5998 99.7876 15.5651 99.0009 16.3516ZM93.8959 15.6983C94.4893 16.2817 95.2109 16.5742 96.0709 16.5742C96.9243 16.5742 97.6526 16.2817 98.2393 15.6983C98.8309 15.115 99.1309 14.3658 99.1309 13.4575C99.1309 12.5491 98.8309 11.8 98.2393 11.2166C97.6526 10.6332 96.9243 10.3407 96.0709 10.3407C95.2109 10.3407 94.4893 10.6332 93.8959 11.2166C93.3043 11.8 93.0043 12.5491 93.0043 13.4575C93.0043 14.3658 93.3043 15.115 93.8959 15.6983Z" fill="white" stroke="white" stroke-width="0.16" stroke-miterlimit="10"/>
                                            <path d="M101.624 17.3542V9.56067H102.874L106.761 15.6219H106.806L106.761 14.1237V9.56067H107.789V17.3542H106.716L102.646 10.9939H102.601L102.646 12.4987V17.3542H101.624Z" fill="white" stroke="white" stroke-width="0.16" stroke-miterlimit="10"/>
                                            <path d="M91.7026 28.7358C88.5709 28.7358 86.0126 31.0596 86.0126 34.2657C86.0126 37.4458 88.5709 39.7939 91.7026 39.7939C94.8409 39.7939 97.3992 37.4458 97.3992 34.2657C97.3992 31.0596 94.8409 28.7358 91.7026 28.7358ZM91.7026 37.6164C89.9842 37.6164 88.5059 36.2336 88.5059 34.2657C88.5059 32.2718 89.9842 30.9133 91.7026 30.9133C93.4209 30.9133 94.9059 32.2718 94.9059 34.2657C94.9059 36.2336 93.4209 37.6164 91.7026 37.6164ZM79.2876 28.7358C76.1492 28.7358 73.5976 31.0596 73.5976 34.2657C73.5976 37.4458 76.1492 39.7939 79.2876 39.7939C82.4242 39.7939 84.9776 37.4458 84.9776 34.2657C84.9776 31.0596 82.4242 28.7358 79.2876 28.7358ZM79.2876 37.6164C77.5676 37.6164 76.0843 36.2336 76.0843 34.2657C76.0843 32.2718 77.5676 30.9133 79.2876 30.9133C81.0059 30.9133 82.4843 32.2718 82.4843 34.2657C82.4843 36.2336 81.0059 37.6164 79.2876 37.6164ZM64.5143 30.4307V32.7804H70.2693C70.1009 34.0934 69.6509 35.0587 68.9609 35.7314C68.1209 36.5439 66.8126 37.4458 64.5143 37.4458C60.9726 37.4458 58.1993 34.6589 58.1993 31.2058C58.1993 27.7527 60.9726 24.9658 64.5143 24.9658C66.4293 24.9658 67.8226 25.6954 68.8509 26.6412L70.5493 24.9853C69.1109 23.6463 67.1976 22.6177 64.5143 22.6177C59.6576 22.6177 55.5759 26.4706 55.5759 31.2058C55.5759 35.9411 59.6576 39.7939 64.5143 39.7939C67.1393 39.7939 69.1109 38.9554 70.6609 37.3824C72.2493 35.8338 72.7443 33.6563 72.7443 31.8981C72.7443 31.3521 72.6976 30.8499 72.6143 30.4307H64.5143ZM124.924 32.2523C124.456 31.0157 123.011 28.7358 120.068 28.7358C117.151 28.7358 114.723 30.9767 114.723 34.2657C114.723 37.3629 117.126 39.7939 120.348 39.7939C122.953 39.7939 124.456 38.2453 125.074 37.3434L123.141 36.0873C122.496 37.0071 121.618 37.6164 120.348 37.6164C119.086 37.6164 118.181 37.0526 117.601 35.9411L125.186 32.8812L124.924 32.2523ZM117.191 34.0934C117.126 31.9614 118.889 30.8694 120.153 30.8694C121.143 30.8694 121.983 31.3521 122.263 32.0427L117.191 34.0934ZM111.026 39.4576H113.519V23.2076H111.026V39.4576ZM106.943 29.9676H106.859C106.299 29.3208 105.231 28.7358 103.878 28.7358C101.038 28.7358 98.4409 31.1668 98.4409 34.2836C98.4409 37.3824 101.038 39.7939 103.878 39.7939C105.231 39.7939 106.299 39.2041 106.859 38.5378H106.943V39.3308C106.943 41.4449 105.784 42.5808 103.916 42.5808C102.393 42.5808 101.448 41.5083 101.058 40.6064L98.8892 41.4888C99.5142 42.9546 101.169 44.7583 103.916 44.7583C106.839 44.7583 109.306 43.0813 109.306 39.0009V29.0722H106.943V29.9676ZM104.091 37.6164C102.373 37.6164 100.934 36.2141 100.934 34.2836C100.934 32.3352 102.373 30.9133 104.091 30.9133C105.784 30.9133 107.119 32.3352 107.119 34.2836C107.119 36.2141 105.784 37.6164 104.091 37.6164ZM136.598 23.2076H130.634V39.4576H133.121V33.3004H136.598C139.359 33.3004 142.068 31.3521 142.068 28.2532C142.068 25.1559 139.353 23.2076 136.598 23.2076ZM136.663 31.0401H133.121V25.4679H136.663C138.519 25.4679 139.579 26.9711 139.579 28.2532C139.579 29.5109 138.519 31.0401 136.663 31.0401ZM152.034 28.7049C150.238 28.7049 148.369 29.4784 147.601 31.1928L149.808 32.0947C150.283 31.1928 151.156 30.9003 152.079 30.9003C153.369 30.9003 154.678 31.6559 154.698 32.9901V33.1607C154.248 32.9072 153.284 32.5318 152.099 32.5318C149.723 32.5318 147.301 33.8074 147.301 36.1881C147.301 38.3656 149.248 39.7679 151.436 39.7679C153.109 39.7679 154.033 39.0318 154.613 38.1754H154.698V39.4316H157.099V33.1981C157.099 30.3169 154.893 28.7049 152.034 28.7049ZM151.734 37.6099C150.921 37.6099 149.788 37.2167 149.788 36.2336C149.788 34.9758 151.201 34.4932 152.424 34.4932C153.519 34.4932 154.033 34.7288 154.698 35.0392C154.503 36.5439 153.174 37.6099 151.734 37.6099ZM165.849 29.0608L162.991 36.1052H162.906L159.951 29.0608H157.269L161.709 38.9051L159.176 44.3829H161.774L168.616 29.0608H165.849ZM143.434 39.4576H145.928V23.2076H143.434V39.4576Z" fill="white"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_421" x1="29.9223" y1="41.1349" x2="8.11213" y2="18.7655" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00A0FF"/>
                                            <stop offset="0.0066" stop-color="#00A1FF"/>
                                            <stop offset="0.2601" stop-color="#00BEFF"/>
                                            <stop offset="0.5122" stop-color="#00D2FF"/>
                                            <stop offset="0.7604" stop-color="#00DFFF"/>
                                            <stop offset="1" stop-color="#00E3FF"/>
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_1_421" x1="45.9685" y1="26.4556" x2="13.706" y2="26.4556" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FFE000"/>
                                            <stop offset="0.4087" stop-color="#FFBD00"/>
                                            <stop offset="0.7754" stop-color="#FFA500"/>
                                            <stop offset="1" stop-color="#FF9C00"/>
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_1_421" x1="33.9586" y1="23.4726" x2="4.38231" y2="-6.86211" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FF3A44"/>
                                            <stop offset="1" stop-color="#C31162"/>
                                            </linearGradient>
                                            <linearGradient id="paint3_linear_1_421" x1="10.5857" y1="52.2285" x2="23.7928" y2="38.6828" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#32A071"/>
                                            <stop offset="0.0685" stop-color="#2DA771"/>
                                            <stop offset="0.4762" stop-color="#15CF74"/>
                                            <stop offset="0.8009" stop-color="#06E775"/>
                                            <stop offset="1" stop-color="#00F076"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        
                                        <svg width="181" height="53" viewBox="0 0 181 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M179.856 46.4605C179.856 49.2317 177.564 51.4763 174.73 51.4763H6.98839C4.15546 51.4763 1.85596 49.2317 1.85596 46.4605V6.46097C1.85596 3.69113 4.15546 1.4386 6.98839 1.4386H174.729C177.564 1.4386 179.855 3.69113 179.855 6.46097L179.856 46.4605Z" fill="black"/>
                                            <path d="M174.189 1.49914C177.276 1.49914 179.788 3.94802 179.788 6.95752V45.9575C179.788 48.967 177.276 51.4159 174.189 51.4159H7.52262C4.43596 51.4159 1.92429 48.967 1.92429 45.9575V6.95752C1.92429 3.94802 4.43596 1.49914 7.52262 1.49914H174.189ZM174.189 0.457522H7.52262C3.85762 0.457522 0.855957 3.38415 0.855957 6.95752V45.9575C0.855957 49.5309 3.85762 52.4575 7.52262 52.4575H174.189C177.854 52.4575 180.856 49.5309 180.856 45.9575V6.95752C180.856 3.38415 177.854 0.457522 174.189 0.457522Z" fill="#A6A6A6"/>
                                            <path d="M41.0266 26.1766C40.988 21.9867 44.5453 19.9483 44.708 19.8534C42.6933 16.9895 39.5706 16.5982 38.4733 16.567C35.8506 16.2979 33.3066 18.0971 31.9706 18.0971C30.608 18.0971 28.5506 16.593 26.3333 16.6372C23.48 16.6801 20.8106 18.2908 19.3466 20.792C16.3253 25.8919 18.5786 33.3864 21.4733 37.5087C22.9213 39.5276 24.6133 41.7818 26.828 41.7025C28.9946 41.6154 29.804 40.3557 32.4186 40.3557C35.0093 40.3557 35.7693 41.7025 38.028 41.6518C40.3533 41.6154 41.8173 39.6238 43.2146 37.5867C44.888 35.2727 45.56 32.9938 45.5866 32.8768C45.532 32.8586 41.0706 31.1985 41.0266 26.1766Z" fill="white"/>
                                            <path d="M36.76 13.8552C37.9253 12.4344 38.7226 10.5013 38.5013 8.53955C36.8146 8.61235 34.7053 9.67705 33.4906 11.0668C32.416 12.2914 31.456 14.2985 31.704 16.1861C33.5986 16.3239 35.544 15.254 36.76 13.8552Z" fill="white"/>
                                            <path d="M66.256 13.4692C66.256 14.9993 65.7853 16.1511 64.8453 16.9246C63.9746 17.6383 62.7373 17.9958 61.1346 17.9958C60.34 17.9958 59.66 17.962 59.0906 17.8944V9.5341C59.8333 9.4171 60.6333 9.3573 61.4973 9.3573C63.024 9.3573 64.1746 9.681 64.9506 10.3284C65.82 11.0603 66.256 12.1068 66.256 13.4692ZM64.7826 13.5069C64.7826 12.515 64.5133 11.7545 63.9746 11.2241C63.436 10.695 62.6493 10.4298 61.6133 10.4298C61.1733 10.4298 60.7986 10.4584 60.488 10.5182V16.8739C60.66 16.8999 60.9746 16.9116 61.432 16.9116C62.5013 16.9116 63.3266 16.6217 63.908 16.0419C64.4893 15.4621 64.7826 14.6171 64.7826 13.5069Z" fill="white"/>
                                            <path d="M74.068 14.8057C74.068 15.7482 73.792 16.5204 73.24 17.1262C72.6613 17.7489 71.8947 18.0596 70.9373 18.0596C70.0147 18.0596 69.28 17.7619 68.732 17.1639C68.1853 16.5672 67.912 15.8145 67.912 14.9071C67.912 13.9581 68.1933 13.1794 68.7587 12.5749C69.324 11.9704 70.084 11.6675 71.0413 11.6675C71.964 11.6675 72.7053 11.9652 73.2667 12.5619C73.8 13.1417 74.068 13.8905 74.068 14.8057ZM72.6187 14.8499C72.6187 14.2844 72.4933 13.7995 72.244 13.3952C71.9507 12.9064 71.5333 12.662 70.9907 12.662C70.4293 12.662 70.0027 12.9064 69.7093 13.3952C69.4587 13.7995 69.3347 14.2922 69.3347 14.8746C69.3347 15.4401 69.46 15.925 69.7093 16.3293C70.012 16.8181 70.4333 17.0625 70.9773 17.0625C71.5107 17.0625 71.9293 16.8142 72.2307 16.3163C72.4893 15.9042 72.6187 15.4154 72.6187 14.8499Z" fill="white"/>
                                            <path d="M84.5426 11.7922L82.576 17.9204H81.296L80.4813 15.2593C80.2746 14.595 80.1066 13.9346 79.976 13.2794H79.9506C79.8293 13.9528 79.6613 14.6119 79.4453 15.2593L78.58 17.9204H77.2853L75.436 11.7922H76.872L77.5826 14.7055C77.7546 15.3945 77.896 16.051 78.0093 16.6724H78.0346C78.1386 16.1602 78.3106 15.5076 78.5533 14.7185L79.4453 11.7935H80.584L81.4386 14.6561C81.6453 15.3542 81.8133 16.0263 81.9426 16.6737H81.9813C82.076 16.0432 82.2186 15.3711 82.408 14.6561L83.1706 11.7935H84.5426V11.7922Z" fill="white"/>
                                            <path d="M91.7866 17.9205H90.3893V14.4105C90.3893 13.3289 89.968 12.7881 89.1226 12.7881C88.708 12.7881 88.3733 12.9363 88.1133 13.234C87.856 13.5317 87.7253 13.8827 87.7253 14.2844V17.9192H86.328V13.5434C86.328 13.0052 86.3106 12.4215 86.2773 11.7897H87.5053L87.5706 12.7478H87.6093C87.772 12.4501 88.0146 12.2044 88.3333 12.0081C88.712 11.7793 89.136 11.6636 89.6 11.6636C90.1866 11.6636 90.6746 11.8482 91.0626 12.2187C91.5453 12.6724 91.7866 13.3497 91.7866 14.2493V17.9205Z" fill="white"/>
                                            <path d="M95.64 17.9204H94.244V8.98035H95.64V17.9204Z" fill="white"/>
                                            <path d="M103.867 14.8057C103.867 15.7482 103.591 16.5204 103.039 17.1262C102.46 17.7489 101.692 18.0596 100.736 18.0596C99.812 18.0596 99.0773 17.7619 98.5306 17.1639C97.984 16.5672 97.7106 15.8145 97.7106 14.9071C97.7106 13.9581 97.992 13.1794 98.5573 12.5749C99.1226 11.9704 99.8826 11.6675 100.839 11.6675C101.763 11.6675 102.503 11.9652 103.065 12.5619C103.599 13.1417 103.867 13.8905 103.867 14.8057ZM102.416 14.8499C102.416 14.2844 102.291 13.7995 102.041 13.3952C101.749 12.9064 101.331 12.662 100.789 12.662C100.227 12.662 99.8 12.9064 99.508 13.3952C99.2573 13.7995 99.1333 14.2922 99.1333 14.8746C99.1333 15.4401 99.2586 15.925 99.508 16.3293C99.8106 16.8181 100.232 17.0625 100.776 17.0625C101.309 17.0625 101.727 16.8142 102.028 16.3163C102.288 15.9042 102.416 15.4154 102.416 14.8499Z" fill="white"/>
                                            <path d="M110.629 17.9205H109.375L109.271 17.2146H109.232C108.803 17.7775 108.191 18.0596 107.396 18.0596C106.803 18.0596 106.323 17.8737 105.961 17.5045C105.633 17.1691 105.469 16.7518 105.469 16.2565C105.469 15.5077 105.789 14.937 106.433 14.5418C107.076 14.1466 107.98 13.9529 109.144 13.962V13.8476C109.144 13.0403 108.709 12.6373 107.839 12.6373C107.219 12.6373 106.672 12.7894 106.2 13.091L105.916 12.1966C106.5 11.8443 107.221 11.6675 108.072 11.6675C109.715 11.6675 110.539 12.5125 110.539 14.2025V16.4593C110.539 17.0716 110.569 17.5591 110.629 17.9205ZM109.179 15.8145V14.8694C107.637 14.8434 106.867 15.2555 106.867 16.1044C106.867 16.4242 106.955 16.6634 107.135 16.8233C107.315 16.9832 107.544 17.0625 107.817 17.0625C108.124 17.0625 108.411 16.9676 108.672 16.7791C108.935 16.5893 109.096 16.3488 109.156 16.0537C109.171 15.9874 109.179 15.9068 109.179 15.8145Z" fill="white"/>
                                            <path d="M118.569 17.9204H117.329L117.264 16.9363H117.225C116.829 17.6851 116.155 18.0595 115.207 18.0595C114.449 18.0595 113.819 17.7696 113.319 17.1898C112.819 16.61 112.569 15.8573 112.569 14.933C112.569 13.9411 112.84 13.1377 113.384 12.5241C113.911 11.9521 114.556 11.6661 115.324 11.6661C116.168 11.6661 116.759 11.943 117.095 12.4981H117.121V8.98035H118.52V16.2694C118.52 16.8661 118.536 17.416 118.569 17.9204ZM117.121 15.336V14.3142C117.121 14.1374 117.108 13.9944 117.083 13.8852C117.004 13.5576 116.835 13.282 116.577 13.0597C116.317 12.8374 116.004 12.7256 115.643 12.7256C115.121 12.7256 114.713 12.9271 114.413 13.3314C114.116 13.7357 113.965 14.2518 113.965 14.8823C113.965 15.4881 114.108 15.9795 114.395 16.3578C114.697 16.7608 115.105 16.9623 115.616 16.9623C116.075 16.9623 116.441 16.7946 116.72 16.4579C116.989 16.1472 117.121 15.7728 117.121 15.336Z" fill="white"/>
                                            <path d="M130.52 14.8057C130.52 15.7482 130.244 16.5204 129.692 17.1262C129.113 17.7489 128.348 18.0596 127.389 18.0596C126.468 18.0596 125.733 17.7619 125.184 17.1639C124.637 16.5672 124.364 15.8145 124.364 14.9071C124.364 13.9581 124.645 13.1794 125.211 12.5749C125.776 11.9704 126.536 11.6675 127.495 11.6675C128.416 11.6675 129.159 11.9652 129.719 12.5619C130.252 13.1417 130.52 13.8905 130.52 14.8057ZM129.072 14.8499C129.072 14.2844 128.947 13.7995 128.697 13.3952C128.403 12.9064 127.987 12.662 127.443 12.662C126.883 12.662 126.456 12.9064 126.161 13.3952C125.911 13.7995 125.787 14.2922 125.787 14.8746C125.787 15.4401 125.912 15.925 126.161 16.3293C126.464 16.8181 126.885 17.0625 127.429 17.0625C127.963 17.0625 128.383 16.8142 128.684 16.3163C128.941 15.9042 129.072 15.4154 129.072 14.8499Z" fill="white"/>
                                            <path d="M138.033 17.9205H136.637V14.4105C136.637 13.3289 136.216 12.7881 135.369 12.7881C134.955 12.7881 134.62 12.9363 134.361 13.234C134.103 13.5317 133.973 13.8827 133.973 14.2844V17.9192H132.575V13.5434C132.575 13.0052 132.559 12.4215 132.525 11.7897H133.752L133.817 12.7478H133.856C134.02 12.4501 134.263 12.2044 134.58 12.0081C134.96 11.7793 135.383 11.6636 135.848 11.6636C136.433 11.6636 136.921 11.8482 137.309 12.2187C137.793 12.6724 138.033 13.3497 138.033 14.2493V17.9205Z" fill="white"/>
                                            <path d="M147.437 12.8128H145.899V15.7898C145.899 16.5464 146.172 16.9247 146.713 16.9247C146.964 16.9247 147.172 16.9039 147.336 16.861L147.372 17.8945C147.096 17.9959 146.733 18.0466 146.287 18.0466C145.735 18.0466 145.305 17.8828 144.995 17.5552C144.683 17.2276 144.528 16.6764 144.528 15.9029V12.8128H143.609V11.7923H144.528V10.6691L145.897 10.2661V11.791H147.436V12.8128H147.437Z" fill="white"/>
                                            <path d="M154.835 17.9204H153.436V14.4364C153.436 13.3379 153.015 12.788 152.171 12.788C151.523 12.788 151.08 13.1065 150.837 13.7435C150.796 13.8774 150.772 14.0412 150.772 14.2336V17.9191H149.376V8.98035H150.772V12.6736H150.799C151.239 12.0015 151.869 11.6661 152.687 11.6661C153.265 11.6661 153.744 11.8507 154.124 12.2212C154.597 12.6827 154.835 13.3691 154.835 14.2765V17.9204Z" fill="white"/>
                                            <path d="M162.465 14.5665C162.465 14.8109 162.447 15.0163 162.413 15.184H158.223C158.241 15.7898 158.441 16.2513 158.829 16.5711C159.184 16.8571 159.641 17.0001 160.201 17.0001C160.821 17.0001 161.387 16.9039 161.896 16.7102L162.115 17.6566C161.519 17.9088 160.817 18.0349 160.005 18.0349C159.032 18.0349 158.265 17.7554 157.711 17.1964C157.153 16.6374 156.877 15.8873 156.877 14.9461C156.877 14.0218 157.135 13.2522 157.653 12.6386C158.195 11.9834 158.927 11.6558 159.851 11.6558C160.755 11.6558 161.441 11.9834 161.905 12.6386C162.28 13.1586 162.465 13.8021 162.465 14.5665ZM161.132 14.2142C161.143 13.8099 161.051 13.4615 160.861 13.1677C160.619 12.7894 160.249 12.5996 159.749 12.5996C159.293 12.5996 158.921 12.7842 158.637 13.1547C158.405 13.4498 158.268 13.8021 158.223 14.2142H161.132Z" fill="white"/>
                                            <path d="M72.3826 41.4126H69.3546L67.6959 36.3309H61.9306L60.3506 41.4126H57.4026L63.1146 24.1122H66.6426L72.3826 41.4126ZM67.196 34.1989L65.696 29.6814C65.5373 29.2199 65.2399 28.1331 64.8013 26.4223H64.7479C64.5733 27.1581 64.2919 28.2449 63.9053 29.6814L62.4319 34.1989H67.196Z" fill="white"/>
                                            <path d="M87.0719 35.0219C87.0719 37.1435 86.4839 38.8205 85.3079 40.0516C84.2546 41.1475 82.9466 41.6948 81.3853 41.6948C79.6999 41.6948 78.4893 41.1046 77.7519 39.9242H77.6986V46.4957H74.8559V33.0446C74.8559 31.7108 74.8199 30.3419 74.7506 28.9379H77.2506L77.4093 30.9152H77.4626C78.4106 29.4254 79.8493 28.6818 81.7799 28.6818C83.2893 28.6818 84.5493 29.2629 85.5573 30.4264C86.5679 31.5912 87.0719 33.1226 87.0719 35.0219ZM84.1759 35.1233C84.1759 33.9091 83.8959 32.9081 83.3333 32.1203C82.7186 31.2987 81.8933 30.8879 80.8586 30.8879C80.1573 30.8879 79.5199 31.1167 78.9506 31.5678C78.3799 32.0228 78.0066 32.6169 77.8319 33.3527C77.7439 33.6959 77.6999 33.9767 77.6999 34.1977V36.2777C77.6999 37.1851 77.9853 37.9508 78.5559 38.5761C79.1266 39.2014 79.8679 39.5134 80.7799 39.5134C81.8506 39.5134 82.6839 39.1104 83.2799 38.307C83.8773 37.5023 84.1759 36.4415 84.1759 35.1233Z" fill="white"/>
                                            <path d="M101.788 35.0219C101.788 37.1435 101.2 38.8205 100.023 40.0516C98.9706 41.1475 97.6626 41.6948 96.1013 41.6948C94.416 41.6948 93.2053 41.1046 92.4693 39.9242H92.416V46.4957H89.5733V33.0446C89.5733 31.7108 89.5373 30.3419 89.468 28.9379H91.968L92.1266 30.9152H92.18C93.1266 29.4254 94.5653 28.6818 96.4973 28.6818C98.0053 28.6818 99.2653 29.2629 100.276 30.4264C101.283 31.5912 101.788 33.1226 101.788 35.0219ZM98.892 35.1233C98.892 33.9091 98.6106 32.9081 98.048 32.1203C97.4333 31.2987 96.6106 30.8879 95.5746 30.8879C94.872 30.8879 94.236 31.1167 93.6653 31.5678C93.0946 32.0228 92.7226 32.6169 92.548 33.3527C92.4613 33.6959 92.416 33.9767 92.416 34.1977V36.2777C92.416 37.1851 92.7013 37.9508 93.2693 38.5761C93.84 39.2001 94.5813 39.5134 95.496 39.5134C96.5666 39.5134 97.4 39.1104 97.996 38.307C98.5933 37.5023 98.892 36.4415 98.892 35.1233Z" fill="white"/>
                                            <path d="M118.241 36.5611C118.241 38.0327 117.717 39.23 116.665 40.1543C115.509 41.1644 113.9 41.6688 111.832 41.6688C109.923 41.6688 108.392 41.31 107.233 40.5911L107.892 38.281C109.14 39.0168 110.509 39.386 112.001 39.386C113.072 39.386 113.905 39.1494 114.504 38.6788C115.1 38.2082 115.397 37.5764 115.397 36.7886C115.397 36.0866 115.152 35.4951 114.66 35.0154C114.171 34.5357 113.353 34.0898 112.212 33.6777C109.105 32.548 107.553 30.8931 107.553 28.7169C107.553 27.2947 108.097 26.1286 109.187 25.2212C110.272 24.3125 111.72 23.8588 113.531 23.8588C115.145 23.8588 116.487 24.1331 117.557 24.6804L116.847 26.9398C115.847 26.4094 114.716 26.1442 113.451 26.1442C112.451 26.1442 111.669 26.3847 111.109 26.8631C110.636 27.2908 110.399 27.8121 110.399 28.4296C110.399 29.1134 110.669 29.6789 111.213 30.1235C111.687 30.5343 112.547 30.9789 113.795 31.4586C115.321 32.0579 116.443 32.7586 117.164 33.562C117.883 34.3628 118.241 35.3651 118.241 36.5611Z" fill="white"/>
                                            <path d="M127.64 31.0179H124.507V37.0746C124.507 38.6151 125.059 39.3847 126.165 39.3847C126.673 39.3847 127.095 39.3418 127.428 39.256L127.507 41.3607C126.947 41.5648 126.209 41.6675 125.296 41.6675C124.173 41.6675 123.296 41.3334 122.663 40.6665C122.032 39.9983 121.715 38.8777 121.715 37.3034V31.0153H119.848V28.9353H121.715V26.6512L124.507 25.8296V28.9353H127.64V31.0179Z" fill="white"/>
                                            <path d="M141.777 35.0726C141.777 36.9901 141.215 38.5644 140.092 39.7955C138.915 41.063 137.352 41.6948 135.404 41.6948C133.527 41.6948 132.032 41.0877 130.917 39.8735C129.803 38.6593 129.245 37.1266 129.245 35.2793C129.245 33.3462 129.819 31.7628 130.969 30.5317C132.117 29.2993 133.667 28.6831 135.615 28.6831C137.492 28.6831 139.003 29.2902 140.143 30.5057C141.233 31.6848 141.777 33.2071 141.777 35.0726ZM138.828 35.1623C138.828 34.0118 138.576 33.0251 138.065 32.2022C137.469 31.2064 136.617 30.7098 135.513 30.7098C134.371 30.7098 133.503 31.2077 132.907 32.2022C132.396 33.0264 132.144 34.0287 132.144 35.2143C132.144 36.3648 132.396 37.3515 132.907 38.1731C133.521 39.1689 134.38 39.6655 135.488 39.6655C136.573 39.6655 137.425 39.1585 138.04 38.1471C138.564 37.3086 138.828 36.3115 138.828 35.1623Z" fill="white"/>
                                            <path d="M151.017 31.3754C150.736 31.3247 150.436 31.2987 150.121 31.2987C149.121 31.2987 148.348 31.6666 147.804 32.4037C147.331 33.0537 147.093 33.8753 147.093 34.8672V41.4127H144.252L144.279 32.8665C144.279 31.4287 144.243 30.1196 144.172 28.9392H146.648L146.752 31.326H146.831C147.131 30.5057 147.604 29.8453 148.252 29.35C148.885 28.9041 149.569 28.6818 150.307 28.6818C150.569 28.6818 150.807 28.7 151.017 28.7325V31.3754Z" fill="white"/>
                                            <path d="M163.731 34.585C163.731 35.0816 163.697 35.5002 163.627 35.8421H155.099C155.132 37.0745 155.544 38.017 156.336 38.667C157.055 39.2481 157.984 39.5393 159.125 39.5393C160.388 39.5393 161.54 39.343 162.576 38.9491L163.021 40.8731C161.811 41.3879 160.381 41.644 158.732 41.644C156.748 41.644 155.191 41.0746 154.057 39.9371C152.927 38.7996 152.36 37.2721 152.36 35.3559C152.36 33.4748 152.887 31.9083 153.941 30.659C155.045 29.3252 156.537 28.6583 158.415 28.6583C160.259 28.6583 161.655 29.3252 162.603 30.659C163.353 31.7185 163.731 33.0289 163.731 34.585ZM161.02 33.8661C161.039 33.0445 160.853 32.3347 160.468 31.7354C159.976 30.9645 159.22 30.5797 158.203 30.5797C157.273 30.5797 156.517 30.9554 155.94 31.7094C155.467 32.3087 155.185 33.0276 155.099 33.8648H161.02V33.8661Z" fill="white"/>
                                        </svg>
                                    </div>                                
                                </div>
                                <div class="download-sec-right">
                                    <img src="assets/images/iPhones.webp" alt="no-img" width="587" height="587">
                                </div>
                            </div>

                            <div class="main-footer py-4 d-flex justify-content-between align-items-center">
                                <div>
                                    <img src="assets/images/disney.png" alt="no-img" width="80" height="39">
                                    <img src="assets/images/explorer.png" alt="no-img" width="68" height="43">
                                </div>
                                <ul class="footer-links mb-0 p-0 d-flex">
                                    <li>© 2022 Hashinclu.de</li>
                                    <li>About Us</li>
                                    <li>Contact Us</li>
                                    <li>Privacy</li>
                                    <li>Terms</li>
                                    <li>FAQ</li>
                                </ul>
                                <ul class="social-media mb-0 p-0 d-flex gap-2">
                                    <li>
                                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.9418 4.01238C14.9418 3.89747 14.8961 3.78726 14.8148 3.706C14.7336 3.62475 14.6234 3.5791 14.5085 3.5791H12.3421C11.2512 3.52476 10.1831 3.9044 9.37126 4.63507C8.55939 5.36575 8.06973 6.38805 8.00926 7.47863V9.81834H5.84286C5.72794 9.81834 5.61774 9.86399 5.53648 9.94525C5.45523 10.0265 5.40958 10.1367 5.40958 10.2516V12.5047C5.40958 12.6196 5.45523 12.7298 5.53648 12.8111C5.61774 12.8923 5.72794 12.938 5.84286 12.938H8.00926V18.7439C8.00926 18.8588 8.05491 18.969 8.13617 19.0503C8.21742 19.1316 8.32763 19.1772 8.44254 19.1772H11.0422C11.1571 19.1772 11.2673 19.1316 11.3486 19.0503C11.4299 18.969 11.4755 18.8588 11.4755 18.7439V12.938H13.7459C13.8423 12.9393 13.9363 12.9086 14.0132 12.8505C14.0901 12.7924 14.1455 12.7104 14.1705 12.6173L14.7944 10.3643C14.8117 10.3003 14.814 10.2331 14.8012 10.1681C14.7884 10.103 14.7609 10.0418 14.7207 9.98903C14.6805 9.93629 14.6288 9.89348 14.5694 9.86389C14.5101 9.8343 14.4448 9.81871 14.3785 9.81834H11.4755V7.47863C11.4971 7.26413 11.5978 7.06537 11.758 6.92116C11.9183 6.77695 12.1265 6.69764 12.3421 6.69872H14.5085C14.6234 6.69872 14.7336 6.65307 14.8148 6.57182C14.8961 6.49056 14.9418 6.38035 14.9418 6.26544V4.01238Z" fill="#007AFF"/>
                                        </svg>                                    
                                    </li>
                                    <li>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.6082 0.226074H6.21038C4.76488 0.227773 3.37908 0.802813 2.35703 1.82503C1.33499 2.84724 0.760184 4.23314 0.758728 5.67865L0.758728 13.0765C0.760427 14.522 1.33547 15.9078 2.35768 16.9298C3.37989 17.9519 4.76579 18.5267 6.2113 18.5281H13.6091C15.0546 18.5264 16.4404 17.9514 17.4625 16.9292C18.4845 15.907 19.0593 14.5211 19.0608 13.0756V5.67773C19.0591 4.23222 18.484 2.84642 17.4618 1.82438C16.4396 0.802337 15.0537 0.22753 13.6082 0.226074V0.226074ZM17.22 13.0756C17.22 13.5499 17.1266 14.0195 16.9451 14.4577C16.7636 14.8959 16.4975 15.2941 16.1622 15.6295C15.8268 15.9649 15.4286 16.2309 14.9904 16.4124C14.5522 16.594 14.0825 16.6874 13.6082 16.6874H6.21038C5.25263 16.6871 4.33418 16.3065 3.65703 15.6292C2.97988 14.9519 2.59948 14.0333 2.59948 13.0756V5.67773C2.59972 4.71997 2.98036 3.80153 3.65768 3.12438C4.335 2.44723 5.25354 2.06682 6.2113 2.06682H13.6091C14.5669 2.06706 15.4853 2.4477 16.1625 3.12502C16.8396 3.80235 17.22 4.72089 17.22 5.67865V13.0765V13.0756Z" fill="#007AFF"/>
                                            <path d="M9.90953 4.64392C8.65495 4.64586 7.45233 5.14516 6.56529 6.03237C5.67826 6.91958 5.17919 8.1223 5.17749 9.37688C5.17895 10.6318 5.67803 11.8349 6.56529 12.7223C7.45255 13.6097 8.65555 14.1091 9.91045 14.1108C11.1655 14.1093 12.3687 13.6101 13.2562 12.7226C14.1437 11.8352 14.6429 10.6319 14.6443 9.37688C14.6424 8.12198 14.1428 6.91908 13.2552 6.03199C12.3676 5.1449 11.1644 4.64605 9.90953 4.64484V4.64392ZM9.90953 12.27C9.14247 12.27 8.40682 11.9653 7.86443 11.4229C7.32203 10.8805 7.01732 10.1449 7.01732 9.3778C7.01732 8.61073 7.32203 7.87509 7.86443 7.33269C8.40682 6.7903 9.14247 6.48559 9.90953 6.48559C10.6766 6.48559 11.4122 6.7903 11.9546 7.33269C12.497 7.87509 12.8017 8.61073 12.8017 9.3778C12.8017 10.1449 12.497 10.8805 11.9546 11.4229C11.4122 11.9653 10.6766 12.27 9.90953 12.27Z" fill="#007AFF"/>
                                            <path d="M14.6527 5.81334C15.279 5.81334 15.7867 5.30565 15.7867 4.67938C15.7867 4.0531 15.279 3.54541 14.6527 3.54541C14.0264 3.54541 13.5187 4.0531 13.5187 4.67938C13.5187 5.30565 14.0264 5.81334 14.6527 5.81334Z" fill="#007AFF"/>
                                        </svg>                                    
                                    </li>
                                    <li>
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1_250)">
                                            <path d="M15.879 3.7225C15.3291 3.96618 14.7383 4.13082 14.1173 4.20524C14.7581 3.82181 15.2375 3.21833 15.4661 2.50741C14.864 2.86502 14.2051 3.11673 13.518 3.25161C13.0559 2.75824 12.4439 2.43123 11.7769 2.32134C11.1099 2.21146 10.4253 2.32485 9.82939 2.64391C9.23346 2.96296 8.75954 3.46984 8.48121 4.08584C8.20288 4.70185 8.13571 5.39251 8.29012 6.0506C7.07022 5.98935 5.87682 5.67227 4.78739 5.11995C3.69796 4.56764 2.73683 3.79242 1.96639 2.84461C1.70296 3.29903 1.55148 3.8259 1.55148 4.38701C1.55119 4.89214 1.67558 5.38954 1.91363 5.83506C2.15167 6.28059 2.496 6.66047 2.91607 6.941C2.4289 6.9255 1.95248 6.79386 1.52646 6.55705V6.59656C1.52641 7.30503 1.77147 7.99169 2.22007 8.54004C2.66866 9.08839 3.29316 9.46465 3.98759 9.60498C3.53566 9.72729 3.06184 9.7453 2.60193 9.65766C2.79785 10.2673 3.1795 10.8003 3.69344 11.1822C4.20738 11.5642 4.82789 11.7758 5.46809 11.7875C4.38131 12.6407 3.03915 13.1034 1.65752 13.1014C1.41277 13.1015 1.16824 13.0872 0.925171 13.0586C2.32761 13.9603 3.96015 14.4389 5.62746 14.437C11.2715 14.437 14.357 9.76238 14.357 5.70813C14.357 5.57642 14.3537 5.44338 14.3478 5.31166C14.9479 4.87764 15.466 4.34018 15.8777 3.72448L15.879 3.7225Z" fill="#007AFF"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_1_250">
                                            <rect width="15.806" height="15.806" fill="white" transform="translate(0.308105 0.471069)"/>
                                            </clipPath>
                                            </defs>
                                        </svg>                                    
                                    </li>
                                    <li>
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.55154 7.06568H10.3838V8.47646C10.7918 7.66507 11.838 6.93604 13.4097 6.93604C16.4227 6.93604 17.138 8.5512 17.138 11.5146V17.0029H14.0877V12.1895C14.0877 10.5019 13.6797 9.55018 12.641 9.55018C11.2005 9.55018 10.6019 10.5759 10.6019 12.1887V17.0029H7.55154V7.06568ZM2.32097 16.8733H5.37131V6.93604H2.32097V16.8733ZM5.80827 3.69581C5.80838 3.95149 5.75768 4.20464 5.6591 4.44055C5.56052 4.67645 5.41603 4.89041 5.23404 5.06999C4.86526 5.43651 4.36607 5.64167 3.84614 5.64041C3.32711 5.64006 2.82908 5.43542 2.45976 5.07076C2.27842 4.89057 2.13443 4.67636 2.03602 4.44043C1.93761 4.20449 1.88673 3.95145 1.88629 3.69581C1.88629 3.17954 2.09219 2.68539 2.46052 2.32087C2.82952 1.95571 3.32776 1.75099 3.8469 1.75122C4.36698 1.75122 4.86571 1.95636 5.23404 2.32087C5.60161 2.68539 5.80827 3.17954 5.80827 3.69581Z" fill="#007AFF"/>
                                        </svg>                                    
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>`
})