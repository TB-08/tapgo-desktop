# TAPGO - Design System & Product Requirements

## 1. Product Overview
- **Name:** TAPGO
- **Tagline:** Tap là có Deal
- **Description:** Nền tảng phân phối voucher dịch vụ (F&B, Du lịch, Spa, Gym...) tập trung vào trải nghiệm Gamification và hiệu ứng FOMO.
- **Core Rule:** TUYỆT ĐỐI KHÔNG hiển thị giá tiền tệ (VNĐ, $, etc.) trên toàn bộ hệ thống. Các deal chỉ hiển thị dưới dạng % giảm giá, quà tặng, hoặc "Tiết kiệm X".
- **Primary Viewport:** Mobile-first (dành cho User Web App) & Desktop-first (dành cho Vendor Dashboard).

## 2. Design Tokens

### 2.1. Colors
- **Brand Primary (Orange):** `#F48133` - Sử dụng cho các nút CTA chính, highlight thông tin quan trọng, và trạng thái active.
- **Brand Secondary (Black):** `#000000` - Sử dụng cho logo, text chính, nút thứ cấp, và nền của các thẻ nổi bật.
- **Backgrounds:**
  - bg-default: `#FFFFFF` (Trắng tinh)
  - bg-muted: `#F3F4F6` (Xám nhạt cho nền ứng dụng để làm nổi bật các thẻ Trắng)
- **Semantic Colors:**
  - Danger/FOMO: `#EF4444` (Đỏ) - Sử dụng CHUYÊN BIỆT cho đồng hồ đếm ngược, số lượng voucher sắp hết.
  - Success: `#10B981` (Xanh lá) - Sử dụng cho thông báo claim thành công, duyệt mã QR.
- **Gamification Tier Colors:**
  - Silver: `#9CA3AF`
  - Gold: `#FBBF24`
  - Platinum: `#000000` (gradient xám đậm/đen)

### 2.2. Typography
- **Font Family:** Inter hoặc Roboto (Sans-serif, hiện đại, dễ đọc trên mobile).
- **Headings:** Bold (Font-weight: 700), tracking-tight.
- **Body:** Regular (Font-weight: 400), leading-relaxed.

### 2.3. Spacing & Border Radius
- **Border Radius:** Sử dụng bo góc tròn trịa để tạo cảm giác thân thiện.
  - Cards & Buttons: `rounded-xl` hoặc `rounded-2xl`.
  - Badges & Tags: `rounded-full`.
- **Spacing:** Sử dụng hệ thống spacing của Tailwind (`p-4`, `p-6`, `gap-4`).

## 3. Core Components

### 3.1. Buttons
- **Primary Button:** Nền `#F48133`, chữ `#FFFFFF` in đậm. Width 100% trên mobile.
- **Secondary Button:** Nền `#000000`, chữ `#FFFFFF` in đậm.
- **Disabled Button:** Nền Xám nhạt, không thể click (Dùng khi voucher hết hạn hoặc claim max số lượng).

### 3.2. Voucher Card (Mobile)
- Khối hình chữ nhật (Card) nền trắng, đổ bóng nhẹ (`shadow-sm`).
- **Hình ảnh:** Tỷ lệ 16:9 ở nửa trên hoặc hình vuông bo góc nằm bên trái.
- **Nội dung:** 
  - Tên Vendor (chữ nhỏ, xám).
  - Tiêu đề Deal (Chữ to, in đậm, đen).
- **FOMO Element:** Bắt buộc có một thanh Process bar mỏng hiển thị số lượng còn lại, kèm một Text Đỏ đếm ngược thời gian (VD: ⏳ 01:59:20).

### 3.3. Gamification Badges
- Icon nhỏ kèm theo tiến trình điểm thưởng (Progress bar).
- Hiển thị rõ quyền lợi % giảm giá theo từng cấp độ.

## 4. Key Screens to Generate

### Screen 1: User Homepage (Mobile)
- **Header:** Sticky top, User Avatar, Greeting, Current Tier Badge, Points Progress bar.
- **Hero:** Horizontal scrollable banner for Top Deals (No currency).
- **Categories:** Grid of 7 icons (Cafe, Restaurant, Hotel, Spa, Travel, Gym, Education).
- **Flash Deals:** Section with pulsing red dot, horizontal list of Voucher Cards heavily emphasizing countdown timers and limited quantity.
- **Bottom Navigation:** Fixed bottom bar with Home, My Vouchers, Map Rating (Star icon), Profile.

### Screen 2: Voucher Detail (Mobile)
- **Top:** Large high-quality image of the service, Back button floating top-left.
- **Body (Overlap Card):** White container overlapping the bottom of the image. Contains Vendor Name, massive bold Deal Title.
- **Urgency Box:** High contrast block with Red countdown timer ("Hết hạn trong: 2h") and "Chỉ còn X lượt claim".
- **Tier Benefits:** Visual breakdown of discounts based on User Level (Silver/Gold/Platinum).
- **Tabs:** "Điều kiện" & "Đánh giá Map".
- **Bottom Bar:** Sticky bottom area with a full-width Primary Orange Button: "GET VOUCHER".

### Screen 3: Vendor Dashboard (Desktop)
- **Layout:** Sidebar on the left (Black background, white text links: Dashboard, Vouchers, History, Settings). Main content area on the right (Light gray background).
- **Top Nav:** Search, Notifications, Profile, and a prominent "QUÉT MÃ QR" button.
- **Stats Cards:** 4 top cards displaying Page Views, Voucher Views, Claims, and Successful Uses (with percentage trend indicators).
- **Charts:** Main area has a Bar Chart comparing Claims vs Usage.
- **Recent Activity:** A list showing recent user claims with their Avatar, Tier level, and Timestamp.
