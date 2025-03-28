import { LocalNotifications } from '@capacitor/local-notifications';
import { Share } from '@capacitor/share';
import { Screenshot } from 'capacitor-screenshot';

function getCurrentTime(format) {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    if (format === '12h') {
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${hours}:${minutes}:${seconds} ${period}`;
    }
    hours = String(hours).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}


function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning! ☀️";
    if (hour < 17) return "Good afternoon! 🌞";
    if (hour < 20) return "Good evening! 🌅";
    return "Good night! 🌙";
}

async function showNotification(time) {
    const toggle = document.getElementById('notificationToggle').checked;
    if (!toggle) return; 

    try {
        const { display } = await LocalNotifications.checkPermissions();
        if (display !== 'granted') {
            const { display: newPermission } = await LocalNotifications.requestPermissions();
            if (newPermission !== 'granted') {
                alert('Vui lòng cấp quyền thông báo để sử dụng tính năng này.');
                return;
            }
        }

        await LocalNotifications.schedule({
            notifications: [
                {
                    title: "⏰ Thời gian hiện tại",
                    body: `Thời gian hiện tại là: ${time}`,
                    id: Math.floor(Math.random() * 1000), 
                    schedule: { at: new Date(Date.now() + 1000) },
                    sound: 'default',
                    smallIcon: 'ic_stat_notify', 
                    attachments: null,
                    actionTypeId: "",
                    extra: null
                }
            ]
        });
        console.log('Thông báo đã được lên lịch!');
    } catch (error) {
        console.error('Lỗi khi gửi thông báo:', error);
        alert('Không thể gửi thông báo. Vui lòng kiểm tra quyền hoặc thử lại.');
    }
}

async function shareTime(time) {
    await Share.share({
        title: 'Thời gian hiện tại',
        text: `Thời gian hiện tại là: ${time}`,
        url: 'https://e.com',
        dialogTitle: 'Chia sẻ thời gian'
    });
}


function saveScreenshot(base64Data) {
    const link = document.createElement('a');
    link.href = `data:image/png;base64,${base64Data}`;
    link.download = `screenshot_${getCurrentTime('24h').replace(/:/g, '-')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

async function takeScreenshot() {
    try {
        const container = document.getElementById('screenshotContainer');
        const existingImg = container.querySelector('img');
        const saveButton = document.getElementById('saveButton');

        if (existingImg) {
            alert('Vui lòng lưu ảnh chụp màn hình cũ trước khi chụp mới.');
            return;
        }

        const result = await Screenshot.take();
        console.log('Ảnh chụp màn hình (base64):', result.base64);
        const imgElement = document.createElement('img');
        imgElement.src = `data:image/png;base64,${result.base64}`;
        container.appendChild(imgElement);

        saveButton.disabled = false;
    } catch (error) {
        console.error('Lỗi khi chụp màn hình:', error);
        alert('Không thể chụp màn hình. Vui lòng thử lại.');
    }
}

function handleSaveScreenshot() {
    const container = document.getElementById('screenshotContainer');
    const img = container.querySelector('img');
    const saveButton = document.getElementById('saveButton');

    if (img) {
        saveScreenshot(img.src.split(',')[1]);
        container.innerHTML = '';
        saveButton.disabled = true;
    }
}

document.getElementById('showTimeButton').addEventListener('click', () => {
    const format = document.getElementById('timeFormat').value;
    const currentTime = getCurrentTime(format);
    document.getElementById('result').innerText = `Thời gian hiện tại: ${currentTime}`;
    document.getElementById('greeting').innerText = getGreeting();
    showNotification(currentTime); 
});

document.getElementById('shareButton').addEventListener('click', () => {
    const timeText = document.getElementById('result').innerText;
    const time = timeText.split(': ')[1];
    if (time) {
        shareTime(time);
    } else {
        alert('Vui lòng hiển thị thời gian trước khi chia sẻ.');
    }
});

document.getElementById('screenshotButton').addEventListener('click', takeScreenshot);
document.getElementById('saveButton').addEventListener('click', handleSaveScreenshot);