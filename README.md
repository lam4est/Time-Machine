# ⏰ Time-Machine

**Time-Machine** là một ứng dụng đơn giản được xây dựng bằng **Capacitor** và **Vite**, cho phép người dùng hiển thị thời gian hiện tại theo định dạng tùy chọn, chia sẻ thời gian, và chụp màn hình giao diện. Ứng dụng có giao diện thân thiện, hiện đại, và hỗ trợ các tính năng như thông báo cục bộ (Local Notifications).

## 🖼️ Giao diện chính

Giao diện chính của **Time-Machine** được thiết kế hiện đại với các card bo góc mềm mại, gradient nền, và hiệu ứng động. Người dùng có thể tùy chỉnh định dạng thời gian và bật/tắt thông báo cục bộ.

![Giao diện chính](https://github.com/user-attachments/assets/a997402a-5812-4529-aa91-dce85f131d56)

---

## ✨ Tính năng

### Định dạng thời gian

Người dùng có thể chọn định dạng thời gian **12 giờ** hoặc **24 giờ** thông qua một ô chọn. Tính năng này giúp cá nhân hóa trải nghiệm hiển thị thời gian.

![Định dạng thời gian](https://github.com/user-attachments/assets/a1b0e6a9-a890-4751-97ca-592e88bc4378)

### Hiển thị thời gian

Khi nhấn nút **Hiển thị thời gian**, thời gian hiện tại sẽ được hiển thị theo định dạng đã chọn, kèm theo một lời chào tùy theo thời gian trong ngày (ví dụ: "Good morning! ☀️"). Nếu bật thông báo cục bộ, một thông báo sẽ xuất hiện sau 1 giây.

![Hiển thị thời gian](https://github.com/user-attachments/assets/517bb125-c2da-46f2-ac38-5097b700ea36)

### Chia sẻ thời gian

Tính năng **Chia sẻ thời gian** cho phép người dùng chia sẻ thời gian hiện tại qua các ứng dụng khác (như email, tin nhắn, mạng xã hội) bằng cách sử dụng **Share API** của Capacitor.

![Chia sẻ thời gian](https://github.com/user-attachments/assets/1b5f4d3d-e450-493f-a0b6-7e5c544e1d52)

### Chụp màn hình

Tính năng **Chụp màn hình** cho phép người dùng chụp ảnh giao diện ứng dụng và hiển thị ảnh ngay trên màn hình. Người dùng phải lưu ảnh cũ trước khi chụp ảnh mới, đảm bảo không bị ghi đè.

![Chụp màn hình](https://github.com/user-attachments/assets/a510c7e6-47ba-4dfe-88c3-c6368f2c8b39)

---

## 🛠️ Cài đặt

Để chạy dự án **Time-Machine** trên máy local, làm theo các bước sau:

1. **Clone repository**:
   ```bash
   git clone https://github.com/lam4est/Time-Machine.git
   ```

2. **Cài đặt dependencies**:
   ```bash
   npm install
   ```

3. **Chạy ứng dụng trên trình duyệt**:
   ```bash
   npm run dev
   ```

4. **Build và chạy trên thiết bị (Android/iOS)**:
   - Thêm nền tảng:
     ```bash
     npx cap add android
     npx cap add ios
     ```
   - Build dự án:
     ```bash
     npm run build
     ```
   - Mở dự án trong Android Studio hoặc Xcode:
     ```bash
     npx cap open android
     npx cap open ios
     ```
---

## 🧑‍💻 Công nghệ sử dụng

- **Vite**: Công cụ build nhanh và hiện đại.
- **Capacitor**: Framework để xây dựng ứng dụng hybrid.
- **HTML/CSS/JavaScript**: Xây dựng giao diện và logic.
- **Local Notifications**: Hiển thị thông báo cục bộ.
- **Share API**: Chia sẻ thời gian qua các ứng dụng khác.
- **Screenshot API**: Chụp màn hình giao diện.
---

### 🌟 Cảm ơn bạn đã quan tâm đến Time-Machine!

---
