var header = Vue.component('header-comp',{
    name : 'header-comp',
    template : `<header>

    <!---------------- mobile menu ------------------------>
    
    <div class="mobile-menu">
        <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-light p-2">
              <ul class="m-0 p-0">
                <li>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.0232 18.6008L14.7567 13.3341C14.7564 13.3338 14.7564 13.3334 14.7567 13.3331C15.884 12.0035 16.5391 10.3379 16.6195 8.5966C16.8461 3.87895 13.092 0.081471 8.37212 0.2559C4.21466 0.413263 0.880515 3.74741 0.723152 7.90487C0.548761 12.6248 4.34627 16.3789 9.06397 16.1522C10.8052 16.0716 12.4707 15.4166 13.8003 14.2893C13.8006 14.2891 13.8011 14.2891 13.8014 14.2893L19.0681 19.556C19.3339 19.8177 19.7615 19.8144 20.0232 19.5486C20.2821 19.2856 20.2821 18.8637 20.0232 18.6008ZM2.23991 9.73822C1.72142 7.42379 2.39868 5.13964 4.00283 3.53554C5.60697 1.93143 7.89104 1.25413 10.2055 1.77266C12.3953 2.26338 14.6156 4.48345 15.1063 6.67297C15.6251 8.98767 14.9478 11.2721 13.3436 12.8763C11.7393 14.4805 9.45481 15.1579 7.14011 14.639C4.95059 14.1482 2.73063 11.9278 2.23991 9.73822Z" fill="#007AFF"/>
                    </svg>
                    Search                            
                </li>
                <li>
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_164_123)">
                        <path d="M20.6127 18.2349L19.292 15.9259V10.1047C19.292 8.22966 18.5472 6.43144 17.2213 5.1056C15.8955 3.77976 14.0973 3.03491 12.2223 3.03491C10.3472 3.03491 8.54902 3.77976 7.22318 5.1056C5.89734 6.43144 5.15249 8.22966 5.15249 10.1047V15.144L3.7958 18.3099C3.74971 18.4174 3.73102 18.5347 3.74141 18.6512C3.7518 18.7677 3.79095 18.8799 3.85534 18.9775C3.91974 19.0752 4.00736 19.1554 4.11036 19.2108C4.21337 19.2663 4.32853 19.2954 4.44552 19.2954H8.75808C8.92034 20.0945 9.35387 20.8129 9.98521 21.3289C10.6165 21.8449 11.4069 22.1268 12.2223 22.1268C13.0377 22.1268 13.828 21.8449 14.4593 21.3289C15.0907 20.8129 15.5242 20.0945 15.6864 19.2954H19.999C20.1232 19.2956 20.2453 19.2631 20.353 19.2012C20.4607 19.1392 20.5501 19.05 20.6123 18.9425C20.6745 18.835 20.7073 18.713 20.7074 18.5888C20.7074 18.4645 20.6748 18.3425 20.6127 18.2349ZM12.2223 20.7093C11.7852 20.7075 11.3593 20.5707 11.0029 20.3176C10.6466 20.0645 10.3771 19.7075 10.2314 19.2954H14.2131C14.0674 19.7075 13.798 20.0645 13.4416 20.3176C13.0852 20.5707 12.6594 20.7075 12.2223 20.7093ZM5.518 17.8814L6.50777 15.5682C6.54621 15.4789 6.56571 15.3826 6.56503 15.2854V10.1047C6.56503 8.60467 7.16091 7.16609 8.22158 6.10542C9.28225 5.04474 10.7208 4.44887 12.2208 4.44887C13.7209 4.44887 15.1594 5.04474 16.2201 6.10542C17.2808 7.16609 17.8767 8.60467 17.8767 10.1047V16.114C17.876 16.238 17.9082 16.36 17.97 16.4675L18.7795 17.8814H5.518Z" fill="#007AFF"/>
                        <path d="M10.8083 2.32802H13.6362C13.8237 2.32802 14.0036 2.25353 14.1361 2.12095C14.2687 1.98836 14.3432 1.80854 14.3432 1.62104C14.3432 1.43354 14.2687 1.25372 14.1361 1.12113C14.0036 0.988547 13.8237 0.914063 13.6362 0.914062H10.8083C10.6208 0.914063 10.441 0.988547 10.3084 1.12113C10.1758 1.25372 10.1013 1.43354 10.1013 1.62104C10.1013 1.80854 10.1758 1.98836 10.3084 2.12095C10.441 2.25353 10.6208 2.32802 10.8083 2.32802Z" fill="#007AFF"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_164_123">
                        <rect width="22.6233" height="22.6233" fill="white" transform="translate(0.910645 0.207031)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    Notifications
                </li>
                <li>                                                      
                    My Profile
                </li>
              </ul>
            </div>
          </div>
          <nav class="navbar navbar-light bg-light py-3">
            <div class="container-fluid">
                <svg class="logo" width="166" height="43" viewBox="0 0 164 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.1559 21.2304H22.5331L23.5141 15.7808H18.1006L17.1559 21.2304Z" fill="#007AFF"/>
                    <path d="M120.192 35.4402C119.21 35.4402 118.339 36.2031 118.157 37.1841L117.467 41.1443C117.394 41.6529 117.503 42.0888 117.794 42.4522C118.084 42.8155 118.557 42.9971 119.065 42.9971C120.046 42.9971 120.918 42.2342 121.1 41.2532L121.791 37.2931C121.863 36.7844 121.754 36.3485 121.463 35.9851C121.173 35.6582 120.737 35.4402 120.192 35.4402Z" fill="#007AFF"/>
                    <path d="M48.4729 15.8193C48.4001 15.8193 26.3833 15.8193 26.3833 15.8193L25.4386 21.2328H29.8348C30.6341 21.2328 31.2517 21.8867 31.2517 22.6496C31.2517 23.4127 30.5978 24.0666 29.8348 24.0666H24.93L24.0581 28.9714C23.9491 29.6616 23.3678 30.134 22.6776 30.134C22.6048 30.134 22.4959 30.134 22.4232 30.0977C21.6602 29.9523 21.1515 29.2258 21.2606 28.4628L22.0235 24.0666H16.6465L15.7745 28.9714C15.6655 29.6616 15.0842 30.134 14.3939 30.134C14.3212 30.134 14.2123 30.134 14.1396 30.0977C13.3767 29.9523 12.868 29.2258 12.977 28.4628L13.7399 24.0666H9.38017C8.58087 24.0666 7.96323 23.4127 7.96323 22.6496C7.96323 21.8867 8.6172 21.2328 9.38017 21.2328H14.2849L15.2295 15.783H10.8334C10.0341 15.783 9.41649 15.1291 9.41649 14.3662C9.41649 13.6032 10.0705 12.9492 10.8334 12.9492H15.7382L16.6101 8.04444C16.7555 7.28147 17.4821 6.73651 18.2451 6.88182C18.6083 6.95449 18.9354 7.17248 19.1534 7.46314C19.3713 7.79011 19.444 8.15343 19.3713 8.51674L18.6083 12.9129H24.0218L24.8937 8.0081C25.0391 7.24515 25.7657 6.70017 26.5287 6.8455C26.8919 6.91816 27.219 7.13616 27.4369 7.4268C27.6549 7.71746 27.7276 8.1171 27.6549 8.48042L26.8919 12.8766H37.2464L31.506 2.95803C30.7795 1.68643 28.9265 0.632812 27.4369 0.632812H12.2503C10.7608 0.632812 8.94418 1.68643 8.18122 2.95803L0.587941 16.1101C-0.138688 17.3817 -0.138688 19.4889 0.587941 20.7968L8.18122 33.9488C8.90786 35.2204 10.7608 36.274 12.2503 36.274H27.4369C28.9265 36.274 30.743 35.2204 31.506 33.9488L39.0994 20.7968C39.3173 20.3972 39.4626 19.9612 39.5716 19.4525H46.1113L43.4228 34.8571C43.3501 35.3657 43.4591 35.8018 43.7498 36.165C44.0404 36.5283 44.5127 36.71 45.0214 36.71C46.0023 36.71 46.8742 35.947 47.0559 34.966L50.1078 17.636C50.1804 17.1637 50.0714 16.6913 49.8171 16.3644C49.4539 16.001 49.0178 15.8193 48.4729 15.8193Z" fill="#007AFF"/>
                    <path d="M64.8219 15.7808C63.0779 15.7808 61.661 16.2168 60.3167 17.2341L58.6818 18.4693L58.7545 18.0696C58.8271 17.561 58.7182 17.0887 58.3911 16.689C58.1005 16.3257 57.6282 16.1077 57.1195 16.1077C56.1386 16.1077 55.303 16.907 55.1213 17.9243L52.1422 34.7821C52.0331 35.2907 52.1422 35.7994 52.4328 36.1263C52.7235 36.4534 53.1232 36.635 53.6318 36.635C54.6491 36.635 55.5936 35.872 55.7753 34.8912L57.7372 23.7737C57.8462 23.1923 57.9915 22.8654 58.6454 22.3568L61.8427 19.9225C62.4967 19.4139 63.2596 19.1595 63.9498 19.1595C65.2942 19.1595 66.2752 19.5592 66.929 20.3222C67.8737 21.4484 68.0917 23.3377 67.6194 25.9899L66.0571 34.7821C65.9844 35.2907 66.0935 35.7268 66.3841 36.09C66.6747 36.4534 67.1471 36.635 67.6557 36.635C68.6367 36.635 69.5086 35.872 69.6903 34.8912L71.2525 26.0989C71.9065 22.3204 71.5068 19.5229 70.0172 17.779C68.9273 16.4711 67.1471 15.7808 64.8219 15.7808Z" fill="#007AFF"/>
                    <path d="M85.7489 15.7808C79.5725 15.7808 75.8668 21.1215 74.9221 26.3896C74.3409 29.7683 74.9221 32.8202 76.5207 34.7458C77.8287 36.308 79.7179 37.071 82.1158 37.071C84.1867 37.071 86.3665 36.3443 87.8924 35.1455C88.3285 34.8184 88.6191 34.2008 88.6918 33.7648C88.7645 33.2562 88.6918 32.7839 88.4011 32.4569C88.1468 32.13 87.7109 31.9483 87.2385 31.9483C86.6936 31.9483 86.2576 32.2026 85.7126 32.5295C84.986 32.9656 84.114 33.4742 82.588 33.4742C81.3164 33.4742 80.3355 33.0382 79.609 32.2389C78.5917 31.0036 78.2283 28.9328 78.6643 26.4985C79.2819 22.938 81.5708 19.3776 85.204 19.3776C86.7299 19.3776 87.3475 19.8499 87.8924 20.2859C88.2921 20.5765 88.6554 20.8672 89.2368 20.8672C90.2178 20.8672 91.0533 20.1405 91.235 19.1232C91.344 18.542 91.1623 17.997 90.7627 17.4884C89.8544 16.3257 87.5292 15.7808 85.7489 15.7808Z" fill="#007AFF"/>
                    <path d="M98.7187 6.8092C97.7378 6.8092 96.9022 7.53584 96.7205 8.55312L92.1064 34.8571C92.0338 35.3657 92.1427 35.8017 92.4334 36.165C92.724 36.5284 93.1963 36.7101 93.705 36.7101C94.6859 36.7101 95.5578 35.9471 95.7395 34.9661L100.317 8.66211C100.39 8.1898 100.281 7.71749 99.9903 7.39051C99.6997 7.0272 99.2274 6.8092 98.7187 6.8092Z" fill="#007AFF"/>
                    <path d="M120.336 18.0338C120.445 17.5251 120.336 17.0165 120.045 16.6894C119.755 16.3625 119.356 16.1808 118.846 16.1808C117.829 16.1808 116.885 16.9437 116.703 17.9247L114.741 29.0421C114.632 29.6234 114.487 29.9868 113.833 30.4591L110.636 32.8933C109.982 33.4019 109.219 33.6562 108.528 33.6562C107.184 33.6562 106.203 33.2566 105.549 32.4937C104.605 31.3673 104.387 29.4782 104.859 26.8259L106.421 18.0338C106.494 17.5251 106.385 17.0891 106.094 16.7257C105.804 16.3625 105.331 16.1808 104.823 16.1808C103.842 16.1808 102.97 16.9437 102.788 17.9247L101.226 26.717C100.572 30.4591 101.008 33.3293 102.461 35.0732C103.587 36.4174 105.368 37.1077 107.656 37.1077C109.4 37.1077 110.854 36.6354 112.198 35.6181L115.359 33.2566C117.829 31.4038 118.193 30.1685 118.483 28.6061L120.336 18.0338Z" fill="#007AFF"/>
                    <path d="M143.516 6.8092C142.499 6.8092 141.591 7.53584 141.446 8.55312L139.846 17.7086C139.556 17.418 139.23 17.1273 138.939 16.9456C137.813 16.1464 136.65 15.8194 134.942 15.8194C128.766 15.8194 125.06 21.1601 124.116 26.4282C123.498 29.9524 124.043 33.0405 125.605 34.9298C126.84 36.383 128.657 37.146 130.982 37.146C132.617 37.146 133.635 36.7827 135.124 35.6928L136.868 34.4212L136.795 34.8208C136.722 35.3294 136.832 35.8017 137.122 36.165C137.413 36.5284 137.849 36.7101 138.357 36.7101C139.338 36.7101 140.247 35.9471 140.392 34.9298L145.007 8.66211C145.079 8.15347 144.97 7.68117 144.679 7.35418C144.461 6.99086 144.026 6.8092 143.516 6.8092ZM138.394 25.9559L137.849 29.044C137.74 29.589 137.595 29.9524 136.904 30.461L133.635 33.0042C132.872 33.5855 132.072 33.6582 131.528 33.6582C130.329 33.6582 129.42 33.2585 128.766 32.5319C127.748 31.3329 127.458 29.2257 127.931 26.6099C128.549 23.013 130.837 19.4162 134.47 19.4162C135.851 19.4162 136.904 19.8522 137.595 20.6515C138.502 21.7051 138.794 23.5944 138.394 25.9559Z" fill="#007AFF"/>
                    <path d="M162.08 18.1786C160.773 16.6527 158.92 15.7808 156.776 15.7808C153.834 15.7808 151.218 16.9797 149.219 19.2686C147.549 21.1578 146.35 23.701 145.877 26.4259C145.296 29.8047 145.877 32.8565 147.512 34.7821C148.82 36.3443 150.709 37.1436 153.144 37.1436C154.56 37.1436 159.902 36.308 160.337 33.8375C160.446 33.3288 160.337 32.8202 160.047 32.4932C159.792 32.1663 159.392 32.0209 158.92 32.0209C158.375 32.0209 157.794 32.2752 157.139 32.5659C156.232 32.9656 155.106 33.4742 153.652 33.4742C152.417 33.4742 151.399 33.0745 150.709 32.2752C149.765 31.2216 149.364 29.5503 149.547 27.5521H161.354C162.626 27.5521 163.389 26.6802 163.679 24.8636C164.152 22.3931 163.534 19.9225 162.08 18.1786ZM159.937 23.919H150.455C151.69 21.0488 153.834 19.3412 156.305 19.3412C157.467 19.3412 158.338 19.7045 158.956 20.3585C159.682 21.1578 160.01 22.3931 159.937 23.919Z" fill="#007AFF"/>
                    <path d="M50.2174 5.68372C49.2364 5.68372 48.3644 6.44667 48.1828 7.42763L47.4925 11.3878C47.4199 11.8964 47.5288 12.3324 47.8194 12.6957C48.1101 13.059 48.5824 13.2407 49.091 13.2407C50.072 13.2407 50.9439 12.4777 51.1256 11.4968L51.8159 7.53662C51.8886 7.02798 51.7796 6.592 51.489 6.22868C51.1982 5.90171 50.7623 5.68372 50.2174 5.68372Z" fill="#007AFF"/>
                </svg>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    </div>

    <!---------------- mobile menu ------------------------>

    <div class="container header d-flex justify-content-between align-items-center">
        <svg class="logo" width="166" height="43" viewBox="0 0 164 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.1559 21.2304H22.5331L23.5141 15.7808H18.1006L17.1559 21.2304Z" fill="#007AFF"/>
            <path d="M120.192 35.4402C119.21 35.4402 118.339 36.2031 118.157 37.1841L117.467 41.1443C117.394 41.6529 117.503 42.0888 117.794 42.4522C118.084 42.8155 118.557 42.9971 119.065 42.9971C120.046 42.9971 120.918 42.2342 121.1 41.2532L121.791 37.2931C121.863 36.7844 121.754 36.3485 121.463 35.9851C121.173 35.6582 120.737 35.4402 120.192 35.4402Z" fill="#007AFF"/>
            <path d="M48.4729 15.8193C48.4001 15.8193 26.3833 15.8193 26.3833 15.8193L25.4386 21.2328H29.8348C30.6341 21.2328 31.2517 21.8867 31.2517 22.6496C31.2517 23.4127 30.5978 24.0666 29.8348 24.0666H24.93L24.0581 28.9714C23.9491 29.6616 23.3678 30.134 22.6776 30.134C22.6048 30.134 22.4959 30.134 22.4232 30.0977C21.6602 29.9523 21.1515 29.2258 21.2606 28.4628L22.0235 24.0666H16.6465L15.7745 28.9714C15.6655 29.6616 15.0842 30.134 14.3939 30.134C14.3212 30.134 14.2123 30.134 14.1396 30.0977C13.3767 29.9523 12.868 29.2258 12.977 28.4628L13.7399 24.0666H9.38017C8.58087 24.0666 7.96323 23.4127 7.96323 22.6496C7.96323 21.8867 8.6172 21.2328 9.38017 21.2328H14.2849L15.2295 15.783H10.8334C10.0341 15.783 9.41649 15.1291 9.41649 14.3662C9.41649 13.6032 10.0705 12.9492 10.8334 12.9492H15.7382L16.6101 8.04444C16.7555 7.28147 17.4821 6.73651 18.2451 6.88182C18.6083 6.95449 18.9354 7.17248 19.1534 7.46314C19.3713 7.79011 19.444 8.15343 19.3713 8.51674L18.6083 12.9129H24.0218L24.8937 8.0081C25.0391 7.24515 25.7657 6.70017 26.5287 6.8455C26.8919 6.91816 27.219 7.13616 27.4369 7.4268C27.6549 7.71746 27.7276 8.1171 27.6549 8.48042L26.8919 12.8766H37.2464L31.506 2.95803C30.7795 1.68643 28.9265 0.632812 27.4369 0.632812H12.2503C10.7608 0.632812 8.94418 1.68643 8.18122 2.95803L0.587941 16.1101C-0.138688 17.3817 -0.138688 19.4889 0.587941 20.7968L8.18122 33.9488C8.90786 35.2204 10.7608 36.274 12.2503 36.274H27.4369C28.9265 36.274 30.743 35.2204 31.506 33.9488L39.0994 20.7968C39.3173 20.3972 39.4626 19.9612 39.5716 19.4525H46.1113L43.4228 34.8571C43.3501 35.3657 43.4591 35.8018 43.7498 36.165C44.0404 36.5283 44.5127 36.71 45.0214 36.71C46.0023 36.71 46.8742 35.947 47.0559 34.966L50.1078 17.636C50.1804 17.1637 50.0714 16.6913 49.8171 16.3644C49.4539 16.001 49.0178 15.8193 48.4729 15.8193Z" fill="#007AFF"/>
            <path d="M64.8219 15.7808C63.0779 15.7808 61.661 16.2168 60.3167 17.2341L58.6818 18.4693L58.7545 18.0696C58.8271 17.561 58.7182 17.0887 58.3911 16.689C58.1005 16.3257 57.6282 16.1077 57.1195 16.1077C56.1386 16.1077 55.303 16.907 55.1213 17.9243L52.1422 34.7821C52.0331 35.2907 52.1422 35.7994 52.4328 36.1263C52.7235 36.4534 53.1232 36.635 53.6318 36.635C54.6491 36.635 55.5936 35.872 55.7753 34.8912L57.7372 23.7737C57.8462 23.1923 57.9915 22.8654 58.6454 22.3568L61.8427 19.9225C62.4967 19.4139 63.2596 19.1595 63.9498 19.1595C65.2942 19.1595 66.2752 19.5592 66.929 20.3222C67.8737 21.4484 68.0917 23.3377 67.6194 25.9899L66.0571 34.7821C65.9844 35.2907 66.0935 35.7268 66.3841 36.09C66.6747 36.4534 67.1471 36.635 67.6557 36.635C68.6367 36.635 69.5086 35.872 69.6903 34.8912L71.2525 26.0989C71.9065 22.3204 71.5068 19.5229 70.0172 17.779C68.9273 16.4711 67.1471 15.7808 64.8219 15.7808Z" fill="#007AFF"/>
            <path d="M85.7489 15.7808C79.5725 15.7808 75.8668 21.1215 74.9221 26.3896C74.3409 29.7683 74.9221 32.8202 76.5207 34.7458C77.8287 36.308 79.7179 37.071 82.1158 37.071C84.1867 37.071 86.3665 36.3443 87.8924 35.1455C88.3285 34.8184 88.6191 34.2008 88.6918 33.7648C88.7645 33.2562 88.6918 32.7839 88.4011 32.4569C88.1468 32.13 87.7109 31.9483 87.2385 31.9483C86.6936 31.9483 86.2576 32.2026 85.7126 32.5295C84.986 32.9656 84.114 33.4742 82.588 33.4742C81.3164 33.4742 80.3355 33.0382 79.609 32.2389C78.5917 31.0036 78.2283 28.9328 78.6643 26.4985C79.2819 22.938 81.5708 19.3776 85.204 19.3776C86.7299 19.3776 87.3475 19.8499 87.8924 20.2859C88.2921 20.5765 88.6554 20.8672 89.2368 20.8672C90.2178 20.8672 91.0533 20.1405 91.235 19.1232C91.344 18.542 91.1623 17.997 90.7627 17.4884C89.8544 16.3257 87.5292 15.7808 85.7489 15.7808Z" fill="#007AFF"/>
            <path d="M98.7187 6.8092C97.7378 6.8092 96.9022 7.53584 96.7205 8.55312L92.1064 34.8571C92.0338 35.3657 92.1427 35.8017 92.4334 36.165C92.724 36.5284 93.1963 36.7101 93.705 36.7101C94.6859 36.7101 95.5578 35.9471 95.7395 34.9661L100.317 8.66211C100.39 8.1898 100.281 7.71749 99.9903 7.39051C99.6997 7.0272 99.2274 6.8092 98.7187 6.8092Z" fill="#007AFF"/>
            <path d="M120.336 18.0338C120.445 17.5251 120.336 17.0165 120.045 16.6894C119.755 16.3625 119.356 16.1808 118.846 16.1808C117.829 16.1808 116.885 16.9437 116.703 17.9247L114.741 29.0421C114.632 29.6234 114.487 29.9868 113.833 30.4591L110.636 32.8933C109.982 33.4019 109.219 33.6562 108.528 33.6562C107.184 33.6562 106.203 33.2566 105.549 32.4937C104.605 31.3673 104.387 29.4782 104.859 26.8259L106.421 18.0338C106.494 17.5251 106.385 17.0891 106.094 16.7257C105.804 16.3625 105.331 16.1808 104.823 16.1808C103.842 16.1808 102.97 16.9437 102.788 17.9247L101.226 26.717C100.572 30.4591 101.008 33.3293 102.461 35.0732C103.587 36.4174 105.368 37.1077 107.656 37.1077C109.4 37.1077 110.854 36.6354 112.198 35.6181L115.359 33.2566C117.829 31.4038 118.193 30.1685 118.483 28.6061L120.336 18.0338Z" fill="#007AFF"/>
            <path d="M143.516 6.8092C142.499 6.8092 141.591 7.53584 141.446 8.55312L139.846 17.7086C139.556 17.418 139.23 17.1273 138.939 16.9456C137.813 16.1464 136.65 15.8194 134.942 15.8194C128.766 15.8194 125.06 21.1601 124.116 26.4282C123.498 29.9524 124.043 33.0405 125.605 34.9298C126.84 36.383 128.657 37.146 130.982 37.146C132.617 37.146 133.635 36.7827 135.124 35.6928L136.868 34.4212L136.795 34.8208C136.722 35.3294 136.832 35.8017 137.122 36.165C137.413 36.5284 137.849 36.7101 138.357 36.7101C139.338 36.7101 140.247 35.9471 140.392 34.9298L145.007 8.66211C145.079 8.15347 144.97 7.68117 144.679 7.35418C144.461 6.99086 144.026 6.8092 143.516 6.8092ZM138.394 25.9559L137.849 29.044C137.74 29.589 137.595 29.9524 136.904 30.461L133.635 33.0042C132.872 33.5855 132.072 33.6582 131.528 33.6582C130.329 33.6582 129.42 33.2585 128.766 32.5319C127.748 31.3329 127.458 29.2257 127.931 26.6099C128.549 23.013 130.837 19.4162 134.47 19.4162C135.851 19.4162 136.904 19.8522 137.595 20.6515C138.502 21.7051 138.794 23.5944 138.394 25.9559Z" fill="#007AFF"/>
            <path d="M162.08 18.1786C160.773 16.6527 158.92 15.7808 156.776 15.7808C153.834 15.7808 151.218 16.9797 149.219 19.2686C147.549 21.1578 146.35 23.701 145.877 26.4259C145.296 29.8047 145.877 32.8565 147.512 34.7821C148.82 36.3443 150.709 37.1436 153.144 37.1436C154.56 37.1436 159.902 36.308 160.337 33.8375C160.446 33.3288 160.337 32.8202 160.047 32.4932C159.792 32.1663 159.392 32.0209 158.92 32.0209C158.375 32.0209 157.794 32.2752 157.139 32.5659C156.232 32.9656 155.106 33.4742 153.652 33.4742C152.417 33.4742 151.399 33.0745 150.709 32.2752C149.765 31.2216 149.364 29.5503 149.547 27.5521H161.354C162.626 27.5521 163.389 26.6802 163.679 24.8636C164.152 22.3931 163.534 19.9225 162.08 18.1786ZM159.937 23.919H150.455C151.69 21.0488 153.834 19.3412 156.305 19.3412C157.467 19.3412 158.338 19.7045 158.956 20.3585C159.682 21.1578 160.01 22.3931 159.937 23.919Z" fill="#007AFF"/>
            <path d="M50.2174 5.68372C49.2364 5.68372 48.3644 6.44667 48.1828 7.42763L47.4925 11.3878C47.4199 11.8964 47.5288 12.3324 47.8194 12.6957C48.1101 13.059 48.5824 13.2407 49.091 13.2407C50.072 13.2407 50.9439 12.4777 51.1256 11.4968L51.8159 7.53662C51.8886 7.02798 51.7796 6.592 51.489 6.22868C51.1982 5.90171 50.7623 5.68372 50.2174 5.68372Z" fill="#007AFF"/>
        </svg>
        
        <div class="header-right d-flex gap-3">
            <div class="search d-flex justify-content-center align-items-center">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0232 18.6008L14.7567 13.3341C14.7564 13.3338 14.7564 13.3334 14.7567 13.3331C15.884 12.0035 16.5391 10.3379 16.6195 8.5966C16.8461 3.87895 13.092 0.081471 8.37212 0.2559C4.21466 0.413263 0.880515 3.74741 0.723152 7.90487C0.548761 12.6248 4.34627 16.3789 9.06397 16.1522C10.8052 16.0716 12.4707 15.4166 13.8003 14.2893C13.8006 14.2891 13.8011 14.2891 13.8014 14.2893L19.0681 19.556C19.3339 19.8177 19.7615 19.8144 20.0232 19.5486C20.2821 19.2856 20.2821 18.8637 20.0232 18.6008ZM2.23991 9.73822C1.72142 7.42379 2.39868 5.13964 4.00283 3.53554C5.60697 1.93143 7.89104 1.25413 10.2055 1.77266C12.3953 2.26338 14.6156 4.48345 15.1063 6.67297C15.6251 8.98767 14.9478 11.2721 13.3436 12.8763C11.7393 14.4805 9.45481 15.1579 7.14011 14.639C4.95059 14.1482 2.73063 11.9278 2.23991 9.73822Z" fill="#007AFF"/>
                </svg>                    
            </div>

            <div class="language d-flex justify-content-between align-items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_158_154" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                    <rect x="0.844238" width="24" height="24" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_158_154)">
                    <path d="M12.8442 21C11.6109 21 10.4442 20.7627 9.34424 20.288C8.24424 19.8127 7.29024 19.1707 6.48224 18.362C5.67357 17.554 5.03157 16.6 4.55624 15.5C4.08157 14.4 3.84424 13.2333 3.84424 12C3.84424 10.75 4.08157 9.579 4.55624 8.487C5.03157 7.39567 5.67357 6.44567 6.48224 5.637C7.29024 4.829 8.24424 4.18733 9.34424 3.712C10.4442 3.23733 11.6109 3 12.8442 3C14.0942 3 15.2652 3.23733 16.3572 3.712C17.4486 4.18733 18.3986 4.829 19.2072 5.637C20.0152 6.44567 20.6569 7.39567 21.1322 8.487C21.6069 9.579 21.8442 10.75 21.8442 12C21.8442 13.2333 21.6069 14.4 21.1322 15.5C20.6569 16.6 20.0152 17.554 19.2072 18.362C18.3986 19.1707 17.4486 19.8127 16.3572 20.288C15.2652 20.7627 14.0942 21 12.8442 21ZM12.8442 20C13.4276 19.25 13.9109 18.5127 14.2942 17.788C14.6776 17.0627 14.9859 16.25 15.2192 15.35H10.4692C10.7359 16.3 11.0526 17.1373 11.4192 17.862C11.7859 18.5873 12.2609 19.3 12.8442 20ZM11.5692 19.85C11.1026 19.3 10.6776 18.6207 10.2942 17.812C9.9109 17.004 9.62757 16.1833 9.44424 15.35H5.59424C6.17757 16.5833 6.99424 17.6 8.04424 18.4C9.09424 19.2 10.2692 19.6833 11.5692 19.85ZM14.1192 19.85C15.4192 19.6833 16.5942 19.2 17.6442 18.4C18.6942 17.6 19.5109 16.5833 20.0942 15.35H16.2442C15.9942 16.2 15.6776 17.029 15.2942 17.837C14.9109 18.6457 14.5192 19.3167 14.1192 19.85ZM5.19424 14.35H9.21924C9.15257 13.9333 9.10257 13.5333 9.06924 13.15C9.03591 12.7667 9.01924 12.3833 9.01924 12C9.01924 11.6167 9.03591 11.2333 9.06924 10.85C9.10257 10.4667 9.15257 10.0667 9.21924 9.65H5.19424C5.07757 10 4.99024 10.379 4.93224 10.787C4.87357 11.1957 4.84424 11.6 4.84424 12C4.84424 12.4 4.87357 12.804 4.93224 13.212C4.99024 13.6207 5.07757 14 5.19424 14.35ZM10.2192 14.35H15.4692C15.5359 13.9333 15.5859 13.5373 15.6192 13.162C15.6526 12.7873 15.6692 12.4 15.6692 12C15.6692 11.6 15.6526 11.2123 15.6192 10.837C15.5859 10.4623 15.5359 10.0667 15.4692 9.65H10.2192C10.1526 10.0667 10.1026 10.4623 10.0692 10.837C10.0359 11.2123 10.0192 11.6 10.0192 12C10.0192 12.4 10.0359 12.7873 10.0692 13.162C10.1026 13.5373 10.1526 13.9333 10.2192 14.35ZM16.4692 14.35H20.4942C20.6109 14 20.6986 13.6207 20.7572 13.212C20.8152 12.804 20.8442 12.4 20.8442 12C20.8442 11.6 20.8152 11.1957 20.7572 10.787C20.6986 10.379 20.6109 10 20.4942 9.65H16.4692C16.5359 10.0667 16.5859 10.4667 16.6192 10.85C16.6526 11.2333 16.6692 11.6167 16.6692 12C16.6692 12.3833 16.6526 12.7667 16.6192 13.15C16.5859 13.5333 16.5359 13.9333 16.4692 14.35ZM16.2442 8.65H20.0942C19.5109 7.38333 18.7066 6.36667 17.6812 5.6C16.6566 4.83333 15.4692 4.34167 14.1192 4.125C14.5859 4.74167 15.0069 5.446 15.3822 6.238C15.7569 7.02933 16.0442 7.83333 16.2442 8.65ZM10.4692 8.65H15.2192C14.9526 7.71667 14.6276 6.87067 14.2442 6.112C13.8609 5.354 13.3942 4.65 12.8442 4C12.2942 4.65 11.8276 5.354 11.4442 6.112C11.0609 6.87067 10.7359 7.71667 10.4692 8.65ZM5.59424 8.65H9.44424C9.64424 7.83333 9.93191 7.02933 10.3072 6.238C10.6819 5.446 11.1026 4.74167 11.5692 4.125C10.2026 4.34167 9.01091 4.83733 7.99424 5.612C6.97757 6.38733 6.17757 7.4 5.59424 8.65Z" fill="#007AFF"/>
                    </g>
                </svg>
                <svg width="39" height="27" viewBox="0 0 39 27" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-top: 10px;">
                    <path d="M0.0622383 8.43741C0.0622383 8.16141 0.0862383 7.83741 0.134238 7.46541C0.182238 7.09341 0.272238 6.67341 0.404238 6.20541C0.536238 5.72541 0.734238 5.19141 0.998238 4.60341L3.21224 5.37741C3.08024 5.74941 2.96624 6.09141 2.87024 6.40341C2.77424 6.70341 2.70224 6.98541 2.65424 7.24941C2.60624 7.50141 2.58224 7.75341 2.58224 8.00541C2.58224 8.40141 2.66624 8.75541 2.83424 9.06741C3.01424 9.39141 3.27224 9.66141 3.60824 9.87741C3.94424 10.1054 4.35224 10.2794 4.83224 10.3994C5.32424 10.5194 5.88824 10.5794 6.52424 10.5794C7.18424 10.5794 7.77224 10.5494 8.28824 10.4894C8.81624 10.4294 9.26024 10.3394 9.62024 10.2194C9.99224 10.0994 10.2742 9.94341 10.4662 9.75141C10.6582 9.57141 10.7542 9.36141 10.7542 9.12141C10.7542 9.01341 10.7122 8.91141 10.6282 8.81541C10.5562 8.71941 10.4302 8.61741 10.2502 8.50941C10.0822 8.40141 9.85424 8.28741 9.56624 8.16741C9.29024 8.04741 8.95424 7.91541 8.55824 7.77141L9.15224 5.23341C9.66824 5.44941 10.1542 5.64141 10.6102 5.80941C11.0782 5.96541 11.5222 6.09741 11.9422 6.20541C12.3622 6.30141 12.7582 6.37941 13.1302 6.43941C13.5022 6.48741 13.8502 6.51141 14.1742 6.51141C14.6302 6.51141 14.9542 6.63141 15.1462 6.87141C15.3382 7.09941 15.4342 7.38741 15.4342 7.73541C15.4342 8.10741 15.3082 8.41941 15.0562 8.67141C14.8042 8.91141 14.4502 9.03141 13.9942 9.03141C13.8982 9.03141 13.8022 9.03141 13.7062 9.03141C13.6222 9.03141 13.5322 9.03141 13.4362 9.03141C13.3522 9.03141 13.2622 9.03141 13.1662 9.03141C13.1902 9.15141 13.2022 9.25341 13.2022 9.33741C13.2022 9.43341 13.2022 9.52341 13.2022 9.60741C13.2022 10.0034 13.0642 10.4054 12.7882 10.8134C12.5242 11.2214 12.1102 11.5994 11.5462 11.9474C10.9822 12.2954 10.2622 12.5714 9.38624 12.7754C8.52224 12.9914 7.49024 13.0994 6.29024 13.0994C4.99424 13.0994 3.87824 12.9314 2.94224 12.5954C2.01824 12.2714 1.30424 11.7614 0.800238 11.0654C0.308238 10.3814 0.0622383 9.50541 0.0622383 8.43741ZM8.05424 17.2754C7.70624 17.2754 7.40624 17.1494 7.15424 16.8974C6.91424 16.6574 6.79424 16.3694 6.79424 16.0334C6.79424 15.6854 6.91424 15.3854 7.15424 15.1334C7.40624 14.8814 7.70624 14.7554 8.05424 14.7554C8.39024 14.7554 8.67824 14.8814 8.91824 15.1334C9.15824 15.3854 9.27824 15.6854 9.27824 16.0334C9.27824 16.3694 9.15824 16.6574 8.91824 16.8974C8.67824 17.1494 8.39024 17.2754 8.05424 17.2754ZM4.94024 17.2754C4.59224 17.2754 4.29224 17.1494 4.04024 16.8974C3.80024 16.6574 3.68024 16.3694 3.68024 16.0334C3.68024 15.6854 3.80024 15.3854 4.04024 15.1334C4.29224 14.8814 4.59224 14.7554 4.94024 14.7554C5.27624 14.7554 5.56424 14.8814 5.80424 15.1334C6.04424 15.3854 6.16424 15.6854 6.16424 16.0334C6.16424 16.3694 6.04424 16.6574 5.80424 16.8974C5.56424 17.1494 5.27624 17.2754 4.94024 17.2754ZM13.9907 9.03141L14.1707 6.51141C14.6987 6.51141 15.1127 6.47541 15.4127 6.40341C15.7247 6.33141 15.9467 6.19941 16.0787 6.00741C16.2107 5.80341 16.2767 5.51541 16.2767 5.14341C16.2767 4.80741 16.2287 4.40541 16.1327 3.93741C16.0487 3.46941 15.9347 2.98341 15.7907 2.47941C15.6467 1.97541 15.5027 1.51341 15.3587 1.09341L17.8427 0.409406C17.9867 0.817406 18.1307 1.29141 18.2747 1.83141C18.4187 2.37141 18.5387 2.92941 18.6347 3.50541C18.7427 4.06941 18.7967 4.61541 18.7967 5.14341C18.7967 5.80341 18.7127 6.36141 18.5447 6.81741C18.3767 7.26141 18.1427 7.63341 17.8427 7.93341C17.5547 8.22141 17.2067 8.44941 16.7987 8.61741C16.4027 8.77341 15.9647 8.88141 15.4847 8.94141C15.0047 9.00141 14.5067 9.03141 13.9907 9.03141ZM16.2047 13.1714C15.8567 13.1714 15.5567 13.0514 15.3047 12.8114C15.0647 12.5714 14.9447 12.2774 14.9447 11.9294C14.9447 11.5814 15.0647 11.2754 15.3047 11.0114C15.5567 10.7594 15.8567 10.6334 16.2047 10.6334C16.5527 10.6334 16.8467 10.7594 17.0867 11.0114C17.3387 11.2754 17.4647 11.5814 17.4647 11.9294C17.4647 12.2774 17.3387 12.5714 17.0867 12.8114C16.8467 13.0514 16.5527 13.1714 16.2047 13.1714ZM19.9916 13.0994L19.0736 10.8674C19.7096 10.6514 20.2916 10.3994 20.8196 10.1114C21.3596 9.82341 21.8276 9.50541 22.2236 9.15741C22.6196 8.80941 22.9256 8.43141 23.1416 8.02341C23.3576 7.60341 23.4656 7.15341 23.4656 6.67341C23.4656 6.16941 23.3516 5.61741 23.1236 5.01741C22.8956 4.41741 22.6196 3.80541 22.2956 3.18141L24.6536 2.04741C24.8696 2.41941 25.0556 2.82141 25.2116 3.25341C25.3796 3.67341 25.5176 4.05141 25.6256 4.38741C25.7336 4.72341 25.8056 4.95141 25.8416 5.07141C26.0096 5.64741 26.2376 6.03141 26.5256 6.22341C26.8256 6.41541 27.3056 6.51141 27.9656 6.51141C28.4216 6.51141 28.7456 6.63141 28.9376 6.87141C29.1416 7.09941 29.2436 7.38741 29.2436 7.73541C29.2436 8.10741 29.1176 8.41941 28.8656 8.67141C28.6136 8.91141 28.2536 9.03141 27.7856 9.03141C27.2936 9.03141 26.8616 8.95941 26.4896 8.81541C26.1176 8.67141 25.8176 8.46141 25.5896 8.18541C25.3736 7.90941 25.2356 7.58541 25.1756 7.21341L25.8416 7.59141C25.7696 8.22741 25.5596 8.82741 25.2116 9.39141C24.8756 9.96741 24.4376 10.4954 23.8976 10.9754C23.3576 11.4554 22.7516 11.8754 22.0796 12.2354C21.4076 12.5954 20.7116 12.8834 19.9916 13.0994ZM27.8071 9.03141L27.9871 6.51141C28.5511 6.51141 28.9831 6.50541 29.2831 6.49341C29.5951 6.48141 29.8291 6.46941 29.9851 6.45741C30.1411 6.43341 30.2731 6.41541 30.3811 6.40341C30.2611 6.28341 30.1051 6.10941 29.9131 5.88141C29.7211 5.65341 29.5471 5.35941 29.3911 4.99941C29.2471 4.63941 29.1751 4.20741 29.1751 3.70341C29.1751 2.97141 29.3611 2.32941 29.7331 1.77741C30.1171 1.22541 30.6331 0.793406 31.2811 0.481406C31.9291 0.169406 32.6551 0.0134059 33.4591 0.0134059C33.8431 0.0134059 34.1971 0.0374059 34.5211 0.085406C34.8571 0.133406 35.1931 0.205406 35.5291 0.301406L35.1331 2.69541C34.8931 2.63541 34.6411 2.58741 34.3771 2.55141C34.1131 2.51541 33.8791 2.49741 33.6751 2.49741C33.2791 2.49741 32.9311 2.56341 32.6311 2.69541C32.3431 2.81541 32.1151 2.98941 31.9471 3.21741C31.7911 3.43341 31.7131 3.69741 31.7131 4.00941C31.7131 4.21341 31.7491 4.40541 31.8211 4.58541C31.9051 4.76541 32.0071 4.92741 32.1271 5.07141C32.2471 5.21541 32.3791 5.34141 32.5231 5.44941C32.6671 5.55741 32.8051 5.64741 32.9371 5.71941C33.0811 5.77941 33.2011 5.82141 33.2971 5.84541C33.5971 5.76141 33.8551 5.68941 34.0711 5.62941C34.2991 5.55741 34.5151 5.49141 34.7191 5.43141C34.9351 5.35941 35.1691 5.26941 35.4211 5.16141C35.6731 5.05341 35.9851 4.92141 36.3571 4.76541L37.1671 7.14141C36.1591 7.63341 35.1751 8.01741 34.2151 8.29341C33.2551 8.56941 32.2591 8.76141 31.2271 8.86941C30.1951 8.97741 29.0551 9.03141 27.8071 9.03141Z" fill="#007AFF"/>
                </svg>                    
            </div>

            <div class="notifications d-flex justify-content-center align-items-center">
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_158_123)">
                    <path d="M20.6127 18.2349L19.292 15.9259V10.1047C19.292 8.22966 18.5472 6.43144 17.2213 5.1056C15.8955 3.77976 14.0973 3.03491 12.2223 3.03491C10.3472 3.03491 8.54902 3.77976 7.22318 5.1056C5.89734 6.43144 5.15249 8.22966 5.15249 10.1047V15.144L3.7958 18.3099C3.74971 18.4174 3.73102 18.5347 3.74141 18.6512C3.7518 18.7677 3.79095 18.8799 3.85534 18.9775C3.91974 19.0752 4.00736 19.1554 4.11036 19.2108C4.21337 19.2663 4.32853 19.2954 4.44552 19.2954H8.75808C8.92034 20.0945 9.35387 20.8129 9.98521 21.3289C10.6165 21.8449 11.4069 22.1268 12.2223 22.1268C13.0377 22.1268 13.828 21.8449 14.4593 21.3289C15.0907 20.8129 15.5242 20.0945 15.6864 19.2954H19.999C20.1232 19.2956 20.2453 19.2631 20.353 19.2012C20.4607 19.1392 20.5501 19.05 20.6123 18.9425C20.6745 18.835 20.7073 18.713 20.7074 18.5888C20.7074 18.4645 20.6748 18.3425 20.6127 18.2349ZM12.2223 20.7093C11.7852 20.7075 11.3593 20.5707 11.0029 20.3176C10.6466 20.0645 10.3771 19.7075 10.2314 19.2954H14.2131C14.0674 19.7075 13.798 20.0645 13.4416 20.3176C13.0852 20.5707 12.6594 20.7075 12.2223 20.7093ZM5.518 17.8814L6.50777 15.5682C6.54621 15.4789 6.56571 15.3826 6.56503 15.2854V10.1047C6.56503 8.60467 7.16091 7.16609 8.22158 6.10542C9.28225 5.04474 10.7208 4.44887 12.2208 4.44887C13.7209 4.44887 15.1594 5.04474 16.2201 6.10542C17.2808 7.16609 17.8767 8.60467 17.8767 10.1047V16.114C17.876 16.238 17.9082 16.36 17.97 16.4675L18.7795 17.8814H5.518Z" fill="#007AFF"/>
                    <path d="M10.8083 2.32802H13.6362C13.8237 2.32802 14.0036 2.25353 14.1361 2.12095C14.2687 1.98836 14.3432 1.80854 14.3432 1.62104C14.3432 1.43354 14.2687 1.25372 14.1361 1.12113C14.0036 0.988547 13.8237 0.914063 13.6362 0.914062H10.8083C10.6208 0.914063 10.441 0.988547 10.3084 1.12113C10.1758 1.25372 10.1013 1.43354 10.1013 1.62104C10.1013 1.80854 10.1758 1.98836 10.3084 2.12095C10.441 2.25353 10.6208 2.32802 10.8083 2.32802Z" fill="#007AFF"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_158_123">
                    <rect width="22.6233" height="22.6233" fill="white" transform="translate(0.910645 0.207031)"/>
                    </clipPath>
                    </defs>
                </svg>
                <svg class="ellipse" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6.20766" cy="6.35365" r="5.91029" fill="#FB4D75"/>
                </svg>                                
            </div>

            <div class="profile d-flex justify-content-between align-items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.84814 5.75H19.3481" stroke="#007AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.84814 18.25H19.3481" stroke="#007AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.84814 12H19.3481" stroke="#007AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                    
                <div class="profile-pic"></div>
            </div>         
        </div>
    </div>
</header>`
})

var home = new Vue({
    el : '#home',
    name : 'home'
})