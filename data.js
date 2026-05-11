const getTapgoData = () => {
    return {
        isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
        login() {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'home_website.html';
        },
        logout() {
            localStorage.setItem('isLoggedIn', 'false');
            window.location.href = 'home_website.html';
        },
        cartCount: 0,
        openCart: false,
        openQr: false,
        showBuyModal: false,
        currentSortTab: 'eVoucher',
        loc: 'Toàn quốc',
        openLoc: false,
        lang: 'vi',
        openLang: false,
        user: {
            name: 'Gia Phát',
            tier: 'Gold', // Silver, Gold, Platinum, Diamond
            points: 1250,
            nextTierPoints: 2000,
            avatar: 'https://i.pravatar.cc/150?u=giaphat'
        },
        tiers: [
            { id: 'Silver', name: 'Bạc', color: 'from-gray-300 to-gray-500', icon: 'medal', points: 0, benefits: ['Tích điểm 1%', 'Đổi voucher cơ bản'] },
            { id: 'Gold', name: 'Vàng', color: 'from-amber-300 to-amber-500', icon: 'crown', points: 1000, benefits: ['Tích điểm 3%', 'Voucher độc quyền Gold', 'Ưu đãi sinh nhật'] },
            { id: 'Platinum', name: 'Bạch Kim', color: 'from-slate-700 to-slate-900', icon: 'gem', points: 5000, benefits: ['Tích điểm 5%', 'Phòng chờ thương gia', 'Hotline hỗ trợ riêng'] },
            { id: 'Diamond', name: 'Kim Cương', color: 'from-cyan-400 to-blue-600', icon: 'diamond', points: 20000, benefits: ['Tích điểm 10%', 'Sự kiện VIP Private', 'Quản lý tài khoản riêng'] }
        ],
        changeLang(code) {
            this.lang = code;
            this.openLang = false;
        },

        cats: [
            { name: 'Tất cả', i: 'border-all', bg: 'bg-orange-50 text-brand' },
            { name: 'Vui chơi Giải trí', i: 'gamepad', bg: 'bg-pink-50 text-pink-500' },
            { name: 'Nhà hàng Ăn uống', i: 'utensils', bg: 'bg-red-50 text-red-500' },
            { name: 'Spa & Làm đẹp', i: 'spa', bg: 'bg-teal-50 text-teal-500' },
            { name: 'Khách sạn & Tour', i: 'plane', bg: 'bg-blue-50 text-blue-500' },
            { name: 'Làm đẹp & Skincare', i: 'star', bg: 'bg-purple-50 text-purple-500' },
            { name: 'Thể thao & Fitness', i: 'dumbbell', bg: 'bg-green-50 text-green-500' },
            { name: 'Mua sắm', i: 'bag-shopping', bg: 'bg-yellow-50 text-yellow-600' },
            { name: 'Sức khỏe & Y tế', i: 'heart-pulse', bg: 'bg-rose-50 text-rose-500' },
            { name: 'Giáo dục & Kỹ năng', i: 'graduation-cap', bg: 'bg-indigo-50 text-indigo-500' },
            { name: 'Thú cưng', i: 'paw', bg: 'bg-amber-50 text-amber-600' },
            { name: 'Xe & Di chuyển', i: 'car', bg: 'bg-slate-50 text-slate-500' }
        ],
        flashDeals: [
            { brand: 'Le Monde Steak', img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=600', title: 'Thịt Nướng Nhật Bản Bao Gồm Cả Lẩu Chào Mừng', tag: 'MUA 1 TẶNG 1', remain: 5, total: 100, out: false, originalPrice: '450.000đ', salePrice: '320.000đ', discount: '28%', rating: 4.8, reviews: 312 },
            { brand: 'Yakimono', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600', title: 'Set Nướng Bò Fuji Thượng Hạng Cực Ngon', tag: '-50% BẠCH KIM', remain: 30, total: 150, out: false, originalPrice: '750.000đ', salePrice: '375.000đ', discount: '50%', rating: 5.0, reviews: 1024 },
            { brand: 'Granden Charm', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600', title: 'Tặng 01 lọ nước hoa size mini cao cấp khi mua hóa đơn trên 1 triệu', tag: 'TẶNG QUÀ', remain: 55, total: 100, out: false, originalPrice: '200.000đ', salePrice: '0đ', discount: '100%', rating: 4.6, reviews: 88 },
            { brand: 'Shang Chi', img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=600', title: 'E-Coupon giảm 100k áp dụng cho Lẩu Băng Chuyền Shang Chi', tag: '-25% H.VÀNG', remain: 2, total: 50, out: false, originalPrice: '100.000đ', salePrice: '75.000đ', discount: '25%', rating: 4.9, reviews: 200 },
            { brand: 'bTaskee', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600', title: 'Voucher dọn dẹp nhà cửa toàn diện 4 giờ siêu sạch', tag: 'GIẢM GIÁ SỐC', remain: 0, total: 100, out: true, originalPrice: '320.000đ', salePrice: '150.000đ', discount: '53%', rating: 4.7, reviews: 900 },
            { brand: 'CGV Cinemas', img: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600', title: 'Vé xem phim 2D tất cả các cụm rạp trên toàn quốc', tag: '-30%', remain: 80, total: 200, out: false, originalPrice: '130.000đ', salePrice: '90.000đ', discount: '30%', rating: 4.8, reviews: 512 },
            { brand: 'Phúc Long', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600', title: 'Combo 2 ly trà sữa Phúc Long size L đủ vị', tag: 'HOT', remain: 40, total: 100, out: false, originalPrice: '120.000đ', salePrice: '79.000đ', discount: '34%', rating: 4.7, reviews: 670 },
            { brand: 'Tokbokki 247', img: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=600', title: 'Set ăn vặt Hàn Quốc đường phố cho 2 người', tag: '-40%', remain: 20, total: 80, out: false, originalPrice: '200.000đ', salePrice: '119.000đ', discount: '40%', rating: 4.5, reviews: 233 },
            { brand: 'Beauty Center', img: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=600', title: 'Gói chăm sóc da mặt + massage thư giãn 90 phút', tag: '-45%', remain: 15, total: 60, out: false, originalPrice: '550.000đ', salePrice: '299.000đ', discount: '45%', rating: 4.9, reviews: 341 },
            { brand: 'Lotte Cinema', img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600', title: 'Vé xem phim tại Hệ thống Lotte Cinema toàn quốc', tag: '-15%', remain: 100, total: 300, out: false, originalPrice: '105.000đ', salePrice: '89.000đ', discount: '15%', rating: 4.8, reviews: 989 }
        ],
        vouchersNH: [
            { brand: 'Yakimono', logo: 'https://cdn.dealtoday.vn/img/s150x150/cgv_13032026142551.jpg?sign=9jYod5UnyYijJYC3ZBfNfw', img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=600', title: 'Thịt Nướng Nhật Bản Bao Gồm Cả Lẩu Chào Mừng', loc: 'Hồ Chí Minh', originalPrice: '230.000đ', salePrice: '189.000đ', discount: '18%', rating: 4.8, reviews: '89 đánh giá' },
            { brand: 'Shang Chi', logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1280px-Starbucks_Corporation_Logo_2011.svg.png', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600', title: 'Buffet Lẩu Ngon Đỉnh Cao Giảm Ngay Cho Hóa Đơn Lớn', loc: 'Toàn quốc', originalPrice: '510.000đ', salePrice: '331.100đ', discount: '35%', rating: 5.0, reviews: '5k đã bán' },
            { brand: 'Sumo BBQ', logo: 'https://www.highlandscoffee.com.vn/vnt_upload/weblink/red_BG_logo800.png', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600', title: 'Buffet Thịt Nướng Hàn Quốc - Bò Thượng Hạng', loc: 'Hà Nội', originalPrice: '350.000đ', salePrice: '259.000đ', discount: '26%', rating: 4.7, reviews: '1k+ đã bán' },
            { brand: 'Haidilao', logo: 'https://cdn.dealtoday.vn/img/s150x150/KIDZANIA-LOTTE-MALL-logo_28062024112152.jpg?sign=JYuvv8Nc_ueUYK-jm62Jng', img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=600', title: 'Set Lẩu Tứ Xuyên và Combo Múa Mì Cay Nồng', loc: 'Toàn quốc', originalPrice: '450.000đ', salePrice: '350.000đ', discount: '22%', rating: 4.9, reviews: '2k+ đánh giá' }
        ],
        vouchersDV: [
            { brand: 'CGV Cinemas', logo: 'https://cdn.dealtoday.vn/img/s150x150/cgv_13032026142551.jpg?sign=9jYod5UnyYijJYC3ZBfNfw', img: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600', title: 'Vé xem phim 2D tất cả các cụm rạp trên toàn quốc cuối tuần', loc: 'Toàn quốc', originalPrice: '130.000đ', salePrice: '90.000đ', discount: '30%', rating: 4.8, reviews: '10k+ đã bán' },
            { brand: 'VinKE & Aquarium', logo: 'https://cdn.dealtoday.vn/img/s150x150/vinke-aquarium_16122024094725.jpg?sign=2_XGoQF_keva19HsaC8Iow', img: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=600', title: 'Vé vào cổng khu vui chơi giải trí giáo dục VinKE Times City', loc: 'Hà Nội', originalPrice: '280.000đ', salePrice: '220.000đ', discount: '21%', rating: 4.7, reviews: '2.4k đánh giá' },
            { brand: 'KidZania', logo: 'https://cdn.dealtoday.vn/img/s150x150/KIDZANIA-LOTTE-MALL-logo_28062024112152.jpg?sign=JYuvv8Nc_ueUYK-jm62Jng', img: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=600', title: 'Vé trải nghiệm hướng nghiệp KidZania Lotte Mall Tây Hồ', loc: 'Hà Nội', originalPrice: '350.000đ', salePrice: '299.000đ', discount: '14%', rating: 4.9, reviews: '900+ đã bán' },
            { brand: 'Lotte Cinema', logo: 'https://cdn.dealtoday.vn/img/s150x150/lotte-cinema-Logo_13112023171611.jpg?sign=dgb-aeD0hxDUwvwtDP818g', img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600', title: 'Vé xem phim tại Hệ thống Lotte Cinema', loc: 'Toàn quốc', originalPrice: '105.000đ', salePrice: '89.000đ', discount: '15%', rating: 4.8, reviews: '541 đánh giá' },
            { brand: 'Highlands Coffee', logo: 'https://www.highlandscoffee.com.vn/vnt_upload/weblink/red_BG_logo800.png', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600', title: 'Combo 2 ly cà phê Highlands Coffee size L + bánh mình', loc: 'Toàn quốc', originalPrice: '150.000đ', salePrice: '99.000đ', discount: '34%', rating: 4.6, reviews: '3.2k đã bán' }
        ],
        vouchersFree: [
            { brand: 'Highlands Coffee', logo: 'https://www.highlandscoffee.com.vn/vnt_upload/weblink/red_BG_logo800.png', img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600', title: 'E-Coupon Miễn phí 01 ly Phin Sữa Đá khi mua hóa đơn bất kỳ', loc: 'Toàn quốc', isFree: true, rating: 4.9, reviews: '12k đã lấy' },
            { brand: 'The Coffee House', logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1280px-Starbucks_Corporation_Logo_2011.svg.png', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600', title: 'Voucher Miễn phí Topping cho mọi đồ uống size L', loc: 'Toàn quốc', isFree: true, rating: 4.7, reviews: '8.5k đã lấy' },
            { brand: 'Yakimono', logo: 'https://cdn.dealtoday.vn/img/s150x150/cgv_13032026142551.jpg?sign=9jYod5UnyYijJYC3ZBfNfw', img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=400', title: 'Voucher tặng 01 đĩa Thịt Bò Mỹ khi đi nhóm 4 người', loc: 'Toàn quốc', isFree: true, rating: 4.8, reviews: '3k đã lấy' }
        ],

        brands: [
            'https://www.highlandscoffee.com.vn/vnt_upload/weblink/red_BG_logo800.png',
            'https://upload.wikimedia.org/wikipedia/vi/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1280px-Starbucks_Corporation_Logo_2011.svg.png',
            'https://cdn.dealtoday.vn/img/s150x150/cgv_13032026142551.jpg?sign=9jYod5UnyYijJYC3ZBfNfw',
            'https://cdn.dealtoday.vn/img/s150x150/vinke-aquarium_16122024094725.jpg?sign=2_XGoQF_keva19HsaC8Iow',
            'https://cdn.dealtoday.vn/img/s150x150/KIDZANIA-LOTTE-MALL-logo_28062024112152.jpg?sign=JYuvv8Nc_ueUYK-jm62Jng',
            'https://cdn.dealtoday.vn/img/s150x150/lotte-cinema-Logo_13112023171611.jpg?sign=dgb-aeD0hxDUwvwtDP818g',
            'https://cdn.dealtoday.vn/img/s150x150/b033a8f8238a481794293f8e1752c67d.png?sign=5Y5vPFS6D-RnNlsmD3_W-A'
        ],
        press: [
            'https://upload.wikimedia.org/wikipedia/commons/f/fd/VnExpress_logo.png',
            'https://static.thanhnien.com.vn/thanhnien.vn/image/logo-footer-mb.png',
            'https://upload.wikimedia.org/wikipedia/vi/e/e1/Logo_baomoi.png',
            'https://upload.wikimedia.org/wikipedia/commons/1/1f/Tu%E1%BB%95i_Tr%E1%BA%BB_Logo.svg',
            'https://media-cdn-v2.laodong.vn/storage/newsportal/2018/12/19/647577/Bao-Gia-Quang-Cao-Ba.png?w=526&h=314&crop=auto&scale=both',
            'https://static.wikia.nocookie.net/logos/images/d/d8/KTDT.png/revision/latest/scale-to-width-down/2000?cb=20250823112035&path-prefix=vi'
        ]
    };
}
