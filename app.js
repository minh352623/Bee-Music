
const $$ = document.querySelector.bind(document);
const $$$$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'MY_PLAYLIST';

const playlist = $$$$('.interactive__playlist-list');
const audio = $$('#audio');
const cdthumb = $$('.footer-left__img');
const cdthumb1 = $$('.footer-left__img img');
const mainparent = $$('.main-parent');
const heading = $$('.player_namesong h3');
const namesingel = $$('.player_namesong span');
const playing = $$('.player-control__center');
const playbtn = $$('.player-control__center-circle');
const input = $$('.player-times__input');
const controlTimeLeft = $$('.control-time__left');
const controlTimeRight = $$('.control-time__right');
const nextsong = $$(".player-control__center-next");
const prevsong = $$('.player-control__center-back');
const randombtn = $$('.player-control__center-random');
const repeatbtn = $$('.player-control__center-redo');
const heartbtn = $$('.player-control__left-heart')
const navitems = $$$$('.navbar__item');
const pages = $$$$('.page');
const animationimg = $$('.thumb');
const nodelist = $$('.nodes-list');
const nav_items = $$$$('.page-nav__item');
const persons = $$$$('.page-person-child');
const menuactive = $$('.different');

const settingActive = $$('.sidebar__setting');
const removeActive = $$('.interactive__app');

/**
 * load info menu
 * slide next prev slide
 * menu settings menu
 * nghe gần đây(làm cuối)
 */
const app = {

    currentIndex: 0,
    isplaying: false,
    isRepeat: false,
    isRandom: false,
    isHeart: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},

    songs: [
        {
            name: 'Cánh Đồng Yêu Thương',
            singer: 'Trung Quân',
            path: './assets/music/vietnamese/canhdongyeuthuong.mp3',
            image: './assets/images/trungquan.webp',

        },
        {
            name: 'TÌnh Nào Không Như TÌnh Đầu',
            singer: 'Trung Quân',
            path: './assets/music/vietnamese/TinhNaoKhongNhuTinhDau-TrungQuanIdol-6588171.mp3',
            image: './assets/images/trungquan.jpg',

        },
        {
            name: 'Về Quê Ăn Tết',
            singer: 'PhuSaf',
            path: './assets/music/vietnamese/VeQueAnTet-PhuSaFMBand-6201051.mp3',
            image: './assets/images/antet.jpg',

        },
        {
            name: 'Cầu Hôn',
            singer: 'Văn Mai Hương',
            path: './assets/music/vietnamese/cauhon.mp3',
            image: './assets/images/vanmaihuong.jpg',

        },
        {
            name: 'Chia Tay',
            singer: 'Bùi Anh Tuấn',
            path: './assets/music/vietnamese/chiatay.mp3',
            image: './assets/images/anhtuan.jpg',

        },
        {
            name: 'Cô Gái Ngày Hôm Qua',
            singer: 'Vũ Cát Tường',
            path: './assets/music/vietnamese/cogaingayhomqua.mp3',
            image: './assets/images/vucactuong.jpg',

        },
        {
            name: 'Cưới Thoi',
            singer: 'Masew - Bray',
            path: './assets/music/vietnamese/cuoithoi.mp3',
            image: './assets/images/bray.jpg',

        },
        {
            name: 'Đế Vương',
            singer: 'Đình Dũng ACV',
            path: './assets/music/vietnamese/devuong.mp3',
            image: './assets/images/devuong.jpg',

        },
        {
            name: 'Đường Một Chiều',
            singer: 'Huỳnh Tú',
            path: './assets/music/vietnamese/duong1chieu.mp3',
            image: './assets/images/huynhtu.jpg',

        },
        {
            name: 'Nghe Nói Anh Sắp Kết Hôn Rồi',
            singer: 'Văn Mai Hương - Bùi Anh Tuấn',
            path: './assets/music/vietnamese/NgheNoiAnhSapKetHon-VanMaiHuongBuiAnhTuan-6129764.mp3',
            image: './assets/images/vanmaihuong.jpg',

        },
        {
            name: 'Nơi Tình Yêu Bắt Đầu',
            singer: 'Bùi Anh Tuấn',
            path: './assets/music/vietnamese/NoiTinhYeuBatDau-BuiAnhTuan-1915267.mp3',
            image: './assets/images/anhtuan.jpg',

        },
        {
            name: 'Thuận Theo Ý Trời',
            singer: 'Bùi Anh Tuấn',
            path: './assets/music/vietnamese/ThuanTheoYTroi-BuiAnhTuan-6150266.mp3',
            image: './assets/images/anhtuan.jpg',

        },
        {
            name: 'Vết Mưa',
            singer: 'Vũ Cát Tường',
            path: './assets/music/vietnamese/VetMua-VuCatTuong-5959421.mp3',
            image: './assets/images/vucactuong.jpg',

        },




    ],
    setconfig: function (key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex];
            }
        })
    },
    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
            <div  class="interactive__item-link  ${index == this.currentIndex ? "interactive__item-link-active" : ""}" data-index="${index}">
            <div class="thumb1"
                style="background-image: url('${song.image}')">
                
                <img class="animation-img" src="./assets/images/animation.gif">
                
            </div>
            <span class="title">
                ${song.name}
            </span>
            <span class="artist">
                ${song.singer}
            </span>
            <span class="time time-${index}"></span>
            <span class="album">None</span>
            <span class="different">
                <i class="different-icon fas fa-ellipsis-h"></i>
                <div class="menu ">
                    <div class="menu__list">
                        <div class="menu__list-info">
                            <div class="menu__img">
                                <img src="./assets/images/blackpink.webp" alt="">
                            </div>
                            <div class="menu__infomation">
                                <p>Sao Em Nỡ</p>
                                <div class="menu__interactive">
                                    <div class="menu__interactive-item">

                                        <i class="fas fa-heart "></i>
                                        <p>3.1M</p>
                                    </div>
                                    <div class="menu__interactive-item">

                                        <i class="fas fa-heart "></i>

                                        <p>3.1M</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu__list-1">
                        <div class="menu__list-info-1">
                            <div class="menu__icon">
                                <i class="fas fa-download"></i>
                                <p>Tải Xuống</p>
                            </div>
                            <div class="menu__icon">
                            <i class="fas fa-microphone"></i>
                                <p>Lời bài hát</p>
                            </div>
                            <div class="menu__icon">
                            <i class="fas fa-ban"></i>
                                <p>Chặn</p>
                            </div>
                            
                        </div>
                    </div>
                    <div class="menu__list-2">
                        <ul class="menu__list-container">
                            <li class="menu__footer-item">
                                <a href="https://www.facebook.com/" class="menu__footer-item-link">

                                    <i class="fas fa-play"></i>
                                    <p>Thêm vào danh sách phát</p>
                                </a>
                            </li>
                            <li class="menu__footer-item">
                            <i class="fas fa-fast-forward"></i>
                                <p>Phát tiếp theo</p>
                            </li>
                            <li class="menu__footer-item">
                            <i class="fas fa-mobile"></i>
                                <p>Cài đặt nhạc chờ</p>
                            </li>
                            <li class="menu__footer-item">
                            <i class="fas fa-plus"></i>
                                <p>Thêm vào Playlist</p>
                            </li>
                            <li class="menu__footer-item">
                            <i class="fas fa-radiation"></i>
                                <p>Phát radio của bài hát</p>
                            </li>
                            <li class="menu__footer-item">
                                <i class="fas fa-comment"></i>
                                <p>Bình luận</p>
                            </li>
                            <li class="menu__footer-item">
                                <i class="fas fa-link"></i>
                                <p>Sao chép link</p>
                            </li>
                            <li class="menu__footer-item">
                                <i class="fas fa-share"></i>
                                <p>chia sẻ</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </span>

        </div>
            `;
        })
        // playlist.innerHTML = htmls.join('');
        playlist.forEach((item) => {
            item.innerHTML = htmls.join('');
        })


    },

    handleEvent: function () {
        _this = this;

        //xử lý cd quay và dừng

        const cdthumbAniumate = cdthumb.animate([
            {
                transform: 'rotate(360deg)'
            }
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdthumbAniumate.pause();


        //khi onlick vào bút play
        playbtn.onclick = function () {
            if (_this.isplaying) {
                audio.pause();
            } else {

                audio.play();
            }

        }
        //khi bài hát dc play
        audio.onplay = function () {
            _this.isplaying = true;
            playing.classList.add('active-play');
            cdthumbAniumate.play();
            nodelist.classList.add('active');
        }
        audio.onpause = function () {
            playing.classList.remove('active-play');
            _this.isplaying = false;

            cdthumbAniumate.pause();
            nodelist.classList.remove('active');


        }
        //khi tiến độ bài hát thay dổi
        audio.ontimeupdate = function () {
            //currentTime trả lại số giây mà bài hát đang phát
            //duration trả về tổng thời giàn bài hát để 
            //curentTime / duration để tính phần trăm thời lượng bài háy

            if (audio.duration) {
                const propressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                input.value = propressPercent;


                var time = Math.floor(audio.currentTime);
                var second = time % 60;
                var minute = Math.floor(time / 60);
                if (second < 10) {
                    var c = 0;
                } else c = '';
                controlTimeLeft.textContent = '0' + minute + ':' + c + second;
                //bên phải
                var timeR = Math.floor(audio.duration);
                var secondR = timeR % 60;
                var minuteR = Math.floor(timeR / 60);
                if (secondR < 10) {
                    var cR = 0;
                } else cR = '';
                controlTimeRight.textContent = '0' + minuteR + ':' + cR + secondR;
            }
        }
        //khi tua bài hát
        input.oninput = function (e) {
            const seekTime = audio.duration / 100 * e.target.value;
            audio.currentTime = seekTime;


        }
        //next song
        nextsong.onclick = function () {
            if (_this.isRandom) {
                _this.playRandom();
            } else {

                _this.nextsong();
            }
            audio.play();

            _this.render();
            _this.scolltoActiveSong();
            _this.loadTotalTime();


        }
        //prev song
        prevsong.onclick = function () {
            if (_this.isRandom) {
                _this.playRandom();
            } else {

                _this.prevsong();
            }
            audio.play();
            _this.render();
            _this.scolltoActiveSong();
            _this.loadTotalTime();


        }

        //ramdom songs
        randombtn.onclick = function () {
            _this.isRandom = !_this.isRandom;
            randombtn.classList.toggle("random-active", _this.isRandom);
            _this.setconfig('isRandom', _this.isRandom);
        }
        repeatbtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat;
            repeatbtn.classList.toggle("random-active", _this.isrepeat);
            _this.setconfig('isRepeat', _this.isRepeat);

        }
        heartbtn.onclick = function () {
            _this.isHeart = !_this.isHeart;
            heartbtn.classList.toggle("random-active", _this.isHeart);
            _this.setconfig('isHeart', _this.isHeart);
        }
        //khi bài hát kết thúc
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextsong.click();
            }
        }
        //khi click vào playlist
        playlist.forEach((playlist_item) => {

            playlist_item.onclick = function (e) {
                const songNode = e.target.closest('.interactive__item-link:not(.interactive__item-link-active)');

                if (songNode || e.target.closest('.different')) {
                    if (songNode && !e.target.closest('.different')) {
                        _this.currentIndex = songNode.getAttribute('data-index');


                        _this.loadCurrentSong();
                        audio.play();
                        _this.render();
                        _this.loadTotalTime();



                    }
                }
                if (e.target.closest('.different')) {
                    const menuactive1 = $$$$('.different');
                    menuactive1.forEach((item, index) => {
                        item.onclick = function (e) {
                            const songNode1 = e.target.closest('.interactive__item-link');

                            if (songNode1) {

                                var menuimg = item.querySelector('.menu__img img');
                                var menuinffo = item.querySelector('.menu__infomation p');
                                _this.currentIndex = songNode1.getAttribute('data-index');
                                console.log(_this.currentIndex);
                                menuinffo.textContent = _this.currentSong.name;
                                menuimg.src = _this.currentSong.image;
                                // console.log(menuimg);console.log(menuinffo);
                            }



                            var menuactive2 = $$('.different.menu-active');
                            if (menuactive2) {

                                menuactive2.classList.remove('menu-active');
                            }
                            item.classList.add('menu-active');

                        }



                    })


                } else {

                }


            }
        })
        //khi chuyển page 
        navitems.forEach((tab, index) => {
            const page = pages[index];
            tab.onclick = function () {

                $$('.navbar__item.navbar__item-active').classList.remove('navbar__item-active');


                $$('.page.active').classList.remove('active');



                this.classList.add('navbar__item-active');
                page.classList.add('active');

            }
        })
        //chuyển tab person
        nav_items.forEach((navitem, index) => {
            const person = persons[index];
            navitem.onclick = function () {
                $$('.page-nav__item.page-nav-active').classList.remove('page-nav-active');
                $$('.page-person-child.page-person-child--active').classList.remove('page-person-child--active');

                this.classList.add('page-nav-active');
                person.classList.add('page-person-child--active');
            }
        })
        //menu settings
        settingActive.onclick = function (e) {
            settingActive.classList.add('setting-active');
        }
        //remove menu
        mainparent.onclick = function (e) {
            console.log(e.target)
            if (!e.target.closest('.sidebar__setting')) {
                settingActive.classList.remove('setting-active');

            }

            if (!e.target.closest('.different') ) {
                var menuactive22 = $$('.different.menu-active');

                menuactive22.classList.remove('menu-active');

            }


        }
        //dark mode
        window.onload = function () {
            const themeBtn = document.getElementById('toggleBtn');
            themeBtn.addEventListener('click', function () {
              // Lấy thuộc tính data-theme
              const root = document.querySelector(':root');
              const isLightMode =
                root.getAttribute('data-theme') === 'dark' ? false : true;
              // toggle theme mode
              if (isLightMode) {
                root.setAttribute('data-theme', 'dark');
              } else {
                root.setAttribute('data-theme', 'light');
              }
              // thay đổi vị trí của button
              this.classList.toggle('active');
            });
          };

    },
    //hình cột nhạc lên xuống
    animation: function () {
        if ($$('.interactive__item-link-active')) {
            animationimg.classList.add('animation-active');

        }
    },
    coverTime: function (time) {
        var timeR = Math.floor(time);
        var secondR = timeR % 60;
        var minuteR = Math.floor(timeR / 60);
        if (secondR < 10) {
            var cR1 = 0;
        } else cR1 = '';
        return `${minuteR}:${cR1}${secondR}`;
    },
    loadTotalTime: function () {

        const listMusic = $$$$('.interactive__item-link');
        console.log(listMusic);
        const lengthOfSongsList = listMusic.length;
        const lengplaylist = playlist.length;
        // console.log(lengthOfSongsList);
        let e = 0;

        for (let i = 0; i < lengthOfSongsList / 2; i++) {




            let audioFake = document.createElement('audio');
            audioFake.src = app.songs[i].path;
            audioFake.onloadedmetadata = function () {


                console.log(1)
                let totalTimeEl = listMusic[i].querySelector(`.time-${i}`);

                // console.log(audioFake.src, audioFake.duration, totalTimeEl)
                totalTimeEl.innerHTML = app.coverTime(audioFake.duration);






            }
        }

    },
    nextsong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevsong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    indexSongs: [],
    playRandom: function () {
        let newindex;
        if (this.indexSongs.length === this.songs.length) {
            this.indexSongs = [];
        }
        do {
            newindex = Math.floor(Math.random() * this.songs.length);
        } while (newindex === this.currentIndex);
        this.currentIndex = newindex;
        this.indexSongs.push(newindex);
        this.loadCurrentSong();
    },
    loadConfig: function () {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
        this.isHeart = this.config.isHeart;
    },
    scolltoActiveSong: function () {
        setTimeout(function () {
            $$('.interactive__item-link.interactive__item-link-active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',

            });

        }, 0)
    },
    loadCurrentSong: function () {


        namesingel.textContent = this.currentSong.singer;
        heading.textContent = this.currentSong.name;
        cdthumb1.src = this.currentSong.image;

        audio.src = this.currentSong.path;

    },
    start: function () {

        this.loadConfig();

        this.defineProperties();


        this.loadCurrentSong();
        this.render();
        this.handleEvent();
        this.loadTotalTime();

        //hiển thi trạng thái ban đầu của 2 button repeat ,random
        repeatbtn.classList.toggle("random-active", _this.isrepeat);
        randombtn.classList.toggle("random-active", _this.isRandom);
        heartbtn.classList.toggle("random-active", _this.isHeart);

    }


}

app.start();


